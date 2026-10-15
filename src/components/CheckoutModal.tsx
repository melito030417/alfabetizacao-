import React, { useState } from 'react';
import { ShieldCheck, Lock, CheckCircle2, X, CreditCard, QrCode, FileText } from 'lucide-react';
import { IMAGES } from '../assets/images';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'cartao' | 'boleto'>('pix');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = 'https://checkout.escalepay.com/9069197';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8">
        {/* Header */}
        <div className="bg-[#15803d] text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-emerald-200" />
            <div>
              <h3 className="font-bold text-sm sm:text-base leading-tight">
                Checkout Seguro • 70% OFF
              </h3>
              <p className="text-[11px] text-emerald-100">
                Ambiente 100% Criptografado
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-6 sm:p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-extrabold text-slate-800">
              Inscrição Gerada com Sucesso!
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Enviamos os dados de acesso para o e-mail: <strong>{email || 'seu e-mail'}</strong>.
            </p>
            {paymentMethod === 'pix' && (
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center">
                <p className="text-xs font-bold text-slate-700 mb-2">
                  Chave Pix Copia e Cola gerada para R$ 19,00:
                </p>
                <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-[11px] font-mono text-slate-600 truncate mb-3">
                  00020126580014BR.GOV.BCB.PIX0136pipoeduca-alfabetizacao-neuro520400005303986540519.005802BR
                </div>
                <button
                  onClick={() => alert('Código Pix copiado!')}
                  className="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold"
                >
                  Copiar Código Pix
                </button>
              </div>
            )}
            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-slate-900 text-white font-bold text-sm"
            >
              Fechar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
            {/* Order Summary */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 space-y-2 text-xs">
              <div className="flex justify-between font-medium text-slate-700">
                <span>Método NeuroOctoMusical™ (Vitalício)</span>
                <span className="line-through text-slate-400">R$ 130,00</span>
              </div>
              <div className="flex justify-between text-emerald-700 font-medium">
                <span>Bônus 1: Kit Planners Visuais</span>
                <span>Grátis</span>
              </div>
              <div className="flex justify-between text-emerald-700 font-medium">
                <span>Bônus 2: Superpoder do Foco</span>
                <span>Grátis</span>
              </div>
              <div className="flex justify-between text-emerald-700 font-semibold border-t border-slate-200 pt-1.5">
                <span>Cupom Promocional Aplicado</span>
                <span>- R$ 111,00</span>
              </div>
              <div className="flex justify-between text-sm sm:text-base font-extrabold text-slate-900 border-t border-slate-200 pt-1.5">
                <span>Total Hoje:</span>
                <span className="text-[#15803d]">R$ 19,00 à vista</span>
              </div>
              <p className="text-[10px] text-right text-slate-500">
                ou em até 2x de R$ 9,90
              </p>
            </div>

            {/* Customer Inputs */}
            <div className="space-y-2.5">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nome de quem vai receber o acesso"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Seu Melhor E-mail (Para envio do acesso)
                </label>
                <input
                  type="email"
                  required
                  placeholder="exemplo@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  WhatsApp (DDD + Número)
                </label>
                <input
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Payment Method Selector */}
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1.5">
                Escolha a Forma de Pagamento
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('pix')}
                  className={`p-2.5 rounded-xl border flex flex-col items-center gap-1 text-[11px] font-bold transition-all ${
                    paymentMethod === 'pix'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-800 ring-2 ring-emerald-500'
                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <QrCode className="w-5 h-5 text-emerald-600" />
                  <span>PIX (Imediato)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('cartao')}
                  className={`p-2.5 rounded-xl border flex flex-col items-center gap-1 text-[11px] font-bold transition-all ${
                    paymentMethod === 'cartao'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-800 ring-2 ring-emerald-500'
                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-blue-600" />
                  <span>Cartão (6x)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('boleto')}
                  className={`p-2.5 rounded-xl border flex flex-col items-center gap-1 text-[11px] font-bold transition-all ${
                    paymentMethod === 'boleto'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-800 ring-2 ring-emerald-500'
                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <FileText className="w-5 h-5 text-amber-600" />
                  <span>Boleto</span>
                </button>
              </div>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="cta-button-green w-full py-4 px-6 rounded-xl text-sm sm:text-base font-black uppercase tracking-wider shadow-lg cursor-pointer mt-2"
            >
              FINALIZAR PAGAMENTO SEGURO (R$ 19,00)
            </button>

            {/* Security Guarantee Badges */}
            <div className="flex items-center justify-center gap-4 text-[10px] text-slate-500 pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 7 Dias de Garantia
              </span>
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-blue-600" /> Dados Protegidos
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
