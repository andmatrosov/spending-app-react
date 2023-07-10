import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'
import { useState } from "react";

const Expenses = ({ items }) => {

	const expensesItems = items.map((item, indx) => { return <ExpenseItem title={item.title} id={item.id} amount={item.amount} date={item.date} key={indx.toString()} /> })
	return (
		<Card className='expenses'>
			{expensesItems}
		</Card>

	)
}

export default Expenses;