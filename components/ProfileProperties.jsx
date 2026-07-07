'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import deleteProperty from '../app/actions/deleteProperty'
import { toast } from 'react-toastify'

const ProfileProperties = ({ properties: initialProperties }) => {
  const [properties, setProperties] = useState(initialProperties)

  const handleDeleteProperty = async (propertyId) => {
    const confirmed = window.confirm('Are you sure you want to delete this property?')

    if (!confirmed) return

    await deleteProperty(propertyId)

    const updatedProperties = properties
      .filter((property) => property._id !== propertyId)
  
    setProperties(updatedProperties)
    toast.success('Property deleted successfully.')
  }
  
  return (  
    properties.map((property) => (
      <div
        key={property._id}
        className='mb-10'
      >
        <Link href={`/properties/${property._id}`}>
          <Image
            className='h-32 w-full rounded object-cover'
            src={property.images[0]}
            alt='Property 1'
            width={1000}
            height={200}
          />
        </Link>
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
          <Link
            href={`/properties/${property._id}/edit`}
            className='main-profile-btn mr-2'
          >
            Edit
          </Link>
          <button
            className='dark-profile-btn'
            type='button'
            onClick={() => handleDeleteProperty(property._id)}
          >
            Delete
          </button>
        </div>
      </div>
    ))
  )
}
 
export default ProfileProperties