import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
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
        initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {question.question}
          </h2>
          <p className="text-slate-400 text-base">{question.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {question.options.map((option) => {
            const selected = currentAnswer === option.value
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => onAnswer(question.id, option.value)}
                className={`relative text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer group ${
                  selected
                    ? 'border-blue-500/60 bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.15)]'
                    : 'border-blue-500/15 bg-[#0a1628]/70 hover:border-blue-500/30 hover:bg-blue-500/5'
                }`}
                aria-pressed={selected}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className={`font-semibold text-sm mb-1 ${selected ? 'text-blue-300' : 'text-white'}`}>
                      {option.label}
                    </div>
                    {option.description && (
                      <div className="text-slate-400 text-xs leading-relaxed">
                        {option.description}
                      </div>
                    )}
                  </div>
                  {selected && (
                    <CheckCircle2 className="text-blue-400 flex-shrink-0 mt-0.5" size={18} />
                  )}
                </div>
              </button>
            )
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
