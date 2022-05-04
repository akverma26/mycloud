import { Link } from "react-router-dom";

import APP_DATA from "../AppData";
import ROUTES from "./../Routes";

export default function Header() {
    const homePath = ROUTES.ROUTES.filter((r) => r.name === "home")[0].path;
    return (
        <header>
            <Link className="header flex-middle" to={homePath}>
                <div className="app-name">{APP_DATA.APP_NAME}</div>
                <div className="app-version">{APP_DATA.VERSION}</div>
            </Link>
        </header>
    );
}
