export default function ListView(props) {
    return (
        <div className="list-view-wrapper">
            <div className="list-view-header">
                <div className="title">{props.header.title}</div>
                <div className="extra">{props.header.extra}</div>
            </div>
            {props.listElements.map((element, index) => {
                return (
                    <div className="list-element-wrapper" key={index}>
                        <div className="serial">
                            <div>{element.serial._1}</div>
                            <div>{element.serial._2}</div>
                        </div>
                        <div className="description-wrapper">
                            <div className="title">
                                {element.description.title}
                            </div>
                            <div className="description">
                                {element.description.description}
                            </div>
                        </div>
                        <div className="extra-wrapper">
                            <div className="title">{element.extra._1}</div>
                            <div className="extra">{element.extra._2}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
