import { WebAppUser } from "@twa-dev/types";
import { defineStore } from "pinia";
import { useTelegram } from "../composable";

interface State {
    user: WebAppUser | null
    inited: boolean
}

export const useAppStore = defineStore("app-store", {
    state: (): State => ({
        user: null,
        inited: false,
    }),
    getters: {
        userEmpty: (state): boolean => {
            return !state.user
        }
    },
    actions: {
        init() {
            const { user } = useTelegram()

            if (user && user.id && !user.is_bot) {
                this.user = user
            }

            this.inited = true
        }
    }
})