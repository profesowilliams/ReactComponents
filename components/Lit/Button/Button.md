# Button

The `Button` component allows users to commit a change or trigger an action via a single click or tap and is often found inside forms, dialogs, panels and/or pages.

## **Design Spec**

[Link to Button in Figma](https://www.figma.com/file/Nj9EBBvOZmS11zKNJfilVR/Button?node-id=1723%3A380&t=PNVwuI4rLXjxAFNJ-1)

<br />

## **Engineering Spec**

DDS WC3 Button has feature parity with the DDS UI React 1 Button implementation but not direct parity.

<br />

## Class: `Button`

<br />

### **Component Name**

`<tds-button></fluent-button>`

<br />

## **Preparation**

<br />

### **DDS Web Component v1 v.s DDS React 1**

<br />

**Component and Slot Mapping**

| DDS UI React 1 | DDS Web Components 1 |
| -------------- | -------------------- |
| `<Button>`     | `<tds-button>`       |

<br />

**Property Mapping**
| DDS UI React 1 | DDS Web Components 1 | Description of difference |
| ------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------- |
| `icon`is a slot | The default slot or `start`, and `end` | In DDSUIR1, `icon` is a slot. In the web components implementation, an icon can be passed into the default slot and paired with an `icon-only` attribute, or supplementally in the `start` and/or `end` slots |
| `as` | A separate web component for anchor implementations | In DDSUIR1, HTML is returned so interpolating tags in the virtual DOM doesn't present a problem. In WC's, we can't safely interpolate tags and the cost to provide two sets of API's, one form associated and one not`icon` is a slot. In the web components implementation, conditional rendering brings with it a cost as both templates need to be enumerated. Additionally, button is a form associated element whereas anchors are not. For this reason, we'll provide an "anchor-button" as a separate component. |
