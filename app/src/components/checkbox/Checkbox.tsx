import React, { FC } from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import styles from "./Checkbox.module.scss";
import { Typography } from "../typography";
import classNames from "classnames";

export interface CheckboxProps {
  label: string;
  onChange: (value: boolean) => void;
  checked: boolean;
  id?: string;
}

export const Checkbox: FC<CheckboxProps> = ({
  id,
  label,
  onChange,
  checked,
}) => (
  <div className={styles.wrapper}>
    <RadixCheckbox.Root
      className={classNames(styles.root, { [styles.isChecked]: checked })}
      id={id}
      checked={checked}
      onCheckedChange={onChange}
    >
      <RadixCheckbox.Indicator className={styles.indicator}>
        <CheckIcon />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>

    <Typography
      variant="body"
      tag="label"
      className={styles.label}
      htmlFor={id}
    >
      {label}
    </Typography>
  </div>
);
