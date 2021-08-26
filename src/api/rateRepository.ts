import { AxiosResponse } from "axios";

import request from "./request";
import { RateResponse } from "../features/accounts/types";

export const getRates = async (url: string): Promise<number> => {
    try {
        const response: AxiosResponse<RateResponse> = await request<RateResponse>('GET', url)

        return response?.data?.result
    } catch (e) {
        throw new Error(e)
    }


}
