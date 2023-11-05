import { useContext } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import navContext from '../../context/navbar-context'
import { navbarContextsTypes } from '../../interfaces'

const ToggleNavButton = (): JSX.Element => {
  let navbarContext = useContext<navbarContextsTypes>(navContext)

  const { viability, setViability } = navbarContext

  return (
    <>
      <div className='lg:hidden sm:block ml-10 cursor-pointer btn text-neutral-900 bg-slate-400 after:bg-slate-500'>
        <GiHamburgerMenu onClick={() => {
          !viability ? setViability(true) : setViability(false)
        }} className='text-3xl' />
      </div>
    </>
  )
}

export default ToggleNavButton
