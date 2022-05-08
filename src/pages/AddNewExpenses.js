import { useEffect, useState } from "react";

import fetchForServer from "./../static/js/backendConnection";
import getSuggestionsClickEvent from "./../static/js/getSuggestions";

export default function AddNewExpensesPage() {
    const submitForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        fetchForServer("/private/expenses/", {
            method: "POST",
            headers: {
                "X-CSRFToken": document.querySelector(
                    "[name=csrfmiddlewaretoken]"
                ).value,
            },
            body: formData,
        })
            .then((res) => res.json())
            .then((res) => {
                document.getElementById("form").innerHTML =
                    res.message + " Refresh this page to add new entry.";
            });
    };

    const [csrf, setCSRF] = useState("");

    useEffect(() => {
        getSuggestionsClickEvent("/private/expenses/");
    }, []);

    return (
        <div id="form">
            <form
                action="#"
                method="post"
                autoComplete="off"
                onSubmit={submitForm}
            >
                <input type="hidden" name="csrfmiddlewaretoken" value={csrf} />
                <div>
                    <label htmlFor="id_date">Date:</label>
                    <input
                        type="datetime-local"
                        name="date"
                        required
                        // defaultValue={`${formatDate(
                        //     new Date(),
                        //     "yyyy-MM-dd HH:mm:ss"
                        // ).replace(" ", "T")}`}
                        // id="id_date"
                    />
                </div>

                <div>
                    <label htmlFor="id_amount">Amount:</label>
                    <input
                        type="number"
                        name="amount"
                        step="any"
                        required
                        id="id_amount"
                    />
                </div>

                <div>
                    <label htmlFor="id_description">Description:</label>
                    <textarea
                        name="description"
                        cols="40"
                        rows="10"
                        required
                        id="id_description"
                    ></textarea>
                </div>

                <div>
                    <label htmlFor="id_category">Category:</label>
                    <select
                        name="category"
                        required
                        id="id_category"
                        defaultValue="Essential"
                    >
                        <option value="Essential">Essential</option>

                        <option value="Extra">Extra</option>

                        <option value="Can't Decide">Can't Decide</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="id_tags">Tags:</label>
                    <input type="text" name="tags" required id="id_tags" />
                    <div
                        className="get-suggestions-button"
                        suggestions-for="tags"
                    >
                        Get Suggestions
                    </div>
                </div>

                <div>
                    <label htmlFor="id_behalf">Behalf:</label>
                    <input type="text" name="behalf" required id="id_behalf" />
                    <div
                        className="get-suggestions-button"
                        suggestions-for="behalf"
                    >
                        Get Suggestions
                    </div>

                    <input
                        type="hidden"
                        name="id"
                        required
                        value={`${Date.now()}`}
                        id="id_id"
                    />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
}
