import { useLocation, useParams } from "react-router-dom";
import test from '../assets/tent.jpg'
import '../styles/article.css'
import { useState, useEffect} from "react";
import NoPageFound from "../components/nopagefound";
export default function Article(){
     const location = useLocation()
     const title = location.state?.role;
     const description = location.state?.description;
     const {name} = useParams()
     const main = title === name ?
     (<main className="article">
            <div className="info">
         <div className="heading">
         <h1>{title}</h1>
         <p>{description}</p>
         </div>
          <Blog/>
        </div>
        </main>) : (<NoPageFound/>)
    return main;
}
function Blog(){
     const [modal, setModal] = useState(false);
     function toggleModal(){
          setModal(!modal)
     }
     modal ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
     const location = useLocation()
     const articleOneImage = location.state?.articleOneImage;
     const articleOneTitle = location.state?.articleOneTitle;
     const articleOneDate = location.state?.articleOneDate;
     const articleOneSubtitle = location.state?.articleOneSubtitle;
     const articleOneParagraph = location.state?.articleOneParagraph;
     const articleOneParagraphTwo = location.state?.articleOneParagraphTwo
     console.log(articleOneParagraph)
     const data = [
          {
               articleImage: articleOneImage,
               articleTitle: articleOneTitle,
               articleDate: articleOneDate,
               articleSubtitle: articleOneSubtitle,
               articleParagraphOne: articleOneParagraph,
               articleParagraphTwo: articleOneParagraphTwo,
          },

     ]
     const generateArticles = data.map((item, index) => (
          <div className="text" key={index}>
              <span className="image"><img src={item.articleImage} alt="" /></span>
              <div className="summary">
                  <h1 className="title">
                      {item.articleTitle}
                      <p className="date">
                          {item.articleDate}
                      </p>
                  </h1>
                  <p className="subtitle">
                      {item.articleSubtitle}
                  </p>
                  <hr />
                  <p className="more" onClick={toggleModal}>
                      Show More 
                      <i className="fa fa-angle-right"></i>
                  </p>
              </div>
              {modal && <div className="modal">
               <i className="fa fa-close"onClick={toggleModal}></i>
               <div className="container">
               <img className="image" src={item.articleImage}>
               </img>
               <div className="paragraphs">
                    <h1>{item.articleTitle}</h1>
                    <hr />
                    <p>{item.articleParagraphOne}</p>
                    <hr />
                    <p>{item.articleParagraphTwo}</p>
               </div>
            </div>
          </div>}
          </div>
      ));
     return generateArticles
 
}
