import Logo from './assets/logo.png'
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/header'
import Article from './pages/article'
import NoPageFound from './components/nopagefound';

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
                <Link to={`/article/${information[0].title}`}state={{role: information[0].title }}>Эхлэх</Link>
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
          <div className="historybackground">
            <article>
              <img src={Logo} alt="" />
              <p>Бидний зорилго нь та Монголын түүхийн агуу хүнүүдийг мэдэхэд туслах явдал юм. Монголын түүх нь олон эртний баатар, эзэнт гүрэн, түүхэн үйл явдлаар баялаг. Та тэдний тухай мэдэж, түүхийн үнэт өвийг ойлгож, улс орныхоо түүхийг бахархан мэдэх болно.</p>
            </article>
          </div>
        </main>
        }></Route>
        <Route path='article/:name' element={<Article/>}></Route>
        <Route path='/article'element={<NoPageFound/>}></Route>
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

export default App;
