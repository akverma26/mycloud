import { Routes, Route } from "react-router-dom";

import NavigationPanel from "./components/NavigationPanel";
import AddNewExpensesPage from "./pages/AddNewExpenses";
import AddHomeLoanTransactionsPage from "./pages/AddHomeLoanTransactions";

const PREFIX = "/mycloud";

const _ROUTES = {
    addNewExpense: {
        path: PREFIX + "/#add-new-expenses",
        element: <AddNewExpensesPage />,
        text: "Add New Expenses",
        name: "add-new-expenses",
    },
    addHomeLoanTransactions: {
        path: PREFIX + "/#add-home-loan-transactions",
        element: <AddHomeLoanTransactionsPage />,
        text: "Add Home Loan Transactions",
        name: "add-home-loan-transactions",
    },
    home: {
        path: PREFIX + "/",
        element: <NavigationPanel />,
        text: "Home",
        name: "home",
    },
};

const ROUTING = (
    <Routes>
        {Object.values(_ROUTES).map((button, index) => {
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

const ROUTES = {
    ROUTES: Object.values(_ROUTES),
    HOME_BUTTONS: Object.values(_ROUTES).filter((r) => r.name !== "home"),
    ROUTING: ROUTING,
};

export default ROUTES;
