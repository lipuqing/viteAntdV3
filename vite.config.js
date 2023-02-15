import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'

// const path = require('path')
import {
  resolve
} from 'path' // 主要用于alias文件路径别名


import Components from 'unplugin-vue-components/vite'
import {
  AntDesignVueResolver
} from 'unplugin-vue-components/resolvers'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
  ],
  // base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, '.', 'src')
    }
  },
  server: {
    host: "192.168.211.21", // ip
    port: 8080, // 端口号
    open: true, // 是否自动在浏览器打开
    https: false, // 是否开启 https
  },
  envDir: '', // 生产环境
  build: {
    outDir: 'dist', //指定打包输出路径
    cssCodeSplit: true, //css代码拆分,禁用则所有样式保存在一个css里面
    // assetsDir: 'assets', //指定静态资源存放路径
    // sourcemap: false, //是否构建source map 文件

    // 生产环境取消 console
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },

    //会打包出 css js 等文件夹 目录显得清晰
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]'
      }
    }
  },
})