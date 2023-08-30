import { FC } from "react";
import styles from "./Slider.module.scss";
import { Typography } from "../typography";
import * as RadixSlider from "@radix-ui/react-slider";

export interface SliderProps {
  value: number;
  onChange: (value: number[]) => void;
  min: number;
  max: number;
  label: string;
  id: string;
  step?: number;
}

export const Slider: FC<SliderProps> = ({
  id,
  onChange,
  value,
  min,
  max,
  label,
  step = 1,
}) => {
  return (
    <div>
      <div className={styles.labelWrapper}>
        <Typography variant="body" tag="label" htmlFor={id}>
          {label}
        </Typography>

        <Typography variant="h2" tag="span" className={styles.value}>
          {value}
        </Typography>
      </div>

      <RadixSlider.Root
        className={styles.root}
        value={[value]}
        id={id}
        min={min}
        max={max}
        step={step}
        onValueChange={onChange}
      >
        <RadixSlider.Track className={styles.track}>
          <RadixSlider.Range className={styles.range} />
        </RadixSlider.Track>

        <RadixSlider.Thumb
          className={styles.thumb}
          aria-label={`slider-${id}`}
        />
      </RadixSlider.Root>
    </div>
  );
};
