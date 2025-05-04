import { useState } from "react";

import { ExpenseForm, ExpenseTable } from "./components";
import expenseData from "../expenseData";
import "./App.css";

function App() {
  const [expnenses, setExpenses] = useState(expenseData);
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });
  const [editingRowId, setEditingRowId] = useState("");

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
