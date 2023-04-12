import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className="App">
      {/*Sidebar */}
      <Sidebar />

      {/*Feed*/}
      <Feed />

      {/* Widgets */}
    </div>
  );
}

export default App;
