import Link from 'next/link'

const InfoBox = ({
  heading,
  backgroundColour = 'bg-main-light',
  textColour = 'text-grey-1',
  buttonInfo,
  children
}) => {
  return (
    <div className={`${backgroundColour}  p-6 rounded-sm shadow-sm`}>
      <h2 className={`${textColour} text-2xl font-medium`}>{heading}</h2>
      <p className={`${textColour} mt-2 mb-4`}>
        {children}
      </p>
      <Link
        href={buttonInfo.link}
        className={`inline-block ${buttonInfo.backgroundColour} text-light font-medium rounded-sm px-4 py-2 hover:bg-main-dark uppercase hover-transition`}
      >
        {buttonInfo.text}
      </Link>
    </div>
  )
}
 
export default InfoBox
