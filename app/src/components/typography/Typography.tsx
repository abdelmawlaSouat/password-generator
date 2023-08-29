import classNames from "classnames";
import { JetBrains_Mono } from "next/font/google";
import { FC, ReactNode } from "react";
import styles from "./Typography.module.scss";

export interface TypographyProps {
  children: ReactNode;
  variant: "h1" | "h2" | "body";
  tag?: "h1" | "h2" | "p" | "span" | "div";
  className?: string;
}

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const Typography: FC<TypographyProps> = ({
  children,
  className,
  variant,
  tag: Tag = "p",
}) => {
  return (
    <Tag
      className={classNames(
        styles[variant],
        jetBrainsMono.className,
        className
      )}
    >
      {children}
    </Tag>
  );
};
