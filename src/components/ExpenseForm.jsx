import { useState } from "react";

import Input from "./Input";
import Select from "./Select";

const options = ["Grocery", "Clothes", "Bills", "Education", "Medicine"];

const validationConfig = {
  title: [
    { required: true, message: "Title is required" },
    { minLength: 5, message: "Title should be at least 5 characters long" },
    { type: "string", message: "Title should only contain alphabetics" },
  ],
  category: [{ required: true, message: "Category is required" }],
  amount: [
    { required: true, message: "Amount is required" },
    { type: "number", message: "Amount can only be number" },
  ],
};

export default function ExpenseForm({ setExpenses }) {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const [errors, setErrors] = useState({});

  // const titleRef = useRef(null);
  // const categoryRef = useRef(null);
  // const amountRef = useRef(null);

  function validate(formData) {
    const errorsData = {};

    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorsData[key] = rule.message;
          return true;
        }
        if (rule.minLength && value.length < rule.minLength) {
          errorsData[key] = rule.message;
          return true;
        }
        if (rule.type === "number" && isNaN(+value)) {
          errorsData[key] = rule.message;
          return true;
        }
        if (rule.type === "string" && /\d/.test(value)) {
          errorsData[key] = rule.message;
          return true;
        }
      });
    });

    // if (!formData.title) {
    //   errorsData.title = "Title is required";
    // }
    // if (!formData.category) {
    //   errorsData.category = "Category is required";
    // }
    // if (!formData.amount) {
    //   errorsData.amount = "Amount is required";
    // }

    setErrors(errorsData);
    return errorsData;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validateResult = validate(expense);
    if (Object.keys(validateResult).length) return;

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

  function handleOnChange(e) {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setExpense((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input
        label="Title"
        id="title"
        name="title"
        value={expense.title}
        onChange={handleOnChange}
        error={errors.title}
      />
      <Select
        label="Category"
        id="category"
        value={expense.category}
        onChange={handleOnChange}
        defaultOption="Select Category"
        options={options}
        error={errors.category}
      />
      <Input
        label="Amount"
        id="amount"
        name="amount"
        value={expense.amount}
        onChange={handleOnChange}
        error={errors.amount}
      />
      <button className="add-btn">Add</button>
    </form>
  );
}
