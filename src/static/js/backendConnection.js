import APP_DATA from "./../../AppData";

const SERVER_URL = APP_DATA.SERVER_URL;

export default function fetchForServer(path, init = {}, relativePath = true) {
    if (relativePath) path = new URL(path, SERVER_URL);
    return fetch(path, init);
}
