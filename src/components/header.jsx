import '../styles/header.css'
import Logo from '../assets/logo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Header(){
     return <header>
          <div className="logo">
               <Link to='/'>
               <img src={Logo} alt="Logo" />
               <h1>History Reflection</h1>
               </Link>
          </div>
          <ul className='links'>
               <span><Links/></span>
               <ResponsiveMenu/>
          </ul>
     </header>
}
function ResponsiveMenu(){
     const [dropdown, setDropDown] = useState(false)
     function toggleDropdown(){
          setDropDown(!dropdown)
     }
     return <div className='responsivemenu'>
          <li>Гэр</li>
          <li>Бидний талаар</li>
          <li className='dropdownbtn' onClick={toggleDropdown}>Түүхийн талаар
          <i class={`fa fa-angle-${!dropdown ? "down" : "up"}`}>
          </i>
          <div style={{height: dropdown ? "300px" : "0", opacity: dropdown ? '100' : "0"}}><Links/></div>
          </li>
     </div>
}
function Links(){
     
     const links = information.map((item,index) => (
     <li key={index}><Link to='Article' state={{role: item.title, }}>{item.title}</Link></li>
     ))
     return     <>
               {links}
               </>
}
const information = [
     {
          title: "Намтар",
          
     },
     {
          title: "Баримтууд",
     },
     {
          title: "Ургийн мод",
     },
     {
          title: "Монголчуудад",
     },
     {
          title: "Билэг тэмдэг",
     },
     {
          title: "Бидний талаар",
     },
]