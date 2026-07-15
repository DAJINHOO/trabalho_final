import { useEffect, useState } from "react";

import type { Coin } from "../assets/types/coin";
import { getCoins } from "../services/coins";
import ChartCard from "../assets/components/ChartCard/ChartCard";
import CoinTable from "../assets/components/CoinTable/CoinTable";


function Reports() {
  const [coins, setCoins] = useState<Coin[]>([]);

  async function loadCoins() {
    try {
      const data = await getCoins();
      setCoins(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadCoins();
  }, []);

  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold">
        Relatórios
      </h1>

      <ChartCard coins={coins} />

      <CoinTable coins={coins} />

    </div>
  );
}

export default Reports;