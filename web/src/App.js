import { AuthProvider } from "@redwoodjs/auth";
import { Auth0Client } from "@auth0/auth0-spa-js";
import { RedwoodApolloProvider } from "@redwoodjs/web/apollo";
import { FatalErrorBoundary } from "@redwoodjs/web";
import FatalErrorPage from "src/pages/FatalErrorPage";

import { Provider as ReduxProvider } from "react-redux";
import { store, persistor } from "./ducks";
import { PersistGate } from "redux-persist/integration/react";

import GlobalStyles from "./GlobalStyles";

import Routes from "src/Routes";

const auth0 = new Auth0Client({
  domain: process.env.AUTH0_DOMAIN,
  client_id: process.env.AUTH0_CLIENT_ID,
  redirect_uri: process.env.AUTH0_REDIRECT_URI,
  // ** NOTE ** Storing tokens in browser local storage provides persistence across page refreshes and browser tabs.
  // However, if an attacker can achieve running JavaScript in the SPA using a cross-site scripting (XSS) attack,
  // they can retrieve the tokens stored in local storage.
  // https://auth0.com/docs/libraries/auth0-spa-js#change-storage-options
  cacheLocation: "localstorage",
  audience: process.env.AUTH0_AUDIENCE,
});

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <GlobalStyles />
    <ReduxProvider store={store}>
      <AuthProvider client={auth0} type="auth0">
        <RedwoodApolloProvider>
          <PersistGate loading={null} persistor={persistor}>
            <Routes />
          </PersistGate>
        </RedwoodApolloProvider>
      </AuthProvider>
    </ReduxProvider>
  </FatalErrorBoundary>
);

export default App;
