import './App.css';
import Card from './components/card'
import {data} from './constants/data'

function App() {

  return (
    <div className="App">      
      <div className="card1">
            <h1><b>Noticias</b></h1>
        </div>
      {data.map(news => (
      <Card img={news.image} title={news.title} text={news.text} firma={news.firma} more={news.url} />
      ))}
    </div>
  );
}

export default App;
