const Footer = () => {
  return ( 
    <footer className='bg-main-light py-4 mt-auto'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between px-4'>
        <div className='mb-4 md:mb-0'>
          <img src='/images/logo.png' alt='Logo' className='h-8 w-auto' />
        </div>
        <div
          className='flex flex-wrap justify-center md:justify-start mb-4 md:mb-0'
        >
          <ul className='flex space-x-4'>
            <li><a href='#'>Properties</a></li>
            <li><a href='#'>Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <p className='text-sm text-grey-1 mt-2 md:mt-0'>
            <span className='logo'>Longhouse </span>
            &copy; 2026. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
 
export default Footer