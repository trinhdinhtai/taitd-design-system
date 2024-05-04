import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/*@(ts|tsx)"],
  dts: true,
  format: ["esm"],
  target: "esnext",
  banner: {
    js: '"use client";',
  },
});
