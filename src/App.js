import { Fragment } from "react";
import { useLocation } from "react-router-dom";

import ROUTES from "./Routes";
import Header from "./components/Header";

export default function App() {
    let page = useLocation();
    page = page.pathname + page.hash;
    const getReactElement = () => {
        if (page.includes("/#")) {
            return ROUTES.ROUTES.filter((r) => r.path === page)[0].element;
        } else {
            return ROUTES.ROUTING;
        }
    };
    return (
        <Fragment>
            <Header></Header>
            <div className="main-body-container main-body-padding">
                {getReactElement()}
            </div>
        </Fragment>
    );
}
