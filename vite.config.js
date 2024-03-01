import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import process from "process"; // Import the 'process' module

// VITE_BASE_URL is the base URL for the API.
// It is used to fetch data from either mocked or backend data sources.
//
// the different base is needed because the app is deployed on different environments
// '/p12' for github pages
// '/' for netlify or vercel
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    base: env.VITE_BASE_URL,
  };
});
