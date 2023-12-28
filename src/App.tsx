import { ThemeProvider } from "styled-components";
import { HashRouter } from "react-router-dom";
import Router from "./Router";
import { OrderContextProvider } from "./contexts/OrderContext";
import GlobalStyle from "./styles/global";
import defaultTheme from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HashRouter>
        <OrderContextProvider>
          <Router />
        </OrderContextProvider>
      </HashRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
