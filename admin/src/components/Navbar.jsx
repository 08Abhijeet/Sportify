
import { assets } from "../assets/admin_assets/assets"

const Navbar = ({setToken}) => {
  return (
    <div className="flex items-center px-[50px] py-[10px] justify-between">
      <img className="w-[5%]" src={assets.logo} alt="" />
      <button onClick={()=>{setToken('')}} className="bg-gray-600 text-white py-2 px-5 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm">Logout</button>
    </div>
  )
}

export default Navbar