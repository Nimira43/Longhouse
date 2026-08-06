'use client'

import { useState, useEffect } from 'react'
import { MdBookmarkBorder } from 'react-icons/md'
import checkBookmarkStatus from '../app/actions/checkBookmarkStatus'
import bookmarkProperty from '../app/actions/bookmarkProperty'
import { toast } from 'react-toastify'
import { useSession } from 'next-auth/react'

const BookmarkButton = ({ property }) => {
  const { data: session } = useSession()
  const userId = session?.user?.id
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!userId) {
      setLoading(false)
      return
    }

    checkBookmarkStatus(property._id).then((res) => {
      if (res.error) toast.error(res.error)
      if (res.isBookmarked) setIsBookmarked(res.isBookmarked)
      setLoading(false)
    })
  }, [property._id, userId, checkBookmarkStatus])

  const handleClick = async () => {
    if (!userId) {
      toast.error('You need to be signed in to bookmark a listing.')
      return
    }

    bookmarkProperty(property._id).then((res) => {
      if (res.error) return toast.error(res.error)
      setIsBookmarked(res.isBookmarked)
      toast.success(res.message)
    })
  }

  if (loading) {
    return <p className='text-center'>Loading...</p>
  }

  return isBookmarked ? (  
    <button
      className='unbookmark-btn flex items-center justify-center w-full gap-2'
      onClick={handleClick}
    >
      <MdBookmarkBorder /> Remove Bookmark
    </button>
  ) : (
    <button
      className='bookmark-btn flex items-center justify-center w-full gap-2'
      onClick={handleClick}
    >
      <MdBookmarkBorder /> Bookmark Property
    </button>
  )
}
 
export default BookmarkButton