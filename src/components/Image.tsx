import React from "react";
import { createComponent } from "@lit/react";
import { EditorialImage } from "$/custom-elements/image";

export const Image = createComponent({
  tagName: "editorial-image",
  elementClass: EditorialImage,
  react: React,
});
