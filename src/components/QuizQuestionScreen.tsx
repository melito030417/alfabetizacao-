import React from 'react';
import { QuizQuestion } from '../types/funnel';
import { HeaderProgressBar } from './HeaderProgressBar';
import { IMAGES } from '../assets/images';

interface QuizQuestionScreenProps {
  question: QuizQuestion;
  stepIndex: number;
  totalSteps: number;
  onSelectOption: (option: string) => void;
  onBack?: () => void;
}

export const QuizQuestionScreen: React.FC<QuizQuestionScreenProps> = ({
  question,
  stepIndex,
  totalSteps,
  onSelectOption,
}) => {
  // Compute progress: step 1 is ~15%, step 10 is 100%
  const progressPercent = Math.min(100, Math.round((stepIndex / totalSteps) * 100));

  // Render question title with underlined / colored keywords matching the screenshots
  const renderTitle = () => {
    switch (question.id) {
      case 2:
        return (
          <>
            Ele(a) consegue associar{' '}
            <span className="text-[#1e40af] underline font-bold">som</span> às
            letras?
          </>
        );
      case 4:
        return (
          <>
            Seu filho se frustra quando não consegue{' '}
            <span className="underline">ler</span> ou{' '}
            <span className="underline">escrever</span>?
          </>
        );
      case 5:
        return (
          <>
            Ele consegue focar por{' '}
            <span className="underline font-bold">5 minutos</span> em uma
            atividade guiada?
          </>
        );
      case 8:
        return (
          <>
            Se houvesse um material{' '}
            <span className="underline font-bold">audiovisual</span> para
            ensinar a criança a ler e a escrever, você usaria?
          </>
        );
      default:
        return question.title;
    }
  };

  return (
    <div className="w-full min-h-[85vh] flex flex-col justify-start items-center">
      {/* Top Progress Bar */}
      <HeaderProgressBar progress={progressPercent} />

      <div className="w-full max-w-xl mx-auto px-4 py-8 flex flex-col items-center text-center">
        {/* Question Title */}
        <h2 className="text-xl sm:text-2xl font-bold text-[#15803d] leading-snug max-w-lg mb-8">
          {renderTitle()}
        </h2>

        {/* Vertical Stack of Options */}
        <div className="w-full max-w-md flex flex-col gap-3.5">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => onSelectOption(option)}
              className="quiz-pill-button w-full py-4 px-6 rounded-full text-sm sm:text-base font-medium text-center cursor-pointer transition-all active:scale-[0.98]"
            >
              {option}
            </button>
          ))}
        </div>

        {/* Special Devices Banner for Question 9 */}
        {question.showDevicesBanner && (
          <div className="mt-10 w-full max-w-md flex flex-col items-center animate-fade-in">
            <img
              src={IMAGES.devices}
              alt="Acesse de qualquer dispositivo"
              className="w-full max-w-sm drop-shadow-md rounded-xl"
            />
          </div>
        )}
      </div>
    </div>
  );
};
