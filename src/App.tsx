import './App.css';
import Header from './components/header/index';
import Filter from './components/filter/index';
import SalesByDate from './components/sales-by-date/index';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesByDate />
      </div>
    </>
  );
}

export default App;
