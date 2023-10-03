import './App.css';
import requests from './requests';
import Row from './Row';
import Banner from './Banner';

function App() {
  return (
    <div className="app">
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isRowLarge/>
      <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
      <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchURL={requests.fecthComedyMovies}/>
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchURL={requests.fetchRomaceMovies}/>
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
