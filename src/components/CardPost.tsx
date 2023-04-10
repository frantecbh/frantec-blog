import React from 'react'

export interface PostProps {
  id: String,
  title: String,
  post: []
}[]

export const CardPost = () => {
  return (
    <div className='bg-Post w-full min-h-64 rounded-md px-8 py-8 border border-Border'>
    <div className='flex justify-between mb-5'>
      <h1 className='text-xl text-Title font-Nunito'>JavaScript data types and data structures</h1>
      <span className='font-Nunito text-Span text-xs'>Há 1 dia</span>
    </div>
    <p className='mb-6 text-Text'>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.</p>


  </div>
  )
}
