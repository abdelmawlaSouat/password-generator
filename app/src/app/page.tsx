"use client";

import styles from "./page.module.scss";
import { Typography } from "@/components/typography";
import { useState } from "react";
import { PasswordStrengthStatus } from "@/components/strengthStatus";
import { TextField } from "@/components/textField";
import { PasswordGeneratorForm } from "@/components/passwordGeneratorForm";
import { DEFAULT_CHARACTER_LENGTH } from "@/constants";

export default function Home() {
  const [password, setPassword] = useState("");
  const [state, setState] = useState({
    characterLength: DEFAULT_CHARACTER_LENGTH,
    includeUppercaseLetters: false,
    includeLowercaseLetters: false,
    includeNumbers: false,
    includeSymbols: false,
    strengthStatus: PasswordStrengthStatus.TOO_WEAK,
  });

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <Typography variant="h2" tag="h1" className={styles.title}>
          Password Generator
        </Typography>

        <TextField value={password} />

        <PasswordGeneratorForm values={state} setValues={setState} />
      </div>
    </main>
  );
}
