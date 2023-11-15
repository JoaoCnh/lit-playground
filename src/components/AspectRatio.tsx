import React from "react";
import { createComponent } from "@lit/react";
import { AspectRatio as WCAspectRatio } from "$/custom-elements/aspect-ratio";

export const AspectRatio = createComponent({
  tagName: "aspect-ratio",
  elementClass: WCAspectRatio,
  react: React,
});
