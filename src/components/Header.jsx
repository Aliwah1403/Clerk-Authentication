import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <>
    <nav className="bg-blue-700 py-4 px-6 flex items-center justify-between mb-5">
        <div className="flex items-center">
            <NavLink to='/'>
                <div className="text-lg uppercase font-bold text-white">
                    Clerk App
                </div>
            </NavLink>
        </div>
        <div className="text-white">
            <NavLink to='/sign-in' className='text-gray-300 hover:text-white mr'>Sign In</NavLink>
            <NavLink to='/sign-up' className='text-gray-300 hover:text-white'>Sign Up</NavLink>
        </div>
    </nav>
    </>
  )
}

export default Header