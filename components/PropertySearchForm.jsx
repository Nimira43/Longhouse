'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const PropertySearchForm = () => {
  const [location, setLocation] = useState('')
  const [propertyType, setPropertyType] = useState('All')
  const router = useRouter()
  
  const handleSubmit = (e) => {
    e.preventDefault()

    if (location === '' && propertyType === 'All') {
      router.push('/properties')
    } else {
      const query = `?location=${location}&propertyType=${propertyType}`
      router.push(`/properties/search-results${query}`)
    }
  }

  return (  
    <form
      onSubmit={handleSubmit}
      className='mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center'
    >
      <div className='w-full md:w-3/5 md:pr-2 mb-4 md:mb-0'>
        <input
          type='text'
          id='location'
          placeholder='Enter Location...'
          className='hero-input'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className='w-full md:w-2/5 md:pl-2'>
        <select
          id='property-type'
          className='hero-input appearance-none'
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
        >
          <option value='All'>All</option>
          <option value='Apartment'>Apartment</option>
          <option value='Studio'>Studio</option>
          <option value='Flat'>Flat</option>
          <option value='House'>House</option>
          <option value='Cottage'>Cottage</option>
          <option value='Loft'>Loft</option>
          <option value='Room'>Room</option>
          <option value='Other'>Other</option>
        </select>
      </div>

      <button
        type='submit'
        className='hero-btn'
      >
        Search
      </button>
    </form>
  )
}
 
export default PropertySearchForm