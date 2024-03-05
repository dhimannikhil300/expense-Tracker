import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { dollar } from '../../utils/Icons';
import Chart from '../Chart/Chart';

function Dashboard() {
    const {totalExpenses,incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (
        <div >
            <div className='py-[2rem] px-[1.5rem] w-full'>
                <h1>All Transactions</h1>
                <div className='grid grid-cols-5 gap-[2rem]'>
                    <div className="h-[400px] col-start-1 col-end-4">
                        <Chart />
                        <div className="grid grid-cols-4 gap-[2rem] mt-[2rem]">
                            <div className="col-span-2 bg-[#fcf6f9] border-2 border-[#fff] shadow-sm rounded-[20px] p-[1rem]">
                                <h2>Total Income</h2>
                                <p className='text-[3.5rem] fw-bold '>
                                    {dollar} {totalIncome()}
                                </p>
                            </div>
                            <div className="col-span-2 bg-[#fcf6f9] border-2 border-[#fff] shadow-sm rounded-[20px] p-[1rem]">
                                <h2>Total Expense</h2>
                                <p className='text-[3.5rem] fw-bold '>
                                    {dollar} {totalExpenses()}
                                </p>
                            </div>
                            <div className="bg-[#fcf6f9] border-2 border-[#fff] shadow-sm rounded-[20px] p-[1rem] col-start-2 col-end-4 flex-col justify-center items-center">
                                <h2>Total Balance</h2>
                                <p className='text-[3.5rem] fw-bold text-color-green opacity-60 text-[4.5rem]'>
                                    {dollar} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-start-4 col-end-6">
                        <History />
                        <h2 className="my-[1rem] flex items-center justify-between text-[1.2rem]">Min <span>Salary</span>Max</h2>
                        <div className="bg-[#fcf6f9] border-2 border-[#fff] shadow-sm p-[1rem] rounded-[20px] flex justify-between items-center">
                            <p className='font-bold text-[1.6rem]'>
                                ${Math.min(...incomes.map(item => item.amount))}
                            </p>
                            <p className='font-bold text-[1.6rem]'>
                                ${Math.max(...incomes.map(item => item.amount))}
                            </p>
                        </div>
                        <h2 className="my-[1rem] flex items-center justify-between text-[1.2rem]">Min <span>Expense</span>Max</h2>
                        <div className="bg-[#fcf6f9] border-2 border-[#fff] shadow-sm p-[1rem] rounded-[20px] flex justify-between items-center">
                            <p className='font-bold text-[1.6rem]'>
                                ${Math.min(...expenses.map(item => item.amount))}
                            </p>
                            <p className='font-bold text-[1.6rem]'>
                                ${Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard