import { FC } from "react";
import { Typography } from "../typography";
import styles from "./StrengthStatus.module.scss";
import classNames from "classnames";
import { PasswordStrengthStatus } from "@/types";

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
  status?: PasswordStrengthStatus;
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
  return (
    <div className={styles.wrapper}>
      <Typography variant="body" tag="span" className={styles.label}>
        STRENGTH
      </Typography>

      <div className={styles.statusWrapper}>
        <Typography variant="h2" tag="span">
          {status && statuses[status].label}
        </Typography>

        <div className={styles.rectangleWrapper}>
          {status ? (
            <>
              {[...Array(statuses[status].length)].map((key) => (
                <Rectangle color={statuses[status].color} key={key} />
              ))}

              {[...Array(BAR_LENGTH - statuses[status].length)].map((key) => (
                <Rectangle key={key} />
              ))}
            </>
          ) : (
            [...Array(BAR_LENGTH)].map((key) => <Rectangle key={key} />)
          )}
        </div>
      </div>
    </div>
  );
};
