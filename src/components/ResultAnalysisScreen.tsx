import React from 'react';
import { IMAGES } from '../assets/images';
import { EvolutionChart } from './EvolutionChart';
import { Ticket } from 'lucide-react';
import { VturbPlayer } from './VturbPlayer';

interface ResultAnalysisScreenProps {
  onContinue: () => void;
}

export const ResultAnalysisScreen: React.FC<ResultAnalysisScreenProps> = ({
  onContinue,
}) => {
  return (
    <div className="w-full max-w-xl mx-auto px-4 py-8 flex flex-col items-center text-center">
      {/* Green Badge Status */}
      <div className="flex items-center gap-2 text-[#15803d] font-bold text-sm sm:text-base">
        <span className="w-2.5 h-2.5 rounded-full bg-[#16a34a] inline-block animate-pulse" />
        <span>Análise concluída para seu filho(a)</span>
      </div>

      {/* Subtitle */}
      <p className="mt-3 text-xs sm:text-sm text-[#2563eb] font-medium max-w-md">
        Como muitas crianças avançam durante o processo:
      </p>

      {/* 57-Day Evolution Curve Chart */}
      <EvolutionChart />

      {/* Coupon Notification Card */}
      <div className="w-full bg-[#f8fafc] border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-sm text-left my-4">
        <div className="flex items-center gap-2 mb-2">
          <Ticket className="w-5 h-5 text-slate-800 -rotate-12" />
          <h4 className="text-sm sm:text-base font-bold text-slate-900">
            Cupom disponível
          </h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Clique no botão abaixo para descobrir como o Método do Pipo vai alfabetizar de uma forma leve, divertida e eficiente.
        </p>
      </div>

      {/* Hero Method Presentation Banner Card */}
      <div className="w-full my-4 rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-gradient-to-b from-[#e0f2fe] to-[#f0f9ff]">
        <div className="p-4 sm:p-6 text-center">
          <p className="text-xs uppercase font-bold text-[#0284c7] tracking-wider">
            Método
          </p>
          <h3 className="text-xl sm:text-2xl font-black text-[#f97316] mb-1">
            NeuroOctoMusical™
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 font-medium max-w-xs mx-auto">
            O método que ajuda seu filho a ler e escrever de forma leve e divertida.
          </p>
        </div>
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <img
            src={IMAGES.classroom}
            alt="Método NeuroOctoMusical"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* First Big Green CTA Button */}
      <button
        onClick={onContinue}
        className="cta-button-green pulse-cta w-full py-4 px-6 rounded-xl text-base sm:text-lg font-bold tracking-wider cursor-pointer my-4 uppercase"
      >
        CONTINUAR E ACESSAR
      </button>

      {/* Bonus Mystery Banner */}
      <div className="w-full my-6 rounded-2xl overflow-hidden shadow-lg border border-amber-200 bg-[#0f172a]">
        <div className="relative aspect-[4/3] w-full">
          <img
            src={IMAGES.bonusMystery}
            alt="Você Ganhou! Cupom de Desconto + 2 Bônus Exclusivos"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 sm:p-5 bg-[#0a1945] text-white text-center">
          <h4 className="text-sm sm:text-base font-black text-amber-300 uppercase tracking-wide">
            CONHEÇA O MÉTODO QUE VAI ALFABETIZAR SEU FILHO E LIBERE OS BÔNUS EXCLUSIVOS!
          </h4>
          <p className="text-xs text-slate-300 mt-2">
            Benefícios exclusivos para quem chegou nessa página. Libere clicando no botão abaixo.
          </p>
        </div>
      </div>

      {/* Social Proof Header */}
      <div className="mt-6 mb-4 text-center">
        <h3 className="text-lg sm:text-xl font-black text-[#1d4ed8] uppercase tracking-wide">
          O QUE OS PAIS FALAM DO MÉTODO:
        </h3>
        <p className="text-[11px] sm:text-xs text-[#dc2626] font-medium mt-1">
          O vídeo abaixo foi encaminhado para a nossa equipe de suporte*
        </p>
      </div>

      {/* VTurb Smartplayer Video (Mobile Vertical Testimonial) */}
      <div className="w-full my-4 flex justify-center">
        <VturbPlayer
          videoId="vid-6ace91f15dc83eca7f1b711e"
          scriptUrl="https://scripts.converteai.net/18bd9910-ef8c-473a-bb5f-1eb61241073a/players/6ace91f15dc83eca7f1b711e/v4/player.js"
          paddingAspectRatio="178.21782178217822%"
          maxWidth="400px"
          className="max-w-[400px]"
        />
      </div>

      {/* Second Big Green CTA Button */}
      <button
        onClick={onContinue}
        className="cta-button-green pulse-cta w-full py-4 px-6 rounded-xl text-base sm:text-lg font-bold tracking-wider cursor-pointer mt-6 uppercase"
      >
        CONTINUAR E ACESSAR
      </button>

      {/* Footer Pipo Avatar */}
      <div className="mt-8 flex justify-center opacity-80">
        <img
          src={IMAGES.avatar}
          alt="Pipo Mascot"
          className="w-12 h-12 object-contain"
        />
      </div>
    </div>
  );
};
