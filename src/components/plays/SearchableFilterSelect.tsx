'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Search, ChevronDown, X, Check } from 'lucide-react';
import {
  getGameSearchScore,
  getTextSearchScore,
  isPrefixPriorityScore,
} from '@/lib/hangul-search';

export interface SearchableFilterOption {
  value: string;
  label: string;
  subLabel?: string;
  prefixIcon?: string;
  badge?: string;
  searchTexts?: string[];
  searchGame?: {
    titleKr: string;
    titleEn: string;
    publisherKr?: string | null;
    categories?: string[];
    mechanics?: string[];
  };
}

interface SearchableFilterSelectProps {
  label: string;
  icon?: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  options: SearchableFilterOption[];
  allLabel: string;
  searchPlaceholder?: string;
}

interface ScoredOption {
  option: SearchableFilterOption;
  score: number;
}

export const SearchableFilterSelect: React.FC<SearchableFilterSelectProps> = ({
  label,
  icon,
  value,
  onChange,
  options,
  allLabel,
  searchPlaceholder = '이름, 초성(ㄱ, ㅌㅍㅁ), 영문(A) 검색...',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const selectedOption = useMemo(
    () => options.find((opt) => opt.value === value),
    [options, value]
  );

  // Close on click outside
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setQuery('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Auto-focus search input when opening
  useEffect(() => {
    if (isOpen) {
      setHighlightedIndex(0);
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
    }
  }, [isOpen]);

  // Compute filtered & priority-sorted options
  const { priorityOptions, otherOptions, flatSelectable } = useMemo(() => {
    const trimmed = query.trim();

    if (!trimmed) {
      const sortedAll = [...options].sort((a, b) =>
        a.label.localeCompare(b.label, 'ko')
      );
      const allItem: SearchableFilterOption = { value: 'all', label: allLabel };
      return {
        priorityOptions: [] as ScoredOption[],
        otherOptions: sortedAll.map((option) => ({ option, score: 1 })),
        flatSelectable: [allItem, ...sortedAll],
      };
    }

    const scored: ScoredOption[] = [];
    for (const option of options) {
      let score = 0;
      if (option.searchGame) {
        score = getGameSearchScore(option.searchGame, trimmed);
      } else {
        const texts = [
          option.label,
          ...(option.subLabel ? [option.subLabel] : []),
          ...(option.searchTexts || []),
        ];
        for (const t of texts) {
          const s = getTextSearchScore(t, trimmed);
          if (s > score) score = s;
        }
      }

      if (score > 0) {
        scored.push({ option, score });
      }
    }

    scored.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.option.label.localeCompare(b.option.label, 'ko');
    });

    const priority = scored.filter((item) => isPrefixPriorityScore(item.score));
    const others = scored.filter((item) => !isPrefixPriorityScore(item.score));

    return {
      priorityOptions: priority,
      otherOptions: others,
      flatSelectable: [...priority, ...others].map((item) => item.option),
    };
  }, [options, query, allLabel]);

  // Reset highlight when query changes
  useEffect(() => {
    setHighlightedIndex(0);
  }, [query]);

  // Keep highlighted option scrolled into view
  useEffect(() => {
    if (!isOpen) return;
    const el = itemRefs.current[highlightedIndex];
    if (el) {
      el.scrollIntoView({ block: 'nearest' });
    }
  }, [highlightedIndex, isOpen]);

  const handleSelect = (nextValue: string) => {
    onChange(nextValue);
    setIsOpen(false);
    setQuery('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      setIsOpen(false);
      setQuery('');
      return;
    }

    if (flatSelectable.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev + 1) % flatSelectable.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev - 1 + flatSelectable.length) % flatSelectable.length);
    } else if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      e.preventDefault();
      const target = flatSelectable[highlightedIndex];
      if (target) {
        handleSelect(target.value);
      }
    }
  };

  const isFiltered = value !== 'all';
  const trimmedQuery = query.trim();

  // Build index lookup for keyboard highlighting
  const getFlatIndex = (optValue: string) =>
    flatSelectable.findIndex((item) => item.value === optValue);

  const renderOptionRow = (opt: SearchableFilterOption, isPriority?: boolean) => {
    const flatIdx = getFlatIndex(opt.value);
    const isSelected = value === opt.value;
    const isHighlighted = highlightedIndex === flatIdx;

    return (
      <button
        key={opt.value}
        ref={(el) => {
          if (flatIdx >= 0) itemRefs.current[flatIdx] = el;
        }}
        type="button"
        onMouseEnter={() => {
          if (flatIdx >= 0) setHighlightedIndex(flatIdx);
        }}
        onClick={() => handleSelect(opt.value)}
        className={`w-full px-3 py-2 text-left text-xs flex items-center justify-between gap-2 transition-colors ${
          isHighlighted
            ? 'bg-indigo-600/25 text-white'
            : isSelected
            ? 'bg-slate-800/80 text-indigo-300'
            : 'text-slate-200 hover:bg-slate-800/70'
        }`}
      >
        <div className="min-w-0 flex-1 flex items-center gap-1.5">
          {opt.prefixIcon && <span className="flex-shrink-0">{opt.prefixIcon}</span>}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <span className={`truncate ${isPriority ? 'font-semibold text-white' : 'font-medium'}`}>
                {opt.label}
              </span>
              {opt.badge && (
                <span className="flex-shrink-0 text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 border border-slate-700/80">
                  {opt.badge}
                </span>
              )}
            </div>
            {opt.subLabel && (
              <div className="text-[10px] text-slate-400 truncate mt-0.5">
                {opt.subLabel}
              </div>
            )}
          </div>
        </div>
        {isSelected && <Check className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />}
      </button>
    );
  };

  return (
    <div ref={containerRef} className="relative">
      <label className="text-[11px] text-slate-400 font-medium flex items-center gap-1 mb-1">
        {icon}
        <span>{label}</span>
      </label>

      {/* Trigger */}
      <div
        role="button"
        tabIndex={0}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
            e.preventDefault();
            setIsOpen(true);
          } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
            setIsOpen(true);
            setQuery(e.key);
          }
        }}
        className={`w-full flex items-center justify-between gap-2 rounded-xl px-3 py-1.5 text-xs transition-all cursor-pointer select-none border ${
          isOpen
            ? 'bg-slate-800 border-indigo-500 ring-2 ring-indigo-500/25 text-white'
            : isFiltered
            ? 'bg-indigo-500/15 border-indigo-500/50 text-indigo-200 hover:border-indigo-400'
            : 'bg-slate-800 border-slate-700 text-white hover:border-slate-600'
        }`}
      >
        <span className="truncate flex items-center gap-1.5 min-w-0">
          {selectedOption?.prefixIcon && (
            <span className="flex-shrink-0">{selectedOption.prefixIcon}</span>
          )}
          <span className="truncate">
            {selectedOption ? selectedOption.label : allLabel}
          </span>
        </span>

        <div className="flex items-center gap-1 flex-shrink-0">
          {isFiltered && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onChange('all');
                setQuery('');
              }}
              className="p-0.5 rounded-md text-indigo-300 hover:text-white hover:bg-indigo-500/30 transition-colors"
              title="필터 해제"
              aria-label={`${label} 해제`}
            >
              <X className="w-3 h-3" />
            </button>
          )}
          <ChevronDown
            className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-150 ${
              isOpen ? 'rotate-180 text-indigo-400' : ''
            }`}
          />
        </div>
      </div>

      {/* Dropdown Popover */}
      {isOpen && (
        <div
          role="listbox"
          className="absolute left-0 right-0 mt-1.5 z-40 bg-slate-900 border border-slate-700/90 rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
        >
          {/* Search Input */}
          <div className="p-2 border-b border-slate-800 bg-slate-900/95">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={searchPlaceholder}
                className="w-full bg-slate-800 border border-slate-700/80 rounded-lg pl-8 pr-7 py-1.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery('');
                    inputRef.current?.focus();
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-0.5"
                  aria-label="검색어 지우기"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>

          {/* Options List */}
          <div className="max-h-64 overflow-y-auto py-1">
            {!trimmedQuery ? (
              <>
                {/* "All" Option */}
                {renderOptionRow({ value: 'all', label: allLabel })}
                {otherOptions.length > 0 && (
                  <div className="my-1 border-t border-slate-800/80" />
                )}
                {otherOptions.map(({ option }) => renderOptionRow(option))}
              </>
            ) : flatSelectable.length > 0 ? (
              <>
                {priorityOptions.length > 0 && (
                  <>
                    <div className="px-3 py-1 text-[10px] font-bold text-indigo-400 bg-indigo-500/10 border-b border-indigo-500/15 flex items-center justify-between">
                      <span>&quot;{trimmedQuery}&quot; 시작 · 우선 일치</span>
                      <span>{priorityOptions.length}</span>
                    </div>
                    {priorityOptions.map(({ option }) => renderOptionRow(option, true))}
                  </>
                )}

                {otherOptions.length > 0 && (
                  <>
                    <div
                      className={`px-3 py-1 text-[10px] font-semibold text-slate-400 bg-slate-800/50 border-y border-slate-800 flex items-center justify-between ${
                        priorityOptions.length > 0 ? 'mt-1' : ''
                      }`}
                    >
                      <span>포함된 결과</span>
                      <span>{otherOptions.length}</span>
                    </div>
                    {otherOptions.map(({ option }) => renderOptionRow(option, false))}
                  </>
                )}
              </>
            ) : (
              <div className="px-3 py-6 text-center space-y-2">
                <p className="text-xs text-slate-400">
                  &quot;{trimmedQuery}&quot;와 일치하는 항목이 없습니다.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery('');
                    inputRef.current?.focus();
                  }}
                  className="text-[11px] text-indigo-400 hover:text-indigo-300 font-semibold"
                >
                  검색어 지우기
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
