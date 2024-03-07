

const Projects = () => {
  return (
    <section id='projects' className=' w-full flex items-center justify-center flex-col gap-10 p-10'>
      <h1 className=" text-4xl font-bold">PROJECTS</h1>
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th className='text-xl text-black'>PROJECTS</th>
        <th></th>
        <th className='text-xl text-black'>WORKS DONE</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td className=' text-lg'>COMMSCOPE </td>
        <td></td>
        <td className=''>Network Cabeling</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td className=' text-lg'>TCS E-block Gachiboli </td>
        <td></td>
        <td>Network Cabeling</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td className=' text-lg'>Meluha International School </td>
        <td></td>
        <td className=' text-wrap flex'>Cabeling, Switching & Routing, Security Systems, Board Room, AV Solution, EPABX Systems</td>
      </tr>

        {/* row 4 */}
        <tr>
        <th>4</th>
        <td className=' text-lg'>Vihan Kia Office </td>
        <td></td>
        <td className=' text-wrap flex'>Cabeling, Switching & Routing, Security Systems, Board Room, EPABX Systems</td>
      </tr>

      {/* row 5 */}
      <tr>
        <th>5</th>
        <td className=' text-lg'>I-Pac India </td>
        <td></td>
        <td className=' text-wrap flex'>Cabeling, Switching & Routing, Security Systems, Board Room, </td>
      </tr>

      {/* row 6 */}
      <tr>
        <th>6</th>
        <td className=' text-lg'>Sandur Power Company Pvt. ltd </td>
        <td></td>
        <td className=' text-wrap flex'>Cabeling, Switching & Routing, Security Systems, Board Room, Video Conferencing Solution</td>
      </tr>

      {/* row 7 */}
      <tr>
        <th>7</th>
        <td className=' text-lg'>Sakshi </td>
        <td></td>
        <td className=' text-wrap flex'> Video Conferencing Solution</td>
      </tr>
       
       {/* row 8 */}
       <tr>
        <th>8</th>
        <td className=' text-lg'>Concrete lime light infra Projects </td>
        <td></td>
        <td className=' text-wrap flex'>Network Cabling, Access Control, Wireless Solution, Security Surveillence </td>
      </tr>

      {/* row 9 */}
      <tr>
        <th>9</th>
        <td className=' text-lg'>AP CM Camp Office </td>
        <td></td>
        <td className=' text-wrap flex'>Network Cabling, Access Control, Wireless Solution, Security Surveillence, Video wall Solution, VC Room, Meeting Hall </td>
      </tr>

      {/* row 10 */}
      <tr>
        <th>10</th>
        <td className=' text-lg'>AP Secretariat and Raj Bhawan </td>
        <td></td>
        <td className=' text-wrap flex'>Video Conferencing, Meeting Hall Maintanance</td>
      </tr>

    </tbody>
  </table>
</div>
    </section>
  )
}

export default Projects