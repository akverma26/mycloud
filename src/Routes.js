import NavigationPanel from "./components/NavigationPanel";
import AddNewExpensesPage from "./pages/AddNewExpenses";

const PREFIX = "/mycloud";

const _ROUTES = {
    home: {
        path: PREFIX + "/",
        element: <NavigationPanel />,
        name: "Home",
    },
    addNewExpense: {
        path: PREFIX + "/add-new-expenses",
        element: <AddNewExpensesPage />,
        name: "Add New Expenses",
    },
};

const ROUTES = {
    ROUTES: Object.values(_ROUTES),
    HOME_BUTTONS: Object.values(_ROUTES).slice(1),
};

export default ROUTES;
