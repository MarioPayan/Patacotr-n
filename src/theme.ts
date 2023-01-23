import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, "Public Sans", sans-serif',
    allVariants: { color: "black" }
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#ffb300',
    },
    secondary: {
      main: '#5e35b1',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          letterSpacing: 0.8,
          fontSize: 18
        },
      },
    },
  },

})

export default theme