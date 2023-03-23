import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [
                    "babel-plugin-macros",
                    [
                        "babel-plugin-styled-components",
                        {
                            displayName: process.env.NODE_ENV !== "production",
                        },
                    ],
                ],
            },
        }),
        svgr(),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    optimizeDeps: {
        esbuildOptions: {
            target: "es2020",
        },
    },
    esbuild: {
        logOverride: { "this-is-undefined-in-esm": "silent" },
    },
    build: {
        chunkSizeWarningLimit: 3000,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes("node_modules")) {
                        return id
                            .toString()
                            .split("node_modules/")[1]
                            .split("/")[0]
                            .toString();
                    }
                },
            },
        },
    },
});
