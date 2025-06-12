import WebApp from "@twa-dev/sdk";

import { defineStore } from "pinia";
import { useTelegram } from "../composable";

type ThemeParams = Partial<typeof WebApp.themeParams>  

export const useThemeStore = defineStore("theme-store", {
    state: (): ThemeParams => ({}),
    getters: {},
    actions: {
        init() {
            const { telegram } = useTelegram()

            if (telegram?.themeParams) {
                this.$patch({
                    ...telegram.themeParams
                })
            }
        }
    }
})