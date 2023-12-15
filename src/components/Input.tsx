import React from "react";
import { createComponent } from "@lit/react";
import { Input as WCInput } from "$/custom-elements/design-system/input";

export const Input = createComponent({
  tagName: "ds-input",
  elementClass: WCInput,
  react: React,
});
