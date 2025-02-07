import { useLocation } from "react-router-dom";
import test from '../assets/tent.jpg'
import '../styles/article.css'
export default function Article(props){
    return <Blog/>
}
function Blog(){
     const location = useLocation()
     const title = location.state?.role;
     const description = location.state?.description;
     const articleOneImage = location.state?.articleOneImage;
     const articleOneTitle = location.state?.articleOneTitle;
     const articleOneDate = location.state?.articleOneDate;
     const articleOneSubtitle = location.state?.articleOneSubtitle;
     return <main className="article">
     <div className="info">
          <div className="heading">
          <h1>{title}</h1>
          <p>{description}</p>
          </div>
          <div className="text">
          <span className="image"><img src={articleOneImage} alt="" /></span>
          <div className="summary">
               <h1 className="title">
                    {articleOneTitle}
               <p className="date">
                    {articleOneDate}
               </p>
               </h1>
               <p className="subtitle">
                    {articleOneSubtitle}
               </p>
               <hr />
               <p className="more">Show More 
               <i className="fa fa-angle-right"></i>
               </p>
               </div>
          </div>
     </div>
</main>
}