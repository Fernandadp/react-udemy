import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
	const [show, setShow] = useState(false);

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};

		props.onAddExpense(expenseData);
		setShow(false);
		console.log(expenseData);
	};

	return (
		<div className='new-expense'>
			{show ? (
				<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
			) : (
				<button onClick={() => setShow(true)}>Add New Expense</button>
			)}
		</div>
	);
};

export default NewExpense;
