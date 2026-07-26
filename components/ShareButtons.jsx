import { MdOutlineShare } from "react-icons/md"

const ShareButtons = ({property}) => {
  return (  
    <button
      className='share-btn flex items-center justify-center w-full gap-2'
    >
      <MdOutlineShare /> Share
    </button>
  )
}
 
export default ShareButtons