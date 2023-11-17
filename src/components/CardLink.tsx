import React from "react";
import { createComponent } from "@lit/react";
import { CardLink as WCCardLink } from "$/custom-elements/card-link";

export const CardLink = createComponent({
  tagName: "card-link",
  elementClass: WCCardLink,
  react: React,
  events: {
    onClick: "click",
  },
});
