import clsx from "clsx";
import { colorToCSSVars, isPresetColor, resolveColor } from "../Constants/colorUtils";
import { LIGHT_BG_COLORS } from "../Constants/colorContrast";
import type { Color, Scale } from "../DesignSystemUtils";
import { useUIColor } from "../UIColorProvider/useUIColor";

interface StepperStep {
  label: string;
  description?: string;
}

interface StepperProps {
  steps: StepperStep[];
  currentStep: number;
  color?: Color;
  scale?: Scale;
  className?: string;
}

const circleScaleMap: Record<Scale, string> = {
  xs: "cs:size-5 cs:text-[0.625rem]",
  sm: "cs:size-6 cs:text-xs",
  md: "cs:size-8 cs:text-sm",
  lg: "cs:size-10 cs:text-base",
};

const labelScaleMap: Record<Scale, string> = {
  xs: "cs:text-[0.625rem] cs:max-w-14",
  sm: "cs:text-xs cs:max-w-16",
  md: "cs:text-xs cs:max-w-20",
  lg: "cs:text-sm cs:max-w-24",
};

const lineHeightMap: Record<Scale, string> = {
  xs: "cs:h-0.5",
  sm: "cs:h-0.5",
  md: "cs:h-0.5",
  lg: "cs:h-1",
};

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
    </svg>
  );
}

export function Stepper({
  steps,
  currentStep,
  color = "blue",
  scale = "md",
  className,
}: StepperProps) {
  const { color: contextUIColor } = useUIColor() ?? { color: undefined };
  const finalUIColor = resolveColor(contextUIColor ?? color);
  const colorStyle = colorToCSSVars(finalUIColor);

  const textColor = isPresetColor(finalUIColor) && LIGHT_BG_COLORS.has(finalUIColor)
    ? "cs:text-gray-900"
    : "cs:text-white";

  const checkIconScale: Record<Scale, string> = {
    xs: "cs:size-3",
    sm: "cs:size-3.5",
    md: "cs:size-4",
    lg: "cs:size-5",
  };

  return (
    <div
      style={colorStyle}
      className={clsx("cs:flex cs:items-start cs:w-full cs:font-sans", className)}
      aria-label={`Step ${currentStep + 1} / ${steps.length}`}
      role="group"
    >
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;

        return (
          <div key={index} className="cs:flex cs:flex-1 cs:items-center">
            <div className="cs:flex cs:flex-col cs:items-center cs:shrink-0">
              <div
                className={clsx(
                  "cs:rounded-full cs:flex cs:items-center cs:justify-center cs:font-semibold cs:border-2",
                  circleScaleMap[scale],
                  isCompleted && `cs-stepper-completed ${textColor}`,
                  isActive && `cs-stepper-active ${textColor}`,
                  !isCompleted && !isActive && "cs:border-gray-300 cs:dark:border-gray-600 cs:text-gray-400 cs:dark:text-gray-500 cs:bg-white cs:dark:bg-gray-800",
                )}
                aria-current={isActive ? "step" : undefined}
              >
                {isCompleted ? (
                  <CheckIcon className={checkIconScale[scale]} />
                ) : (
                  index + 1
                )}
              </div>
              <span
                className={clsx(
                  "cs:mt-1 cs:text-center cs:leading-tight",
                  labelScaleMap[scale],
                  (isCompleted || isActive) ? "cs:text-gray-900 cs:dark:text-gray-200" : "cs:text-gray-400 cs:dark:text-gray-500",
                )}
              >
                {step.label}
              </span>
              {step.description && (
                <span className={clsx("cs:text-center cs:leading-tight cs:text-gray-400 cs:dark:text-gray-500", labelScaleMap[scale])}>
                  {step.description}
                </span>
              )}
            </div>
            {index < steps.length - 1 && (
              <div
                className={clsx(
                  "cs:flex-1 cs:mx-2 cs:self-center cs:mb-6",
                  lineHeightMap[scale],
                  isCompleted ? "cs-stepper-line-completed" : "cs:bg-gray-300 cs:dark:bg-gray-600",
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
