import { loadManifest } from "@angular-architects/module-federation";

import { environment } from "./environments/environment";

Promise.all([loadManifest(environment.modulesFromMainUrl)])
  .catch((err) => console.error(err))
  .then((_) => import("./bootstrap"))
  .catch((err) => console.error(err));
