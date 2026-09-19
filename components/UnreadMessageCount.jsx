'use client'

import { useGlobalContext } from '../context/GlobalContext'

const UnreadMessageCount = () => {
  const { unreadCount } = useGlobalContext()
  
  return (  
    <span className='notification-text'>
      {unreadCount}
    </span>
  )
}
 
export default UnreadMessageCount