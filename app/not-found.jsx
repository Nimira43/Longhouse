import Link from 'next/link'
import { TbError404 } from 'react-icons/tb'

const NotFoundPage = () => {
  return (  
    <section className='bg-main-light min-h-screen flex-grow'>
      <div className='container m-auto max-w-2xl py-24'>
        <div
          className='bg-light px-6 py-24 mb-4 shadow-md rounded-md border m-4 md:m-0'
        >
          <div className='flex justify-center'>
            <TbError404 className='fas fa-exclamation-triangle fa-5x text-8xl text-dark' />
          </div>
          <div className='text-center'>
            <h1 className='text-3xl font-medium mt-4 mb-2'>Page Not Found</h1>
            <p className='text-grey-1 text-xl mb-10'>
              We cannot find the page you are looking for.
            </p>
            <Link
              href='/'
              className='bg-main hover:bg-main-dark text-light font-medium py-4 px-6 rounded uppercase hover-transition'
            >
              Home
            </Link>
          </div>
        </div>
      </div>
      <div className='flex-grow'></div>
    </section>
  )
}
 
export default NotFoundPage