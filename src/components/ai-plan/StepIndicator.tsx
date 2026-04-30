interface StepIndicatorProps {
  totalSteps: number
  currentStep: number
}

export function StepIndicator({ totalSteps, currentStep }: StepIndicatorProps) {
  return (
    <div className="flex items-center gap-2" role="progressbar" aria-valuenow={currentStep} aria-valuemin={1} aria-valuemax={totalSteps}>
      {Array.from({ length: totalSteps }, (_, i) => (
        <div key={i} className="flex items-center gap-2">
          <div
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i < currentStep
                ? 'bg-blue-500 w-8'
                : i === currentStep
                ? 'bg-blue-400 w-8'
                : 'bg-slate-700 w-4'
            }`}
          />
        </div>
      ))}
      <span className="text-slate-400 text-sm ml-2">
        {currentStep + 1} / {totalSteps}
      </span>
    </div>
  )
}
