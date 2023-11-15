import * as React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "simple-greeting": { name?: string };
      "aspect-ratio": { ratio: number; children: React.ReactNode };
    }
  }
}
