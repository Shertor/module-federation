import { LoadRemoteModuleOptions } from "@angular-architects/module-federation"

export type PluginOptions = LoadRemoteModuleOptions & {
  unicDisplayName: string
  componentName: string

  page: number | undefined
}
