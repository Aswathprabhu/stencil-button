/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ButtonComponent {
        "disabled": boolean;
        "loadingtext": string;
        "type": string;
    }
}
declare global {
    interface HTMLButtonComponentElement extends Components.ButtonComponent, HTMLStencilElement {
    }
    var HTMLButtonComponentElement: {
        prototype: HTMLButtonComponentElement;
        new (): HTMLButtonComponentElement;
    };
    interface HTMLElementTagNameMap {
        "button-component": HTMLButtonComponentElement;
    }
}
declare namespace LocalJSX {
    interface ButtonComponent {
        "disabled"?: boolean;
        "loadingtext"?: string;
        "onZpClick"?: (event: CustomEvent<void>) => void;
        "type"?: string;
    }
    interface IntrinsicElements {
        "button-component": ButtonComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "button-component": LocalJSX.ButtonComponent & JSXBase.HTMLAttributes<HTMLButtonComponentElement>;
        }
    }
}
