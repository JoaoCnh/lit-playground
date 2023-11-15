import * as React from "react";
import { Image } from "./custom-elements/image";
import { CardLink } from "./custom-elements/card-link";
import { AspectRatio } from "./custom-elements/aspect-ratio";
import { SimpleGreeting } from "./custom-elements/simple-greeting";

declare global {
  interface HTMLElementTagNameMap {
    "simple-greeting": SimpleGreeting;
    "aspect-ratio": AspectRatio;
    "card-link": CardLink;
    image: Image;
  }
}
