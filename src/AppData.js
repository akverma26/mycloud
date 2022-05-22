let SERVER_URL = "https://akvcloud.pythonanywhere.com/";
if (process.env.NODE_ENV.includes("dev")) {
    SERVER_URL = "http://127.0.0.1:8000/";
    console.log(
        "Running in development mode and using " +
            SERVER_URL +
            " for backend server."
    );
}

const APP_DATA = {
    APP_NAME: "MyCloud",
    VERSION: "1.0.5-alpha",
    SERVER_URL,
};

export default APP_DATA;
