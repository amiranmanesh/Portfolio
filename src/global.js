import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    --surface: ${({ theme }) => theme.surface};
    --surface-strong: ${({ theme }) => theme.surfaceStrong};
    --border-soft: ${({ theme }) => theme.borderColor};
    --shadow-soft: ${({ theme }) => theme.shadowColor};
    --glow-soft: ${({ theme }) => theme.glowColor};
    --accent: ${({ theme }) => theme.accentColor};

    margin: 0;
    min-height: 100vh;
    background:
      radial-gradient(circle at 12% -6%, ${({ theme }) =>
        theme.glowColor}, transparent 42%),
      radial-gradient(circle at 90% 6%, ${({ theme }) =>
        theme.glowColor}, transparent 38%),
      ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "Google Sans Regular", "Montserrat", sans-serif;
    transition: background 0.25s linear, color 0.25s linear;
  }

  #root {
    width: 100%;
  }

  a {
    color: inherit;
  }
`;
