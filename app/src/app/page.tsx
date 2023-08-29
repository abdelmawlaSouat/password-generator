import styles from "./page.module.scss";
import { Typography } from "@/components/typography";

export default function Home() {
  return (
    <main className={styles.main}>
      <Typography variant="h1" tag="h1">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </Typography>

      <Typography variant="h2" tag="h2">
        Get started by editing
      </Typography>

      <Typography variant="body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos
        voluptatibus. Quisquam, quos voluptatibus. Quisquam, quos voluptatibus.
      </Typography>
    </main>
  );
}
