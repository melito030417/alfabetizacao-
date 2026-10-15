import React, { useEffect, useState } from 'react';
import { IMAGES } from '../assets/images';
import { CheckCircle2, Loader2 } from 'lucide-react';

interface AnalyzingScreenProps {
  onComplete: () => void;
}

export const AnalyzingScreen: React.FC<AnalyzingScreenProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    'Analisando nível de atenção e familiaridade com letras...',
    'Adequando estímulos NeuroOctoMusical™ para a idade...',
    'Montando cronograma acelerado de 15 minutos diários...',
    'Calculando estimativa de leitura autônoma...',
    'Gerando análise personalizada e ativando cupom de 70%...',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return prev;
        }
      });
    }, 600);

    return () => clearInterval(timer);
  }, [onComplete, steps.length]);

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12 text-center">
      <div className="w-28 h-28 rounded-full bg-blue-50 border-4 border-blue-200 p-2 shadow-lg mb-6 relative animate-pulse">
        <img
          src={IMAGES.avatar}
          alt="Pipo Analisando"
          className="w-full h-full object-contain"
        />
        <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white rounded-full p-1.5 shadow">
          <Loader2 className="w-5 h-5 animate-spin" />
        </div>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">
        Criando o plano personalizado do seu filho(a)...
      </h2>
      <p className="text-sm text-slate-500 mb-8 max-w-md">
        Nossos algoritmos pedagógicos estão estruturando o plano com base nas suas
        respostas.
      </p>

      {/* Progress Checklist */}
      <div className="w-full max-w-md bg-white border border-slate-100 rounded-2xl p-6 shadow-md text-left flex flex-col gap-4">
        {steps.map((text, idx) => {
          const isDone = idx < currentStep;
          const isCurrent = idx === currentStep;

          return (
            <div
              key={idx}
              className={`flex items-center gap-3 transition-opacity duration-300 ${
                idx > currentStep ? 'opacity-30' : 'opacity-100'
              }`}
            >
              {isDone ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              ) : isCurrent ? (
                <Loader2 className="w-5 h-5 text-blue-600 animate-spin shrink-0" />
              ) : (
                <div className="w-5 h-5 rounded-full border-2 border-slate-200 shrink-0" />
              )}
              <span
                className={`text-sm ${
                  isCurrent
                    ? 'font-semibold text-slate-800'
                    : isDone
                    ? 'text-slate-700'
                    : 'text-slate-400'
                }`}
              >
                {text}
              </span>
            </div>
          );
        })}
      </div>

      <button
        onClick={onComplete}
        className="mt-8 text-xs text-slate-400 hover:text-slate-600 underline"
      >
        Pular espera e ver resultado
      </button>
    </div>
  );
};
