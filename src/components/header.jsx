import '../styles/header.css'
import Logo from '../assets/logo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Information from './information'
export default function Header(){
     return <header>
          <div className="logo">
               <Link to='/historyreflection'>
               <img src={Logo} alt="Logo" />
               <h1>History Reflection</h1>
               </Link>
          </div>
          <ul className='links'>
               <span>
               <Links/>
               <li><Link to='/AboutUs'>Бидний талаар</Link></li>
               </span>
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
          <li><Link to='/AboutUs'>Бидний талаар</Link></li>
          <li className='dropdownbtn' onClick={toggleDropdown}>Түүхийн талаар
          <i class={`fa fa-angle-${!dropdown ? "down" : "up"}`}>
          </i>
          <div style={{height: dropdown ? "300px" : "0", opacity: dropdown ? '100' : "0"}}>
               <Links/>
               </div>
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
          articleOneParagraphTwo: item.articleOneParagraphTwo,
          articleOneParagraphThree: item.articleOneParagraphThree,
          articleOneParagraphFour: item.articleOneParagraphFour,
          articleOneParagraphFive: item.articleOneParagraphFive,
          articleOneParagraphSix: item.articleOneParagraphSix,
          articleOneParagraphTitle: item.articleOneParagraphTitle,
          articleOneParagraphTwoTitle: item.articleOneParagraphTwoTitle,
          articleOneParagraphThreeTitle: item.articleOneParagraphThreeTitle,
          articleOneParagraphFourTitle: item.articleOneParagraphFourTitle,
          articleOneParagraphFiveTitle: item.articleOneParagraphFiveTitle,
          articleOneParagraphSixTitle: item.articleOneParagraphSixTitle,
          articleOneFacts: item.articleOneFacts,
          articleOneParagraphImage: item.articleOneParagraphImage
     }}
          >{item.title}</Link></li>
     ))
  
     return     <>
               {links}
               </>
}
const information = Information;