import { toast } from '@zerodevx/svelte-toast';

export const success = (m) =>
    toast.push(m, {
        theme: {
            '--toastBackground': 'green',
            '--toastColor': 'white',
            '--toastBarBackground': 'olive'
        }
    });

export const error = (m) =>
    toast.push(m, {
        theme: {
            '--toastBackground': 'red',
            '--toastColor': 'white',
            '--toastBarBackground': 'olive'
        }
    });

export const warning = (m) =>
    toast.push(m, {
        theme: {
            '--toastBackground': 'orange',
            '--toastColor': 'white',
            '--toastBarBackground': 'olive'
        }
    });