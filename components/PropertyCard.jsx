import Image from 'next/image'
import Link from 'next/link'
import { PiBathtub } from 'react-icons/pi'
import { RiMoneyPoundBoxLine } from 'react-icons/ri'
import { LiaMapMarkerAltSolid, LiaRulerCombinedSolid } from 'react-icons/lia'
import { MdOutlineKingBed } from 'react-icons/md'

const PropertyCard = ({ property }) => {
  const getRateDisplay = () => {
    const { rates } = property

    if (rates.monthly) {
      return `£${rates.monthly.toLocaleString()}/month`
    } else if (rates.weekly) {
      return `£${rates.weekly.toLocaleString()}/week`
    } else if (rates.nightly) {
      return `£${rates.nightly.toLocaleString()}/night`
    }
  }
 
  return (  
    <div className='rounded-xl shadow-md relative'>
      <Image
        src={`/images/properties/${property.images[0]}`}
        alt=''
        width='0'
        height='0'
        sizes='100vw'
        className='w-full h-auto rounded-t-xl'
      />
      <div className='p-4'>
        <div className='text-left md:text-center lg:text-left mb-6'>
          <h1 className='text-main font-semibold uppercase'>
            {property.type}
          </h1>
          <h3 className='text-xl font-medium'>
            {property.name}
          </h3>
        </div>
        <h3
          className='absolute top-[10px] right-[10px] bg-light px-4 py-2 rounded-lg text-main font-semibold text-right md:text-center lg:text-right'
        >
          {getRateDisplay()}
        </h3>

        <div className='flex justify-center gap-4 text-grey-2 mb-4'>
          <p>
            <MdOutlineKingBed /> {property.beds}{' '}
            <span className='md:hidden lg:inline'>Beds</span>
          </p>
          <p>
            <PiBathtub /> {property.baths}{' '}
            <span className='md:hidden lg:inline'>Baths</span>
          </p>
          <p>
            <LiaRulerCombinedSolid /> {property.square_feet}
            <span className='md:hidden lg:inline'>sqft</span>
          </p>
        </div>

        <div className='flex justify-center gap-4 text-grey-2 mb-4'>
          <p>
            <RiMoneyPoundBoxLine /> Weekly
          </p>
          <p>
            <RiMoneyPoundBoxLine /> Monthly
          </p>
        </div>

        <div className='border border-main-light mb-5'></div>

        <div className='flex flex-col lg:flex-row justify-between mb-4'>
          <div className='flex align-middle gap-2 mb-4 lg:mb-0'>
            <LiaMapMarkerAltSolid className='mt-0.5 text-lg text-grey-1' /> 
            <span className='text-grey-1'>
              {property.location.city}
            </span>
          </div>
          <Link
            href={`/properties/${property._id}`}
            className='uppercase bg-main hover:bg-main-dark text-light px-4 py-2 rounded-sm text-center hover-transition'
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  )
}
 
export default PropertyCard