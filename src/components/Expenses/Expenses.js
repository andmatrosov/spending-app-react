import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ items }) => {
	const [filteredYear, setFilteredYear] = useState('2023');

	const filterChangeHandler = selectedYear => {
		setFilteredYear(selectedYear)
	}

	const expensesItems = items.map((item, indx) => { return <ExpenseItem title={item.title} id={item.id} amount={item.amount} date={item.date} key={indx.toString()} /> })
	return (
		<Card className='expenses'>
			<ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
			{expensesItems}
		</Card>

	)
}

export default Expenses;