import './App.css';
import Header from './components/header/index';
import Filter from './components/filter/index';
import SalesByDate from './components/sales-by-date/index';
import SalesSummary from './components/sales-summary/index';
import PieChartCard from './components/pie-chart-card/index';
import SalesTable from './components/sales-table/index';
import { useState } from 'react';
import { FilterData } from './types';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <SalesByDate filterData={filterData} />
        <div className="sales-overview-container">
          <SalesSummary filterData={filterData} />
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
