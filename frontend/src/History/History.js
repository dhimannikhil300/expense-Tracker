import React from 'react'
import { useGlobalContext } from '../context/globalContext';

function History() {
    const {transactionHistory} = useGlobalContext()

    const [...history] = transactionHistory()

    return (
        <div className="flex flex-col gap-[1rem]">
            <h2>Recent History</h2>
            {history.map((item) =>{
                const {_id, title, amount, type} = item
                return (
                    <div key={_id} className="bg-[#fcf6f9] border-2 border-[#fff] p-[1rem] rounded-[20px] justify-between items-center">
                        <p className={`${type === 'expense'? "text-[#d53c3c]":"text-[#73ea52]"}`}>
                            {title}
                        </p>

                        <p className={`${type === 'expense'? "text-[#ff2020]":"text-[#58ff2a]"}`}>
                            {
                                type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0: amount}`
                            }
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default History