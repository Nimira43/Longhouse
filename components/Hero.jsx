const Hero = () => {
  return ( 
    <section
      className='relative py-20 mb-4 bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: "url('/images/hero-image.jpg')" }}
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

        <form className='mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center'>
          <div className='w-full md:w-3/5 md:pr-2 mb-4 md:mb-0'>
            <label htmlFor='location' className='sr-only'>Location</label>
            <input
              type='text'
              id='location'
              placeholder='Enter Location...'
              className='hero-input'
            />
          </div>

          <div className='w-full md:w-2/5 md:pl-2'>
            <label htmlFor='property-type' className='sr-only'>Property Type</label>
            <select
              id='property-type'
              className='hero-input appearance-none'
            >
              <option value='All'>All</option>
              <option value='Apartment'>Apartment</option>
              <option value='Studio'>Studio</option>
              <option value='Condo'>Flat</option>
              <option value='House'>House</option>
              <option value='Cottage'>Cottage</option>
              <option value='Loft'>Loft</option>
              <option value='Room'>Room</option>
              <option value='Other'>Other</option>
            </select>
          </div>

          <button
            type='submit'
            className='hero-btn'
          >
            Search
          </button>
        </form>
      </div>
    </section>
  )
}
 
export default Hero