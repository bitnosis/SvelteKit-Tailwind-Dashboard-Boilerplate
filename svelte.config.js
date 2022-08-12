import preprocess from 'svelte-preprocess';
import netlify from '@sveltejs/adapter-netlify';
const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess(),

    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        /*adapter: vercel({
            // if true, will deploy the app using edge functions
            // (https://vercel.com/docs/concepts/functions/edge-functions)
            // rather than serverless functions
            edge: true,

            // an array of dependencies that esbuild should treat
            // as external when bundling functions
            external: [],

            // if true, will split your app into multiple functions
            // instead of creating a single one for the entire app
            split: false
        }),*/
        adapter: netlify(),
        /*
        vite: {
        	ssr: {
        		noExternal: dev ? [] : ['@supabase/supabase-js']
        	}
        },*/
        appDir: '_app',
        files: {
            assets: 'static'
        }
    }
};

export default config;