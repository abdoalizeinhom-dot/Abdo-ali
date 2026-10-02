import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import netlify from '@netlify/vite-plugin-tanstack-start'

const config = defineConfig({
  plugins: [
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    netlify(),
    tanstackStart(),
    viteReact(),
  ],
})

export default config

```import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


import '../styles.css'

const siteName = 'Netlify App'
const siteDescription = 'A Netlify web app'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: siteName,
      },
      {
        name: 'description',
        content: siteDescription,
      },
      {
        property: 'og:title',
        content: siteName,
      },
      {
        property: 'og:description',
        content: siteDescription,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
@import "tailwindcss" source("../");

body {
  margin: 0;
  font-family: system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
}

code {
  font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
}
import { Link, createFileRoute } from '@tanstack/react-router'
import products from '@/data/products'

export const Route = createFileRoute('/')({
  component: ProductsIndex,
})

function ProductsIndex() {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-16 text-center">Product Company</h1>
      <div className="max-w-7xl mx-auto">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`flex flex-col md:flex-row items-stretch gap-8 mb-32 ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="w-full md:w-[60%]">
              <Link
                to="/products/$productId"
                params={{
                  productId: product.id.toString(),
                }}
                className="block"
              >
                <div className="w-full aspect-[4/3]">
                  <div className="w-full h-full overflow-hidden rounded-2xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Link>
            </div>

            <div className="w-full md:w-[50%] md:my-12">
<!DOCTYPE html><html lang="en"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>PawPlay Toys — Dog Toys Your Pup Will Love</title><link rel="modulepreload" href="/assets/main-BwC2do-v.js"/><link rel="stylesheet" href="/assets/styles-DEp9-oex.css"/></head><body><header class="p-4 flex items-center justify-between bg-amber-900 text-white shadow-lg"><nav class="flex items-center gap-4"><header class="p-4 flex items-center bg-amber-900 text-white shadow-lg"><button class="p-2 hover:bg-amber-800 rounded-lg transition-colors" aria-label="Open menu"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu" aria-hidden="true"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg></button><h1 class="ml-4 text-xl font-bold"><a href="/" class="flex items-center gap-2"><span>🐾</span> PawPlay Toys</a></h1></header><aside class="fixed top-0 left-0 h-full w-80 bg-amber-950 text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col -translate-x-full"><div class="flex items-center justify-between p-4 border-b border-amber-800"><h2 class="text-xl font-bold">Navigation</h2><button class="p-2 hover:bg-amber-900 rounded-lg transition-colors" aria-label="Close menu"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button></div><nav class="flex-1 p-4 overflow-y-auto"><a href="/" class="flex items-center gap-3 p-3 rounded-lg hover:bg-amber-900 transition-colors mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house" aria-hidden="true"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg><span class="font-medium">Home</span></a><a href="/faq" class="flex items-center gap-3 p-3 rounded-lg hover:bg-amber-900 transition-colors mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-question-mark" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg><span class="font-medium">FAQ</span></a></nav></aside></nav><a href="/" class="text-xl font-bold flex items-center gap-2"><span>🐾</span> PawPlay Toys</a></header><p>Not Found</p><script class="$tsr" id="$tsr-stream-barrier">(self.$R=self.$R||{})["tsr"]=[];self.$_TSR={h(){this.hydrated=!0,this.c()},e(){this.streamEnded=!0,this.c()},c(){this.hydrated&&this.streamEnded&&(delete self.$_TSR,delete self.$R.tsr)},p(e){this.initialized?e():this.buffer.push(e)},buffer:[]};
;$_TSR.router=($R=>$R[0]={manifest:$R[1]={routes:$R[2]={__root__:$R[3]={preloads:$R[4]=["/assets/main-BwC2do-v.js"],assets:$R[5]=[$R[6]={tag:"script",attrs:$R[7]={type:"module",async:!0},children:"import(\"/assets/main-BwC2do-v.js\")"}]}}},matches:$R[8]=[$R[9]={i:"__root__�",u:1772576258791,s:"success",ssr:!0}],lastMatchId:"__root__�"})($R["tsr"]);$_TSR.e();document.currentScript.remove()</script><script type="module" async="">import("/assets/main-BwC2do-v.js")</script></body></html># AGENTS.md

This document provides an overview of the project structure for developers and AI agents working on this codebase.

## Project Overview

An interactive resume/portfolio application with an AI-powered assistant. Built with TanStack Start and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| UI Components | Radix UI + custom components |
| Content | Content Collections (type-safe markdown) |
| AI | TanStack AI with multi-provider support |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure
