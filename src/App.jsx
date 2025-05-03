import { useState } from "react";

import { ExpenseForm, ExpenseTable } from "./components";
import expenseData from "../expenseData";
import "./App.css";

function App() {
  const [expnenses, setExpenses] = useState(expenseData);
  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm setExpenses={setExpenses} />
        <ExpenseTable expnenses={expnenses} />
        <div className="context-menu">
          <div>Edit</div>
          <div>Delete</div>
        </div>
      </div>
    </main>
  );
}

export default App;
