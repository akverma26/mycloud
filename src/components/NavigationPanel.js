import { Link } from "react-router-dom";
import HomeIconImg from "../static/images/network.gif";

import ROUTES from "./../Routes";
import APP_DATA from "../AppData";
import NavigationSection from "./NavigationSection";

export default function NavigationPanel() {
    const buttons = ROUTES.HOME_BUTTONS;
    const sections = ROUTES.SECTIONS;
    return (
        <div className="navigation-panel">
            <div className="home-icon-wrapper">
                <div className="img-wrapper">
                    <img src={HomeIconImg} alt=""></img>
                </div>
                <div className="title">{APP_DATA.APP_NAME}</div>
                <div className="version">{APP_DATA.VERSION}</div>
            </div>
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
