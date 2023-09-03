import { FC, useState } from "react";
import styles from "./TextField.module.scss";
import { Typography } from "../typography";
import { CopyIcon } from "@radix-ui/react-icons";
import classNames from "classnames";

export interface TextFieldProps {
  value?: string;
}

const DEFAULT_VALUE = "P4$5W0rD!";

export const TextField: FC<TextFieldProps> = ({ value }) => {
  const [isCopied, setIsCopied] = useState(false);
  const valueText = value ? value : DEFAULT_VALUE;

  const onClick = () => {
    navigator.clipboard.writeText(valueText);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <div className={styles.wrapper}>
      <Typography
        variant="h2"
        tag="span"
        className={classNames(styles.field, { [styles.isEmpty]: !value })}
      >
        {valueText}
      </Typography>

      <div className={styles.btnWrapper}>
        {isCopied && (
          <Typography variant="body" tag="span">
            COPIED
          </Typography>
        )}

        <button className={styles.btn} onClick={onClick}>
          <CopyIcon className={styles.icon} />
        </button>
      </div>
    </div>
  );
};
