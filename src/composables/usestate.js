import { reactive } from "vue";

const state = reactive({
    toasts: [],
    sortMode: 1
});

const TOAST_DURATION = 5; // in seconds

export const useState = () => {
    /* used to identify a toast */
    const getKey = () => (Math.random() + 1).toString(36).substring(7)

    /* Adds a toast and also schedules it for removal after 5s */
    const addToast = (toast) => {
        toast.key = getKey();
        state.toasts.push(toast);

        setTimeout(() => {
            let index = state.toasts.findIndex((t) => t.key === toast.key);
            if (index >= 0) state.toasts.splice(index, 1);
            
        }, TOAST_DURATION * 1000);
    }

    const setSortMode = (mode) => {
        state.sortMode = mode
    }

    return { state, addToast, setSortMode }
}