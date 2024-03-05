import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context/globalContext';
import IncomeItem from '../IncomeItem/IncomeItem';
import ExpenseForm from './ExpenseForm';

function Expenses() {
    const {expenses, getExpenses, deleteExpense, totalExpenses} = useGlobalContext()

    useEffect(() =>{
        getExpenses()
    }, [])
    return (
        <div className='flex overflow-auto'>
            <div className='py-[2rem] px-[1.5rem] w-full'>
                <h1>Expenses</h1>
                <h2 className="flex justify-center items-center bg-[#fcf6f9] border-2 border-[#fff] shadow-sm rounded-[20px] p-[1rem] my-[1rem] text-[2rem] gap-[0.5rem]">Total Expense: <span>${totalExpenses()}</span></h2>
                <div className="flex gap-[2rem]">
                    <div>
                        <ExpenseForm />
                    </div>
                    <div className="flex-1">
                        {expenses.map((income) => {
                            const {_id, title, amount, date, category, description, type} = income;
                            console.log(income)
                            return <IncomeItem
                                key={_id}
                                id={_id} 
                                title={title} 
                                description={description} 
                                amount={amount} 
                                date={date} 
                                type={type}
                                category={category} 
                                indicatorColor="color-green"
                                deleteItem={deleteExpense}
                            />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Expenses