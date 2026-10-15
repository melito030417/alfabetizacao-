import React, { useState } from 'react';
import { Layers, ChevronRight, Eye, Sparkles } from 'lucide-react';

interface FunnelNavigationToolbarProps {
  currentStep: number;
  onNavigateStep: (step: number) => void;
  onOpenExitModal: () => void;
}

export const FunnelNavigationToolbar: React.FC<FunnelNavigationToolbarProps> = ({
  currentStep,
  onNavigateStep,
  onOpenExitModal,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const screens = [
    { label: 'Início (Idade)', step: 0 },
    { label: 'Q1 (Letras Nome)', step: 1 },
    { label: 'Q2 (Som Letras)', step: 2 },
    { label: 'Q5 (Foco 5min)', step: 5 },
    { label: 'Q9 (Dispositivos)', step: 9 },
    { label: 'Q10 (Preocupação)', step: 10 },
    { label: 'Análise de Perfil', step: 11 },
    { label: 'Resultado (57 Dias)', step: 12 },
    { label: 'Página de Vendas / VSL', step: 13 },
  ];

  return (
    <div className="fixed bottom-3 right-3 z-40">
      {!isExpanded ? (
        <button
          onClick={() => setIsExpanded(true)}
          className="bg-slate-900/90 hover:bg-slate-900 text-white shadow-xl backdrop-blur border border-slate-700 text-xs font-semibold py-2 px-3.5 rounded-full flex items-center gap-2 cursor-pointer transition-transform hover:scale-105"
        >
          <Layers className="w-3.5 h-3.5 text-emerald-400" />
          <span>Navegar Funil</span>
        </button>
      ) : (
        <div className="bg-slate-950/95 text-white p-3.5 rounded-2xl shadow-2xl border border-slate-800 backdrop-blur w-72 max-h-[80vh] overflow-y-auto animate-scale-up">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Etapas do Funil Clonado</span>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-slate-400 hover:text-white text-xs px-1"
            >
              ✕
            </button>
          </div>

          <div className="space-y-1">
            {screens.map((item) => (
              <button
                key={item.step}
                onClick={() => {
                  onNavigateStep(item.step);
                  setIsExpanded(false);
                }}
                className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium flex items-center justify-between transition-colors ${
                  currentStep === item.step
                    ? 'bg-emerald-600 text-white font-bold'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {currentStep === item.step && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                )}
              </button>
            ))}
          </div>

          <div className="pt-2 mt-2 border-t border-slate-800">
            <button
              onClick={() => {
                onOpenExitModal();
                setIsExpanded(false);
              }}
              className="w-full text-center py-2 px-3 rounded-lg bg-red-600/80 hover:bg-red-600 text-white text-xs font-bold flex items-center justify-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Ver Popup de Saída (70%)</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
