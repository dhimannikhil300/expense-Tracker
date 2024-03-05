import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/Icons';


function Form() {
    const {addIncome, error, setError} = useGlobalContext()
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
        addIncome(inputState)
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
    }

    return (
        <div onSubmit={handleSubmit}  className='flex flex-col gap-[2rem] '>
            {error && <p className='error'>{error}</p>}
            <div className="w-full">
                <input 
                    className='w-full outline-none opacity-70 hover:opacity-100 border-none rounded-md py-[0.5rem] px-[1rem] border-2 border-[#fff] bg-transparent  resize-none shadow-sm placeholder:text-[#222233]'
                    type="text" 
                    value={title}
                    name={'title'} 
                    placeholder="Salary Title"
                    onChange={handleInput('title')}
                />
            </div>
            <div className="w-full">
                <input value={amount}  
                    className='w-full outline-none opacity-70 hover:opacity-100 border-none rounded-md py-[0.5rem] px-[1rem] border-2 border-[#fff] bg-transparent  resize-none shadow-sm placeholder:text-[#222233]'
                    type="text" 
                    name={'amount'} 
                    placeholder={'Salary Amount'}
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
                    className='outline-none opacity-70 hover:opacity-100 border-none rounded-md py-[0.5rem] px-[1rem] border-2 border-[#fff] bg-transparent  resize-none shadow-sm placeholder:text-[#222233]'
                >
                    <option value=""  disabled >Select Option</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Investiments</option>
                    <option value="stocks">Stocks</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="bank">Bank Transfer</option>  
                    <option value="youtube">Youtube</option>  
                    <option value="other">Other</option>  
                </select>
            </div>
            <div className="w-full">
                <textarea name="description" value={description} placeholder='Add A Reference' id="description" cols="30" rows="4" onChange={handleInput('description')}
                    className='w-full outline-none opacity-70 hover:opacity-100 border-none rounded-md py-[0.5rem] px-[1rem] border-2 border-[#fff] bg-transparent  resize-none shadow-sm placeholder:text-[#222233]'
                ></textarea>
            </div>
            <div className="submit-btn" onClick={handleSubmit}>
                <Button 
                    name={'Add Income'}
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

export default Form