import { ExpenseForm, ExpenseTable } from "./components";
import expenseData from "../expenseData";
import useLocalStorage from "./hooks/useLocalStorage";
import "./App.css";

function App() {
  const [expnenses, setExpenses] = useLocalStorage("expneses", expenseData);

  const [expense, setExpense] = useLocalStorage("expense", {
    title: "",
    category: "",
    amount: "",
  });
  const [editingRowId, setEditingRowId] = useLocalStorage("editingRowId", "");

  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm
          setExpenses={setExpenses}
          expense={expense}
          setExpense={setExpense}
          editingRowId={editingRowId}
          setEditingRowId={setEditingRowId}
        />
        <ExpenseTable
          expnenses={expnenses}
          setExpenses={setExpenses}
          setExpense={setExpense}
          setEditingRowId={setEditingRowId}
        />
      </div>
    </main>
  );
}

export default App;
