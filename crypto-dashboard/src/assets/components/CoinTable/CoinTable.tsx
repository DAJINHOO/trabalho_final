
import { Link } from "react-router-dom";
import type { Coin } from "../../types/coin";

type CoinTableProps = {
  coins: Coin[];
};

function CoinTable({ coins }: CoinTableProps) {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow">
      <table className="w-full text-left">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="p-3">Moeda</th>
            <th className="p-3">Símbolo</th>
            <th className="p-3">Preço</th>
            <th className="p-3">Market Cap</th>
            <th className="p-3">24h</th>
            <th className="p-3"></th>
          </tr>
        </thead>

        <tbody>
          {coins.map((coin) => (
            <tr
              key={coin.id}
              className="border-b hover:bg-gray-100"
            >
              <td className="p-3 flex items-center gap-2">
                <img
                  src={coin.image}
                  alt={coin.name}
                  className="w-8 h-8"
                />

                {coin.name}
              </td>

              <td className="p-3 uppercase">
                {coin.symbol}
              </td>

              <td className="p-3">
                ${coin.current_price.toLocaleString()}
              </td>

              <td className="p-3">
                ${coin.market_cap.toLocaleString()}
              </td>

              <td
                className={`p-3 ${
                  coin.price_change_percentage_24h >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>

              <td className="p-3">
                <Link
                  to={`/coin/${coin.id}`}
                  className="text-blue-600 hover:underline"
                >
                  Ver detalhes
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CoinTable;