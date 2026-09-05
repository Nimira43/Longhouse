import connectDB from '../../config/database'
import Message from '../../models/Message'
import '../../models/Property'
import { convertToSerialisableObject } from '../../utils/convertToObject'
import { getSessionUser } from '../../utils/getSessionUser'

const MessagesPage = async () => {
  connectDB()

  const sessionUser = await getSessionUser()
  const { userId } = sessionUser
  
  const readMessages = await Message.find({ recipient: userId, read: true })
    .sort({ createdAt: -1 })
    .populate('sender', 'username')
    .populate('property', 'name')
    .lean()
  
  const unreadMessages = await Message.find({ recipient: userId, read: false })
    .sort({ createdAt: -1 })
    .populate('sender', 'username')
    .populate('property', 'name')
    .lean()
  
  const messages = [...unreadMessages, ...readMessages].map((messageDoc) => {
    const message = convertToSerialisableObject(messageDoc)
    message.sender = convertToSerialisableObject(messageDoc.sender)
    message.property = convertToSerialisableObject(messageDoc.property)
    return message
  })
   
  return (  
    <section className='bg-main-light'>
      <div className='container m-auto py-24 max-w-4xl'>
        <div className='bg-light px-6  py-8 shadow rounded 1border m-4 md:m-8'>
          <h1 className='text-3xl font-medium mb-4'>
            Your Messages
          </h1>
          <div className='space-y-4'>
            {messages.length === 0 ? (
            <p>
              You have no message.
            </p>
            ) : (
              messages.map((message) => (
                <h3
                  key={message._id}
                >
                  {message.name}
                </h3>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
 
export default MessagesPage