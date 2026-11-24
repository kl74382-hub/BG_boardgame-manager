'use client';

import React, { useMemo } from 'react';
import { Calendar, X } from 'lucide-react';
import { Play } from '@/types';

export type DateFilterMode = 'range' | 'exact';
export type DatePreset =
  | 'all'
  | 'today'
  | '7d'
  | '30d'
  | 'thisMonth'
  | 'thisYear'
  | 'year'
  | 'month'
  | 'custom';

export interface PlayDateFilterState {
  mode: DateFilterMode;
  preset: DatePreset;
  dateFrom: string; // YYYY-MM-DD
  dateTo: string; // YYYY-MM-DD
  exactDate: string; // YYYY-MM-DD
  selectedYear: string; // 'all' | 'YYYY'
  selectedMonth: string; // 'all' | '01'..'12'
}

export const INITIAL_DATE_FILTER: PlayDateFilterState = {
  mode: 'range',
  preset: 'all',
  dateFrom: '',
  dateTo: '',
  exactDate: '',
  selectedYear: 'all',
  selectedMonth: 'all',
};

function formatLocalDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function getLastDayOfMonth(year: number, monthIndex1Based: number): string {
  const lastDay = new Date(year, monthIndex1Based, 0);
  return formatLocalDate(lastDay);
}

export function isDateFilterActive(filter: PlayDateFilterState): boolean {
  if (filter.mode === 'exact') {
    return Boolean(filter.exactDate);
  }
  return Boolean(filter.dateFrom || filter.dateTo);
}

export function matchesPlayDateFilter(
  playDate: string | undefined,
  filter: PlayDateFilterState
): boolean {
  if (!isDateFilterActive(filter)) return true;

  const normalized = (playDate || '').slice(0, 10);
  if (!normalized) return false;

  if (filter.mode === 'exact') {
    return normalized === filter.exactDate;
  }

  const { dateFrom, dateTo } = filter;
  if (dateFrom && dateTo) {
    const [start, end] = dateFrom <= dateTo ? [dateFrom, dateTo] : [dateTo, dateFrom];
    return normalized >= start && normalized <= end;
  }
  if (dateFrom) return normalized >= dateFrom;
  if (dateTo) return normalized <= dateTo;
  return true;
}

interface PlayDateFilterProps {
  plays: Play[];
  value: PlayDateFilterState;
  onChange: (next: PlayDateFilterState) => void;
}

