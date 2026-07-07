import PropertyEditForm from '../../../../components/PropertyEditForm'
import connectDB from '../../../../config/database'
import Property from '../../../../models/Property'
import { convertToSerialisableObject } from '../../../../utils/convertToObject'

const PropertyEditPage = async ({ params }) => {
  await connectDB()
  
  
  const { id } = await params
  const propertyDoc = await Property.findById(id).lean()
  // const propertyDoc = await Property.findById(params.id).lean()
  
  
  const property = convertToSerialisableObject(propertyDoc)

  if (!property) {
    return (
      <h1 className='text-center text-2xl font-medium mt-10'>
        Property Not Found
      </h1>
    )
  }

  return (  
    <section className='bg-main-light'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-light px-6 py-8 mb-4 shadow-md rounded border m-4 md:m-0'>
          <PropertyEditForm property={property} />
        </div>
      </div>
    </section>
  )
}
 
export default PropertyEditPage