import { useEffect, useState } from "react";

import fetchForServer from "./../static/js/backendConnection";

export default function AddHomeLoanTransactionsPage() {
    const submitForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        fetchForServer("/private/home-loan-transactions/", {
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
    return (
        <div id="form">
            <form
                action=""
                method="post"
                autoComplete="off"
                onSubmit={submitForm}
            >
                <input type="hidden" name="csrfmiddlewaretoken" value="" />
                <p>
                    <label htmlFor="id_date">Date:</label>
                    <input
                        type="datetime-local"
                        name="date"
                        required
                        id="id_date"
                    />
                </p>

                <p>
                    <label htmlFor="id_amount">Amount:</label>
                    <input
                        type="number"
                        name="amount"
                        step="any"
                        required
                        id="id_amount"
                    />
                </p>

                <p>
                    <label htmlFor="id_to">To:</label>
                    <input
                        type="text"
                        name="to"
                        maxLength="50"
                        required
                        id="id_to"
                    />
                </p>

                <p>
                    <label htmlFor="id_description">Description:</label>
                    <textarea
                        name="description"
                        cols="40"
                        rows="10"
                        required
                        id="id_description"
                    ></textarea>

                    <input
                        type="hidden"
                        name="id"
                        id="id_id"
                        value={`${Date.now()}`}
                    />
                </p>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
