import Link from 'next/link'
import PropertyHeaderImage from '../../../components/PropertyHeaderImage'
import PropertyDetails from '../../../components/PropertiesDetails'
import PropertyImages from '../../../components/PropertyImages'
import connectDB from '../../../config/database'
import Property from '../../../models/Property'
import { HiChevronLeft } from 'react-icons/hi'
import { convertToSerialisableObject } from '../../../utils/convertToObject'

const PropertyPage = async ({ params }) => {
  // Temporary code below bring back if lines 16, 17 and 18 give issues
  
  // await connectDB()
  // const propertyDoc = await Property.findById(params.id).lean()
  
  const { id } = await params
  await connectDB()
  const propertyDoc = await Property.findById(id).lean()
  
  const property = convertToSerialisableObject(propertyDoc)

  if (!property) {
    return (
      <h1 className='text-center text-2xl font-medium mt-10'>
        Propert Not Found.
      </h1>
    )
  }

  return (
    <>
      <PropertyHeaderImage image={property.images[0]}/>
      <section>
        <div className='container m-auto py-6 px-6'>
          <Link
            href='/properties'
            className='text-dark hover:text-main flex items-center hover-transition'
          >
            <HiChevronLeft className='mr-2' />
            Back to Properties
          </Link>
        </div>
      </section>
      <section className='bg-main-light'>
        <div className='container m-auto py-10 px-6'>
          <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
            <PropertyDetails property={property} />
          </div>
        </div>
      </section>
      <PropertyImages images={property.images} />
    </>
  )
}

export default PropertyPage

