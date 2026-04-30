import { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
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

// Label shown when a step is pre-filled from homepage selection
const prefilledLabels: Partial<Record<AIPlanAnswers['aiHelp'], string>> = {
  'better-decisions': 'Decision quality',
  'reduce-risk': 'Risk visibility',
  'automate-workflows': 'Operational speed',
  'predict-outcomes': 'Forecasting',
}

export function AIPlan() {
  const location = useLocation()
  const navigate = useNavigate()

  // Merge any preselected values from homepage
  const preselected = (location.state as { preselected?: Partial<AIPlanAnswers> } | null)?.preselected ?? {}
  const initialAnswers: AIPlanAnswers = { ...defaultAnswers, ...preselected }

  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<AIPlanAnswers>(initialAnswers)
  const [direction, setDirection] = useState(1)
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const currentQuestion = aiPlanQuestions[step]
  const currentAnswer = answers[currentQuestion.id]
  const totalSteps = aiPlanQuestions.length
  const isLast = step === totalSteps - 1
  const wasPreselected = currentQuestion.id === 'aiHelp' && Boolean(preselected.aiHelp)

  // Auto-advance when current step has an answer
  useEffect(() => {
    if (!currentAnswer) return
    if (advanceTimer.current) clearTimeout(advanceTimer.current)

    // Faster advance for pre-filled steps
    const delay = wasPreselected ? 300 : 540

    advanceTimer.current = setTimeout(() => {
      if (isLast) {
        navigate('/ai-plan/results', { state: { answers } })
      } else {
        setDirection(1)
        setStep((s) => s + 1)
      }
    }, delay)

    return () => {
      if (advanceTimer.current) clearTimeout(advanceTimer.current)
    }
  }, [currentAnswer, step]) // eslint-disable-line react-hooks/exhaustive-deps

  function handleAnswer(key: keyof AIPlanAnswers, value: string) {
    setAnswers((prev) => ({ ...prev, [key]: value }))
  }

  function handleBack() {
    if (step === 0) return
    if (advanceTimer.current) clearTimeout(advanceTimer.current)
    setDirection(-1)
    setStep((s) => s - 1)
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background:
          'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(29,78,216,0.20) 0%, transparent 65%), #020817',
      }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 sm:px-8 py-5 border-b border-white/[0.04]">
        <Link
          to="/"
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
          aria-label="Back to Khaldun Systems"
        >
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-white text-xs font-bold">K</span>
          </div>
          <span className="font-medium hidden sm:inline">Khaldun Systems</span>
        </Link>
        <span className="text-slate-600 text-xs tracking-wide">AI Plan · Confidential</span>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="max-w-2xl w-full mx-auto px-4 sm:px-6 py-12">

          {/* Step 0 intro */}
          <AnimatePresence>
            {step === 0 && (
              <motion.div
                className="mb-10 text-center"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {preselected.aiHelp && prefilledLabels[preselected.aiHelp] ? (
                  <>
                    <span className="inline-block text-green-400 text-xs font-semibold tracking-widest uppercase mb-3">
                      You want to improve: {prefilledLabels[preselected.aiHelp]}
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      Now let's understand your context.
                    </h1>
                    <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
                      A few more questions and we'll build a plan specific to your organisation.
                    </p>
                  </>
                ) : (
                  <>
                    <span className="inline-block text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">
                      AI Plan · 5 questions
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      Let's understand your business first.
                    </h1>
                    <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
                      This is a structured consultation — not a form. Each question builds toward a recommendation that actually fits.
                    </p>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Progress */}
          <div className="mb-10">
            <StepIndicator
              totalSteps={totalSteps}
              currentStep={step}
              stepContext={currentQuestion.stepContext}
            />
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

          {/* Nav */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={handleBack}
              disabled={step === 0}
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                step === 0 ? 'text-slate-700 cursor-not-allowed' : 'text-slate-400 hover:text-slate-200'
              }`}
              aria-label="Go to previous question"
            >
              <ArrowLeft size={15} />
              Back
            </button>

            <div className="flex items-center gap-3">
              {currentAnswer && !isLast && (
                <motion.span
                  className="text-slate-600 text-xs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0.5, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  Continuing…
                </motion.span>
              )}
              {!currentAnswer && (
                <span className="text-slate-700 text-xs">
                  Select an option to continue
                </span>
              )}
              {currentAnswer && isLast && (
                <Button
                  onClick={() => navigate('/ai-plan/results', { state: { answers } })}
                  size="md"
                >
                  Generate My Plan →
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
