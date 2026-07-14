import { useEffect, useState } from "react";
import { getCoins } from "../services/coins";
import type { Coin } from "../assets/types/coin";



function Dashboard() {

  const [coins, setCoins] = useState<Coin[]>([]);

  async function loadCoins() {

    const coinsData = await getCoins();

    setCoins(coinsData);

  }
  


  useEffect(() => {

    loadCoins()

  }, []);



    return (
  <div>
    {coins.map((coin) => (
      <p key={coin.id}>
        {coin.name}</p>
    ))}
  </div>
);



}

export default Dashboard;