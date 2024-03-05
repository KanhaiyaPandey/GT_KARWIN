

const Navbar = () => {
  return (
    <div className="navbar z-40 w-full sm:px-2 md:px-4 lg:px-6 xl:px-8 h-20 text-slate-200 ">
    

    <div className="navbar-start w-1/2">
      <div className="dropdown md:hidden block">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
          <li><a>Homepage</a></li>
          <li><a>Portfolio</a></li>
          <li><a>About</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>

      <div className=" gap-4 md:flex hidden">
        <a className=" text-xl hover:bg-base-100 rounded-lg hover:text-white p-1" href="">Home</a>
        <a className=" text-xl hover:bg-base-100 rounded-lg hover:text-white p-1" href="">About</a>
        <a className=" text-xl hover:bg-base-100 rounded-lg hover:text-white p-1" href="">Portfolio</a>
        <a className=" text-xl hover:bg-base-100 rounded-lg hover:text-white p-1" href="">Contact</a>
      </div>
    </div>

    <div className=" navbar-end flex p-2 items-center ">
       <a href="#" className=" sm:text-xl md:text-4xl lg:text-5xl text-xl font-bold">GT KARWIN LLP</a>
    </div>

  </div>
  )
}

export default Navbar