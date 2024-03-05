import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';

function Income() {
    const {incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext()

    useEffect(() =>{
        getIncomes()
    }, [])
    return (
        <div className='flex overflow-auto'>
            <div className='py-[2rem] px-[1.5rem] w-full'>
                <h1>Incomes</h1>
                <h2 className="flex justify-center items-center bg-[#fcf6f9] border-2 border-[#fff] shadow-sm rounded-[20px] p-[1rem] my-[1rem] text-[2rem] gap-[0.5rem]">Total Income: <span>${totalIncome()}</span></h2>
                <div className="flex gap-[2rem]">
                    <div>
                        <Form />
                    </div>
                    <div className="flex-1">
                        {incomes.map((income) => {
                            const {_id, title, amount, date, category, description, type} = income;
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
                                deleteItem={deleteIncome}
                            />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Income