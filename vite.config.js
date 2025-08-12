import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import App from './App.jsx'


// https://vite.dev/config/
export default defineConfig({
  base: '/reactcicd/', // Must match your repo name
  plugins: [react()],
})
