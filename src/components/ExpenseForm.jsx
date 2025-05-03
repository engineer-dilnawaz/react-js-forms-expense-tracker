import { useState } from "react";

export default function ExpenseForm({ setExpenses }) {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  // const titleRef = useRef(null);
  // const categoryRef = useRef(null);
  // const amountRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    // const data = getFormData(e.target);
    // setExpenses((prev) => [...prev, data]);
    // e.target.reset();

    setExpenses((prev) => [
      ...prev,
      { ...expense, amount: +expense.amount, id: crypto.randomUUID() },
    ]);
    setExpense({
      title: "",
      category: "",
      amount: "",
    });

    // const expense = {
    //   title: titleRef.current.value,
    //   category: categoryRef.current.value,
    //   amount: +amountRef.current.value,
    //   id: crypto.randomUUID(),
    // };

    // setExpenses((prev) => [...prev, expense]);
  }

  // function getFormData(form) {
  //   const formData = new FormData(form);
  //   const data = {
  //     id: crypto.randomUUID(),
  //   };
  //   for (const [key, value] of formData.entries()) {
  //     data[key] = value;
  //   }
  //   return data;
  // }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={expense.title}
          onChange={(e) =>
            setExpense((prev) => ({ ...prev, title: e.target.value }))
          }
          // ref={titleRef}
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={expense.category}
          onChange={(e) =>
            setExpense((prev) => ({ ...prev, category: e.target.value }))
          }
          // ref={categoryRef}
        >
          <option hidden>Select Category</option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          name="amount"
          value={expense.amount}
          onChange={(e) =>
            setExpense((prev) => ({ ...prev, amount: e.target.value }))
          }
          // ref={amountRef}
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
