
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/header'
import Article from './pages/article'
import NoPageFound from './components/nopagefound';
import AboutUs from './pages/aboutus'

import Information from './components/information';
const information = Information;
function App() {
  document.body.style.overflow = "auto";
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
      <Routes>
        <Route path='/historyreflection' element={
          <main>
          <div className="introbackground">
            <div className="intro">
              <div className="container">
                <h1>Монголын домог.</h1>
                <p>Эзэнт гүрнийг байгуулсан аугаа баатруудын мөнх домогуудыг эндээс унш.</p>
                <Link to={`/article/${information[0].title}`}state={{
                    role: information[0].title, 
                    articleOneTitle: information[0].articleOneTitle, 
                    articleOneImage: information[0].articleOneImage, 
                    articleOneDate: information[0].articleOneDate, 
                    articleOneSubtitle: information[0].articleOneSubtitle, 
                    articleOneParagraph: information[0].articleOneParagraph,
                    articleOneParagraphTwo: information[0].articleOneParagraphTwo,
                    articleOneParagraphThree: information[0].articleOneParagraphThree,
                    articleOneParagraphFour: information[0].articleOneParagraphFour,
                    articleOneParagraphFive: information[0].articleOneParagraphFive,
                    articleOneParagraphSix: information[0].articleOneParagraphSix,
                    articleOneParagraphTitle: information[0].articleOneParagraphTitle,
                    articleOneParagraphTwoTitle: information[0].articleOneParagraphTwoTitle,
                    articleOneParagraphThreeTitle: information[0].articleOneParagraphThreeTitle,
                    articleOneParagraphFourTitle: information[0].articleOneParagraphFourTitle,
                    articleOneParagraphFiveTitle: information[0].articleOneParagraphFiveTitle,
                    articleOneParagraphSixTitle: information[0].articleOneParagraphSixTitle,
                    articleOneFacts: information[0].articleOneFacts,
                    articleOneParagraphImage: information[0].articleOneParagraphImage

                }}>Эхлэх</Link>
              </div>
            </div>
          </div>
            <CreateBanners/>
            <div className="articlebackground">
            <article>
              <div className="circle"></div>
              <p>Чингис хаан (1162–1227) нь Монголын эзэнт гүрнийг үндэслэгч, аугаа байлдан дагуулагч байв. Тэрээр овог аймгуудаа нэгтгэж, Евразийг эзлэн тэлжээ. Хууль цааз, худалдааг хөгжүүлж, Их засаг хуулийг тогтоосон. Түүнийг нас барсны дараа эзэнт гүрэн улам өргөжсөн.</p>
            </article>
          </div>
        </main>
        }></Route>
        <Route path='article/:name' element={<Article/>}></Route>
        <Route path='/article'element={<NoPageFound/>}></Route>
        <Route path='/AboutUs' element={<AboutUs/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}



function CreateBanners(){

const banners = information.map((banner,index) => (
  <Link to={`/Article/${banner.title}`} state={{role: banner.title, 
    articleOneTitle: banner.articleOneTitle, 
    articleOneImage: banner.articleOneImage, 
    articleOneDate: banner.articleOneDate, 
    articleOneSubtitle: banner.articleOneSubtitle, 
    articleOneParagraph: banner.articleOneParagraph,
    articleOneParagraphTwo: banner.articleOneParagraphTwo}} className='banner'key={index}><p>{banner.title}</p></Link>
))
  return <div className="banners">{banners}</div>
}



export default App;
