import styles from "./page.module.css";
import { Typography } from "@/components/typography";

export default function Home() {
  return (
    <main className={styles.main}>
      <Typography variant="h1" tag="h1">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </Typography>
    </main>
  );
}
