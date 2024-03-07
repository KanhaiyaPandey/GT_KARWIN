

const Navbar = () => {
  return (
    <div className="navbar z-40 w-full sm:px-2 md:px-4 lg:px-6 xl:px-8 h-20  ">
    <div className="navbar-start w-1/2">
      <details className="dropdown md:hidden block">
        <summary tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </summary>
        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-300 text-white mt-3 z-[1] p-2 shadow rounded-box w-52">
          <li><a href="#home">Homepage</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </details>

      <div className=" gap-4 md:flex hidden">
        <a className=" text-xl hover:bg-black rounded-lg hover:text-white p-1" href="#home">Home</a>
        <a className=" text-xl hover:bg-black rounded-lg hover:text-white p-1" href="#services">Services</a>
        <a className=" text-xl hover:bg-black rounded-lg hover:text-white p-1" href="#projects">Porjects</a>
        <a className=" text-xl hover:bg-black rounded-lg hover:text-white p-1" href="#contact">Contact</a>
      </div>
    </div>

    <div className=" navbar-end flex p-2 items-center ">
       <a href="#" className=" sm:text-xl md:text-4xl lg:text-5xl text-xl font-bold">GT KARWIN LLP</a>
    </div>

  </div>
  )
}

export default Navbar