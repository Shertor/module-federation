import { LoadRemoteModuleOptions } from "@angular-architects/module-federation";

export type PluginOptions = LoadRemoteModuleOptions & {
  id: string;
  componentName: string;

  page: number | undefined;
};
