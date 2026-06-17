const ProfilePage = () => {
  return (
    <section className='bg-main-light'>
      <div className='container m-auto py-24'>
        <div
          className='bg-light px-6 py-8 mb-4 shadow-md rounded border m-4 md:m-0'
        >
          <h1 className='text-3xl font-medium mb-4'>
            Your Profile
          </h1>
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/4 mx-20 mt-10'>
              <div className='mb-4'>
                <img
                  className='h-32 w-32 md:h-48 md:w-48 rounded-full mx-auto md:mx-0'
                  src='#'
                  alt='User'
                />
              </div>

              <h2 className='text-2xl mb-4'>
                <span className='font-medium block'>Name: </span> John Doe
              </h2>
              <h2 className='text-2xl'>
                <span className='font-medium block'>Email: </span> john@gmail.com
              </h2>
            </div>

            <div className='md:w-3/4 md:pl-4'>
              <h2 className='text-xl font-medium mb-4'>
                Your Listings
              </h2>
              <div className='mb-10'>
                <a href='/property.html'>
                  <img
                    className='h-32 w-full rounded object-cover'
                    src='#'
                    alt='Property 1'
                  />
                </a>
                <div className='mt-2'>
                  <p className='text-lg font-medium'>
                    Property Title 1
                  </p>
                  <p className='text-dark'>
                    Address: 123 Main St
                  </p>
                </div>
                <div className='mt-2'>
                  <a
                    href='/add-property.html'
                    className='main-profile-btn mr-2'
                  >
                    Edit
                  </a>
                  <button
                    className='dark-profile-btn'
                    type='button'
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className='mb-10'>
                <a href='#'>
                  <img
                    className='h-32 w-full rounded object-cover'
                    src='#'
                    alt='Property 2'
                  />
                </a>
                <div className='mt-2'>
                  <p className='text-lg font-medium'>
                    Property Title 2
                  </p>
                  <p className='text-dark'>
                    Address: 456 Elm St
                  </p>
                </div>
                <div className='mt-2'>
                  <a
                    href='#'
                    className='main-profile-btn mr-2'
                  >
                    Edit
                  </a>
                  <button
                    className='dark-profile-btn'
                    type='button'
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
 
export default ProfilePage