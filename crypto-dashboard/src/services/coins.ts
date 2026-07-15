import type { Coin } from "../assets/types/coin";
import { Api } from "./api";

export async function getCoins() {
  try {

    const currency = localStorage.getItem("currency") || "usd";

    const response = await Api.get<Coin[]>("/coins/markets", {
      params: {
        vs_currency: currency,
      },
    });

    return response.data;

  } catch (error) {
    console.log("Erro na API:", error);
    throw error;
  }
}