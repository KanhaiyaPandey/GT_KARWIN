

const Footer = () => {
  return (
    <section id='contact' className=' w-full'>
        <footer className="footer px-20 py-10 bg-neutral text-neutral-content">
  <aside>
    <h1 className=" text-3xl font-bold">GTK</h1>
    <p>GT Karwin llp.<br/>Providing reliable tech since 1992</p>
    <p> <i className="fa-solid fa-house mr-1"></i> Address: Plot-06 <br />
    Perur, Tirupati Rural, <br />
    Tirupati, Chittoor <br />
    AP - 517505</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Contact</h6> 
    <div className="flex flex-col justify-center">
      <a href=""><i className="text-xl m-3 fa-solid fa-phone"></i>9494948355</a>
      <a href=""><i className="text-xl m-3 fa-solid fa-envelope"></i>gtkarwinllp@gmail.com</a>
      <a href=""><i className="text-xl m-3 fa-solid fa-globe"></i>www.gtkarwin.com</a>
      
    </div>
  </nav>
</footer>
    </section>
  )
}

export default Footer