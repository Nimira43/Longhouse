import { PiBathtub } from 'react-icons/pi'
import { RxCross2 } from 'react-icons/rx'
import { LiaMapMarkerAltSolid, LiaRulerCombinedSolid } from 'react-icons/lia'
import { MdOutlineKingBed, MdOutlineCheck } from 'react-icons/md'

const PropertyDetails = ({ property }) => {
  return (  
    <main>
      <div className='bg-light p-6 rounded-lg shadow-md text-center md:text-left'>
        <div className='text-main-dark font-medium uppercase mb-4'>
          {property.type}
        </div>
        <h1 className='text-3xl font-medium mb-4'>
          {property.name}
        </h1>
        <div className='text-grey-1 mb-4 flex align-middle justify-center md:justify-start text-center'>
          <LiaMapMarkerAltSolid className='text-lg text-main-dark mt-0.5 mr-2' />
          <p className='text-main-dark'>
            {property.location.street}, {property.location.city}, {property.location.postcode}
          </p>
        </div>

        <h3 className='text-lg font-medium my-6 bg-grey-1 text-light p-2'>
          Rates & Options
        </h3>
        <div className='flex flex-col md:flex-row justify-around'>
          <div className='flex items-center justify-center mb-4 border-b border-grey-3 md:border-b-0 pb-4 md:pb-0'>
            <div className='text-grey-1 mr-2 font-medium'>
              Nightly
            </div>
            <div className='text-2xl font-medium text-main-dark'>
              {property.rates.nightly
                ? (
                  `£${property.rates.nightly.toLocaleString()}`
                )
                : (
                  <RxCross2 className='text-red-500' />
                )
              }
              
            </div>
          </div>
          <div className='flex items-center justify-center mb-4 border-b border-grey-3 md:border-b-0 pb-4 md:pb-0'>
            <div className='text-grey-1 mr-2 font-medium'>
              Weekly
            </div>
            <div className='text-2xl font-medium text-main-dark'>
              {property.rates.weekly
                ? (
                  `£${property.rates.weekly.toLocaleString()}`
                )
                : (
                  <RxCross2 className='text-red-500' />
                )
              }
              
            </div>
          </div>
          <div className='flex items-center justify-center mb-4 pb-4 md:pb-0'>
            <div className='text-grey-1 mr-2 font-medium'>
              Monthly
            </div>
            <div className='text-2xl font-medium text-main-dark'>
              {property.rates.monthly
                ? (
                  `£${property.rates.monthly.toLocaleString()}`
                )
                : (
                  <RxCross2 className='text-red-500' />
                )
              }
            </div>
          </div>
        </div>
      </div>

      <div className='bg-light p-6 rounded-lg shadow-md mt-6'>
        <h3 className='text-lg font-medium mb-6'>
          Description & Details
        </h3>
        <div className='flex justify-center gap-4 text-main-dark mb-4 text-xl space-x-9'>
          <p>
            <MdOutlineKingBed /> {property.beds}{' '}
            <span className='hidden sm:inline'>Beds</span>
          </p>
          <p>
            <PiBathtub /> {property.baths}{' '}
            <span className='hidden sm:inline'>Baths</span>
          </p>
          <p>
            <LiaRulerCombinedSolid /> {property.square_feet}{' '}
            <span className='hidden sm:inline'>sqft</span>
          </p>
        </div>
        <p className='text-grey-1 mb-4'>
          {property.description}
        </p>
      </div>

      <div className='bg-light p-6 rounded-lg shadow-md mt-6'>
        <h3 className='text-lg font-medium mb-6'>
          Amenities
        </h3>

        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none'>
          {property.amenities.map((amenity, index) => (
            <li key={index}>
              <MdOutlineCheck className='text-main-dark mr-2 mt-3' />{' '}
              {amenity}
            </li>
          ))}
        </ul> 
      </div>
      <div className='bg-light p-6 rounded-lg shadow-md mt-6'>
        <div id='map'></div>
      </div>
    </main>
  )
}
 
export default PropertyDetails