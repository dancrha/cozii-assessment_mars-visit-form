// Importing necessary styles and components
import "./App.css";
import LandingPage from "./components/LandingPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "monospace",
      textTransform: "none",
      fontSize: 15,
    },
  },
});

// Main App component
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <LandingPage />
      </ThemeProvider>
    </>
  );
}

// Export the App component
export default App;
