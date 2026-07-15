import { Bar } from "react-chartjs-2";
import type { Coin } from "../../types/coin";


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  coins: Coin[];
};

function ChartCard({ coins }: Props) {

  const topCoins = coins.slice(0, 10);

  const data = {
    labels: topCoins.map((coin) => coin.symbol.toUpperCase()),

    datasets: [
      {
        label: "Preço (USD)",
        data: topCoins.map((coin) => coin.current_price),
      },
    ],
  };

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h2 className="text-xl font-bold mb-4">
        Top 10 Criptomoedas
      </h2>

      <Bar data={data} />
    </div>
  );
}

export default ChartCard;