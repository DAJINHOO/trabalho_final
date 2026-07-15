import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import type { Coin } from "../assets/types/coin";
import { getCoins } from "../services/coins";

function CoinDetails() {
  const { id } = useParams();

  const [coin, setCoin] = useState<Coin | null>(null);

  async function loadCoin() {
    try {
      const coins = await getCoins();

      const selectedCoin =
        coins.find((item) => item.id === id) || null;

      setCoin(selectedCoin);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadCoin();
  }, [id]);

  if (!coin) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">
          Moeda não encontrada
        </h1>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <div className="flex items-center gap-4">

        <img
          src={coin.image}
          alt={coin.name}
          className="w-20 h-20"
        />

        <div>
          <h1 className="text-3xl font-bold">
            {coin.name}
          </h1>

          <p className="uppercase text-gray-500">
            {coin.symbol}
          </p>
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="bg-white shadow rounded-xl p-4">
          <h2 className="font-semibold">
            Preço Atual
          </h2>

          <p className="text-2xl">
            ${coin.current_price.toLocaleString()}
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-4">
          <h2 className="font-semibold">
            Market Cap
          </h2>

          <p className="text-2xl">
            ${coin.market_cap.toLocaleString()}
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-4">
          <h2 className="font-semibold">
            Variação 24h
          </h2>

          <p
            className={`text-2xl ${
              coin.price_change_percentage_24h >= 0
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        </div>

      </div>

    </div>
  );
}

export default CoinDetails;