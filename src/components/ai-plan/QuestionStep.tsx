import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Info } from 'lucide-react'
import type { AIPlanQuestion, AIPlanAnswers } from '@/types'

interface QuestionStepProps {
  question: AIPlanQuestion
  currentAnswer: string
  onAnswer: (key: keyof AIPlanAnswers, value: string) => void
  direction: number
}

export function QuestionStep({ question, currentAnswer, onAnswer, direction }: QuestionStepProps) {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={question.id}
        custom={direction}
        initial={{ opacity: 0, x: direction > 0 ? 32 : -32 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: direction > 0 ? -32 : 32 }}
        transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Question heading */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
            {question.question}
          </h2>
        </div>

        {/* Why we're asking */}
        <div className="flex gap-3 mb-8 p-4 rounded-xl bg-blue-500/5 border border-blue-500/15">
          <Info size={15} className="text-blue-400 flex-shrink-0 mt-0.5" />
          <p className="text-slate-400 text-sm leading-relaxed">{question.why}</p>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {question.options.map((option, i) => {
            const selected = currentAnswer === option.value
            return (
              <motion.button
                key={option.value}
                type="button"
                onClick={() => onAnswer(question.id, option.value)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22, delay: i * 0.04 }}
                className={`relative text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                  selected
                    ? 'border-blue-500/70 bg-blue-500/10 shadow-[0_0_24px_rgba(59,130,246,0.12)]'
                    : 'border-white/[0.07] bg-white/[0.02] hover:border-blue-500/30 hover:bg-blue-500/5'
                }`}
                aria-pressed={selected}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className={`font-semibold text-sm mb-1 transition-colors ${selected ? 'text-blue-300' : 'text-slate-100'}`}>
                      {option.label}
                    </div>
                    {option.description && (
                      <div className="text-slate-500 text-xs leading-relaxed">
                        {option.description}
                      </div>
                    )}
                  </div>
                  <div className={`flex-shrink-0 w-4 h-4 mt-0.5 transition-all duration-200 ${selected ? 'opacity-100' : 'opacity-0'}`}>
                    <CheckCircle2 className="text-blue-400 w-4 h-4" />
                  </div>
                </div>
              </motion.button>
            )
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
