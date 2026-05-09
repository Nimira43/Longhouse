const PropertyAddForm = () => {
  return (  
    <form>
      <h2 className='text-3xl text-center font-medium mb-6'>
        Add Property
      </h2>

      <div className='mb-4'>
        <label
          for='type'
          className='block text-grey-1 font-medium mb-2'
        >
          Property Type
        </label>
        <select
          id='type'
          name='type'
          className='add-property-form-input'
          required
        >
          <option value='Apartment'>Apartment</option>
          <option value='Flat'>
            Flat
          </option>
          <option value='House'>
            House
          </option>
          <option value='CabinOrCottage'>
            Cabin or Cottage
          </option>
          <option value='Room'>
            Room
          </option>
          <option value='Studio'>
            Studio
          </option>
          <option value='Other'>
            Other
          </option>
        </select>
      </div>
      <div className='mb-4'>
        <label className='block text-grey-1 font-medium mb-2'>
          Listing Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          className='add-property-form-input mb-2'
          placeholder='eg. Beautiful Apartment In London'
          required
        />
      </div>
      <div className='mb-4'>
        <label
          for='description'
          className='block text-grey-1 font-medium mb-2'
        >
          Description
        </label>
        <textarea
          id='description'
          name='description'
          className='add-property-form-input'
          rows='4'
          placeholder='Add an optional description of your property'
        ></textarea>
      </div>

      <div className='mb-4 bg-main-light p-4'>
        <label className='block text-grey-1 font-medium mb-2'>
          Location
        </label>
        <input
          type='text'
          id='street'
          name='location.street'
          className='add-property-form-input mb-2'
          placeholder='Street'
        />
        <input
          type='text'
          id='city'
          name='location.city'
          className='add-property-form-input mb-2'
          placeholder='City'
          required
        />
        <input
          type='text'
          id='county'
          name='location.county'
          className='add-property-form-input mb-2'
          placeholder='County'
          required
        />
        <input
          type='text'
          id='postcode'
          name='location.postcode'
          className='add-property-form-input mb-2'
          placeholder='Post Code'
        />
      </div>

      <div className='mb-4 flex flex-wrap'>
        <div className='w-full sm:w-1/3 pr-2'>
          <label
            for='beds'
            className='block text-grey-1 font-medium mb-2'
          >
            Beds
          </label>
          <input
            type='number'
            id='beds'
            name='beds'
            className='add-property-form-input'
            required
          />
        </div>
        <div className='w-full sm:w-1/3 px-2'>
          <label
            for='baths'
            className='block text-grey-1 font-medium mb-2'
          >
            Baths
          </label>
          <input
            type='number'
            id='baths'
            name='baths'
            className='add-property-form-input'
            required
          />
        </div>
        <div className='w-full sm:w-1/3 pl-2'>
          <label
            for='square_feet'
            className='block text-grey-1 font-medium mb-2'
          >
            Square Feet
          </label>
          <input
            type='number'
            id='square_feet'
            name='square_feet'
            className='add-property-form-input'
            required
          />
        </div>
      </div>

      <div className='mb-4'>
        <label
          className='block text-grey-1 font-medium mb-2'
        >
          Amenities
        </label>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
          <div>
            <input
              type='checkbox'
              id='amenity_wifi'
              name='amenities'
              value='Wifi'
              className='mr-2'
            />
            <label
              for='amenity_wifi'
            >
              Wifi
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_kitchen'
              name='amenities'
              value='Full kitchen'
              className='mr-2'
            />
            <label for='amenity_kitchen'>
              Full kitchen
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_washer_dryer'
              name='amenities'
              value='Washer & Dryer'
              className='mr-2'
            />
            <label for='amenity_washer_dryer'>
              Washer & Dryer
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_free_parking'
              name='amenities'
              value='Free Parking'
              className='mr-2'
            />
            <label for='amenity_free_parking'>
              Free Parking
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_pool'
              name='amenities'
              value='Swimming Pool'
              className='mr-2'
            />
            <label for='amenity_pool'>
              Swimming Pool
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_hot_tub'
              name='amenities'
              value='Hot Tub'
              className='mr-2'
            />
            <label for='amenity_hot_tub'>
              Hot Tub
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_24_7_security'
              name='amenities'
              value='24/7 Security'
              className='mr-2'
            />
            <label for='amenity_24_7_security'>
              24/7 Security
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_wheelchair_accessible'
              name='amenities'
              value='Wheelchair Accessible'
              className='mr-2'
            />
            <label for='amenity_wheelchair_accessible'>
              Wheelchair Accessible
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_lift_access'
              name='amenities'
              value='Lift Access'
              className='mr-2'
            />
            <label for='amenity_lift_access'>
              Elevator Access
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_dishwasher'
              name='amenities'
              value='Dishwasher'
              className='mr-2'
            />
            <label for='amenity_dishwasher'>
              Dishwasher
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_gym_fitness_centre'
              name='amenities'
              value='Gym/Fitness Centre'
              className='mr-2'
            />
            <label for='amenity_gym_fitness_centre'>
              Gym/Fitness Centre
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_air_conditioning'
              name='amenities'
              value='Air Conditioning'
              className='mr-2'
            />
            <label for='amenity_air_conditioning'>
              Air Conditioning
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_balcony_patio'
              name='amenities'
              value='Balcony/Patio'
              className='mr-2'
            />
            <label for='amenity_balcony_patio'>
              Balcony/Patio
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_smart_tv'
              name='amenities'
              value='Smart TV'
              className='mr-2'
            />
            <label for='amenity_smart_tv'>
              Smart TV
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_coffee_maker'
              name='amenities'
              value='Coffee Maker'
              className='mr-2'
            />
            <label for='amenity_coffee_maker'>
              Coffee Maker
            </label>
          </div>
        </div>
      </div>

      <div className='mb-4 bg-main-light p-4'>
        <label className='block text-grey-1 font-medium mb-2'>
          Rates (Leave blank if not applicable)
        </label>
        <div
          className='flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4'
        >
          <div className='flex items-center'>
            <label
              for='weekly_rate'
              className='mr-2'
            >
              Weekly
            </label>
            <input
              type='number'
              id='weekly_rate'
              name='rates.weekly'
              className='add-property-form-input'
            />
          </div>
          <div className='flex items-center'>
            <label
              for='monthly_rate'
              className='mr-2'
            >
              Monthly
            </label>
            <input
              type='number'
              id='monthly_rate'
              name='rates.monthly'
              className='add-property-form-input'
            />
          </div>
          <div className='flex items-center'>
            <label
              for='nightly_rate'
              className='mr-2'
            >
              Nightly
            </label>
            <input
              type='number'
              id='nightly_rate'
              name='rates.nightly'
              className='add-property-form-input'
            />
          </div>
        </div>
      </div>

      <div className='mb-4'>
        <label
          for='seller_name'
          className='block text-grey-1 font-medium mb-2'
        >
          Seller Name
        </label>
        <input
          type='text'
          id='seller_name'
          name='seller_info.name.'
          className='add-property-form-input'
          placeholder='Name'
        />
      </div>
      <div className='mb-4'>
        <label
          for='seller_email'
          className='block text-grey-1 font-medium mb-2'
        >
          Seller Email
        </label>
        <input
          type='email'
          id='seller_email'
          name='seller_info.email'
          className='add-property-form-input'
          placeholder='Email address'
          required
        />
      </div>
      <div className='mb-4'>
        <label
          for='seller_phone'
          className='block text-grey-1 font-medium mb-2'
        >
          Seller Phone
        </label>
        <input
          type='tel'
          id='seller_phone'
          name='seller_info.phone'
          className='add-property-form-input'
          placeholder='Phone'
        />
      </div>

      <div className='mb-4'>
        <label
          for='images'
          className='block text-grey-1 font-medium mb-2'
        >
          Images (Select up to 4 images)
        </label>
        <input
          type='file'
          id='images'
          name='images'
          className='add-property-form-input'
          accept='image/*'
          multiple
          required
        />
      </div>

      <div>
        <button
          className='bg-main hover:bg-main-dark text-light font-medium py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline hover-transition'
          type='submit'
        >
          Add Property
        </button>
      </div>
    </form>
  )
}
 
export default PropertyAddForm