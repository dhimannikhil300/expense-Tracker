import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/Icons';


function ExpenseForm() {
    const {addExpense, error, setError} = useGlobalContext()
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const { title, amount, date, category,description } = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
        setError('')
    }

    const handleSubmit = e => {
        e.preventDefault()
        addExpense(inputState)
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
    }

    return (
        <div onSubmit={handleSubmit} className='flex flex-col gap-[2rem] '>
            {error && <p className='error'>{error}</p>}
            <div className="w-full">
                <input 
                    className='w-full outline-none opacity-70 hover:opacity-100 border-none rounded-md py-[0.5rem] px-[1rem] border-2 border-[#fff] bg-transparent  resize-none shadow-sm placeholder:text-[#222233]'
                    type="text" 
                    value={title}
                    name={'title'} 
                    placeholder="Expense Title"
                    onChange={handleInput('title')}
                />
            </div>
            <div className="w-full">
                <input value={amount}  
                    className='w-full outline-none opacity-70 hover:opacity-100 border-none rounded-md py-[0.5rem] px-[1rem] border-2 border-[#fff] bg-transparent  resize-none shadow-sm placeholder:text-[#222233]'
                    type="text" 
                    name={'amount'} 
                    placeholder={'Expense Amount'}
                    onChange={handleInput('amount')} 
                />
            </div>
            <div className="w-full">
                <DatePicker 
                    className='w-full outline-none opacity-70 hover:opacity-100 border-none rounded-md py-[0.5rem] px-[1rem] border-2 border-[#fff] bg-transparent  resize-none shadow-sm placeholder:text-[#222233]'
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                        setInputState({...inputState, date: date})
                    }}
                />
            </div>
            <div className="flex justify-end w-full focus:text-[#222233] hover:text[#222233]">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}
                    className=' outline-none opacity-70 hover:opacity-100 border-none rounded-md py-[0.5rem] px-[1rem] border-2 border-[#fff] bg-transparent  resize-none shadow-sm placeholder:text-[#222233] flex justify-end'
                >
                    <option value="" disabled >Select Option</option>
                    <option value="education">Education</option>
                    <option value="groceries">Groceries</option>
                    <option value="health">Health</option>
                    <option value="subscriptions">Subscriptions</option>
                    <option value="takeaways">Takeaways</option>
                    <option value="clothing">Clothing</option>  
                    <option value="travelling">Travelling</option>  
                    <option value="other">Other</option>  
                </select>
            </div>
            <div className="w-full">
                <textarea name="description" value={description} placeholder='Add A Reference' id="description" cols="30" rows="4" onChange={handleInput('description')}
                    className='outline-none opacity-70 hover:opacity-100 border-none rounded-md py-[0.5rem] px-[1rem] border-2 border-[#fff] bg-transparent  resize-none shadow-sm placeholder:text-[#222233]'
                ></textarea>
            </div>
            <div className="shadow-sm" onClick={handleSubmit}>
                <Button 
                    name={'Add Expense'}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'color-accent'}
                    color={'#fff'}
                />
            </div>
        </div>
    )
}

export default ExpenseForm