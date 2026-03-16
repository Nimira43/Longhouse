import HomeProperties from '../components/HomePropertie'
import Hero from '../components/Hero'
import InfoBoxes from '../components/InfoBoxes'
import connectDB from '../config/database'

const HomePage = () => {
  connectDB()

  return ( 
    <div>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </div>
  )
}
 
export default HomePage