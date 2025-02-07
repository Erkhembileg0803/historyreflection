import { useLocation } from "react-router-dom";
import test from '../assets/tent.jpg'
import '../styles/article.css'
export default function Article(props){
     const location = useLocation()
     const title = location.state?.role;
     const description = location.state?.description;
    return <main className="article">
    <div className="info">
         <div className="heading">
         <h1>{title}</h1>
         <p>{description}</p>
         </div>
          <Blog/>
    </div>
    </main>
}
function Blog(){
     const location = useLocation()
     const articleOneImage = location.state?.articleOneImage;
     const articleOneTitle = location.state?.articleOneTitle;
     const articleOneDate = location.state?.articleOneDate;
     const articleOneSubtitle = location.state?.articleOneSubtitle;
     const data = [
          {
               articleImage: articleOneImage,
               articleTitle: articleOneTitle,
               articleDate: articleOneDate,
               articleSubtitle: articleOneSubtitle
          },

     ]
     console.log(data)
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
                  <p className="more">
                      Show More 
                      <i className="fa fa-angle-right"></i>
                  </p>
              </div>
          </div>
      ));
     return generateArticles
 
}