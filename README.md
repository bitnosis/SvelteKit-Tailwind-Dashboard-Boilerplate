# SvelteKit & Tailwindcss (w Supabase authentication)

a Sveltekit starter template using Tailwind CSS.
And Supabase for User Authentication

This also includes the full tailwind CSS file in the app.html file.  Remove it before you deploy!!

It also does include the compiled Tailwind on build, but the only reason I have it in app.html as well, is for ease of development, and to avoid wierdness with dynamic styles in Svelte.

To get it to work with supabase you need to have your own account....and include these two keys in a .env file

VITE_SVELTE_APP_SUPABASE_URL=https://yoursupabase.com
VITE_SVELTE_APP_SUPABASE_ANON_KEY=yoursupabasekey

This is setup to deploy on both Netlify or Vercel.
Its setup for netlify right now...but you can just change the adapter to make it work on Vercel (although I had some issues)

## Netlify
```
 In svelte.config.js
 
 import netlify from '@sveltejs/adapter-netlify';
 kit: {
   adapter: netlify()
        
        ....

```


## Vercel
```
 In svelte.config.js
 
 import vercel from '@sveltejs/adapter-vercel';
 kit: {
   adapter: vercel({
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
        }),
   }
        
        ....

```



## Install
```
git clone https://github.com/bitnosis/sveltekit-tailwind-supabase-starter.git sveltekit-tailwind-supabase

cd sveltekit-tailwind-supabase

npm install
```

## Dev
`npm run dev`

## Build
`npm run build`

