import { toast } from '@zerodevx/svelte-toast';

export const success = (m) =>
    toast.push(m, {
        theme: {
            '--toastBackground': 'green',
            '--toastColor': 'white',
            '--toastBarBackground': 'white'
        }
    });

export const error = (m) =>
    toast.push(m, {
        theme: {
            '--toastBackground': 'red',
            '--toastColor': 'white',
            '--toastBarBackground': 'white'
        }
    });

export const warning = (m) =>
    toast.push(m, {
        theme: {
            '--toastBackground': 'orange',
            '--toastColor': 'white',
            '--toastBarBackground': 'white'
        }
    });