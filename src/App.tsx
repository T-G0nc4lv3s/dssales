import './App.css';
import Header from './components/header/index';
import Filter from './components/filter/index';
import SalesByDate from './components/sales-by-date/index';
import SalesSummary from './components/sales-summary/index';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesByDate />
        <div className="sales-overview-container">
          <SalesSummary />
        </div>
      </div>
    </>
  );
}

export default App;
