import { Link } from "react-router-dom";

export default function NavigationSection(props) {
    return (
        <div className="section-wrapper">
            <div className="header">{props.section.text}</div>
            <div className="buttons-wrapper">
                {props.section.links.map((link, index) => {
                    return (
                        <Link className="button" to={link.path} key={index}>
                            <div className="icon">
                                <img src={link.icon.src} alt={link.icon.alt} />
                            </div>
                            <div className="text">{link.text}</div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
