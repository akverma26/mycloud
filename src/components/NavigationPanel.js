import { Link } from "react-router-dom";

import ROUTES from "./../Routes";
import NavigationSection from "./NavigationSection";

export default function NavigationPanel() {
    const buttons = ROUTES.HOME_BUTTONS;
    const sections = ROUTES.SECTIONS;
    return (
        <div className="navigation-panel">
            {sections.map((section, index) => (
                // <Link className="button" key={index} to={button.path}>
                //     {button.text}
                // </Link>
                <NavigationSection
                    key={index}
                    section={section}
                ></NavigationSection>
            ))}
        </div>
    );
}
