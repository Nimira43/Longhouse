'use client'
import { useActionState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { toast } from 'react-toastify'
import addMessage from '../app/actions/addMessage'
import SubmitMessageButton from './SubmitMessageButton'

const PropertyContactForm = ({property}) => {
  const { data: session } = useSession()
  const [state, formAction] = useActionState(addMessage, {})
  
  useEffect(() => {
    if (state.error) toast.error(state.error)
    if (state.submitted) toast.success('Message sent successfully.')
  }, [state])

  if (state.submitted) {
    return (
      <p>
        You message has been sent.
      </p>
    )
  }

  return (  
    session && (
      <div className='bg-light p-6 rounded-lg shadow-lg'>
        <h3 className='text-xl font-medium mb-6'>
          Contact Property Manager
        </h3>
        <form action={formAction}>
          <input
            type='hidden'
            id='property'
            name='property'
            defaultValue={property._id}
          />
          <input
            type='hidden'
            id='recipient'
            name='recipient'
            defaultValue={property.owner}
          />
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
              htmlFor='body'
              >
              Message:
            </label>
            <textarea
              className='property-contact-form-input'
              id='body'
              name='body'
              placeholder='Enter your message'
              ></textarea>
          </div>
          <div>
            <SubmitMessageButton />
          </div>
        </form>
      </div>
    )
  )
}
 
export default PropertyContactForm