import './App.scss';
import FetchBox from './Components/FetchBox';

export default function App() {
  const url = 'http://localhost:7070'
  return (
    <div className="app">
      <FetchBox url={url} opts = 'data' />
      <FetchBox url={url} opts = 'loading' />
      <FetchBox url={url} opts = 'error' />
    </div>
  );
}