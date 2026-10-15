import React, { useState, useEffect, useRef } from 'react';
import { IMAGES } from '../assets/images';
import { VturbPlayer } from './VturbPlayer';
import {
  Mail,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Star,
  Check,
  ChevronDown,
  ShieldCheck,
  Headphones,
  Tv,
  Music,
  FileText,
  Brain,
  Download,
  Sparkles,
  Lock,
  Smartphone,
  ExternalLink,
  MessageCircle,
} from 'lucide-react';

interface SalesPageScreenProps {
  onCheckout: () => void;
  onOpenExitModal: () => void;
}

export const SalesPageScreen: React.FC<SalesPageScreenProps> = ({
  onCheckout,
}) => {
  // Live viewer counter fluctuation (115 - 138)
  const [viewers, setViewers] = useState(123);

  // Countdown timer to end of day
  const [timeLeft, setTimeLeft] = useState({
    hours: 6,
    minutes: 51,
    seconds: 12,
  });

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Ref to bonus section for smooth scrolling
  const bonusRef = useRef<HTMLDivElement>(null);
  const offerRef = useRef<HTMLDivElement>(null);

  // Viewers effect
  useEffect(() => {
    const viewerInterval = setInterval(() => {
      setViewers((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2;
        const next = prev + delta;
        return next >= 110 && next <= 145 ? next : 124;
      });
    }, 4000);

    return () => clearInterval(viewerInterval);
  }, []);

  // Timer countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToBonus = () => {
    bonusRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToOffer = () => {
    offerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const faqData = [
    {
      q: 'Posso assistir as aulinhas, músicas e os desenhos na TV?',
      a: 'Sim! Você pode assistir todos os conteúdos audiovisuais tanto na TV, quanto no celular, tablet ou computador.',
    },
    {
      q: 'Quais os métodos de pagamento?',
      a: 'Você pode adquirir pelo PIX, CARTÃO OU BOLETO.',
    },
    {
      q: 'Após o pagamento, eu recebo o acesso por e-mail?',
      a: 'Exatamente! Após a confirmação da compra, o sistema envia para o seu e-mail cadastrado o acesso da nossa plataforma.',
    },
    {
      q: 'Para qual idade é indicado?',
      a: 'É indicado para crianças a partir de 2 anos de idade até a fase de alfabetização completa (8+ anos).',
    },
    {
      q: 'O conteúdo eu pago todos os meses ou somente uma vez?',
      a: 'O pagamento é único, você paga uma vez e tem acesso para sempre. Não é assinatura.',
    },
  ];

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-6 flex flex-col items-center">
      {/* Top Green Notification Box */}
      <div className="w-full bg-[#dcfce7] border border-[#86efac] rounded-2xl p-4 sm:p-5 text-center shadow-sm mb-6">
        <div className="flex items-center justify-center gap-2 mb-1">
          <Mail className="w-5 h-5 text-[#166534]" />
          <h2 className="text-lg sm:text-xl font-bold text-[#166534]">
            Parabéns!
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#14532d] font-medium">
          Você ganhou um cupom de <strong className="font-extrabold text-[#15803d]">70%</strong> em nossa plataforma.
        </p>
        <p className="text-xs text-[#166534] mt-0.5">
          Finalize sua inscrição e comece hoje mesmo.
        </p>
      </div>

      {/* VSL VTurb Smartplayer Video */}
      <div className="w-full my-4">
        <VturbPlayer
          videoId="vid-6ace9a06f6a57d8e37bc1f78"
          scriptUrl="https://scripts.converteai.net/18bd9910-ef8c-473a-bb5f-1eb61241073a/players/6ace9a06f6a57d8e37bc1f78/v4/player.js"
          paddingAspectRatio="56.25%"
        />
      </div>

      {/* Live Viewers Indicator */}
      <p className="mt-3 text-xs sm:text-sm font-semibold text-[#16a34a] flex items-center justify-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#16a34a] animate-ping" />
        <span>{viewers} pessoas assistindo agora...</span>
      </p>

      {/* Heading: VEJA ABAIXO TUDO O QUE VOCÊ TEM ACESSO! */}
      <div className="mt-8 text-center">
        <h2 className="text-base sm:text-lg font-black text-[#1e40af] tracking-tight uppercase">
          VEJA ABAIXO TUDO O QUE VOCÊ TEM ACESSO!
        </h2>
      </div>

      {/* Red Pill: como funciona na prática? */}
      <div className="mt-4 mb-3">
        <span className="bg-[#cf3832] text-white px-5 py-1 text-xs sm:text-sm font-bold rounded-full inline-block uppercase tracking-wide">
          como funciona na prática?
        </span>
      </div>

      {/* Method Description Card */}
      <div className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3 text-justify px-2">
        <p>
          O <strong className="text-slate-900">Método NeuroOctoMusical</strong> é um método audiovisual de alfabetização infantil que utiliza desenho animado, músicas, ritmo, imagens e personagens educativos para estimular a leitura e a escrita de forma leve e envolvente.
        </p>
        <p>
          Com o <strong className="text-slate-900">mascote Pipo (Polvinho)</strong> guiando as atividades, as crianças aprendem <strong className="text-slate-900">letras, sons e palavras</strong> por meio de estímulos musicais e visuais que facilitam a memorização e a compreensão.
        </p>
        <p>
          Foi desenvolvido especialmente para crianças em fase inicial de alfabetização que precisam aprender de forma lúdica, progressiva e motivadora, inclusive em casa.
        </p>
      </div>

      {/* Antes vs Depois Image */}
      <div className="my-6 w-full rounded-2xl overflow-hidden shadow-md border border-slate-200">
        <img
          src={IMAGES.beforeAfter}
          alt="Comparação Antes e Depois da Alfabetização"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Red Pill: E quais são os benefícios? */}
      <div className="mb-4">
        <span className="bg-[#cf3832] text-white px-5 py-1 text-xs sm:text-sm font-bold rounded-full inline-block uppercase tracking-wide">
          E quais são os benefícios?
        </span>
      </div>

      {/* Benefits List */}
      <div className="w-full text-left space-y-2.5 text-xs sm:text-sm text-slate-700 px-2 mb-6">
        {[
          'Aumenta o interesse da criança por letras e palavras.',
          'Estimula a fala, a escuta e o reconhecimento de sons.',
          'Ajuda a memorizar letras com mais facilidade.',
          'Torna o aprendizado mais leve e divertido.',
          'Reduz a resistência na hora de estudar.',
          'Cria rotina de aprendizagem em poucos minutos por dia.',
          'Transforma o tempo de tela em tempo educativo.',
          'Fortalece a confiança da criança ao tentar ler.',
        ].map((benefit, index) => (
          <div key={index} className="flex items-start gap-2.5">
            <span className="text-[#cf3832] text-base leading-none">•</span>
            <span>{benefit}</span>
          </div>
        ))}
      </div>

      {/* Testimonials (Depoimentos) */}
      <div className="w-full space-y-3.5 my-4">
        {/* Roberta Barros */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm text-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-400 to-amber-300 flex items-center justify-center font-bold text-white text-sm">
              RB
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                Roberta Barros
              </h4>
              <p className="text-[11px] text-slate-500">Rio de Janeiro/RJ</p>
            </div>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            Comecei a usar com meu filho e ele amou. Já reconhece várias letras. Fiquei bem feliz. Ele canta as musiquinhas e vai falando as letras junto 😍 Muito bom
          </p>
          <div className="flex items-center gap-1 mt-2 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>

        {/* Maria Aparecida Wishinski */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm text-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 flex items-center justify-center font-bold text-white text-sm">
              MW
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                Maria Aparecida Wishinski
              </h4>
              <p className="text-[11px] text-slate-500">Sorocaba/SP</p>
            </div>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            Comprei pro meu netinho e ele adorou o polvinho... fica cantando as letras pela casa... Ele chama de "a aula do polvinho" muito bonitinho, já ajudou muito por aqui, obrigada por criarem esse material, Deus abençoe
          </p>
          <div className="flex items-center gap-1 mt-2 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>
      </div>

      {/* Button: VEJA OS BÔNUS ABAIXO */}
      <button
        onClick={scrollToBonus}
        className="w-full max-w-sm my-4 py-3 px-6 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-xs sm:text-sm tracking-wide uppercase shadow-md transition-all cursor-pointer"
      >
        VEJA OS BÔNUS ABAIXO
      </button>

      {/* Bônus Section Anchor */}
      <div ref={bonusRef} className="pt-6 w-full text-center">
        <h3 className="text-sm sm:text-base font-bold text-slate-900 max-w-md mx-auto">
          Além do cupom de desconto de <span className="text-[#eab308] font-extrabold">70%</span>, hoje você leva mais 2 super bônus!
        </h3>
      </div>

      {/* BÔNUS 1 */}
      <div className="w-full mt-6 flex flex-col items-center">
        <span className="bg-[#cf3832] text-white px-4 py-0.5 text-xs font-bold rounded-full inline-block uppercase mb-3">
          Bônus 1
        </span>

        <div className="w-full bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md text-left">
          <div className="p-4 sm:p-5 text-center bg-gradient-to-b from-amber-50 to-white">
            <h4 className="text-base sm:text-lg font-black text-amber-600 uppercase">
              ✦ Bônus 1: ✦
            </h4>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
              Kit de Planners Visuais
            </h3>
            <p className="text-xs text-slate-600 font-medium">
              Organize a rotina do seu filho com diversão e clareza!
            </p>
          </div>

          <div className="relative aspect-[3/4] w-full">
            <img
              src={IMAGES.planners}
              alt="Kit de Planners Visuais"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-4 sm:p-5 text-xs text-slate-700 leading-relaxed space-y-2">
            <p>
              Ver seu filho entender a própria rotina (mesmo sem saber ler) é emocionante. Esses planners visuais foram pensados para facilitar esse processo com carinho e leveza. São materiais que respeitam o tempo da criança e acompanham seu crescimento, inclusive quando ela começar a ler. Uma ajuda real para tornar os dias mais leves e cheios de conquistas.
            </p>
            <p className="font-bold text-[#cf3832] pt-2 text-center text-sm">
              Preço: R$ 19,00 (Grátis)
            </p>
          </div>
        </div>
      </div>

      {/* BÔNUS 2 */}
      <div className="w-full mt-8 flex flex-col items-center">
        <span className="bg-[#cf3832] text-white px-4 py-0.5 text-xs font-bold rounded-full inline-block uppercase mb-3">
          Bônus 2
        </span>

        <div className="w-full bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md text-left">
          <div className="p-4 sm:p-5 text-center bg-gradient-to-b from-orange-50 to-white">
            <h4 className="text-base sm:text-lg font-black text-orange-600 uppercase">
              ✦ Bônus 2: ✦
            </h4>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
              Superpoder do Foco
            </h3>
            <p className="text-xs text-slate-600 font-medium">
              Ajude seu filho a aumentar o foco e a concentração de forma divertida!
            </p>
          </div>

          <div className="relative aspect-[3/4] w-full">
            <img
              src={IMAGES.foco}
              alt="Superpoder do Foco"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-4 sm:p-5 text-xs text-slate-700 leading-relaxed space-y-2">
            <p>
              Quanto mais cedo a criança desenvolver essa habilidade, mais autonomia, disciplina e confiança ela terá.
            </p>
            <p>
              <strong>O Superpoder do Foco</strong> é um guia digital com 31 dicas práticas para ajudar seu filho a:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Se concentrar mais nas tarefas.</li>
              <li>Evitar distrações.</li>
              <li>Ser mais paciente, organizado e confiante.</li>
            </ul>
            <p>Tudo isso em uma linguagem simples e direta.</p>
            <p className="font-bold text-[#cf3832] pt-2 text-center text-sm">
              Preço: R$ 29,00 (Grátis)
            </p>
          </div>
        </div>
      </div>

      {/* Acesse de qualquer dispositivo */}
      <div className="my-8 w-full">
        <img
          src={IMAGES.devices}
          alt="Acesse de qualquer dispositivo"
          className="w-full h-auto object-cover rounded-xl"
        />
      </div>

      {/* Yellow Badge: TUDO O QUE RECEBE: */}
      <div className="mb-6">
        <span className="bg-[#eab308] text-white px-6 py-1.5 text-xs sm:text-sm font-black rounded-full inline-block uppercase tracking-wider shadow-sm">
          TUDO O QUE RECEBE:
        </span>
      </div>

      {/* Features List with Icons */}
      <div className="w-full space-y-3 px-2 text-xs sm:text-sm font-medium text-slate-800">
        {[
          { icon: Headphones, text: 'Aulinhas guiadas com o Professor Pipo' },
          { icon: Tv, text: 'Desenhos animados com personagens do alfabeto' },
          { icon: Music, text: 'Alfabetização musical estruturada' },
          { icon: FileText, text: 'Materiais complementares para desenvolver a escrita e leitura (PDF)' },
          { icon: Brain, text: 'Tarefas de memorização' },
          { icon: Download, text: 'Áudios das músicas e videoclipes (MP3)' },
          { icon: Check, text: 'Atualizações incluídas', highlight: true },
          { icon: Mail, text: 'Acesso imediato à plataforma', highlight: true },
          { icon: Sparkles, text: 'Acesso vitalício (para sempre seu)', highlight: true },
          { icon: Smartphone, text: 'Acesse de qualquer dispositivo (Tv, Celular, tablet ou computador)', highlight: true },
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`flex items-center gap-3 p-2.5 rounded-xl ${
                item.highlight
                  ? 'bg-blue-50/80 text-blue-900 border border-blue-100 font-semibold'
                  : 'bg-white border border-slate-100 text-slate-800'
              }`}
            >
              <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-left leading-snug">{item.text}</span>
            </div>
          );
        })}
      </div>

      {/* Checkout Anchor / Pricing Offer Box */}
      <div ref={offerRef} className="w-full mt-10">
        {/* Countdown Box */}
        <div className="bg-[#111827] text-white rounded-2xl p-4 text-center shadow-xl border border-slate-800">
          <p className="text-[11px] sm:text-xs font-black tracking-widest text-amber-400 uppercase">
            ★ VOCÊ GANHOU UM CUPOM DE 70% DE DESCONTO ★
          </p>

          <div className="my-2 border-t border-slate-800 pt-2">
            <h4 className="text-xs sm:text-sm font-bold text-slate-200">
              OFERTA DO DIA
            </h4>
            <p className="text-[10px] sm:text-xs text-slate-400">
              Seu desconto termina hoje às 23:59 (Horário de Brasília)
            </p>
          </div>

          {/* Countdown Clock Display */}
          <div className="flex justify-center gap-2 sm:gap-4 my-3">
            <div className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 min-w-[54px]">
              <span className="text-base sm:text-xl font-mono font-bold text-amber-400">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <p className="text-[8px] uppercase tracking-wider text-slate-400">Horas</p>
            </div>
            <span className="text-amber-400 font-bold self-center">:</span>
            <div className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 min-w-[54px]">
              <span className="text-base sm:text-xl font-mono font-bold text-amber-400">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <p className="text-[8px] uppercase tracking-wider text-slate-400">Minutos</p>
            </div>
            <span className="text-amber-400 font-bold self-center">:</span>
            <div className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 min-w-[54px]">
              <span className="text-base sm:text-xl font-mono font-bold text-amber-400">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <p className="text-[8px] uppercase tracking-wider text-slate-400">Segundos</p>
            </div>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="bg-white border-2 border-emerald-500 rounded-2xl p-6 text-center shadow-xl mt-4">
          <span className="bg-[#cf3832] text-white px-5 py-1 text-xs font-black rounded-full inline-block uppercase mb-4 tracking-wider">
            OFERTA DO DIA
          </span>

          <p className="text-xs sm:text-sm text-slate-500">
            De: <span className="line-through font-semibold text-red-500">R$ 130,00</span> por apenas
          </p>

          <div className="my-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#15803d]">
              R$ 19,00
            </h3>
            <p className="text-sm sm:text-base font-bold text-slate-700">
              ou em até <strong className="text-slate-900 text-lg">2x de R$ 9,90</strong>
            </p>
          </div>

          {/* Coupon Pill Banner */}
          <div className="my-4 bg-emerald-50 border border-emerald-300 rounded-xl p-2.5 flex items-center justify-between text-left">
            <div className="flex items-center gap-2">
              <span className="text-base">🎟️</span>
              <div>
                <p className="text-[10px] font-bold uppercase text-emerald-800">
                  Cupom Aplicado
                </p>
                <p className="text-xs font-semibold text-emerald-700">
                  DESCONTO EXCLUSIVO
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-emerald-800 font-medium">Somente hoje</p>
              <p className="text-sm font-black text-emerald-900">R$ 19,00</p>
            </div>
          </div>

          {/* Big Green CTA Button */}
          <a
            href="https://checkout.escalepay.com/9069197"
            className="cta-button-green pulse-cta w-full py-4 px-6 rounded-xl text-base sm:text-lg font-black tracking-wider uppercase shadow-xl cursor-pointer block text-center"
          >
            ADQUIRIR COM DESCONTO
          </a>

          <p className="mt-3 text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-slate-400" />
            <span>Pagamento Único: Cartão, pix ou boleto</span>
          </p>
        </div>
      </div>

      {/* Guarantee Card */}
      <div className="w-full mt-8 bg-blue-50/70 border border-blue-200 rounded-2xl p-5 text-left shadow-sm">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h4 className="text-xs sm:text-sm font-bold text-blue-950 uppercase tracking-wide">
            GARANTIA DE SATISFAÇÃO TOTAL
          </h4>
        </div>

        <div className="text-[11px] sm:text-xs text-slate-600 space-y-2 leading-relaxed">
          <p>
            Nosso propósito é um só: ajudar de verdade no desenvolvimento da leitura e da escrita das crianças (de forma leve e envolvente).
          </p>
          <p>
            Queremos que você se sinta totalmente seguro ao entrar no Método NeuroOctoMusical™.
          </p>
          <p>
            Por isso, oferecemos <strong>garantia de satisfação total</strong>. Você pode acessar o conteúdo, conhecer a plataforma, assistir às aulas com o Pipo e aplicar com seu filho. Se dentro do prazo de <strong>7 dias</strong> você entender que o método não é adequado para sua família, basta solicitar e devolvemos o valor pago.
          </p>
          <p>
            Assumimos esse compromisso porque acreditamos no que construímos e no impacto que o método pode gerar quando aplicado com carinho.
          </p>
          <p className="font-medium text-slate-700">
            Aqui, o foco não é apenas o conteúdo — é o resultado no aprendizado da criança e a sua tranquilidade como pai ou mãe.
          </p>
        </div>
      </div>

      {/* FAQ Section (Dúvidas Frequentes) */}
      <div className="w-full mt-10 text-center">
        <h3 className="text-sm sm:text-base font-extrabold text-slate-900 uppercase tracking-wider mb-4">
          DÚVIDAS FREQUENTES
        </h3>

        <div className="space-y-3 text-left">
          {faqData.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-4 flex items-center justify-between gap-3 text-left font-semibold text-xs sm:text-sm text-slate-800 hover:text-blue-600"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Second CTA Block */}
      <div className="w-full mt-8">
        <div className="my-3 bg-emerald-50 border border-emerald-300 rounded-xl p-2.5 flex items-center justify-between text-left">
          <div className="flex items-center gap-2">
            <span className="text-base">🎟️</span>
            <div>
              <p className="text-[10px] font-bold uppercase text-emerald-800">
                Cupom Aplicado
              </p>
              <p className="text-xs font-semibold text-emerald-700">
                70% DE DESCONTO
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-emerald-800 font-medium">Somente hoje</p>
            <p className="text-sm font-black text-emerald-900">R$ 19,00</p>
          </div>
        </div>

        <a
          href="https://checkout.escalepay.com/9069197"
          className="cta-button-green pulse-cta w-full py-4 px-6 rounded-xl text-base sm:text-lg font-black tracking-wider uppercase shadow-xl cursor-pointer block text-center"
        >
          ADQUIRIR COM DESCONTO
        </a>
      </div>

      {/* Mascot Logo Card */}
      <div className="mt-12 flex flex-col items-center">
        <img
          src={IMAGES.avatar}
          alt="Pipo Logo"
          className="w-24 h-24 object-contain"
        />
        <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mt-1">
          Método
        </h4>
        <h3 className="text-lg font-black text-[#f97316]">
          NeuroOctoMusical™
        </h3>
      </div>

      {/* Support / SAC WhatsApp Box */}
      <div className="w-full mt-8 bg-white border border-slate-200 rounded-2xl p-5 text-center shadow-sm">
        <h4 className="text-xs sm:text-sm font-extrabold text-[#cf3832] uppercase tracking-wide">
          AINDA ESTÁ COM DÚVIDAS?
        </h4>
        <p className="text-[11px] sm:text-xs text-slate-600 mt-1">
          Chame nosso SAC pelo botão abaixo
        </p>

        <div className="my-3 text-[10px] text-slate-500 bg-slate-50 p-2.5 rounded-xl space-y-0.5">
          <p className="font-bold text-slate-700">Horário de atendimento ao cliente:</p>
          <p>Segunda a Sexta: 8:30 às 11:30 / 13:30 às 18h</p>
          <p>Sábado, domingos e feriados: 12h às 15h</p>
        </div>

        <a
          href="https://wa.me/?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20o%20M%C3%A9todo%20NeuroOctoMusical"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-xs sm:text-sm tracking-wide uppercase shadow-md transition-all"
        >
          <MessageCircle className="w-4 h-4" />
          <span>SUPORTE SAC</span>
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-10 mb-6 text-center text-[10px] sm:text-[11px] text-slate-400">
        <p>Método NeuroOctoMusical • Todos os direitos reservados</p>
      </footer>
    </div>
  );
};
