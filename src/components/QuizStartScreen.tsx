import React from 'react';
import { IMAGES } from '../assets/images';
import { UserCheck } from 'lucide-react';
import { VturbPlayer } from './VturbPlayer';

interface QuizStartScreenProps {
  onSelectAge: (age: string) => void;
  onPreviewVideo?: () => void;
}

export const QuizStartScreen: React.FC<QuizStartScreenProps> = ({
  onSelectAge,
  onPreviewVideo,
}) => {
  const ageOptions = ['2 a 3 anos', '4 a 5 anos', '6 a 8 anos', '+ de 8 anos'];

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8 flex flex-col items-center text-center">
      {/* Top Headline */}
      <h1 className="text-xl sm:text-2xl font-bold text-slate-800 leading-snug max-w-xl">
        Com o <span className="underline decoration-slate-800">método</span>{' '}
        <span className="text-[#e11d48]">Kids</span>, a criança aprende a{' '}
        <span className="text-[#2563eb]">ler</span> e{' '}
        <span className="text-[#2563eb]">escrever</span> de uma forma leve e
        divertida...
      </h1>

      <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium">
        15 minutos por dia farão toda a diferença no futuro
      </p>

      {/* VTurb Smartplayer Video */}
      <div className="mt-6 w-full max-w-md">
        <VturbPlayer videoId="vid-6ace917e21ff7b56c1335bd3" />
      </div>

      {/* Question Header */}
      <div className="mt-8">
        <h2 className="text-lg sm:text-xl font-extrabold text-[#15803d] tracking-wide uppercase">
          QUAL É A IDADE DA CRIANÇA?
        </h2>
        <p className="text-xs sm:text-sm font-semibold text-[#dc2626] mt-1">
          <span className="underline">Selecione</span> a opção abaixo
        </p>
      </div>

      {/* 2x2 Grid of Age Buttons */}
      <div className="mt-6 grid grid-cols-2 gap-4 w-full max-w-lg">
        {ageOptions.map((age) => (
          <button
            key={age}
            onClick={() => onSelectAge(age)}
            className="quiz-pill-button py-4 px-3 sm:px-6 rounded-2xl text-base sm:text-lg font-medium cursor-pointer"
          >
            {age}
          </button>
        ))}
      </div>

      {/* Personalization Info Card */}
      <div className="mt-8 w-full max-w-lg bg-white border border-[#86efac]/80 rounded-2xl p-4 shadow-sm flex items-center gap-4 text-left">
        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
          <UserCheck className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-800">Personalização!</h4>
          <p className="text-xs sm:text-sm text-slate-600">
            Responda e receba o plano personalizado da sua criança
          </p>
        </div>
      </div>
    </div>
  );
};
