import React from 'react';

interface ExitIntentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

export const ExitIntentModal: React.FC<ExitIntentModalProps> = ({
  isOpen,
  onClose,
  onAccept,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 text-center animate-scale-up">
        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-[#1e3a8a] leading-snug">
          Você realmente quer desistir da alfabetização da sua criança?
        </h3>

        {/* Copy */}
        <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
          Seu desconto de <strong className="text-slate-900 font-bold">70% ainda está ativo</strong> para garantir o Método NeuroOctoMusical™ e começar hoje a ensinar leitura e escrita de forma leve, musical e envolvente.
        </p>

        <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
          São poucos minutos por dia que podem mudar toda a base de aprendizado.
        </p>

        {/* Green CTA */}
        <a
          href="https://checkout.escalepay.com/9069197"
          onClick={onAccept}
          className="cta-button-green w-full py-4 px-6 rounded-2xl text-sm sm:text-base font-bold tracking-wide mt-6 cursor-pointer block text-center"
        >
          Quero aproveitar os 70% de desconto
        </a>

        {/* Dismiss Link */}
        <button
          onClick={onClose}
          className="mt-4 text-xs sm:text-sm text-slate-400 hover:text-slate-600 transition-colors"
        >
          Não, vou sair
        </button>
      </div>
    </div>
  );
};
