import './App.css';
import Header from './components/header/index';
import Filter from './components/filter/index';
import SalesByDate from './components/sales-by-date/index';
import SalesSummary from './components/sales-summary/index';
import PieChartCard from './components/pie-chart-card/index';
import SalesTable from './components/sales-table/index';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesByDate />
        <div className="sales-overview-container">
          <SalesSummary />
          <PieChartCard
            name="Lojas"
            labels={['Araguari', 'Ituiutaba', 'Uberaba', 'Uberlândia']}
            series={[25, 35, 20, 20]}
          />
          <PieChartCard
            name="Pagamento"
            labels={['Crédito', 'Débito', 'Dinheiro']}
            series={[50, 30, 20]}
          />
        </div>
        <SalesTable />
      </div>
    </>
  );
}

export default App;
