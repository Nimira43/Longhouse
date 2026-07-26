import { MdBookmarkBorder } from 'react-icons/md'

const BookmarkButton = ({ property }) => {
  return (  
    <button
      className='bookmark-btn flex items-center justify-center w-full gap-2'
    >
      <MdBookmarkBorder /> Bookmark Property
    </button>
  )
}
 
export default BookmarkButton