export const PlayDateFilter: React.FC<PlayDateFilterProps> = ({
  plays,
  value,
  onChange,
}) => {
  // Derive available years, months, and played dates dynamically from plays
  const { yearCounts, monthCountsByYear, playedDates } = useMemo(() => {
    const yMap = new Map<string, number>();
    const mMap = new Map<string, Map<string, number>>();
    const dMap = new Map<string, number>();

    for (const play of plays) {
      const d = (play.date || '').slice(0, 10);
      if (d.length < 10) continue;
      const year = d.slice(0, 4);
      const month = d.slice(5, 7);

      yMap.set(year, (yMap.get(year) || 0) + 1);
      if (!mMap.has(year)) mMap.set(year, new Map());
      const yearMonths = mMap.get(year)!;
      yearMonths.set(month, (yearMonths.get(month) || 0) + 1);

      dMap.set(d, (dMap.get(d) || 0) + 1);
    }

    const sortedYears = Array.from(yMap.entries()).sort((a, b) => b[0].localeCompare(a[0]));
    const sortedDates = Array.from(dMap.entries()).sort((a, b) => b[0].localeCompare(a[0]));

    return {
      yearCounts: sortedYears,
      monthCountsByYear: mMap,
      playedDates: sortedDates,
    };
  }, [plays]);

  const active = isDateFilterActive(value);

  const applyPreset = (preset: DatePreset) => {
    const now = new Date();
    const todayStr = formatLocalDate(now);

    if (preset === 'all') {
      onChange({ ...INITIAL_DATE_FILTER, mode: 'range' });
      return;
    }

    if (preset === 'today') {
      onChange({
        ...INITIAL_DATE_FILTER,
        mode: 'range',
        preset: 'today',
        dateFrom: todayStr,
        dateTo: todayStr,
      });
      return;
    }

    if (preset === '7d') {
      const start = new Date(now);
      start.setDate(start.getDate() - 6);
      onChange({
        ...INITIAL_DATE_FILTER,
        mode: 'range',
        preset: '7d',
        dateFrom: formatLocalDate(start),
        dateTo: todayStr,
      });
      return;
    }

    if (preset === '30d') {
      const start = new Date(now);
      start.setDate(start.getDate() - 29);
      onChange({
        ...INITIAL_DATE_FILTER,
        mode: 'range',
        preset: '30d',
        dateFrom: formatLocalDate(start),
        dateTo: todayStr,
      });
      return;
    }

    if (preset === 'thisMonth') {
      const y = now.getFullYear();
      const m = String(now.getMonth() + 1).padStart(2, '0');
      onChange({
        mode: 'range',
        preset: 'thisMonth',
        dateFrom: `${y}-${m}-01`,
        dateTo: getLastDayOfMonth(y, now.getMonth() + 1),
        exactDate: '',
        selectedYear: String(y),
        selectedMonth: m,
      });
      return;
    }

    if (preset === 'thisYear') {
      const y = String(now.getFullYear());
      onChange({
        mode: 'range',
        preset: 'thisYear',
        dateFrom: `${y}-01-01`,
        dateTo: `${y}-12-31`,
        exactDate: '',
        selectedYear: y,
        selectedMonth: 'all',
      });
    }
  };

  const handleYearChange = (year: string) => {
    if (year === 'all') {
      onChange({ ...INITIAL_DATE_FILTER, mode: 'range' });
      return;
    }
    onChange({
      mode: 'range',
      preset: 'year',
      dateFrom: `${year}-01-01`,
      dateTo: `${year}-12-31`,
      exactDate: '',
      selectedYear: year,
      selectedMonth: 'all',
    });
  };

  const handleMonthChange = (month: string) => {
    const year = value.selectedYear;
    if (year === 'all') return;
    if (month === 'all') {
      onChange({
        ...value,
        mode: 'range',
        preset: 'year',
        dateFrom: `${year}-01-01`,
        dateTo: `${year}-12-31`,
        selectedMonth: 'all',
      });
      return;
    }
    const yNum = Number(year);
    const mNum = Number(month);
    onChange({
      ...value,
      mode: 'range',
      preset: 'month',
      dateFrom: `${year}-${month}-01`,
      dateTo: getLastDayOfMonth(yNum, mNum),
      selectedMonth: month,
    });
  };

  const handleRangeInputChange = (field: 'dateFrom' | 'dateTo', nextDate: string) => {
    const nextFrom = field === 'dateFrom' ? nextDate : value.dateFrom;
    const nextTo = field === 'dateTo' ? nextDate : value.dateTo;
    const isEmpty = !nextFrom && !nextTo;
    onChange({
      ...value,
      mode: 'range',
      preset: isEmpty ? 'all' : 'custom',
      dateFrom: nextFrom,
      dateTo: nextTo,
      selectedYear: 'all',
      selectedMonth: 'all',
    });
  };

  const handleModeSwitch = (nextMode: DateFilterMode) => {
    if (nextMode === value.mode) return;
    if (nextMode === 'exact') {
      onChange({
        ...INITIAL_DATE_FILTER,
        mode: 'exact',
        exactDate: value.dateFrom || value.exactDate || '',
      });
    } else {
      onChange({
        ...INITIAL_DATE_FILTER,
        mode: 'range',
        preset: value.exactDate ? 'custom' : 'all',
        dateFrom: value.exactDate || '',
        dateTo: value.exactDate || '',
      });
    }
  };

  // Summary badge text
  const activeSummary = useMemo(() => {
    if (!active) return '';
    if (value.mode === 'exact') return value.exactDate;
    if (value.dateFrom && value.dateTo) {
      if (value.dateFrom === value.dateTo) return value.dateFrom;
      const [start, end] =
        value.dateFrom <= value.dateTo
          ? [value.dateFrom, value.dateTo]
          : [value.dateTo, value.dateFrom];
      return `${start} ~ ${end}`;
    }
    if (value.dateFrom) return `${value.dateFrom} 이후`;
    if (value.dateTo) return `${value.dateTo} 이전`;
    return '';
  }, [active, value]);

  const activeYearMonths =
    value.selectedYear !== 'all' ? monthCountsByYear.get(value.selectedYear) : undefined;

  const presetItems: Array<{ id: DatePreset; label: string }> = [
    { id: 'all', label: '전체 기간' },
    { id: 'today', label: '오늘' },
    { id: '7d', label: '최근 7일' },
    { id: '30d', label: '최근 30일' },
    { id: 'thisMonth', label: '이번 달' },
    { id: 'thisYear', label: '올해' },
  ];

  return (
    <div className="pt-3 border-t border-slate-800/80 space-y-2.5">
      {/* Header Row */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-indigo-400" />
            <span>플레이 날짜 필터</span>
          </span>

          {active && activeSummary && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-indigo-500/15 border border-indigo-500/40 text-[11px] font-semibold text-indigo-300">
              <span>{activeSummary}</span>
              <button
                type="button"
                onClick={() => onChange({ ...INITIAL_DATE_FILTER, mode: value.mode })}
                className="text-indigo-300 hover:text-white transition-colors"
                title="날짜 필터 해제"
                aria-label="날짜 필터 해제"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
        </div>

        {/* Mode Toggle: Range vs Exact Date */}
        <div className="inline-flex items-center p-0.5 bg-slate-800/90 border border-slate-700/80 rounded-lg text-[11px]">
          <button
            type="button"
            onClick={() => handleModeSwitch('range')}
            className={`px-2.5 py-1 rounded-md font-semibold transition-all ${
              value.mode === 'range'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            기간 범위
          </button>
          <button
            type="button"
            onClick={() => handleModeSwitch('exact')}
            className={`px-2.5 py-1 rounded-md font-semibold transition-all ${
              value.mode === 'exact'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            특정 날짜
          </button>
        </div>
      </div>

      {value.mode === 'range' ? (
        <div className="space-y-2.5">
          {/* Quick Presets */}
          <div className="flex flex-wrap items-center gap-1.5">
            {presetItems.map((item) => {
              const isActivePreset =
                item.id === 'all' ? !active : value.preset === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => applyPreset(item.id)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all border ${
                    isActivePreset
                      ? 'bg-indigo-600/25 border-indigo-500/60 text-indigo-200'
                      : 'bg-slate-800/70 border-slate-700/70 text-slate-400 hover:text-slate-200 hover:border-slate-600'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Year / Month / Start Date / End Date */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
            {/* Year Selector */}
            <div>
              <label className="text-[10px] text-slate-500 font-medium block mb-1">
                연도별 선택
              </label>
              <select
                value={value.selectedYear}
                onChange={(e) => handleYearChange(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500"
              >
                <option value="all">전체 연도</option>
                {yearCounts.map(([year, count]) => (
                  <option key={year} value={year}>
                    {year}년 ({count}회)
                  </option>
                ))}
              </select>
            </div>

            {/* Month Selector */}
            <div>
              <label className="text-[10px] text-slate-500 font-medium block mb-1">
                월별 선택
              </label>
              <select
                value={value.selectedMonth}
                onChange={(e) => handleMonthChange(e.target.value)}
                disabled={value.selectedYear === 'all'}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500 disabled:opacity-45 disabled:cursor-not-allowed"
              >
                <option value="all">
                  {value.selectedYear === 'all' ? '연도를 먼저 선택' : '전체 월'}
                </option>
                {Array.from({ length: 12 }, (_, idx) => {
                  const m = String(idx + 1).padStart(2, '0');
                  const count = activeYearMonths?.get(m) || 0;
                  return (
                    <option key={m} value={m}>
                      {idx + 1}월 ({count}회)
                    </option>
                  );
                })}
              </select>
            </div>

            {/* Start Date */}
            <div>
              <label className="text-[10px] text-slate-500 font-medium block mb-1">
                시작일
              </label>
              <input
                type="date"
                value={value.dateFrom}
                onChange={(e) => handleRangeInputChange('dateFrom', e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500 [color-scheme:dark]"
              />
            </div>

            {/* End Date */}
            <div>
              <label className="text-[10px] text-slate-500 font-medium block mb-1">
                종료일
              </label>
              <input
                type="date"
                value={value.dateTo}
                onChange={(e) => handleRangeInputChange('dateTo', e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500 [color-scheme:dark]"
              />
            </div>
          </div>
        </div>
      ) : (
        /* Exact Single Date Mode */
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div>
            <label className="text-[10px] text-slate-500 font-medium block mb-1">
              날짜 직접 선택
            </label>
            <input
              type="date"
              value={value.exactDate}
              onChange={(e) =>
                onChange({
                  ...value,
                  mode: 'exact',
                  exactDate: e.target.value,
                })
              }
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500 [color-scheme:dark]"
            />
          </div>

          <div>
            <label className="text-[10px] text-slate-500 font-medium block mb-1">
              기록이 있는 날짜 바로 선택 ({playedDates.length}일)
            </label>
            <select
              value={playedDates.some(([d]) => d === value.exactDate) ? value.exactDate : ''}
              onChange={(e) =>
                onChange({
                  ...value,
                  mode: 'exact',
                  exactDate: e.target.value,
                })
              }
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500"
            >
              <option value="">기록된 날짜 선택...</option>
              {playedDates.map(([dateStr, count]) => (
                <option key={dateStr} value={dateStr}>
                  {dateStr} ({count}회 플레이)
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};
