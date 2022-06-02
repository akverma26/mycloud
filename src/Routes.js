import { Routes, Route } from "react-router-dom";

import NavigationPanel from "./components/NavigationPanel";
import AddNewExpensesPage from "./pages/AddNewExpenses";
import ListDailyExpensesPage from "./pages/ListDailyExpenses";
import AddHomeLoanTransactionsPage from "./pages/AddHomeLoanTransactions";
import ListHomeLoanTransactionsPage from "./pages/ListHomeLoanTransactions";
import addButtonIcon from "./static/images/add-button.png";
import listIcon from "./static/images/list.png";

const PREFIX = "/mycloud";

const dailyExpensesSection = [
    {
        path: PREFIX + "/#daily-expenses/add-new",
        element: <AddNewExpensesPage />,
        text: "Add New Expense",
        name: "add-new-expenses",
        section: "daily-expenses",
        icon: {
            src: addButtonIcon,
            alt: "add",
        },
    },
    {
        path: PREFIX + "/#daily-expenses/list",
        element: <ListDailyExpensesPage />,
        text: "List All Expenses",
        name: "list-expenses",
        section: "daily-expenses",
        icon: {
            src: listIcon,
            alt: "list",
        },
    },
];

const homeLoanSection = [
    {
        path: PREFIX + "/#home-loan/add-new",
        element: <AddHomeLoanTransactionsPage />,
        text: "Add New Transaction",
        name: "add-home-loan-transactions",
        section: "home-loan",
        icon: {
            src: addButtonIcon,
            alt: "add",
        },
    },

    {
        path: PREFIX + "/#home-loan/list",
        element: <ListHomeLoanTransactionsPage />,
        text: "List All Transactions",
        name: "list-transactions",
        section: "home-loan",
        icon: {
            src: listIcon,
            alt: "list",
        },
    },
];

const _ROUTES = [
    ...dailyExpensesSection,
    ...homeLoanSection,
    {
        path: PREFIX + "/",
        element: <NavigationPanel />,
        text: "Home",
        name: "home",
    },
];

const ROUTING = (
    <Routes>
        {_ROUTES.map((button, index) => {
            return (
                <Route
                    path={button.path}
                    key={index}
                    element={button.element}
                ></Route>
            );
        })}
    </Routes>
);

const SECTIONS = [
    {
        name: "daily-expenses",
        text: "Daily Expenses",
        links: _ROUTES.filter((r) => r.section === "daily-expenses"),
    },
    {
        name: "home-loan",
        text: "Home Loan",
        links: _ROUTES.filter((r) => r.section === "home-loan"),
    },
];

const ROUTES = {
    ROUTES: _ROUTES,
    HOME_BUTTONS: _ROUTES.filter((r) => r.name !== "home"),
    ROUTING: ROUTING,
    SECTIONS: SECTIONS,
};

export default ROUTES;
