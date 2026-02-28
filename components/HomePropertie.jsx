import Link from 'next/link'
import properties from '../properties.json'
import PropertyCard from './PropertyCard'

const HomeProperties = () => {
  const recentProperties = properties.slice(0, 3)

  return (  
    <>
      <section className='px-4 py-6'>
        <div className='container-xl lg:container m-auto px-4 py-6'>
          <h2 className='text-center text-3xl text-dark font-medium mb-6'>
            Recent Properties
          </h2>
          {properties.length === 0
            ? (
              <p>No Properties Found</p>
            )
            : (
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                  recentProperties.map((property) => (
                    <PropertyCard
                      key={property._id}
                      property={property}                  
                    />
                  ))
                }

              </div>            
            )
          }
        </div>
      </section>
      <section className='m-auto max-w-lg my-6 px-6'>
        <Link
          href='/properties'
          className='block text-center text-light bg-dark font-medium rounded-sm px-6 py-4 hover:bg-main-dark uppercase hover-transition'
        >
          View All Properties
        </Link>
      </section>
    </>  
  )
}
 
export default HomeProperties