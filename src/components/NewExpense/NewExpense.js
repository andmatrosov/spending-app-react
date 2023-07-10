import React from "react";

import ExpenseForm from "./ExpenseForm";

import './NewExpense.css';

const NewExpense = (props) => {
	const saveExpenseDateHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: (Math.random().toString() * 10).toFixed(),
		}

		console.log(expenseData)
		props.onAddExpense(expenseData)
	}

	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={saveExpenseDateHandler} />
		</div>
	)
}

export default NewExpense;