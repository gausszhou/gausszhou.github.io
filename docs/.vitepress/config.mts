import { defineConfig } from 'vitepress';
// import { sidebar } from "./sidebar";
// import { navbar } from './navbar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: '../dist',
  title: "Gauss Zhou",
  description: "Create Something Interesting",
  themeConfig: {
    search: {
      provider: 'local',
    },
    // https://vitepress.dev/reference/default-theme-config
    // nav: navbar,
    // sidebar: sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/gausszhou' }
    ],
    
  },
  
})
