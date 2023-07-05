import {
  createComponentExtension,
  createPlugin,
  createRoutableExtension,
  createRouteRef,
} from "@backstage/core-plugin-api";

import { rootRouteRef } from "./routes";

export const myPluginPlugin = createPlugin({
  id: "my-plugin",
  routes: {
    root: rootRouteRef,
  },
});

export const myPluginRouteRef = createRouteRef({
  id: "my-catalog-plugin",
});

export const MyPluginPage = myPluginPlugin.provide(
  createRoutableExtension({
    name: "MyPluginPage",
    component: () =>
      import("./components/ExampleComponent").then((m) => m.ExampleComponent),
    mountPoint: rootRouteRef,
  })
);

export const MyPluginCard = myPluginPlugin.provide(
  createComponentExtension({
    name: "MyPluginContent",
    component: {
      lazy: () =>
        import("./components/ExampleFetchComponent").then(
          (m) => m.ExampleFetchComponent
        ),
    },
  })
);

export const MyPluginEntityComponentContent = myPluginPlugin.provide(
  createRoutableExtension({
    name: "MyPluginContent",
    component: () =>
      import("./components/EntityComponentExample").then(
        (m) => m.EntityContentComponent
      ),
    mountPoint: myPluginRouteRef,
  })
);
