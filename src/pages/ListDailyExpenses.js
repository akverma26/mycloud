import { useEffect, useState } from "react";

import ListView from "../components/ListView";
import fetchForServer from "./../static/js/backendConnection";

export default function ListDailyExpensesPage(props) {
    const [dailyExpenses, setDailyExpenses] = useState([]);
    const [listViewExtraData, setListViewExtraData] = useState({});
    const header = {
        title: "Daily Expenses",
        extra: <ListViewExtra data={listViewExtraData} />,
    };
    useEffect(() => {
        fetchForServer("/private/expenses/")
            .then((res) => res.json())
            .then((res) => {
                setListViewExtraData({
                    ...setListViewExtraData,
                    total: res.data.data.total,
                });
                res = res.data.data.expenses;
                res = res.map((expense) => {
                    return {
                        serial: {
                            _1: expense.date.split(", ")[0].split(" ")[0],
                            _2: expense.date.split(", ")[0].split(" ")[1],
                        },
                        description: {
                            title: expense.tags,
                            description: expense.description,
                        },
                        extra: {
                            _1: "",
                            _2: expense.amount,
                        },
                    };
                });
                setDailyExpenses(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return <ListView listElements={dailyExpenses} header={header}></ListView>;
}

function ListViewExtra(props) {
    return (
        <div className="total">
            <span>Total: </span>
            <span>{props.data.total}</span>
        </div>
    );
}
