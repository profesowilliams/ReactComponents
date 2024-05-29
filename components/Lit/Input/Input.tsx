import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { choose } from 'lit/directives/choose.js';
import customStyles from './Input.scss?inline';

// Import input type modules
import './Text';
import { HiddenInput } from './Hidden';
import { SearchInput } from './Search';
import { DatetimeInput } from './Datetime';
import { DateInput } from './Date';
import { MonthInput } from './Month';
import { WeekInput } from './Week';
import { TimeInput } from './Time';
import { DatetimeLocalInput } from './DatetimeLocal';
import { RangeInput } from './Range';
import { ColorInput } from './Color';
import { CheckboxInput } from './Checkbox';
import { RadioInput } from './Radio';
import { FileInput } from './File';
import { SubmitInput } from './Submit';
import { ImageInput } from './Image';
import { ResetInput } from './Reset';
import { ButtonInput } from './Button';

type InputType = 'hidden' | 'text' | 'search' | 'tel' | 'url' | 'email' | 'password' | 'datetime' | 'date' | 'month' | 'week' | 'time' | 'datetime-local' | 'number' | 'range' | 'color' | 'checkbox' | 'radio' | 'file' | 'submit' | 'image' | 'reset' | 'button';

@customElement('tds-input')
export class Input extends LitElement {
  static get styles() {
    return css`
      ${unsafeCSS(customStyles)}
    `;
  }

  @property({ type: String }) id = 'floatingInput';
  @property({ type: String }) type: InputType = 'text';
  @property({ type: String }) placeholder = '';
  @property({ type: String }) label = '';
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) required = false;

  render() {
    const attrs = {
      placeholder: this.placeholder,
      disabled: this.disabled,
      required: this.required,
    };

    return html`
      ${choose(
        this.type,
        [
          ['hidden', () => HiddenInput(this.id, attrs)],
          ['text', () => html`<tds-textfield id="${this.id}" type="text" placeholder="${this.placeholder}" label="${this.label}" .attrs="${attrs}"></tds-textfield>`],
          ['search', () => SearchInput(this.id, this.placeholder, this.label, attrs)],
          ['tel', () => html`<tds-textfield id="${this.id}" type="tel" placeholder="${this.placeholder}" label="${this.label}" .attrs="${attrs}"></tds-textfield>`],
          ['url', () => html`<tds-textfield id="${this.id}" type="url" placeholder="${this.placeholder}" label="${this.label}" .attrs="${attrs}"></tds-textfield>`],
          ['email', () => html`<tds-textfield id="${this.id}" type="email" placeholder="${this.placeholder}" label="${this.label}" .attrs="${attrs}"></tds-textfield>`],
          ['password', () => html`<tds-textfield id="${this.id}" type="password" placeholder="${this.placeholder}" label="${this.label}" .attrs="${attrs}"></tds-textfield>`],
          ['datetime', () => DatetimeInput(this.id, this.placeholder, this.label, attrs)],
          ['date', () => DateInput(this.id, this.placeholder, this.label, attrs)],
          ['month', () => MonthInput(this.id, this.placeholder, this.label, attrs)],
          ['week', () => WeekInput(this.id, this.placeholder, this.label, attrs)],
          ['time', () => TimeInput(this.id, this.placeholder, this.label, attrs)],
          ['datetime-local', () => DatetimeLocalInput(this.id, this.placeholder, this.label, attrs)],
          ['number', () => html`<tds-textfield id="${this.id}" type="number" placeholder="${this.placeholder}" label="${this.label}" .attrs="${attrs}"></tds-textfield>`],
          ['range', () => RangeInput(this.id, this.placeholder, this.label, attrs)],
          ['color', () => ColorInput(this.id, this.placeholder, this.label, attrs)],
          ['checkbox', () => CheckboxInput(this.id, this.placeholder, this.label, attrs)],
          ['radio', () => RadioInput(this.id, this.placeholder, this.label, attrs)],
          ['file', () => FileInput(this.id, this.placeholder, this.label, attrs)],
          ['submit', () => SubmitInput(this.id, this.placeholder, this.label, attrs)],
          ['image', () => ImageInput(this.id, this.placeholder, this.label, attrs)],
          ['reset', () => ResetInput(this.id, this.placeholder, this.label, attrs)],
          ['button', () => ButtonInput(this.id, this.placeholder, this.label, attrs)],
        ],
        () => html`<h1>Unsupported input type</h1>`
      )}
    `;
  }
}
