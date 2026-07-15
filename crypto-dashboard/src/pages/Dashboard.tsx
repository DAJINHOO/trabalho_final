import { useEffect, useState } from "react";
import type { Coin } from "../assets/types/coin";

import { getCoins } from "../services/coins";

import StatsCard from "../assets/components/StatsCard/StatsCard";
import CoinTable from "../assets/components/CoinTable/CoinTable";
import ChartCard from "../assets/components/ChartCard/ChartCard";
import FilterBar from "../assets/components/FilterBar/FilterBar";
import Loading from "../assets/components/Loading/Loading";
import ErrorMessage from "../assets/ErrorMessage/ErrorMessage";


function Dashboard() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadCoins() {
    try {
      setLoading(true);
      setError("");

      const coinsData = await getCoins();

      setCoins(coinsData);

    } catch (error) {
      console.error(error);

      setError("Não foi possível carregar os dados da API.");

    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCoins();
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  function refresh() {
    loadCoins();
  }

  function exportJson() {
    const blob = new Blob(
      [JSON.stringify(filteredCoins, null, 2)],
      {
        type: "application/json",
      }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "coins.json";
    a.click();

    URL.revokeObjectURL(url);
  }

  function exportCsv() {
    const linhas = filteredCoins.map(
      (coin) =>
        `${coin.name},${coin.symbol},${coin.current_price},${coin.market_cap}`
    );

    const csv = [
      "Nome,Símbolo,Preço,Market Cap",
      ...linhas,
    ].join("\n");

    const blob = new Blob([csv], {
      type: "text/csv",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "coins.csv";
    a.click();

    URL.revokeObjectURL(url);
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold">
        Dashboard de Criptomoedas
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        <StatsCard
          title="Total de Moedas"
          value={coins.length}
        />

        <StatsCard
          title="Bitcoin"
          value={
            coins.find((coin) => coin.id === "bitcoin")?.current_price ?? "-"
          }
        />

        <StatsCard
          title="Ethereum"
          value={
            coins.find((coin) => coin.id === "ethereum")?.current_price ?? "-"
          }
        />

        <StatsCard
          title="Primeira Moeda"
          value={coins[0]?.name ?? "-"}
        />

      </div>

      <FilterBar
        search={search}
        setSearch={setSearch}
        onRefresh={refresh}
        onExportJson={exportJson}
        onExportCsv={exportCsv}
      />

      <CoinTable coins={filteredCoins} />

      <ChartCard coins={filteredCoins} />

    </div>
  );
}

export default Dashboard;