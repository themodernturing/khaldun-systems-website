import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { StepIndicator } from '@/components/ai-plan/StepIndicator'
import { QuestionStep } from '@/components/ai-plan/QuestionStep'
import { aiPlanQuestions } from '@/data/aiPlan'
import type { AIPlanAnswers } from '@/types'

const defaultAnswers: AIPlanAnswers = {
  industry: '',
  challenge: '',
  aiHelp: '',
  businessSize: '',
  priority: '',
}

export function AIPlan() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<AIPlanAnswers>(defaultAnswers)
  const [direction, setDirection] = useState(1)
  const navigate = useNavigate()

  const currentQuestion = aiPlanQuestions[step]
  const currentAnswer = answers[currentQuestion.id]
  const totalSteps = aiPlanQuestions.length
  const canAdvance = Boolean(currentAnswer)
  const isLast = step === totalSteps - 1

  function handleAnswer(key: keyof AIPlanAnswers, value: string) {
    setAnswers((prev) => ({ ...prev, [key]: value }))
  }

  function handleNext() {
    if (!canAdvance) return
    if (isLast) {
      navigate('/ai-plan/results', { state: { answers } })
      return
    }
    setDirection(1)
    setStep((s) => s + 1)
  }

  function handleBack() {
    if (step === 0) return
    setDirection(-1)
    setStep((s) => s - 1)
  }

  return (
    <div className="min-h-screen hero-gradient grid-bg">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Your AI Plan
          </span>
          <h1 className="text-3xl font-bold text-white mb-2">
            Let's build your decision intelligence roadmap
          </h1>
          <p className="text-slate-400 text-sm">
            5 questions. Under 3 minutes. A personalized AI plan.
          </p>
        </motion.div>

        {/* Progress */}
        <div className="flex justify-center mb-10">
          <StepIndicator totalSteps={totalSteps} currentStep={step} />
        </div>

        {/* Question */}
        <div className="mb-10">
          <QuestionStep
            question={currentQuestion}
            currentAnswer={currentAnswer}
            onAnswer={handleAnswer}
            direction={direction}
          />
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={handleBack}
            disabled={step === 0}
            className={`flex items-center gap-2 text-sm font-medium transition-all ${
              step === 0
                ? 'text-slate-600 cursor-not-allowed'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            aria-label="Previous question"
          >
            <ArrowLeft size={16} />
            Back
          </button>

          <Button
            onClick={handleNext}
            disabled={!canAdvance}
            size="md"
          >
            {isLast ? 'Generate My AI Plan' : 'Next'}
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  )
}
