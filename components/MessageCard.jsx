'use client'

import { useState } from 'react'
import { toast } from 'react-toastify'
import markMessageAsRead from '../app/actions/markMessageAsRead'

const MessageCard = ({ message }) => {
  const [isRead, setIsRead] = useState(message.read)

  const handleReadClick = async () => {
    const read = await markMessageAsRead(message._id)
    setIsRead(read)
    toast.success(`Mark as ${read ? 'read': 'new'}`)
  }
  
  return (  
    <div className='relative bg-light p-4 rounded shadow border border-grey-4'>
      {!isRead && (
        <div className='absolute top-2 right-2 bg-support text-main-dark uppercase font-medium px-2 py-1 rounded'>
          New
        </div>
      )}
      <h2 className='text-xl mb-4'>
        <span className='font-medium'>
          Property Enquiry:
        </span>{' '}
        {message.property.name}
      </h2>
      <p>
        {message.body}
      </p>
      <ul className='mt-4'>
        <li>
          <strong>Senders Email: </strong>{' '}
          <a
            href={`mailto:${message.email}`}
            className='text-main'
          >
            {message.email}
          </a>
        </li>
        <li>
          <strong>Senders Phone: </strong>{' '}
          <a
            href={`tel:${message.phone}`}
            className='text-main'
          >
            {message.phone}
          </a>
        </li>
        <li>
          <strong>Date Received: </strong>{' '}
          <a
            href={`mailto:${message.email}`}
            className='text-main'
          >
            {new Date(message.createdAt).toLocaleString()}
          </a>
        </li>
      </ul>
      <button
        onClick={handleReadClick}
        className='mt-4 uppercase bg-main hover:bg-main-dark text-light px-3 py-1 rounded text-center hover-transition'
      >
        {isRead ? 'Mark As New' : 'Mark As Read'}
      </button>
      <button
        className='mt-4 ml-3 uppercase bg-dark hover:bg-grey-1 text-light px-3 py-1 rounded text-center hover-transition'
      >
        Delete Message
      </button>
    </div>
  )
}
 
export default MessageCard