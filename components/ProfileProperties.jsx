'use client'

import Image from 'next/image'
import { useState } from 'react'

const ProfileProperties = ({ properties: initialProperties }) => {
  const [properties, setProperties] = useState(initialProperties)
  
  return (  
    properties.map((property) => (
      <div
        key={property._id}
        className='mb-10'
      >
        <a href='/property.html'>
          <Image
            className='h-32 w-full rounded object-cover'
            src={property.images[0]}
            alt='Property 1'
            width={1000}
            height={200}
          />
        </a>
        <div className='mt-2'>
          <p className='text-lg font-medium'>
            {property.name}
          </p>
          <p className='text-dark font-medium'>
            Address:
            <span className='ml-2 font-normal'>
              {property.location.street}, {property.location.city}, {property.location.county}, {property.location.postcode}
            </span>
          </p>
        </div>
        <div className='mt-2'>
          <a
            href='/add-property.html'
            className='main-profile-btn mr-2'
          >
            Edit
          </a>
          <button
            className='dark-profile-btn'
            type='button'
          >
            Delete
          </button>
        </div>
      </div>
    ))
  )
}
 
export default ProfileProperties