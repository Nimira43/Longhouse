import { BsSend } from 'react-icons/bs'

const PropertyContactForm = ({property}) => {
  return (  
    <div className='bg-light p-6 rounded-lg shadow-lg'>
      <h3 className='text-xl font-medium mb-6'>
        Contact Property Manager
      </h3>
      <form>
        <div className='mb-4'>
          <label
            className='block text-grey-1 font-medium mb-2'
            htmlFor='name'
          >
            Name:
          </label>
          <input
            className='property-contact-form-input'
            id='name'
            name='name'
            type='text'
            placeholder='Enter your name'
            required
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-grey-1 font-medium mb-2'
            htmlFor='email'
          >
            Email:
          </label>
          <input
            className='property-contact-form-input'
            id='email'
            name='email'
            type='email'
            placeholder='Enter your email'
            required
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-grey-1 font-medium mb-2'
            htmlFor='phone'
          >
            Phone:
          </label>
          <input
            className='property-contact-form-input'
            id='phone'
            name='phone'
            type='text'
            placeholder='Enter your phone number'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-grey-1 font-medium mb-2'
            htmlFor='message'
          >
            Message:
          </label>
          <textarea
            className='property-contact-form-input'
            id='message'
            name='message'
            placeholder='Enter your message'
          ></textarea>
        </div>
        <div>
          <button
            className='message-btn w-full flex items-center justify-center'
            type='submit'
          >
            <BsSend className='mr-2' /> Send Message
          </button>
        </div>
      </form>
    </div>
  )
}
 
export default PropertyContactForm