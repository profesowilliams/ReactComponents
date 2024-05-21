declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.scss?inline' {
  const content: { [className: string]: string };
  export default content;
}

interface HTMLElement {
  expanded?: boolean;
  open?: boolean;
}
