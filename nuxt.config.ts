import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: true,
    target: 'static',
    app: {
        head: {
            title:'Castillo Junior - Fullstack Web Developer - @cjfswd',
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.0/devicon.min.css'
                },
                { rel:"icon", type:"image/png", href:"/ico.png"}
            ],
            script: [
                { src: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js' },
                { src: 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js' },
            ]
        }
    },
    css: ['@/assets/css/tailwind.css','@mdi/font/css/materialdesignicons.min.css'],
    modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css'
    },
    vue: {
        compilerOptions: {
            isCustomElement: (tag) => tag.includes('-')
        }
    }
})

