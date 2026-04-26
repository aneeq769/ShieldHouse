import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f4ee50",
    },
    secondary: {
      main: "#ff8a3d",
    },
    background: {
      default: "#050505",
      paper: "#111216",
    },
    text: {
      primary: "#f5f7ff",
      secondary: "#aeb6d2",
    },
  },
  typography: {
    fontFamily: '"Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background:
            "linear-gradient(160deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
          border: "1px solid rgba(0,184,255,0.36)",
          boxShadow:
            "0 18px 45px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.08)",
          backdropFilter: "blur(8px)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background:
            "linear-gradient(160deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
          border: "1px solid rgba(0,184,255,0.36)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          boxShadow: "0 10px 24px rgba(0,184,255,0.35)",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #111216 inset",
            WebkitTextFillColor: "#f5f7ff",
            caretColor: "#f5f7ff",
          },
        },
      },
    },
  },
});

export default theme;
