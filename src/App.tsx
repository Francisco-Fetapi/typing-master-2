import * as S from "./styles/General";
import { SnackbarProvider } from "notistack";
import Layout from "./core/mui";
import store from "./store/App.store";
import { Provider } from "react-redux";
import Routes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <S.AppContainer>
          <SnackbarProvider maxSnack={3}>
            <Routes />
          </SnackbarProvider>
        </S.AppContainer>
      </Layout>
    </Provider>
  );
}

export default App;
