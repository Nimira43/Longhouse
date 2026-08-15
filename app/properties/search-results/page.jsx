import connectDB from '../../../config/database'
import Property from '../../../models/Property'
import { convertToSerialisableObject } from '../../../utils/convertToObject'
import Link from 'next/link'
import PropertyCard from '../../../components/PropertyCard'
import PropertySearchForm from '../../../components/PropertySearchForm'
import { HiChevronLeft } from 'react-icons/hi'

const SearchResults = async ({ searchParams: { location, propertyType } }) => {
  await connectDB()
  const locationPattern = new RegExp(location, 'i')

  let query = {
    $or: [
      { name: locationPattern },
      { desciption: locationPattern },
      { 'location.street': locationPattern },
      { 'location.city': locationPattern },
      { 'location.county': locationPattern },
      { 'location.postcode': locationPattern },
    ]
  }

  if (propertyType && propertyType !== 'All') {
    const typePattern = new RegExp(propertyType, 'i')
    query.type = typePattern
  }

  const propertiesQueryResults = await Property.find(query).lean()
  const properties = convertToSerialisableObject(propertiesQueryResults)
  console.log(properties)

  return (  
    <>
      <section className='bg-dark py-4'>
        <div className='max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8'>
          <PropertySearchForm />
        </div>
      </section>
      <section className='px-4 py-6'>
        <div className='container-xl lg:container m-auto px-4 py-6'>
          <Link
            href='/properties'
            className='properties-page-link'
          >
            <HiChevronLeft />  Go Back to Properties
          </Link>
          <h1 className='text-2xl my-4'>
            Search Results
          </h1>
          {properties.length === 0 ? (
            <p>
              No properties matched your search critrea
            </p>
          ): (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {properties.map((property) => (
                <PropertyCard
                  key={property._id}
                  property={property}
                />
              ))}                
            </div>  
          )}
        </div>
      </section>
    </>
  )
}
 
export default SearchResults