import { AxiosError } from "axios"

import { api } from "../api"

export const WhitelistApi = {
    async userInWhitelist(userId: number): Promise<[ ok: boolean, error: AxiosError | null ]> {
        try {
            const ok = await api.post("/whitelist/", null, {
                params: {
                    userId
                }
            }).then(r => r.data) 

            if (!ok) {
                throw new AxiosError("unknow error", "400")
            }

            return [true, null]
        } catch (error) {
            console.error(error)
            return [false, error as AxiosError]
        }
    }
}