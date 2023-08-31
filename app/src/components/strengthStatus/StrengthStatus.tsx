import { FC } from "react";
import { Typography } from "../typography";
import styles from "./StrengthStatus.module.scss";
import classNames from "classnames";

export enum PasswordStrengthStatus {
  TOO_WEAK = "too weak",
  WEAK = "weak",
  MEDIUM = "medium",
  STRONG = "strong",
}

const statuses = {
  [PasswordStrengthStatus.TOO_WEAK]: {
    label: "Too weak !",
    length: 1,
    color: "red",
  },
  [PasswordStrengthStatus.WEAK]: {
    label: "Weak",
    length: 2,
    color: "orange",
  },
  [PasswordStrengthStatus.MEDIUM]: {
    label: "Medium",
    length: 3,
    color: "yellow",
  },
  [PasswordStrengthStatus.STRONG]: {
    label: "Strong",
    length: 4,
    color: "green",
  },
};

const BAR_LENGTH = 4;

export interface StrengthStatusProps {
  status: PasswordStrengthStatus;
}

export interface RectangleProps {
  color: "red" | "orange" | "yellow" | "green";
}

const Rectangle = ({ color }: { color?: string }) => {
  return (
    <div
      className={classNames(styles.rectangle, {
        [styles[color as string]]: color,
      })}
    />
  );
};

export const StrengthStatus: FC<StrengthStatusProps> = ({ status }) => {
  const statusItem = statuses[status];

  return (
    <div className={styles.wrapper}>
      <Typography variant="body" tag="span" className={styles.label}>
        STRENGTH
      </Typography>

      <div className={styles.statusWrapper}>
        <Typography variant="h2" tag="span">
          {statusItem.label}
        </Typography>

        <div className={styles.rectangleWrapper}>
          {[...Array(statusItem.length)].map((key) => (
            <Rectangle color={statusItem.color} key={key} />
          ))}

          {[...Array(BAR_LENGTH - statusItem.length)].map((key) => (
            <Rectangle key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};
