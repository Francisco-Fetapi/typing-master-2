import Header from "./components/Header";
import * as S from "./styles/General";
import { SnackbarProvider } from "notistack";
import Footer from "./components/Footer";
import Layout from "./core/mui";
import store from "./store/App.store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <S.AppContainer>
          <SnackbarProvider maxSnack={3}>
            <Header />
            <Footer />
          </SnackbarProvider>
        </S.AppContainer>
      </Layout>
    </Provider>
  );
}

export default App;
