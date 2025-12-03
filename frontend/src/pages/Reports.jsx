import { useEffect, useState } from 'react';
import api from '../api';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export default function Reports() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get('/chart/entrepreneurship-enrollment')
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!data) return <p>Loading chart...</p>;

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: data.seriesLabel || 'Projected students',
        data: data.values
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: { legend: { position: 'top' } }
  };

  return (
    <>
      <header className="page-header">
        <p className="page-kicker">Forecast</p>
        <h1 className="page-title">
          Entrepreneurship Enrollment Projections
        </h1>
        <p className="page-subtitle">
          A five-year projection of how interest in the new M.S. in
          Entrepreneurship program could grow over time.
        </p>
      </header>

      <section aria-labelledby="reports-heading" className="card chart-card">
        <h2 id="reports-heading" className="visually-hidden">
          Enrollment line chart
        </h2>
        <div className="chart-wrapper" role="img" aria-label={data.title}>
          <Line data={chartData} options={options} />
        </div>
        <p>
          {}
        </p>
      </section>
    </>
  );
}