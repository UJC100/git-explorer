
import "./App.css";
import { Route, Routes, Navigate, useLocation, BrowserRouter } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/navbar";
import React, { useState, lazy, Suspense } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Approutes } from "./routes";



function App() {
  const [username, setUsername] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const location = useLocation()
  return (
    <div className="App">
      <Navbar isLogged={isLogged} />
      <SwitchTransition component={null}>
        <CSSTransition
          key={location.pathname}
          classNames={"fade"}
          timeout={300}
          unmountOnExit
        >
          <Suspense fallback={() => <h1>Loading...</h1>}>
            <Routes  location={location}>

            {Approutes.map((route) => {
              if (route.required && !isLogged) {
                return (
                  <Route key={route.path} exact path={route.path} element={ <Navigate replace to={"/login"}/>} />
               )
              } else {
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={
                      <route.component
                        setIsLogged={setIsLogged}
                        setUsername={setUsername}
                        isLogged={isLogged}
                        username={username}
                      />
                    }
                  />
                );
                
             }
           })}
            </Routes>
          </Suspense>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Root;
