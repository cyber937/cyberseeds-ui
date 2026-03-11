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
  /** When true, uses white-based styling for dark backgrounds */
  inverted?: boolean;
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
  inverted = false,
  className,
}: StepperProps) {
  const { color: contextUIColor } = useUIColor() ?? { color: undefined };
  const finalUIColor = resolveColor(contextUIColor ?? color);
  const colorStyle = colorToCSSVars(finalUIColor);

  const textColor = isPresetColor(finalUIColor) && LIGHT_BG_COLORS.has(finalUIColor)
    ? "cs:text-gray-900"
    : "cs:text-white";

  // Inverted styles for dark backgrounds
  const pendingCircleStyle = inverted
    ? "cs:border-white/50 cs:text-white cs:bg-transparent"
    : "cs:border-gray-300 cs:dark:border-gray-600 cs:text-gray-400 cs:dark:text-gray-500 cs:bg-white cs:dark:bg-gray-800";
  const pendingLabelStyle = inverted
    ? "cs:text-white/70"
    : "cs:text-gray-400 cs:dark:text-gray-500";
  const activeLabelStyle = inverted
    ? "cs:text-white"
    : "cs:text-gray-900 cs:dark:text-gray-200";
  const mobileLabelStyle = inverted
    ? "cs:text-white"
    : "cs:text-gray-700 cs:dark:text-gray-300";
  const pendingLineStyle = inverted
    ? "cs:bg-white/30"
    : "cs:bg-gray-300 cs:dark:bg-gray-600";

  const checkIconScale: Record<Scale, string> = {
    xs: "cs:size-3",
    sm: "cs:size-3.5",
    md: "cs:size-4",
    lg: "cs:size-5",
  };

  const mobileCircleScale: Record<Scale, string> = {
    xs: "cs:size-4 cs:text-[0.5rem]",
    sm: "cs:size-5 cs:text-[0.625rem]",
    md: "cs:size-6 cs:text-[0.625rem]",
    lg: "cs:size-8 cs:text-sm",
  };

  const mobileCheckIconScale: Record<Scale, string> = {
    xs: "cs:size-2.5",
    sm: "cs:size-3",
    md: "cs:size-3.5",
    lg: "cs:size-4",
  };

  const mobileLabelScale: Record<Scale, string> = {
    xs: "cs:text-[0.625rem]",
    sm: "cs:text-xs",
    md: "cs:text-xs",
    lg: "cs:text-sm",
  };

  return (
    <div
      style={colorStyle}
      className={clsx("cs:font-sans", className)}
      aria-label={`Step ${currentStep + 1} / ${steps.length}`}
      role="group"
    >
      {/* Mobile: compact layout (circles only, no connector lines) */}
      <div data-testid="stepper-mobile" className="cs:sm:hidden">
        <div className="cs:flex cs:items-center cs:justify-center cs:gap-1.5">
          {steps.map((_, index) => {
            const isCompleted = index < currentStep;
            const isActive = index === currentStep;
            return (
              <div
                key={index}
                className={clsx(
                  "cs:rounded-full cs:flex cs:items-center cs:justify-center cs:font-semibold cs:border-2 cs:shrink-0",
                  mobileCircleScale[scale],
                  isCompleted && `cs-stepper-completed ${textColor}`,
                  isActive && `cs-stepper-active ${textColor}`,
                  !isCompleted && !isActive && pendingCircleStyle,
                )}
                aria-current={isActive ? "step" : undefined}
              >
                {isCompleted ? (
                  <CheckIcon className={mobileCheckIconScale[scale]} />
                ) : (
                  index + 1
                )}
              </div>
            );
          })}
        </div>
        <p className={clsx(
          "cs:text-center cs:mt-1",
          mobileLabelStyle,
          mobileLabelScale[scale],
        )}>
          {steps[currentStep]?.label}
        </p>
      </div>

      {/* Desktop: full layout with labels */}
      <div data-testid="stepper-desktop" className="cs:hidden cs:sm:flex cs:items-start cs:w-full">
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
                    !isCompleted && !isActive && pendingCircleStyle,
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
                    (isCompleted || isActive) ? activeLabelStyle : pendingLabelStyle,
                  )}
                >
                  {step.label}
                </span>
                {step.description && (
                  <span className={clsx("cs:text-center cs:leading-tight", pendingLabelStyle, labelScaleMap[scale])}>
                    {step.description}
                  </span>
                )}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={clsx(
                    "cs:flex-1 cs:mx-2 cs:self-center cs:mb-6",
                    lineHeightMap[scale],
                    isCompleted ? "cs-stepper-line-completed" : pendingLineStyle,
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
