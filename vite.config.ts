import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  define: {
    __APP_VERSION__: JSON.stringify('v1.0.0'),
    // __CONTRACT_ADDRESS__: JSON.stringify('EQAaQatn2OVF_He6r-TSJX1g5Qc1vfKj6Jo9Y6NZgZqy_j43'),
    __CONTRACT_ADDRESS__: JSON.stringify(''),
    __ADMIN_ADDRESS__: JSON.stringify(''),
    __HOME_URL__: JSON.stringify('https://tonpanda.com/'),
    __HOME_TG_LINK__: JSON.stringify('t.me/tonchina'),
  },
})
