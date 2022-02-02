import React from "react";
import { Router, Route } from "react-router-dom";
import { Container } from "reactstrap";

import Loading from "./components/loading";
import NavBar from "./components/nav-bar";
import Footer from "./components/footer";
import Home from "./views/home";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";

// styles
import "./app.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (

    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Route path="/" exact component={Home} />
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
