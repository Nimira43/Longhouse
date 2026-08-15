import PropertySearchForm from './PropertySearchForm'

const Hero = () => {
  return ( 
    <section
      className='relative py-20 mb-4 bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage: "url('/images/hero-image.jpg')"
      }}
    >
      <div className='absolute inset-0 bg-black/80'></div>
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-medium text-light sm:text-5xl md:text-6xl'>
            Find a Place That Feels Like Home
          </h1>
          <p className='my-4 text-xl text-light'>
            Where comfort, character, and the right location come together.
          </p>
        </div>
        <PropertySearchForm />
      </div>
    </section>
  )
}
 
export default Hero