import React, { useEffect, useState } from 'react';
import { RotateCcw, CheckCircle2, Sparkles, Brain, Music, BookOpen } from 'lucide-react';

export const EvolutionChart: React.FC = () => {
  const [animationProgress, setAnimationProgress] = useState(0);

  // Smooth easing function
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  const startAnimation = () => {
    setAnimationProgress(0);
    const duration = 2200; // 2.2 seconds smooth rise
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(1, elapsed / duration);
      setAnimationProgress(progress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      startAnimation();
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  const t = easeOutCubic(animationProgress);

  // Baseline is Y = 260. All points rise from 260 up to target height.
  const baseline = 260;
  const getY = (targetY: number) => baseline - (baseline - targetY) * t;

  // Dynamic curve points
  const y0 = getY(250);
  const c1y = getY(240);
  const c2y = getY(230);
  const p1y = getY(205);
  const c3y = getY(180);
  const c4y = getY(145);
  const p2y = getY(120);
  const c5y = getY(95);
  const c6y = getY(50);
  const endY = getY(40);

  const curvePath = `M 30 ${y0} C 70 ${c1y}, 110 ${c2y}, 150 ${p1y} C 190 ${c3y}, 230 ${c4y}, 270 ${p2y} C 310 ${c5y}, 340 ${c6y}, 360 ${endY}`;
  const areaPath = `${curvePath} L 360 260 L 30 260 Z`;

  // Milestone pins Y coordinates
  const pin1Y = getY(220);
  const pin2Y = getY(175);
  const pin3Y = getY(95);
  const pin4Y = getY(15);

  // Milestone opacities & scale based on threshold
  const getMilestoneStyle = (threshold: number) => {
    if (animationProgress < threshold) {
      return { opacity: 0, transform: 'scale(0.5)' };
    }
    const localT = Math.min(1, (animationProgress - threshold) / 0.15);
    return {
      opacity: localT,
      transform: `scale(${0.7 + 0.3 * localT})`,
    };
  };

  const phases = [
    {
      num: 1,
      day: 'Dia 4',
      title: 'Atenção & Foco',
      desc: 'Superação da resistência e foco guiado com o Pipo',
      icon: Sparkles,
      threshold: 0.08,
      color: 'emerald',
    },
    {
      num: 2,
      day: 'Dia 15',
      title: 'Reconhecimento',
      desc: 'Associação rápida entre som e formato das letras',
      icon: Brain,
      threshold: 0.28,
      color: 'blue',
    },
    {
      num: 3,
      day: 'Dia 30',
      title: 'Sílabas',
      desc: 'Junção de sons e formação das primeiras sílabas',
      icon: Music,
      threshold: 0.55,
      color: 'indigo',
    },
    {
      num: 4,
      day: 'Dia 57',
      title: 'Leitura Autônoma',
      desc: 'Leitura fluente de palavras e pequenas frases',
      icon: BookOpen,
      threshold: 0.82,
      color: 'emerald',
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto my-6 bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-100 relative">
      <div className="flex items-center justify-between mb-3">
        <div className="text-left">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
            Evolução média em 57 dias
          </h3>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            15 min diários (média)
          </p>
        </div>

        {/* Replay button */}
        <button
          onClick={startAnimation}
          title="Ver animação novamente"
          className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-700 hover:bg-emerald-50 transition-colors flex items-center gap-1 text-xs cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="text-[10px] font-semibold hidden sm:inline">Replay</span>
        </button>
      </div>

      {/* The SVG Graphic with Curve and Phases */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/11]">
        <svg
          viewBox="0 0 400 300"
          className="w-full h-full overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="300" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#15803d" stopOpacity="0.30" />
              <stop offset="100%" stopColor="#15803d" stopOpacity="0.02" />
            </linearGradient>
            <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
            </filter>
          </defs>

          {/* Grid lines */}
          <line x1="30" y1="260" x2="380" y2="260" stroke="#e2e8f0" strokeWidth="1.5" />
          <line x1="30" y1="200" x2="380" y2="200" stroke="#f1f5f9" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="30" y1="140" x2="380" y2="140" stroke="#f1f5f9" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="30" y1="80" x2="380" y2="80" stroke="#f1f5f9" strokeWidth="1.5" strokeDasharray="3 3" />

          {/* Vertical dashed guide lines indicating phases */}
          <line x1="45" y1="260" x2="45" y2={pin1Y + 12} stroke="#86efac" strokeWidth="1" strokeDasharray="2 2" opacity={animationProgress > 0.08 ? 0.7 : 0} />
          <line x1="145" y1="260" x2="145" y2={pin2Y + 12} stroke="#93c5fd" strokeWidth="1" strokeDasharray="2 2" opacity={animationProgress > 0.28 ? 0.7 : 0} />
          <line x1="260" y1="260" x2="260" y2={pin3Y + 12} stroke="#c7d2fe" strokeWidth="1" strokeDasharray="2 2" opacity={animationProgress > 0.55 ? 0.7 : 0} />
          <line x1="355" y1="260" x2="355" y2={pin4Y + 12} stroke="#86efac" strokeWidth="1" strokeDasharray="2 2" opacity={animationProgress > 0.82 ? 0.7 : 0} />

          {/* Shaded Area under Curve (Rises dynamically from baseline) */}
          <path
            d={areaPath}
            fill="url(#curveGradient)"
            className="transition-all"
          />

          {/* The Green Evolution Curve */}
          <path
            d={curvePath}
            stroke="#166534"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Phase labels on X-axis baseline */}
          <g transform="translate(45, 276)" opacity={animationProgress > 0.08 ? 1 : 0.4}>
            <text x="0" y="0" textAnchor="middle" fontSize="8" fontWeight="700" fill="#15803d">
              Fase 1
            </text>
          </g>
          <g transform="translate(145, 276)" opacity={animationProgress > 0.28 ? 1 : 0.4}>
            <text x="0" y="0" textAnchor="middle" fontSize="8" fontWeight="700" fill="#2563eb">
              Fase 2
            </text>
          </g>
          <g transform="translate(260, 276)" opacity={animationProgress > 0.55 ? 1 : 0.4}>
            <text x="0" y="0" textAnchor="middle" fontSize="8" fontWeight="700" fill="#4f46e5">
              Fase 3
            </text>
          </g>
          <g transform="translate(355, 276)" opacity={animationProgress > 0.82 ? 1 : 0.4}>
            <text x="0" y="0" textAnchor="middle" fontSize="8" fontWeight="700" fill="#15803d">
              Fase 4
            </text>
          </g>

          {/* Milestone 1: Day 4 (Atenção) */}
          <g
            transform={`translate(45, ${pin1Y})`}
            style={getMilestoneStyle(0.08)}
            className="transition-transform duration-200"
          >
            <rect x="-26" y="-22" width="52" height="18" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="url(#shadow)" />
            <text x="0" y="-10" textAnchor="middle" fontSize="9" fontWeight="600" fill="#475569">
              Atenção
            </text>
            <rect x="-10" y="2" width="20" height="20" rx="4" fill="#15803d" />
            <text x="0" y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff">
              4
            </text>
          </g>

          {/* Milestone 2: Day 15 (Reconhecimento) */}
          <g
            transform={`translate(145, ${pin2Y})`}
            style={getMilestoneStyle(0.28)}
            className="transition-transform duration-200"
          >
            <rect x="-38" y="-22" width="76" height="18" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="url(#shadow)" />
            <text x="0" y="-10" textAnchor="middle" fontSize="8.5" fontWeight="600" fill="#475569">
              Reconhecimento
            </text>
            <rect x="-10" y="2" width="20" height="20" rx="4" fill="#15803d" />
            <text x="0" y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff">
              15
            </text>
          </g>

          {/* Milestone 3: Day 30 (Sílabas) */}
          <g
            transform={`translate(260, ${pin3Y})`}
            style={getMilestoneStyle(0.55)}
            className="transition-transform duration-200"
          >
            <rect x="-26" y="-22" width="52" height="18" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="url(#shadow)" />
            <text x="0" y="-10" textAnchor="middle" fontSize="9" fontWeight="600" fill="#475569">
              Sílabas
            </text>
            <rect x="-10" y="2" width="20" height="20" rx="4" fill="#15803d" />
            <text x="0" y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff">
              30
            </text>
          </g>

          {/* Milestone 4: Day 57 (Leitura) */}
          <g
            transform={`translate(355, ${pin4Y})`}
            style={getMilestoneStyle(0.82)}
            className="transition-transform duration-200"
          >
            <rect x="-24" y="-22" width="48" height="18" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="url(#shadow)" />
            <text x="0" y="-10" textAnchor="middle" fontSize="9" fontWeight="700" fill="#15803d">
              Leitura
            </text>
            <rect x="-10" y="2" width="20" height="20" rx="4" fill="#15803d" />
            <text x="0" y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff">
              57
            </text>
          </g>
        </svg>
      </div>

      {/* Dynamic Phases Breakdown List Below Graph */}
      <div className="mt-6 pt-4 border-t border-slate-100 text-left space-y-2.5">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
          Etapas do Processo de 57 Dias:
        </h4>

        <div className="grid grid-cols-1 gap-2">
          {phases.map((phase) => {
            const isReached = animationProgress >= phase.threshold;
            const Icon = phase.icon;

            return (
              <div
                key={phase.num}
                className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-between gap-3 ${
                  isReached
                    ? 'bg-slate-50 border-emerald-300 shadow-xs'
                    : 'bg-white border-slate-100 opacity-40'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                      isReached
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-slate-200 text-slate-500'
                    }`}
                  >
                    {phase.num}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-slate-900">
                        {phase.title}
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                        {phase.day}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      {phase.desc}
                    </p>
                  </div>
                </div>

                <div className="shrink-0">
                  {isReached ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Icon className="w-4 h-4 text-slate-300" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
