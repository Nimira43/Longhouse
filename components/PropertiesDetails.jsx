import { PiBathtub } from 'react-icons/pi'
import { RiMoneyPoundBoxLine } from 'react-icons/ri'
import { RxCross2 } from 'react-icons/rx'
import { LiaMapMarkerAltSolid, LiaRulerCombinedSolid } from 'react-icons/lia'
import { MdOutlineKingBed, MdOutlineCheck } from 'react-icons/md'

const PropertiesDetails = () => {
  return (  
    <main>
      <div className='bg-light p-6 rounded-lg shadow-md text-center md:text-left'>
        <div className='text-grey-1 mb-4'>
          Apartment
        </div>
        <h1 className='text-3xl font-medium mb-4'>
          Boston Commons Retreat
        </h1>
        <div className='text-grey-1 mb-4 flex align-middle justify-center md:justify-start'>
          <LiaMapMarkerAltSolid className='text-lg text-main mr-2' />
          <p className='text-main'>
            120 Tremont Street Boston, MA 02111
          </p>
        </div>

        <h3 className='text-lg font-medium my-6 bg-grey-1 text-light p-2'>
          Rates & Options
        </h3>
        <div className='flex flex-col md:flex-row justify-around'>
          <div className='flex items-center justify-center mb-4 border-b border-grey-3 md:border-b-0 pb-4 md:pb-0'>
            <div className='text-grey-1 mr-2 font-bold'>
              Nightly
            </div>
            <div className='text-2xl font-medium'>
              <RxCross2 className='text-main' />
            </div>
          </div>
          <div className='flex items-center justify-center mb-4 border-b border-grey-3 md:border-b-0 pb-4 md:pb-0'>
            <div className='text-grey-1 mr-2 font-medium'>
              Weekly
            </div>
            <div className='text-2xl font-medium text-main'>
              £1,100
            </div>
          </div>
          <div className='flex items-center justify-center mb-4 pb-4 md:pb-0'>
            <div className='text-grey-1 mr-2 font-medium'>
              Monthly
            </div>
            <div className='text-2xl font-medium text-main'>
              £4,200
            </div>
          </div>
        </div>
      </div>

      <div className='bg-light p-6 rounded-lg shadow-md mt-6'>
        <h3 className='text-lg font-medium mb-6'>
          Description & Details
        </h3>
        <div className='flex justify-center gap-4 text-main mb-4 text-xl space-x-9'>
          <p>
            <MdOutlineKingBed /> 3
            <span className='hidden sm:inline'>Beds</span>
          </p>
          <p>
            <PiBathtub /> 2
            <span className='hidden sm:inline'>Baths</span>
          </p>
          <p>
            <LiaRulerCombinedSolid />
            1,500 <span className='hidden sm:inline'>sqft</span>
          </p>
        </div>
        <p className='text-grey-1 mb-4'>
          This is a beautiful apartment located near the commons
        </p>
      </div>

      <div className='bg-light p-6 rounded-lg shadow-md mt-6'>
        <h3 className='text-lg font-medium mb-6'>
          Amenities
        </h3>

        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none'>
          <li>
            <MdOutlineCheck className='text-main mr-2 mt-3' />Wifi
          </li>
          <li>
            <MdOutlineCheck className='text-main mr-2 mt-3' />Full kitchen
          </li>
          <li>
            <MdOutlineCheck className='text-main mr-2 mt-3' />Washer & Dryer
          </li>
          <li>
            <MdOutlineCheck className='text-main mr-2 mt-3' />Free Parking
          </li>
          <li>
            <MdOutlineCheck className='text-main mr-2 mt-3' />Hot Tub
          </li>
          <li>
            <MdOutlineCheck className='text-main mr-2 mt-3' />24/7 Security
          </li>
          <li>
            <MdOutlineCheck className='text-main mr-2 mt-3' />Wheelchair Accessible
          </li>
          <li>
            <MdOutlineCheck className='text-main mr-2 mt-3' />Lift Access
          </li>
          <li>
            <MdOutlineCheck className='text-main mr-2 mt-3' />Dishwasher
          </li>
          <li>
            <MdOutlineCheck className='text-main mr-2 mt-3' />Gym
          </li>
          <li>
            <MdOutlineCheck className='text-main mr-2 mt-3' />Air Conditioning
          </li>
          <li>
            <MdOutlineCheck className='text-main mr-2 mt-3' />Balcony/Patio
          </li>
          <li>
            <MdOutlineCheck className='text-main mr-2 mt-3' />Smart TV
          </li>
          <li>
            <MdOutlineCheck className='text-main mr-2 mt-3' />Coffee Maker
          </li>
        </ul>
      </div>
      <div className='bg-light p-6 rounded-lg shadow-md mt-6'>
        <div id='map'></div>
      </div>
    </main>
  )
}
 
export default PropertiesDetails