/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { QUIZ_QUESTIONS, QuizState } from './types/funnel';
import { QuizStartScreen } from './components/QuizStartScreen';
import { QuizQuestionScreen } from './components/QuizQuestionScreen';
import { AnalyzingScreen } from './components/AnalyzingScreen';
import { ResultAnalysisScreen } from './components/ResultAnalysisScreen';
import { SalesPageScreen } from './components/SalesPageScreen';
import { ExitIntentModal } from './components/ExitIntentModal';
import { CheckoutModal } from './components/CheckoutModal';
import { FunnelNavigationToolbar } from './components/FunnelNavigationToolbar';

export default function App() {
  const [funnelState, setFunnelState] = useState<QuizState>({
    currentStep: 0,
    answers: {},
  });

  const [isExitModalOpen, setIsExitModalOpen] = useState(false);
  const [hasShownExitModal, setHasShownExitModal] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Exit intent detection on desktop (mouse leaves top of window)
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && !hasShownExitModal && funnelState.currentStep >= 12) {
        setIsExitModalOpen(true);
        setHasShownExitModal(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShownExitModal, funnelState.currentStep]);

  // Handle Age Selection (Step 0 -> Step 1)
  const handleSelectAge = (age: string) => {
    setFunnelState((prev) => ({
      ...prev,
      age,
      answers: { ...prev.answers, 0: age },
      currentStep: 1,
    }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle Question Selection (Steps 1..10)
  const handleSelectOption = (option: string) => {
    const currentQId = funnelState.currentStep;
    const nextStep = currentQId + 1;

    setFunnelState((prev) => ({
      ...prev,
      answers: { ...prev.answers, [currentQId]: option },
      currentStep: nextStep <= 10 ? nextStep : 11, // 11 is analyzing screen
    }));

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle Analysis Completed (Step 11 -> Step 12)
  const handleAnalysisCompleted = () => {
    setFunnelState((prev) => ({
      ...prev,
      currentStep: 12,
    }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle "CONTINUAR E ACESSAR" (Step 12 -> Step 13)
  const handleContinueToSalesPage = () => {
    setFunnelState((prev) => ({
      ...prev,
      currentStep: 13,
    }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle Direct Navigation from Toolbar
  const handleNavigateStep = (step: number) => {
    setFunnelState((prev) => ({
      ...prev,
      currentStep: step,
    }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render current screen
  const renderCurrentScreen = () => {
    if (funnelState.currentStep === 0) {
      return (
        <QuizStartScreen
          onSelectAge={handleSelectAge}
          onPreviewVideo={() => {
            // If user clicks video preview on start screen, jump to sales VSL
            setFunnelState((prev) => ({ ...prev, currentStep: 13 }));
          }}
        />
      );
    }

    if (funnelState.currentStep >= 1 && funnelState.currentStep <= 10) {
      const question = QUIZ_QUESTIONS[funnelState.currentStep - 1];
      return (
        <QuizQuestionScreen
          question={question}
          stepIndex={funnelState.currentStep}
          totalSteps={QUIZ_QUESTIONS.length}
          onSelectOption={handleSelectOption}
          onBack={() => {
            setFunnelState((prev) => ({
              ...prev,
              currentStep: Math.max(0, prev.currentStep - 1),
            }));
          }}
        />
      );
    }

    if (funnelState.currentStep === 11) {
      return <AnalyzingScreen onComplete={handleAnalysisCompleted} />;
    }

    if (funnelState.currentStep === 12) {
      return <ResultAnalysisScreen onContinue={handleContinueToSalesPage} />;
    }

    if (funnelState.currentStep === 13) {
      return (
        <SalesPageScreen
          onCheckout={() => {
            window.location.href = 'https://checkout.escalepay.com/9069197';
          }}
          onOpenExitModal={() => setIsExitModalOpen(true)}
        />
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-[#ffffff] text-slate-800 antialiased relative">
      <main className="w-full pb-16">{renderCurrentScreen()}</main>

      {/* Exit Intent Modal (Matching Image 14.png) */}
      <ExitIntentModal
        isOpen={isExitModalOpen}
        onClose={() => setIsExitModalOpen(false)}
        onAccept={() => {
          setIsExitModalOpen(false);
          window.location.href = 'https://checkout.escalepay.com/9069197';
        }}
      />

      {/* Checkout Order Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

      {/* Quick Testing & Funnel Navigation Bar */}
      <FunnelNavigationToolbar
        currentStep={funnelState.currentStep}
        onNavigateStep={handleNavigateStep}
        onOpenExitModal={() => setIsExitModalOpen(true)}
      />
    </div>
  );
}
