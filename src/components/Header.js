import { Link } from "react-router-dom";
import APP_DATA from "../AppData";

export default function Header() {
    return (
        <header>
            <Link className="header flex-middle" to="/">
                <div className="app-name">{APP_DATA.APP_NAME}</div>
                <div className="app-version">{APP_DATA.VERSION}</div>
            </Link>
        </header>
    );
}
