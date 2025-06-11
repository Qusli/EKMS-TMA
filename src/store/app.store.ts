import { WebAppUser } from "@twa-dev/types";
import { defineStore } from "pinia";
import { useTelegram } from "../composable";
import { WhitelistApi } from "../api/whitelist";

interface State {
    user: WebAppUser | null
    accessed: boolean
    loading: boolean
    inited: boolean
}

export const useAppStore = defineStore("app-store", {
    state: (): State => ({
        user: null,
        accessed: false,
        loading: false,
        inited: false,
    }),
    getters: {
        userEmpty: (state): boolean => {
            return !state.user
        }
    },
    actions: {
        async init() {
            this.loading = true

            const { user } = useTelegram()

            if (user && user.id && !user.is_bot) {
                this.user = user
            } else {
                throw new Error("User not found")
            }

            const [accessed] = await WhitelistApi.userInWhitelist(user.id)

            if (accessed) {
                this.accessed = true
            }

            this.inited = true
            
            this.loading = false
        }
    }
})