import { Slider } from "@/components/slider";
import { FC } from "react";
import { Checkbox } from "../checkbox";
import { StrengthStatus } from "../strengthStatus";
import { Button } from "../button";
import styles from "./PasswordGeneratorForm.module.scss";
import { AppState, PasswordStrengthStatus } from "@/types";
import { MAX_SLIDER_LENGTH, SYMBOLS } from "@/constants";
import { generate } from "randomstring";
import { passwordStrength } from "check-password-strength";

export const capitalization = (values: AppState) => {
  if (values.includeUppercaseLetters && values.includeLowercaseLetters) {
    return;
  }
  if (values.includeUppercaseLetters) {
    return "uppercase";
  }
  if (values.includeLowercaseLetters) {
    return "lowercase";
  }

  return;
};

export const getPasswordStrengthStatus = (password: string) => {
  const strength = passwordStrength(password);

  if (strength.value === "Too weak") {
    return PasswordStrengthStatus.TOO_WEAK;
  }
  if (strength.value === "Weak") {
    return PasswordStrengthStatus.WEAK;
  }
  if (strength.value === "Medium") {
    return PasswordStrengthStatus.MEDIUM;
  }
  if (strength.value === "Strong") {
    return PasswordStrengthStatus.STRONG;
  }
};

export interface PasswordGeneratorFormProps {
  values: AppState;
  setValues: (values: AppState) => void;
}

export const PasswordGeneratorForm: FC<PasswordGeneratorFormProps> = ({
  values,
  setValues,
}) => {
  const onClick = () => {
    const password = generate({
      length: values.characterLength,
      // @ts-ignore
      charset: [
        "alphabetic",
        values.includeNumbers ? "numeric" : "",
        values.includeSymbols ? SYMBOLS : "",
      ],
      capitalization: capitalization(values),
    });

    setValues({
      ...values,
      password,
      strengthStatus: getPasswordStrengthStatus(password),
    });
  };

  return (
    <form className={styles.form}>
      <Slider
        label="Character Length"
        min={1}
        max={MAX_SLIDER_LENGTH}
        onChange={(value) => {
          setValues({
            ...values,
            characterLength: value[0],
          });
        }}
        value={values.characterLength}
      />

      <div className={styles.checkboxesWrapper}>
        <Checkbox
          label="Include Uppercase Letters"
          id="uppercase"
          onChange={(value) =>
            setValues({ ...values, includeUppercaseLetters: value })
          }
          checked={values.includeUppercaseLetters}
        />

        <Checkbox
          label="Include Lowercase Letters"
          id="lowercase"
          onChange={(value) =>
            setValues({ ...values, includeLowercaseLetters: value })
          }
          checked={values.includeLowercaseLetters}
        />

        <Checkbox
          label="Include Numbers"
          id="numbers"
          onChange={(value) => setValues({ ...values, includeNumbers: value })}
          checked={values.includeNumbers}
        />

        <Checkbox
          label="Include Symbols"
          id="symbols"
          onChange={(value) => setValues({ ...values, includeSymbols: value })}
          checked={values.includeSymbols}
        />
      </div>

      <StrengthStatus status={values.strengthStatus} />

      <Button onClick={onClick}>Generate</Button>
    </form>
  );
};
