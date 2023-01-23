import './App.css';
import Header from './components/header/index';
import Filter from './components/filter/index';
import SalesByDate from './components/sales-by-date/index';
import SalesSummary from './components/sales-summary/index';
import PieChartCard from './components/pie-chart-card/index';
import SalesTable from './components/sales-table/index';
import { useState, useEffect, useMemo } from 'react';
import { FilterData, SalesByStore, PieChartConfig, SalesByPaymentMethod } from './types';
import { buildFilterParams } from './utils/request';
import { buildSalesByStoreChart, buildSalesByPaymentMethod } from './helpers';
import { makeRequest } from './utils/request';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const [salesByStore, setSalesByStore] = useState<PieChartConfig>();
  const [salesByPaymentMethod, setSalesByPaymentMethod] = useState<PieChartConfig>();

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesByStore[]>('/sales/by-store', { params })
      .then((response) => {
        const newSalesByStore = buildSalesByStoreChart(response.data);
        setSalesByStore(newSalesByStore);
        console.log(response.data);
      })
      .catch(() => {
        console.log('Error to fetch sales by store');
      });
  }, [params]);

  useEffect(() => {
    makeRequest
      .get<SalesByPaymentMethod[]>('/sales/by-payment-method', { params })
      .then((response) => {
        const newSalesByPaymentMethod = buildSalesByPaymentMethod(response.data);
        setSalesByPaymentMethod(newSalesByPaymentMethod);
        console.log(response.data);
      })
      .catch(() => {
        console.log('Error to fetch sales by payment method');
      });
  }, [params]);

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
          <PieChartCard name="Lojas" labels={salesByStore?.labels} series={salesByStore?.series} />
          <PieChartCard
            name="Pagamento"
            labels={salesByPaymentMethod?.labels}
            series={salesByPaymentMethod?.series}
          />
        </div>
        <SalesTable filterData={filterData} />
      </div>
    </>
  );
}

export default App;
