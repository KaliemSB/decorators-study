import { readdir } from "fs/promises";
import { join } from "path";

(async () => {
  const routes: (() => void)[] = [];

  const routesPath = join(__dirname, "routes");
  const routesFiles = (await readdir(routesPath)).map((archive: string) =>
    archive.replace(".ts", "")
  );

  routesFiles.forEach(async (archive: string) => {
    const route = await import(`${routesPath}/${archive}`);

    routes.push(new route.default());
  });
})();
