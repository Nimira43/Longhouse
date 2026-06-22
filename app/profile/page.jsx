import Image from 'next/image'
import connectDB from '../../config/database'
import Property from '../../models/Property'
import { getSessionUser } from '../../utils/getSessionUser'
import profileDefault from '../../assets/images/profile.png'
import ProfileProperties from '../../components/ProfileProperties'
import { convertToSerialisableObject } from '../../utils/convertToObject'

const ProfilePage = async () => {
  await connectDB()
  const sessionUser = await getSessionUser()
  const { userId } = sessionUser

  if (!userId) {
    throw new Error('User ID is required')
  }

  const propertiesDocs = await Property.find({ owner: userId }).lean()
  
  const properties = propertiesDocs.map(convertToSerialisableObject)

  return (
    <section className='bg-main-light'>
      <div className='container m-auto py-24'>
        <div
          className='bg-light px-6 py-8 mb-4 shadow-md rounded border m-4 md:m-0'
        >
          <h1 className='text-3xl font-medium mb-8 text-center uppercase'>
            Your Profile
          </h1>
          <div className='flex flex-col md:flex-row gap-y-10'>
            <div className='md:w-1/4 mx-20 mt-10'>
              <div className='mb-4'>
                <Image
                  className='h-32 w-32 md:h-48 md:w-48 rounded-full mx-auto md:mx-0'
                  src={sessionUser.user.image || profileDefault}
                  width={200}
                  height={200}
                  alt='User'
                />
              </div>

              <h2 className='text-xl mb-4'>
                <span className='font-medium block'>
                  Name:
                </span>
                <span>
                  {sessionUser.user.name}
                </span>
              </h2>
              <h2 className='text-xl'>
                <span className='font-medium block'>
                  Email:
                </span>
                <span>
                  {sessionUser.user.email}
                </span>
              </h2>
            </div>

            <div className='md:w-3/4 md:pl-4'>
              <h2 className='text-2xl font-medium mb-4'>
                Your Listings
              </h2>
              <ProfileProperties properties={properties} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
 
export default ProfilePage