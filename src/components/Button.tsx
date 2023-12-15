import React from "react";
import { createComponent } from "@lit/react";
import { Button as WCButton } from "$/custom-elements/design-system/button";

export const Button = createComponent({
  tagName: "ds-button",
  elementClass: WCButton,
  react: React,
});
