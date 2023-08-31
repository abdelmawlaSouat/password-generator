import { FC, ReactNode } from "react";
import styles from "./Button.module.scss";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Typography } from "../typography";

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <Typography variant="body" tag="span">
        {children}
      </Typography>

      <ArrowRightIcon className={styles.icon} />
    </button>
  );
};
