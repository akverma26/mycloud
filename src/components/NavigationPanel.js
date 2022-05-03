import { Link } from "react-router-dom";

import ROUTES from "./../Routes";

export default function NavigationPanel() {
    const buttons = ROUTES.HOME_BUTTONS;
    return (
        <div className="navigation-panel">
            {buttons.map((button, index) => (
                <Link className="button" key={index} to={button.path}>
                    {button.name}
                </Link>
            ))}
        </div>
    );
}
