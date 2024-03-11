import React from "react";
import { createDevApp } from "@backstage/dev-utils";
import { myPluginPlugin, MyPluginPage } from "../src/plugin";
import { EntityProvider } from "@backstage/plugin-catalog-react";
import { Entity } from "@backstage/catalog-model";

const entity = {
    apiVersion: "backstage.io/v1alpha1",
    kind: "Component",
    metadata: {
      name: 'awesome-test-entity-1',
    },
  } as Entity;

createDevApp()
  .registerPlugin(myPluginPlugin)
  .addPage({
    element: (
      <EntityProvider entity={entity}>
        <MyPluginPage />
      </EntityProvider>
    ),
    title: "Root Page",
    path: "/my-plugin",
  })
  .render();