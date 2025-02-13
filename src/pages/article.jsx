import { useLocation, useParams } from "react-router-dom";
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
function Blog() {
    const [modal, setModal] = useState(false);
    const location = useLocation();

    const articleOneImage = location.state?.articleOneImage;
    const articleOneTitle = location.state?.articleOneTitle;
    const articleOneDate = location.state?.articleOneDate;
    const articleOneSubtitle = location.state?.articleOneSubtitle;
    const articleOneParagraph = location.state?.articleOneParagraph;
    const articleOneParagraphTwo = location.state?.articleOneParagraphTwo;
    const articleOneParagraphThree = location.state?.articleOneParagraphThree;
    const articleOneParagraphFour = location.state?.articleOneParagraphFour;
    const articleOneParagraphFive = location.state?.articleOneParagraphFive;
    const articleOneParagraphSix = location.state?.articleOneParagraphSix;
    const articleOneParagraphTitle = location.state?.articleOneParagraphTitle;
    const articleOneParagraphTwoTitle = location.state?.articleOneParagraphTwoTitle;
    const articleOneParagraphThreeTitle = location.state?.articleOneParagraphThreeTitle;
    const articleOneParagraphFourTitle = location.state?.articleOneParagraphFourTitle;
    const articleOneParagraphFiveTitle = location.state?.articleOneParagraphFiveTitle;
    const articleOneParagraphSixTitle = location.state?.articleOneParagraphSixTitle;
    const articleOneParagraphImage = location.state?.articleOneParagraphImage;
    // Fix: Ensure articleOneFacts is an array
    const articleOneParagraphFacts = location.state?.articleOneFacts?.map((item, index) => (
        <li key={index}>{item}</li>
    )) ?? []

    const data = [
        {
            articleImage: articleOneImage,
            articleTitle: articleOneTitle,
            articleDate: articleOneDate,
            articleSubtitle: articleOneSubtitle,
            articleParagraphOne: articleOneParagraph,
            articleParagraphTwo: articleOneParagraphTwo,
            articleParagraphThree: articleOneParagraphThree,
            articleParagraphFour: articleOneParagraphFour,
            articleParagraphFive: articleOneParagraphFive,
            articleParagraphSix: articleOneParagraphSix,
            articleParagraphTitle: articleOneParagraphTitle,
            articleParagraphTwoTitle: articleOneParagraphTwoTitle,
            articleParagraphThreeTitle: articleOneParagraphThreeTitle,
            articleParagraphFourTitle: articleOneParagraphFourTitle,
            articleParagraphFiveTitle: articleOneParagraphFiveTitle,
            articleParagraphSixTitle: articleOneParagraphSixTitle,
            articleParagraphFacts: articleOneParagraphFacts,
            articleParagraphImage: articleOneParagraphImage,
        },
    ];

    const toggleModal = () => {
        setModal(!modal);
    };

    // Update body overflow when modal is toggled
    useEffect(() => {
        document.body.style.overflow = modal ? "hidden" : "auto";
    }, [modal]);

    const generateArticles = data.map((item, index) => (
        <div className="text" key={index}>
            <span className="image"><img src={`${item.articleImage}`} alt="ArticleImage" /></span>
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
            {modal && (
                <div className="modal">
                    <i className="fa fa-close" onClick={toggleModal}></i>
                    <div className="container">
                        <img className="image" src={item.articleImage} alt="modalImage" />
                        <div className="paragraphs">
                            <h1>{item.articleTitle}</h1>
                            <hr />
                            <h3>{item.articleParagraphTitle}</h3>
                            <p><img src={item.articleParagraphImage} alt="" />{item.articleParagraphOne}</p>
                          
                            <h3>{item.articleParagraphTwoTitle}</h3>
                            <p>{item.articleParagraphTwo}</p>
                        
                            <h3>{item.articleParagraphThreeTitle}</h3>
                            <p>{item.articleParagraphThree}</p>
                         
                            <h3>{item.articleParagraphFourTitle}</h3>
                            <p>{item.articleParagraphFour}</p>
                      
                            <h3>{item.articleParagraphFiveTitle}</h3>
                            <p>{item.articleParagraphFive}</p>

                            <h3>{item.articleParagraphSixTitle}</h3>
                            <p>{item.articleParagraphSix}</p>
                            <h3>Баримтууд</h3>
                            <ol>
                                {item.articleParagraphFacts}
                            </ol>
                        </div>
                    </div>
                </div>
            )}
        </div>
    ));

    return generateArticles;
}