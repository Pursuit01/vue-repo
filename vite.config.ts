import {defineConfig} from "vite"
import path from "path"
import vue from "@vitejs/plugin-vue"
import dts from "vite-plugin-dts"
export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true
    })
  ],
  build: {
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    },
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "shr-vue",
      fileName: (format: any) => `index.${format}.js`,
      formats: ["es", "umd"]
    }
  }
})
