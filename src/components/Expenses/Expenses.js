import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../ui/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2020');
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	let expensesContent = <p>No expenses found.</p>;

	if (filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.map((expense) => (
			<ExpenseItem
				key={expense.id}
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
			/>
		));
	}

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				{expensesContent}
				{/* using ternary operator
				{filteredExpenses.length === 0 ? (
					<p>No expenses found.</p>
				) : (
					filteredExpenses.map((expense) => (
						<ExpenseItem
							key={expense.id}
							title={expense.title}
							amount={expense.amount}
							date={expense.date}
						/>
					))
					)}*/}
				{/* && approach, it checks the first part of the && statement and if it's true, it returns the second part
				{filteredExpenses.length === 0 && <p>No expenses found.</p>}
				{filteredExpenses.length > 0 &&
					filteredExpenses.map((expense) => (
						<ExpenseItem
							key={expense.id}
							title={expense.title}
							amount={expense.amount}
							date={expense.date}
						/>
					))}
				*/}
			</Card>
		</div>
	);
};

export default Expenses;
