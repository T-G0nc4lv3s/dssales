import './styles.css';
import ReactApexCharts from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';

type Props = {
  labels: string[];
  name: string;
  series: number[];
};

function PieChartCard({ labels, name, series }: Props) {
  return (
    <div className="pie-chart-card base-card">
      <ReactApexCharts
        options={buildPieChartConfig(labels, name)}
        type="donut"
        widht="400"
        height="400"
        series={series}
      />
    </div>
  );
}

export default PieChartCard;
