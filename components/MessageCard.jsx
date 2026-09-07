const MessageCard = ({message}) => {
  return (  
    <div className='relative bg-light p-4 rounded shadow border border-grey-4'>
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
        className='mt-4 uppercase bg-main hover:bg-main-dark text-light px-3 py-1 rounded text-center hover-transition'
      >
        Mark As Read
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