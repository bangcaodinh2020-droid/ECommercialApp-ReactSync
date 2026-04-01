import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import {columns, columns2, rows, rows2, actions, actions2, AddRow, AddCard} from "./components/mockData";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#c6cdd3',
    }

  },
  }
);

ReactDOM.createRoot(document.getElementById("app")!).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
    <App id="appLayout" data={{ syncData:{
                      mode:"production",
                       menu:{master:"Ladies", nav:"New", category:"", isShowCategory:false},
                       cardsData:{rows:AddCard(50), columns: [], actions:[], currentMobileIndex:0},
                      
                      }}}/>
    </ThemeProvider>
  </BrowserRouter>
);