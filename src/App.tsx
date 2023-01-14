import './App.css';
import Header from './components/header/index';
import Filter from './components/filter/index';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
      </div>
    </>
  );
}

export default App;
