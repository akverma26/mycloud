export const showLoader = (parentElement = ".main-body-container") => {
    let parentElementPositionStyle =
        document.querySelector(parentElement).style.position;
    if (
        parentElementPositionStyle !== "relative" &&
        parentElementPositionStyle !== "fixed" &&
        parentElementPositionStyle !== "absolute"
    ) {
        document.querySelector(parentElement).style.position = "relative";
        document
            .querySelector(parentElement)
            .setAttribute("initialPositionValue", parentElementPositionStyle);
    }
    document.querySelector(parentElement).innerHTML += `
        <div class="loading-container">
            <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    `;
};

export const hideLoader = (parentElement = ".main-body-container") => {
    document
        .querySelector(parentElement)
        .querySelector(".loading-container")
        .remove();
    document.querySelector(parentElement).style.position = document
        .querySelector(parentElement)
        .getAttribute("initialPositionValue");
};
