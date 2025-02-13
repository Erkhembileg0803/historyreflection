import '../styles/header.css'
import Logo from '../assets/logo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Header(){
     return <header>
          <div className="logo">
               <Link to='/historyreflection'>
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
     return <><div className='responsivemenu'>
          <li><Link to='/historyreflection'>Гэр</Link></li>
          <li><Link >Бидний талаар</Link></li>
          <li className='dropdownbtn' onClick={toggleDropdown}>Түүхийн талаар
          <i class={`fa fa-angle-${!dropdown ? "down" : "up"}`}>
          </i>
          <div style={{height: dropdown ? "300px" : "0", opacity: dropdown ? '100' : "0"}}><Links/></div>
          </li>
       </div>
       </>
}
function Links(){
     
     const links = information.map((item,index) => (
     <li key={index}><Link to={`/Article/${item.title}`} state={{
          role: item.title, 
          articleOneTitle: item.articleOneTitle, 
          articleOneImage: item.articleOneImage, 
          articleOneDate: item.articleOneDate, 
          articleOneSubtitle: item.articleOneSubtitle, 
          articleOneParagraph: item.articleOneParagraph,
          articleOneParagraphTwo: item.articleOneParagraphTwo}}
          >{item.title}</Link></li>
     ))
  
     return     <>
               {links}
               </>
}
const information = [
  {
       title: "Намтар",
       articleOneImage: "",
       articleOneTitle: "",
       articleOneDate: "",
       articleOneSubtitle: "",
       articleOneParagraph: "",
       articleOneParagraphTwo: "",
  },
  {
       title: "Баримтууд",
       articleOneImage: "",
       articleOneTitle: "",
       articleOneDate: "",
       articleOneSubtitle: "",
       articleOneParagraph: "",
       articleOneParagraphTwo: "",
  },
  {
       title: "Ургийн мод",
       articleOneImage: "",
       articleOneTitle: "",
       articleOneDate: "",
       articleOneSubtitle: "",
       articleOneParagraph: "",
       articleOneParagraphTwo: "",
  },
  {
       title: "Монголчуудад",
       articleOneImage: "",
       articleOneTitle: "",
       articleOneDate: "",
       articleOneSubtitle: "",
       articleOneParagraph: "",
       articleOneParagraphTwo: "",
       
  },
  {
       title: "Билэг тэмдэг",
       articleOneImage: "",
       articleOneTitle: "",
       articleOneDate: "",
       articleOneSubtitle: "",
       articleOneParagraph: "",
       articleOneParagraphTwo: "",
  },
  {
       title: "Бидний талаар",
       articleOneImage: "",
       articleOneTitle: "",
       articleOneDate: "",
       articleOneSubtitle: "",
       articleOneParagraph: "",
       articleOneParagraphTwo: "",
  },
]
