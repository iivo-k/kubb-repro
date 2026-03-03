import { defineConfig } from "@kubb/core";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginZod } from "@kubb/plugin-zod";

export default defineConfig(() => {
  return [
    {
      root: ".",
      input: {
        path: "../openapi/example-api.yaml",
      },
      output: {
        path: "./src/gen",
        clean: true,
        barrelType: "named",
        extension: {
          ".ts": "",
        },
      },
      plugins: [
        pluginOas({
          validate: false,
          generators: [],
        }),
        pluginZod({
          output: {
            path: "./zod",
          },
          inferred: true,
          unknownType: "unknown",
          importPath: "zod",
        }),
      ],
    },
  ];
});
