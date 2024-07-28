import './App.css';
import Body from './component/Body';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Body/>
        <Toaster/>
      </header>
    </div>
  );
}

export default App;
