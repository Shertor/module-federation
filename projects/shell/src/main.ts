import {
  loadManifest,
  loadRemoteEntry,
} from "@angular-architects/module-federation";

Promise.all([loadManifest("/assets/mf.manifest.json")])
  .catch((err) => console.error(err))
  .then((_) => import("./bootstrap"))
  .catch((err) => console.error(err));
