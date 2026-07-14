
import type { Coin } from "../assets/types/coin";
import { Api } from "./api";




export async function getCoins() {

    const response = await Api.get<Coin[]>(
        "/coins/markets"
    )

    return response.data

}