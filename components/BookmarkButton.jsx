'use client'

import { MdBookmarkBorder } from 'react-icons/md'
import bookmarkProperty from '../app/actions/bookmarkProperty'
import { toast } from 'react-toastify'
import { useSession } from 'next-auth/react'

const BookmarkButton = ({ property }) => {
  const { data: session } = useSession()
  const userId = session?.user?.id
  
  const handleClick = async () => {
    if (!userId) {
      toast.error('You need to be signed in to bookmark a listing.')
      return
    }

    bookmarkProperty(property._id).then((res) => {
      if (res.error) return toast.error(res.error)
      toast.success(res.message)
    })
  }

  return (  
    <button
      className='bookmark-btn flex items-center justify-center w-full gap-2'
      onClick={handleClick}
    >
      <MdBookmarkBorder /> Bookmark Property
    </button>
  )
}
 
export default BookmarkButton