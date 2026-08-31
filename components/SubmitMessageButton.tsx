import { BsSend } from 'react-icons/bs'
import { useFormStatus } from 'react-dom'

const SubmitMessageButton = () => {
  const { pending } = useFormStatus()
  
  return (  
    <button
      className='message-btn w-full flex items-center justify-center'
      type='submit'
      disabled={pending}
      >
      <BsSend className='mr-2' /> {
        pending ? 'Sending...' : 'Send Message' 
      }
    </button>
  )
}
 
export default SubmitMessageButton