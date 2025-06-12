import WebApp from '@twa-dev/sdk'

export function useTelegram() {
    const onClose = () => {
        WebApp.close()
    }

    const onToggleButton = () => {
        if(WebApp.MainButton.isVisible) {
            WebApp.MainButton.hide();
        } else {
            WebApp.MainButton.show();
        }
    }
    
    return {
        telegram: WebApp,
        user: WebApp.initDataUnsafe?.user,
        queryId: WebApp.initDataUnsafe?.query_id,
        onClose,
        onToggleButton,
    }
}