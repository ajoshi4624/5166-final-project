import { useEffect, useState } from 'react';
import api from '../api';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Summary() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get('/chart/giving-tuesday')
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!data) return <p>Loading chart...</p>;

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: `Donations (${data.currency || 'USD'})`,
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
        <p className="page-kicker">Analytics</p>
        <h1 className="page-title">Giving Tuesday Donations</h1>
        <p className="page-subtitle">
          Modeled distribution of Giving Tuesday 2025 gifts across key student
          support areas at UNC Charlotte.
        </p>
      </header>

      <section aria-labelledby="summary-heading" className="card chart-card">
        <h2 id="summary-heading" className="visually-hidden">
          Giving Tuesday bar chart
        </h2>
        <div className="chart-wrapper" role="img" aria-label={data.title}>
          <Bar data={chartData} options={options} />
        </div>
        <p>
          {}
        </p>
      </section>
    </>
  );
}