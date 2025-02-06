import { useLocation } from "react-router-dom";
import '../styles/article.css'
export default function Article(props){
     const location = useLocation()
     const role = location.state?.role;
     const description = location.state?.para1;

    return <main className="article">
          <div className="info">
               <div className="heading">
               <h1>{role}</h1>
               <p>{description}</p>
               <hr />
               </div>
          </div>
     </main>
}