"use client";

import { Checkbox } from "@/components/checkbox";
import styles from "./page.module.scss";
import { Slider } from "@/components/slider";
import { Typography } from "@/components/typography";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState(10);
  const [checked, setChecked] = useState(false);

  return (
    <main className={styles.main}>
      <Typography variant="h1" tag="h1">
        Welcome to Next.js!
      </Typography>

      <Typography variant="h2" tag="h2">
        Get started by editing
      </Typography>

      <Typography variant="body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos
        voluptatibus. Quisquam, quos voluptatibus. Quisquam, quos voluptatibus.
      </Typography>

      <Slider
        id="characters-length"
        label="Character Length"
        min={1}
        max={25}
        onChange={(value) => {
          setValue(value[0]);
        }}
        value={value}
      />

      <Typography variant="body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos
        voluptatibus. Quisquam, quos voluptatibus. Quisquam, quos voluptatibus.
      </Typography>

      <Checkbox
        id="checkbox-1"
        label="Checkbox 1"
        onChange={setChecked}
        checked={checked}
      />
    </main>
  );
}
