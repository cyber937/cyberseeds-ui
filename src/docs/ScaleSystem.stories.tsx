import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "../components/Badge/Badge";
import { Button } from "../components/Button/Button";
import { Checkbox } from "../components/Checkbox/Checkbox";
import type { Scale } from "../components/DesignSystemUtils";
import { Input } from "../components/Input/Input";
import { PillBox } from "../components/PillBox/PillBox";
import { Progress } from "../components/Progress/Progress";
import { Radio } from "../components/Radio/Radio";
import { Spinner } from "../components/Spinner/Spinner";
import { Switch } from "../components/Switch/Switch";

const SCALES: Scale[] = ["xs", "sm", "md", "lg"];

function ScaleComparison() {
  return (
    <div className="cs:space-y-8 cs:max-w-2xl">
      <section>
        <h3 className="cs:text-lg cs:font-medium cs:mb-3 cs:text-gray-700 cs:dark:text-gray-300">Button</h3>
        <div className="cs:flex cs:gap-3 cs:items-center cs:flex-wrap">
          {SCALES.map((s) => <Button key={s} scale={s}>Scale {s}</Button>)}
        </div>
      </section>

      <section>
        <h3 className="cs:text-lg cs:font-medium cs:mb-3 cs:text-gray-700 cs:dark:text-gray-300">Input</h3>
        <div className="cs:flex cs:gap-3 cs:items-end cs:flex-wrap">
          {SCALES.map((s) => <Input key={s} scale={s} label={`Scale ${s}`} placeholder="Type here" />)}
        </div>
      </section>

      <section>
        <h3 className="cs:text-lg cs:font-medium cs:mb-3 cs:text-gray-700 cs:dark:text-gray-300">Checkbox / Radio / Switch</h3>
        <div className="cs:flex cs:gap-6 cs:items-center cs:flex-wrap">
          {SCALES.map((s) => (
            <div key={s} className="cs:flex cs:flex-col cs:gap-2 cs:items-start">
              <span className="cs:text-xs cs:text-gray-500">{s}</span>
              <Checkbox scale={s} label="Check" defaultChecked />
              <Radio scale={s} label="Radio" />
              <Switch scale={s} checked />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="cs:text-lg cs:font-medium cs:mb-3 cs:text-gray-700 cs:dark:text-gray-300">Badge / PillBox / Spinner</h3>
        <div className="cs:flex cs:gap-4 cs:items-center cs:flex-wrap">
          {SCALES.map((s) => (
            <div key={s} className="cs:flex cs:flex-col cs:gap-2 cs:items-center">
              <span className="cs:text-xs cs:text-gray-500">{s}</span>
              <Badge scale={s}>5</Badge>
              <PillBox scale={s} label={`${s}`} />
              <Spinner scale={s} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="cs:text-lg cs:font-medium cs:mb-3 cs:text-gray-700 cs:dark:text-gray-300">Progress</h3>
        <div className="cs:space-y-3">
          {SCALES.map((s) => (
            <div key={s}>
              <span className="cs:text-xs cs:text-gray-500 cs:mb-1 cs:block">{s}</span>
              <Progress scale={s} value={65} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const meta: Meta = {
  title: "Foundations/Scale System",
};

export default meta;

export const AllScales: StoryObj = {
  render: () => <ScaleComparison />,
};
