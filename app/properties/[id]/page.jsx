import Link from 'next/link'
import PropertyHeaderImage from '../../../components/PropertyHeaderImage'
import connectDB from '../../../config/database'
import Property from '../../../models/Property'
import { HiChevronLeft } from 'react-icons/hi'

const PropertyPage = async ({ params }) => {
  await connectDB()
  const property = await Property.findById(params.id).lean()

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
      <section class='bg-main-light'>
        <div class='container m-auto py-10 px-6'>
          <div class='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
            <div>Placeholder</div>
          </div>
        </div>
      </section>
    </>
    
  )
}

export default PropertyPage

