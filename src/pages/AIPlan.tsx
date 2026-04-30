import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
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
  const [autoAdvancing, setAutoAdvancing] = useState(false)
  const navigate = useNavigate()

  const currentQuestion = aiPlanQuestions[step]
  const currentAnswer = answers[currentQuestion.id]
  const totalSteps = aiPlanQuestions.length
  const isLast = step === totalSteps - 1

  // Auto-advance 600ms after a selection is made
  useEffect(() => {
    if (!currentAnswer || autoAdvancing) return
    setAutoAdvancing(true)
    const timer = setTimeout(() => {
      if (isLast) {
        navigate('/ai-plan/results', { state: { answers } })
      } else {
        setDirection(1)
        setStep((s) => s + 1)
      }
      setAutoAdvancing(false)
    }, 520)
    return () => clearTimeout(timer)
  }, [currentAnswer]) // eslint-disable-line react-hooks/exhaustive-deps

  function handleAnswer(key: keyof AIPlanAnswers, value: string) {
    setAnswers((prev) => ({ ...prev, [key]: value }))
  }

  function handleBack() {
    if (step === 0) return
    setAutoAdvancing(false)
    setDirection(-1)
    setStep((s) => s - 1)
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background:
          'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(29,78,216,0.22) 0%, transparent 65%), #020817',
      }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 sm:px-8 py-5 border-b border-white/[0.05]">
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
        <span className="text-slate-600 text-xs">Your AI Plan — Confidential</span>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="max-w-2xl w-full mx-auto px-4 sm:px-6 py-12">
          {/* Intro copy — only on step 0 */}
          {step === 0 && (
            <motion.div
              className="mb-10 text-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">
                AI Plan — 5 Questions
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Let's understand your business first.
              </h1>
              <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
                This isn't a form — it's a structured consultation. Each question is designed to help us build a recommendation that actually fits your situation.
              </p>
            </motion.div>
          )}

          {/* Progress indicator */}
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

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={handleBack}
              disabled={step === 0}
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                step === 0
                  ? 'text-slate-700 cursor-not-allowed'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              aria-label="Previous question"
            >
              <ArrowLeft size={15} />
              Back
            </button>

            <div className="flex items-center gap-3">
              {currentAnswer && !isLast && (
                <span className="text-slate-600 text-xs animate-pulse">
                  Continuing…
                </span>
              )}
              {!currentAnswer && (
                <Button
                  onClick={() => undefined}
                  disabled
                  size="sm"
                  variant="ghost"
                >
                  Select an option to continue
                </Button>
              )}
              {currentAnswer && isLast && (
                <Button
                  onClick={() => navigate('/ai-plan/results', { state: { answers } })}
                  size="md"
                >
                  Generate My Plan <ArrowRight size={15} />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
