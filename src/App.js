import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import ROUTES from "./Routes";
import Header from "./components/Header";

export default function App() {
    const navigationButtons = ROUTES.ROUTES;
    return (
        <Fragment>
            <Header></Header>
            <div className="main-body-container main-body-padding">
                <Routes>
                    {navigationButtons.map((button, index) => {
                        return (
                            <Route
                                path={button.path}
                                key={index}
                                element={button.element}
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Fragment>
    );
}
