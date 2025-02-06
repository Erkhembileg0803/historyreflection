import Logo from './assets/logo.png'
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/header'
import Article from './pages/article'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
      <Routes>
        <Route path='/' element={
          <Homepage/>
        }></Route>
        <Route path='article' element={<Article/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

function Homepage(){
  return <main>
    <div className="introbackground">
      <div className="intro">
        <div className="container">
          <h1>Монголын домог.</h1>
          <p>Эзэнт гүрнийг байгуулсан аугаа баатруудын мөнх домогуудыг эндээс унш.</p>
          <Link to="Article"state={{role: information[0].title }}>Эхлэх</Link>
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
}

function CreateBanners(){

const banners = information.map((banner,index) => (
  <Link to='Article' state={{role: banner.title, }} className='banner'key={index}><p>{banner.title}</p></Link>
))
  return <div className="banners">{banners}</div>
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

export default App;
