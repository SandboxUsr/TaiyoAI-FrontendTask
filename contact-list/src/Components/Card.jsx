import React from 'react'

export default function Card() {
  return <div className='ml-10'>
    <div className='h-20 w-52 border border-black pl-3'>
      <div>Name: John Doe</div>
      <div>Status: Active</div>
    </div>
    <div><button className='border border-black box-border rounded-md ml-16 mt-4 bg-green-400 font-bold pl-6 pr-6 text-white'>Edit</button></div>
    <div><button className='border border-black box-border rounded-md ml-14 mt-4 bg-red-400 font-bold pl-6 pr-6 text-white'>Delete</button></div>
    </div>
}
