import { Slider } from "@/components/slider";
import { FC } from "react";
import { Checkbox } from "../checkbox";
import { StrengthStatus } from "../strengthStatus";
import { Button } from "../button";
import styles from "./PasswordGeneratorForm.module.scss";
import { AppState } from "@/types";
import { MAX_SLIDER_LENGTH } from "@/constants";

export interface PasswordGeneratorFormProps {
  values: AppState;
  setValues: (values: AppState) => void;
}

export const PasswordGeneratorForm: FC<PasswordGeneratorFormProps> = ({
  values,
  setValues,
}) => {
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
          onChange={(value) =>
            setValues({ ...values, includeUppercaseLetters: value })
          }
          checked={values.includeUppercaseLetters}
        />

        <Checkbox
          label="Include Lowercase Letters"
          onChange={(value) =>
            setValues({ ...values, includeLowercaseLetters: value })
          }
          checked={values.includeLowercaseLetters}
        />

        <Checkbox
          label="Include Numbers"
          onChange={(value) => setValues({ ...values, includeNumbers: value })}
          checked={values.includeNumbers}
        />

        <Checkbox
          label="Include Symbols"
          onChange={(value) => setValues({ ...values, includeSymbols: value })}
          checked={values.includeSymbols}
        />
      </div>

      <StrengthStatus status={values.strengthStatus} />

      <Button onClick={() => console.log("Clicked")}>Generate</Button>
    </form>
  );
};
