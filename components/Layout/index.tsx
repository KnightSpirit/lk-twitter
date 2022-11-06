import React, { ReactElement } from "react";
import { Container } from "react-bootstrap";
import { useThemeStore } from "state/theme";
import style from "styles/Variebles.module.scss";

export default function Layout({ children }: { children: ReactElement }) {
  const mode = useThemeStore((s) => s.theme);
  return (
    <Container
      fluid="md"
      style={{
        background:
          mode === "normal" ? style.primaryColor : style.primaryBgColor,
        color: mode === "normal" ? style.primaryBgColor : style.primaryColor,
      }}
    >
      {children}
    </Container>
  );
}
