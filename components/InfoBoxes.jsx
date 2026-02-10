import Link from 'next/link'

const InfoBoxes = () => {
  return ( 
    <section>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-sm'>
          <div className='bg-grey-4 p-6 rounded-sm shadow-sm'>
            <h2 className='text-2xl font-medium'>For Renters</h2>
            <p className='mt-2 mb-4'>
              Find your dream rental property. Bookmark properties and contact
              owners.
            </p>
            <Link
              href='/properties'
              className='inline-block bg-dark text-light font-medium rounded-sm px-4 py-2 hover:bg-dark-hover uppercase hover-transition'
            >
              Browse Properties
            </Link>
          </div>
          <div className='bg-main-light p-6 rounded-sm shadow-sm'>
            <h2 className='text-2xl font-medium'>For Property Owners</h2>
            <p className='mt-2 mb-4'>
              List your properties and reach potential tenants. Rent as an
              airbnb or long term.
            </p>
            <Link
              href='/properties/add'
              className='inline-block bg-main text-light font-medium rounded-sm px-4 py-2 hover:bg-main-dark uppercase hover-transition'
            >
              Add Property
            </Link>
          </div>
        </div>
      </div>
    </section>

  )
}
 
export default InfoBoxes