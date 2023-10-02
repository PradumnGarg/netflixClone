import './App.css';
import requests from './requests';
import Row from './Row';

function App() {
  return (
    <div className="App">
      <h1>Hey there!! Let's build frontend today</h1>
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
    </div>
  );
}

export default App;
