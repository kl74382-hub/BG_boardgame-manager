'use client';

import React, { useState, useRef } from 'react';
import { 
  X, 
  Upload, 
  Download, 
  FileSpreadsheet, 
  FileCheck2, 
  AlertCircle, 
  CheckCircle2, 
  HelpCircle, 
  RotateCcw,
  Sparkles,
  Loader2,
  Filter,
  Check,
  Info
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Game } from '@/types';
import { 
  parseCollectionCsv, 
  generateCsvTemplate, 
  exportGamesToCsv, 
  batchImportGames, 
  DuplicateMode, 
  ParsedCsvResult,
  BatchImportStats,
  STATUS_LABEL_MAP
} from '@/lib/csv-collection';

interface BatchCollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  allGames?: Game[];
  filteredGames?: Game[];
}

export const BatchCollectionModal: React.FC<BatchCollectionModalProps> = ({
  isOpen,
  onClose,
  allGames = [],
  filteredGames = [],
}) => {
  const [activeTab, setActiveTab] = useState<'import' | 'export'>('import');

  // Import states
  const [file, setFile] = useState<File | null>(null);
  const [parsedResult, setParsedResult] = useState<ParsedCsvResult | null>(null);
  const [isParsing, setIsParsing] = useState(false);
  const [duplicateMode, setDuplicateMode] = useState<DuplicateMode>('merge');
  const [isImporting, setIsImporting] = useState(false);
  const [importStats, setImportStats] = useState<BatchImportStats | null>(null);
  const [importError, setImportError] = useState<string | null>(null);

  // Export states
  const [exportScope, setExportScope] = useState<'all' | 'filtered'>('all');
  const [exportSuccess, setExportSuccess] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  // Handle CSV file selection and parsing
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    processFile(selectedFile);
  };

  const processFile = (selectedFile: File) => {
    setFile(selectedFile);
    setIsParsing(true);
    setImportStats(null);
    setImportError(null);

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        const result = parseCollectionCsv(text);
        setParsedResult(result);
      } catch (err: any) {
        setImportError(`CSV 분석 중 오류가 발생했습니다: ${err.message}`);
      } finally {
        setIsParsing(false);
      }
    };
    reader.onerror = () => {
      setImportError('파일을 읽는 중 문제가 발생했습니다.');
      setIsParsing(false);
    };
    reader.readAsText(selectedFile, 'UTF-8');
  };

  // Drag & drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile.name.endsWith('.csv')) {
        processFile(droppedFile);
      } else {
        alert('.csv 형식의 파일만 업로드할 수 있습니다.');
      }
    }
  };

  // Download Sample Template
  const handleDownloadTemplate = () => {
    try {
      const csvData = generateCsvTemplate();
      const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = '보드게임_컬렉션_샘플양식.csv';
      a.click();
      URL.revokeObjectURL(url);
    } catch (e: any) {
      alert(`템플릿 다운로드 실패: ${e.message}`);
    }
  };

  // Execute Batch Import
  const handleExecuteImport = async () => {
    if (!parsedResult || parsedResult.games.length === 0) return;

    setIsImporting(true);
    setImportError(null);

    try {
      const stats = await batchImportGames(parsedResult.games, duplicateMode);
      setImportStats(stats);

      // Trigger celebrate confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (e) {
        // ignore if confetti fails
      }
    } catch (err: any) {
      setImportError(`등록 중 데이터베이스 오류가 발생했습니다: ${err.message}`);
    } finally {
      setIsImporting(false);
    }
  };

  // Reset import form
  const handleResetImport = () => {
    setFile(null);
    setParsedResult(null);
    setImportStats(null);
    setImportError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Execute CSV Export
  const handleExportCsv = () => {
    try {
      const targetGames = exportScope === 'filtered' && filteredGames.length > 0
        ? filteredGames
        : allGames;

      if (targetGames.length === 0) {
        alert('내보낼 게임 데이터가 없습니다.');
        return;
      }

      const csvContent = exportGamesToCsv(targetGames);
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const dateStr = new Date().toISOString().substring(0, 10);
      a.href = url;
      a.download = `BG_Collection_${dateStr}.csv`;
      a.click();
      URL.revokeObjectURL(url);

      setExportSuccess(true);
      setTimeout(() => setExportSuccess(false), 3000);
    } catch (e: any) {
      alert(`내보내기 실패: ${e.message}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/95 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">컬렉션 CSV 일괄 관리</h3>
              <p className="text-xs text-slate-400">엑셀(.csv) 파일로 보드게임 대량 등록 및 백업 다운로드</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Toggle */}
        <div className="px-6 pt-3 flex gap-4 border-b border-slate-800 bg-slate-950/40 shrink-0">
          <button
            onClick={() => setActiveTab('import')}
            className={`pb-3 text-xs font-bold border-b-2 flex items-center gap-1.5 transition-colors ${
              activeTab === 'import'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Upload className="w-4 h-4" />
            <span>📥 CSV 일괄 등록 (가져오기)</span>
          </button>
          <button
            onClick={() => setActiveTab('export')}
            className={`pb-3 text-xs font-bold border-b-2 flex items-center gap-1.5 transition-colors ${
              activeTab === 'export'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Download className="w-4 h-4" />
            <span>📤 컬렉션 내보내기 (다운로드)</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">

          {/* TAB 1: CSV IMPORT */}
          {activeTab === 'import' && (
            <div className="space-y-6">
              
              {/* Template Download & Help Banner */}
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-200">
                    <Info className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>처음 사용하시나요? 양식 템플릿으로 쉽게 작성하세요</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    한글 게임명, 영문명, 보유상태, BGG번호, 가격, 인원수 등이 미리 지정된 엑셀용 CSV 샘플을 다운로드할 수 있습니다.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleDownloadTemplate}
                  className="px-3.5 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold text-xs flex items-center gap-1.5 border border-slate-600 shadow-sm shrink-0 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-400" />
                  <span>샘플 양식 (.csv) 받기</span>
                </button>
              </div>

              {/* Upload Dropzone */}
              {!parsedResult && !importStats && (
                <div
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  className="border-2 border-dashed border-slate-700 hover:border-emerald-500/60 bg-slate-950/40 rounded-2xl p-8 text-center space-y-3 transition-colors cursor-pointer"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".csv"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                    <Upload className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-slate-200">
                      클릭하여 CSV 파일을 선택하거나 여기로 드래그하세요
                    </p>
                    <p className="text-xs text-slate-500">
                      Excel 또는 스프레드시트에서 저장한 `.csv` 파일 지원 (UTF-8 인코딩)
                    </p>
                  </div>
                  <button
                    type="button"
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shadow-md transition-colors"
                  >
                    파일 찾아보기
                  </button>
                </div>
              )}

              {/* Parsing State */}
              {isParsing && (
                <div className="p-8 text-center space-y-2">
                  <Loader2 className="w-8 h-8 text-emerald-400 animate-spin mx-auto" />
                  <p className="text-xs text-slate-300 font-bold">CSV 파일 데이터를 분석 중입니다...</p>
                </div>
              )}

              {/* Error Box */}
              {importError && (
                <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
                  <div className="space-y-1">
                    <span className="font-bold block">오류 발생</span>
                    <span>{importError}</span>
                  </div>
                </div>
              )}

              {/* Success Result Summary */}
              {importStats && (
                <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 space-y-4 animate-in fade-in">
                  <div className="flex items-center gap-2.5 text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" />
                    <h4 className="text-base font-bold text-white">컬렉션 일괄 등록이 성공적으로 완료되었습니다!</h4>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                    <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-center">
                      <span className="text-[11px] text-slate-400 block">총 데이터</span>
                      <strong className="text-base font-bold text-white">{importStats.total}개</strong>
                    </div>
                    <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-center">
                      <span className="text-[11px] text-emerald-400 block">신규 등록</span>
                      <strong className="text-base font-bold text-emerald-300">+{importStats.added}개</strong>
                    </div>
                    <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-center">
                      <span className="text-[11px] text-indigo-400 block">정보 업데이트</span>
                      <strong className="text-base font-bold text-indigo-300">{importStats.updated}개</strong>
                    </div>
                    <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-center">
                      <span className="text-[11px] text-slate-400 block">중복 건너뜀</span>
                      <strong className="text-base font-bold text-slate-400">{importStats.skipped}개</strong>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={handleResetImport}
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-colors"
                    >
                      다른 CSV 등록하기
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors"
                    >
                      완료하고 컬렉션 보기
                    </button>
                  </div>
                </div>
              )}

              {/* Data Preview Table & Actions */}
              {parsedResult && !importStats && (
                <div className="space-y-4 animate-in fade-in">
                  
                  {/* File & Status Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-800/80 border border-slate-700 rounded-xl">
                    <div className="flex items-center gap-2">
                      <FileCheck2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-bold text-white">{file?.name}</span>
                      <span className="text-[11px] text-slate-400">
                        ({(file?.size ? (file.size / 1024).toFixed(1) : '0')} KB)
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                        유효: {parsedResult.validCount}개
                      </span>
                      {parsedResult.errorCount > 0 && (
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                          제외/누락: {parsedResult.errorCount}개
                        </span>
                      )}
                      <button
                        type="button"
                        onClick={handleResetImport}
                        className="text-xs text-slate-400 hover:text-slate-200 ml-2 flex items-center gap-1 font-semibold"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>다시 선택</span>
                      </button>
                    </div>
                  </div>

                  {/* Duplicate Handling Options */}
                  <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-2">
                    <label className="text-xs font-bold text-slate-300 block">
                      중복 게임 처리 방식 (BGG ID 또는 한글 게임명 일치 시)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <label
                        className={`p-2.5 rounded-xl border flex items-center gap-2.5 cursor-pointer text-xs transition-all ${
                          duplicateMode === 'merge'
                            ? 'bg-emerald-500/15 border-emerald-500/60 text-emerald-200'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <input
                          type="radio"
                          name="duplicateMode"
                          value="merge"
                          checked={duplicateMode === 'merge'}
                          onChange={() => setDuplicateMode('merge')}
                          className="accent-emerald-500"
                        />
                        <div>
                          <span className="font-bold block">기존 정보 업데이트 (권장)</span>
                          <span className="text-[10px] text-slate-400 block">새로운 정보로 덮어쓰기</span>
                        </div>
                      </label>

                      <label
                        className={`p-2.5 rounded-xl border flex items-center gap-2.5 cursor-pointer text-xs transition-all ${
                          duplicateMode === 'skip'
                            ? 'bg-emerald-500/15 border-emerald-500/60 text-emerald-200'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <input
                          type="radio"
                          name="duplicateMode"
                          value="skip"
                          checked={duplicateMode === 'skip'}
                          onChange={() => setDuplicateMode('skip')}
                          className="accent-emerald-500"
                        />
                        <div>
                          <span className="font-bold block">중복 시 건너뛰기</span>
                          <span className="text-[10px] text-slate-400 block">기존 데이터 보존, 신규만 추가</span>
                        </div>
                      </label>

                      <label
                        className={`p-2.5 rounded-xl border flex items-center gap-2.5 cursor-pointer text-xs transition-all ${
                          duplicateMode === 'add'
                            ? 'bg-emerald-500/15 border-emerald-500/60 text-emerald-200'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <input
                          type="radio"
                          name="duplicateMode"
                          value="add"
                          checked={duplicateMode === 'add'}
                          onChange={() => setDuplicateMode('add')}
                          className="accent-emerald-500"
                        />
                        <div>
                          <span className="font-bold block">항상 새로 추가</span>
                          <span className="text-[10px] text-slate-400 block">중복 상관없이 새 항목 생성</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Warnings List if any */}
                  {parsedResult.warnings.length > 0 && (
                    <div className="p-3 bg-amber-950/30 border border-amber-500/30 rounded-xl space-y-1 text-xs text-amber-300">
                      <span className="font-bold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>데이터 확인 알림 ({parsedResult.warnings.length}건):</span>
                      </span>
                      <ul className="list-disc pl-5 text-[11px] space-y-0.5 max-h-24 overflow-y-auto text-amber-200/80">
                        {parsedResult.warnings.map((w, i) => (
                          <li key={i}>{w}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Preview Table */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                      <span className="font-semibold">등록 예정 목록 미리보기 ({parsedResult.games.length}개 게임)</span>
                      <span className="text-[11px] text-slate-500">가로로 스크롤하여 상세 컬럼을 확인할 수 있습니다</span>
                    </div>

                    <div className="border border-slate-800 rounded-xl overflow-hidden max-h-64 overflow-y-auto overflow-x-auto bg-slate-950/50">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead className="bg-slate-900/90 text-slate-400 text-[11px] uppercase tracking-wider sticky top-0 border-b border-slate-800">
                          <tr>
                            <th className="py-2.5 px-3">#</th>
                            <th className="py-2.5 px-3">게임명 (한글/영문)</th>
                            <th className="py-2.5 px-3">상태</th>
                            <th className="py-2.5 px-3">인원</th>
                            <th className="py-2.5 px-3">시간</th>
                            <th className="py-2.5 px-3">난이도</th>
                            <th className="py-2.5 px-3">구매가</th>
                            <th className="py-2.5 px-3">BGG ID</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60 text-slate-300 text-xs">
                          {parsedResult.games.map((g, idx) => (
                            <tr key={idx} className="hover:bg-slate-900/50">
                              <td className="py-2 px-3 text-slate-500 font-mono text-[11px]">{idx + 1}</td>
                              <td className="py-2 px-3">
                                <div className="font-bold text-white">{g.titleKr}</div>
                                {g.titleEn && g.titleEn !== g.titleKr && (
                                  <div className="text-[10px] text-slate-400">{g.titleEn}</div>
                                )}
                              </td>
                              <td className="py-2 px-3">
                                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700 whitespace-nowrap">
                                  {STATUS_LABEL_MAP[g.status as keyof typeof STATUS_LABEL_MAP] || g.status}
                                </span>
                              </td>
                              <td className="py-2 px-3 whitespace-nowrap text-slate-400 text-[11px]">
                                {g.minPlayers}-{g.maxPlayers}인
                              </td>
                              <td className="py-2 px-3 whitespace-nowrap text-slate-400 text-[11px]">
                                {g.minPlaytime === g.maxPlaytime ? `${g.minPlaytime}분` : `${g.minPlaytime}~${g.maxPlaytime}분`}
                              </td>
                              <td className="py-2 px-3 text-slate-400 text-[11px]">
                                {g.weight ? g.weight.toFixed(2) : '-'}
                              </td>
                              <td className="py-2 px-3 whitespace-nowrap font-mono text-slate-300 text-[11px]">
                                {g.purchasePrice ? `${g.purchasePrice.toLocaleString()}원` : '-'}
                              </td>
                              <td className="py-2 px-3 font-mono text-slate-400 text-[11px]">
                                {g.bggId || '-'}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Bottom Action Button */}
                  <div className="pt-2 flex justify-end gap-2.5">
                    <button
                      type="button"
                      onClick={handleResetImport}
                      className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-colors"
                    >
                      취소
                    </button>
                    <button
                      type="button"
                      onClick={handleExecuteImport}
                      disabled={isImporting || parsedResult.games.length === 0}
                      className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/20 flex items-center gap-1.5 transition-colors disabled:opacity-50"
                    >
                      {isImporting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>컬렉션에 등록 중...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          <span>{parsedResult.games.length}개 게임 일괄 등록하기</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>
              )}

            </div>
          )}

          {/* TAB 2: CSV EXPORT */}
          {activeTab === 'export' && (
            <div className="space-y-6">
              
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold">
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>Excel 완벽 호환 내보내기 (UTF-8 with BOM)</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  현재 등록된 보드게임 목록을 엑셀(.csv) 파일로 다운로드합니다. 
                  윈도우 엑셀에서 바로 열어도 한글 깨짐 없이 깨끗하게 볼 수 있도록 <strong>UTF-8 BOM</strong> 인코딩이 자동으로 포함됩니다.
                </p>
              </div>

              {/* Export Scope Selector */}
              <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-3">
                <label className="text-xs font-bold text-slate-300 block">다운로드 범위 선택</label>
                
                <div className="space-y-2">
                  <label
                    className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      exportScope === 'all'
                        ? 'bg-emerald-500/15 border-emerald-500/60 text-emerald-200'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <input
                        type="radio"
                        name="exportScope"
                        value="all"
                        checked={exportScope === 'all'}
                        onChange={() => setExportScope('all')}
                        className="accent-emerald-500"
                      />
                      <div>
                        <span className="font-bold text-xs text-white block">전체 컬렉션 내보내기</span>
                        <span className="text-[11px] text-slate-400">보유중, 위시리스트 등 등록된 모든 보드게임</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 border border-slate-700">
                      총 {allGames.length}개
                    </span>
                  </label>

                  {filteredGames.length > 0 && filteredGames.length !== allGames.length && (
                    <label
                      className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        exportScope === 'filtered'
                          ? 'bg-emerald-500/15 border-emerald-500/60 text-emerald-200'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="radio"
                          name="exportScope"
                          value="filtered"
                          checked={exportScope === 'filtered'}
                          onChange={() => setExportScope('filtered')}
                          className="accent-emerald-500"
                        />
                        <div>
                          <span className="font-bold text-xs text-white block">현재 검색/필터링된 결과만 내보내기</span>
                          <span className="text-[11px] text-slate-400">컬렉션 화면에서 적용한 필터 조건에 해당하는 게임만</span>
                        </div>
                      </div>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 border border-slate-700">
                        {filteredGames.length}개
                      </span>
                    </label>
                  )}
                </div>
              </div>

              {/* Export Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-400">
                  {exportScope === 'all' ? `총 ${allGames.length}개` : `${filteredGames.length}개`}의 게임이 CSV로 저장됩니다.
                </span>

                <button
                  type="button"
                  onClick={handleExportCsv}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 transition-colors"
                >
                  {exportSuccess ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                  <span>{exportSuccess ? '다운로드 완료!' : '컬렉션 CSV 파일 다운로드'}</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
