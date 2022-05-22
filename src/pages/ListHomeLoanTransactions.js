import { useEffect, useState } from "react";

import ListView from "../components/ListView";
import fetchForServer from "./../static/js/backendConnection";

export default function ListHomeLoanTransactionsPage(props) {
    const [transactions, setTransactions] = useState([]);
    const [listViewExtraData, setListViewExtraData] = useState({});
    const header = {
        title: "Home Loan Transactions",
        extra: <ListViewExtra data={listViewExtraData} />,
    };
    useEffect(() => {
        fetchForServer("/private/home-loan-transactions/")
            .then((res) => res.json())
            .then((res) => {
                setListViewExtraData({
                    ...setListViewExtraData,
                    total: res.data.data.total,
                });
                res = res.data.data.transactions;
                res = res.map((transaction) => {
                    return {
                        serial: {
                            _1: transaction.date.split(", ")[0].split(" ")[0],
                            _2: transaction.date.split(", ")[0].split(" ")[1],
                        },
                        description: {
                            title: transaction.to,
                            description: transaction.description,
                        },
                        extra: {
                            _1: "",
                            _2: transaction.amount,
                        },
                    };
                });
                setTransactions(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return <ListView listElements={transactions} header={header}></ListView>;
}

function ListViewExtra(props) {
    return (
        <div className="total">
            <span>Total: </span>
            <span>{props.data.total}</span>
        </div>
    );
}
