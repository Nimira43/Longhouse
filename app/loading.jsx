import { ClipLoader } from "react-spinners"

const override = {
  display: 'block',
  margin: '100px auto'
}

const LoadingPage = () => {
  return (  
    <ClipLoader
      color='#22c55e'
      cssOverride={override}
      size={150}
    />
  )
}
 
export default LoadingPage