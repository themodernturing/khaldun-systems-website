interface StepIndicatorProps {
  totalSteps: number
  currentStep: number
  stepContext: string
}

export function StepIndicator({ totalSteps, currentStep, stepContext }: StepIndicatorProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <span className="text-blue-400 text-xs font-semibold tracking-widest uppercase">
          {stepContext}
        </span>
        <span className="text-slate-500 text-xs tabular-nums">
          {currentStep + 1} of {totalSteps}
        </span>
      </div>
      <div
        className="flex gap-1.5"
        role="progressbar"
        aria-valuenow={currentStep + 1}
        aria-valuemin={1}
        aria-valuemax={totalSteps}
        aria-label={`Step ${currentStep + 1} of ${totalSteps}: ${stepContext}`}
      >
        {Array.from({ length: totalSteps }, (_, i) => (
          <div
            key={i}
            className={`h-0.5 flex-1 rounded-full transition-all duration-500 ${
              i < currentStep
                ? 'bg-blue-500'
                : i === currentStep
                ? 'bg-blue-400'
                : 'bg-slate-700'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
