import { defineConfig } from 'vitepress';
import { sidebar } from "./sidebar";
import { navbar } from './navbar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: '../dist',
  title: "Gauss Zhou",
  description: "种一棵树最好的时间是十年前，其次是现在",
  themeConfig: {
    search: {
      provider: 'local',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: navbar,
    sidebar: sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/gausszhou' }
    ],
    
  },
  
})
