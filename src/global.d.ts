// declare module '*.scss' {
//   const content: Record<string, string>
//   export default content
// }

// declare module '*.css' {
//   const content: Record<string, string>
//   export default content
// }

// declare module '*.module.scss' {
//   const content: { [className: string]: string };
//   export default content;
// }

declare module "*.svg" {
    import { FunctionComponent, SVGProps } from "react";
    const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement>>;
    export { ReactComponent };
    const src: string;
    export default src;
  }

// declare module '*.svg' {
//   import React from 'react';
//   const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
//   export { ReactComponent };
//   const src: string;
//   export default src;
// }
  
  // declare module '*.svg' {
  //   import React from 'react';
  //   const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
  //   export default ReactComponent;
  // }
    