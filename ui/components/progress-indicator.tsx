import React from 'react'

interface ProgressIndicatorProps {
  totalSteps: number
  currentStep: number
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  totalSteps,
  currentStep,
}) => {
  const stepsArray = Array.from({ length: totalSteps }, (_, i) => i + 1)

  return (
    <div className="w-full mt-4 mb-4 flex gap-2">
      {stepsArray.map((step) => (
        <div
          key={step}
          className={`h-2.5 rounded ${
            step <= currentStep
              ? 'bg-foreground'
              : 'bg-gray-200 dark:bg-gray-700'
          } flex-grow`}
          style={{ flexBasis: `${100 / totalSteps}%` }}
        ></div>
      ))}
    </div>
  )
}
