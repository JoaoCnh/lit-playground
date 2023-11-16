import React from "react";
import { createComponent } from "@lit/react";
import { ImageSequence as WCImageSequence } from "$/custom-elements/image-sequence";

export const ImageSequence = createComponent({
  tagName: "image-sequence",
  elementClass: WCImageSequence,
  react: React,
});
