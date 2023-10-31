import logo from './assets/logo.svg'
import mainImage from './assets/beach-work.jpg'
const App = () => {
  return (
    <div className="bg-gray-100 sm:mx-16 my-7">
      <div className='grid lg:grid-cols-2 bg-gray-300'>
        <div className='p-8 sm:max-w-xl lg:px-6 py-24 lg:max-w-full'>
          <img className='h-10' src={logo} alt="logo" />
          <img className='mt-6 rounded-lg shadow-2xl sm:mt-9 sm:h-64 sm:w-full object-cover object-center lg:hidden' src={mainImage} alt="woman on th beach" />
          <h1 className='mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl'>its good to have time
            <br />
            <span className='text-indigo-500'>the we are in the beach</span></h1>
          <p className='mt-2 text-gray-600 sm:text-lg sm:mt-4 sm:font-medium
          '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo ab, possimus distinctio iste ducimus odio ex et. Tempora tenetur quos sequi dolore consequatur porro aut. Atque cupiditate officia labore recusandae?</p>
          <div className='mt-4 sm:mt-6'>
            <a className='btn' href="#">book your escape</a>
          </div>
        </div>
        <div className='hidden relative lg:block'>
          <img className='absolute w-full h-full object-cover object-center' src={mainImage} alt="woman on th beach" />
        </div>
      </div>
    </div>
  )
}

export default App
