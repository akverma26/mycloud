import fetchForServer from "./backendConnection";

export default function getSuggestionsClickEvent(path) {
    if (!path.endsWith("/")) path = path + "/";
    document
        .querySelectorAll(".get-suggestions-button")
        .forEach((ele, index) => {
            ele.addEventListener("click", (e) => {
                if (e.target.innerText !== "Get Suggestions") return;
                let suggestionsFor = e.target.getAttribute("suggestions-for");

                fetchForServer(
                    path + "?action=get-suggestions&for=" + suggestionsFor,
                    {
                        // cache: "no-cache",
                    }
                )
                    .then((res) => res.json())
                    .then((res) => {
                        let html = res;
                        if (res.data.suggestions) {
                            html = "";
                            res.data.suggestions.map(
                                (s) => (html += `<span>${s}</span>`)
                            );
                        }
                        e.target.innerHTML = html;
                    })
                    .catch((err) => {
                        e.target.innerHTML = err;
                        console.log(err);
                    });
            });
        });
}
