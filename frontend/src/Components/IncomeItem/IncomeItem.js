import React from 'react'
import { dateFormat } from '../../utils/dateFormat';
import { bitcoin, book, calender, card, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv, users, yt } from '../../utils/Icons';
import Button from '../Button/Button';

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) {

    const categoryIcon = () =>{
        switch(category) {
            case 'salary':
                return money;
            case 'freelancing':
                return freelance
            case 'investments':
                return stocks;
            case 'stocks':
                return users;
            case 'bitcoin':
                return bitcoin;
            case 'bank':
                return card;
            case 'youtube':
                return yt;
            case 'other':
                return piggy;
            default:
                return ''
        }
    }

    const expenseCatIcon = () => {
        switch (category) {
            case 'education':
                return book;
            case 'groceries':
                return food;
            case 'health':
                return medical;
            case 'subscriptions':
                return tv;
            case 'takeaways':
                return takeaway;
            case 'clothing':
                return clothing;
            case 'travelling':
                return freelance;
            case 'other':
                return circle;
            default:
                return ''
        }
    }

    console.log('type', type)

    return (
        <div indicator={indicatorColor} className='bg-[#fcf6f9] border-2 border-[#fff] shadow-sm rounded-[20px] p-[1rem] mb-[1rem] flex items-center gap-[1rem] w-full text-[#222260] justify-between'>
            <div className='flex'>
                <div className="w-[80px] h-[80px] bg-[#f5f5f5] flex items-center justify-center border-2 border-[#fff] text-[2.6rem]">
                    {type === 'expense' ? expenseCatIcon() : categoryIcon()}
                </div>
                <div className="text-[1.3rem] pl-[2rem] relative">
                    <h5>{title}</h5>
                    <div className="flex justify-between items-center gap-[1.5rem] w-full">
                        <div className="text">
                            <p className='flex items-center gap-[0.5rem] text-primary-color opacity-80'>{dollar} {amount}</p>
                            <p className='flex items-center gap-[0.5rem] text-primary-color opacity-80'>{calender} {dateFormat(date)}</p>
                            <p className='flex items-center gap-[0.5rem] text-primary-color opacity-80'>
                                {comment}
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rounded-full">
                <Button 
                    icon={trash}
                    bPad={'1rem'}
                    bRad={'50%'}
                    bg={'primary-color'}
                    color={'#fff'}
                    hColor={'color-green'}
                    onClick={() => deleteItem(id)}
                />
            </div>
        </div>
    )
}

export default IncomeItem