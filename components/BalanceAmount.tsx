import { formatToDollar } from '@/utils/formatters'
import React from 'react'

const BalanceAmount = ({balanceType, balance}: {balanceType: string, balance: number}) => {
  return (
    <div className='flex flex-col gap-2'>
      <h1 className='text-slate-500 text-xs'>{balanceType}</h1>
      <p className='text-slate-950 text-5xl font-extrabold'>${formatToDollar(balance)}</p>
    </div>
  )
}

export default BalanceAmount
