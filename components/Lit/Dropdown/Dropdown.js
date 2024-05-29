// Import the LitElement base class and html helper function
import { LitElement, html } from "lit";

// Extend the LitElement base class
export class DropDown extends LitElement {
  static get properties() {
    return {
      list: { type: Array },
      // list: {
      //   attribute: true,
      //   reflect: true,
      //   converter: {
      //     fromAttribute: value => value.split(","),
      //     toAttribute: value => value.join(",")
      //   }
      // }
    };
  }

  static get styles() {
    return css`
      .tn_dropdown {
        position: relative;
      }
      .tn_dropdown button {
        position: relative;
        width: 100%;
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        appearance: none;
        padding: 1rem;
        font: 1rem/1 "Apercu Regular", sans-serif;
        text-align: left;
        cursor: pointer;
        color: #6a7171;
        border: solid 0.0625rem #6a7171;
        background-color: #f6f6f6;
      }
      .tn_dropdown button::after {
        position: relative;
        display: block;
        float: right;
        margin-left: 0.5625rem;
        width: 0.9375rem;
        content: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDE0IDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9InRuX2ljb24gZG93bl9pbmFjdGl2ZSI+PHRpdGxlPkRvd24gSW5hY3RpdmU8L3RpdGxlPjxkZXNjPkRvd24gSW5hY3RpdmUgSWNvbjwvZGVzYz48cGF0aCBkPSJNNy40IDcuNjU3YS45OTcuOTk3IDAgMCAxLS43MDctLjI5M0wxLjAzNiAxLjcwN0ExIDEgMCAxIDEgMi40NS4yOTNsNC45NSA0Ljk1IDQuOTUtNC45NWExIDEgMCAxIDEgMS40MTQgMS40MTRMOC4xMDcgNy4zNjRhLjk5Ny45OTcgMCAwIDEtLjcwNy4yOTN6IiBmaWxsPSIjNkE3MTcxIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=);
      }
      .tn_dropdown button:focus {
        outline: none;
      }
      .tn_dropdown.dirty button {
        color: #2b2823;
      }
      .tn_dropdown ul {
        position: absolute;
        display: none;
        width: 100%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        top: calc(100% + 0.0625rem);
        left: 0;
        list-style-type: none;
        background-color: #fff;
        border: solid 0.0625rem #e9e9e9;
        border-top: none;
        outline: solid 0.0625rem #e9e9e9;
        z-index: 5;
      }
      .tn_dropdown ul li input[type="radio"] {
        display: none;
      }
      .tn_dropdown ul li label {
        display: block;
        margin: 0;
        padding: 1rem 1.25rem;
        font: 1rem/1 "Apercu Regular", sans-serif;
        color: #2b2823;
        cursor: pointer;
      }
      .tn_dropdown ul li label:hover {
        background-color: #e9e9e9;
      }
      .tn_dropdown ul li input[type="radio"]:checked + label {
        font-family: "Apercu Medium", sans-serif;
      }
      .tn_dropdown ul li + li {
        border-top: solid 0.0625rem #e9e9e9;
      }
      .tn_dropdown.active button {
        color: #2b2823;
        border-color: #2b2823;
        outline: solid 0.0625rem #2b2823;
        z-index: 10;
      }
      .tn_dropdown.active button::after {
        content: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDE0IDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9InRuX2ljb24gZG93biI+PHRpdGxlPkRvd248L3RpdGxlPjxkZXNjPkRvd24gSWNvbjwvZGVzYz48cGF0aCBkPSJNNy40IDcuNjU3YS45OTcuOTk3IDAgMCAxLS43MDctLjI5M0wxLjAzNiAxLjcwN0ExIDEgMCAxIDEgMi40NS4yOTNsNC45NSA0Ljk1IDQuOTUtNC45NWExIDEgMCAxIDEgMS40MTQgMS40MTRMOC4xMDcgNy4zNjRhLjk5Ny45OTcgMCAwIDEtLjcwNy4yOTN6IiBmaWxsPSIjMkIyODIzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=);
      }
      .tn_dropdown.active button + ul {
        display: block;
      }
      .tn_dropdown.secondary button {
        display: inline-block;
        width: auto;
        margin: 0 0 0 1rem;
        padding: 0 0 0.3125rem;
        border: none;
        border-bottom: solid 0.125rem #2b2823;
        background-color: transparent;
        color: #2b2823;
        font-family: "Apercu Bold", sans-serif;
      }
      .tn_dropdown.secondary button::after {
        content: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDE0IDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9InRuX2ljb24gZG93biI+PHRpdGxlPkRvd248L3RpdGxlPjxkZXNjPkRvd24gSWNvbjwvZGVzYz48cGF0aCBkPSJNNy40IDcuNjU3YS45OTcuOTk3IDAgMCAxLS43MDctLjI5M0wxLjAzNiAxLjcwN0ExIDEgMCAxIDEgMi40NS4yOTNsNC45NSA0Ljk1IDQuOTUtNC45NWExIDEgMCAxIDEgMS40MTQgMS40MTRMOC4xMDcgNy4zNjRhLjk5Ny45OTcgMCAwIDEtLjcwNy4yOTN6IiBmaWxsPSIjMkIyODIzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=);
      }
      .tn_dropdown.secondary button:hover {
        color: #3a5ce4;
        border-bottom-color: #3a5ce4;
      }
      .tn_dropdown.secondary button:hover::after {
        content: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDE0IDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9InRuX2ljb24gZG93bl9ob3ZlciI+PHRpdGxlPkRvd24gSG92ZXI8L3RpdGxlPjxkZXNjPkRvd24gSG92ZXIgSWNvbjwvZGVzYz48cGF0aCBkPSJNNy40IDcuNjU3YS45OTcuOTk3IDAgMCAxLS43MDctLjI5M0wxLjAzNiAxLjcwN0ExIDEgMCAxIDEgMi40NS4yOTNsNC45NSA0Ljk1IDQuOTUtNC45NWExIDEgMCAxIDEgMS40MTQgMS40MTRMOC4xMDcgNy4zNjRhLjk5Ny45OTcgMCAwIDEtLjcwNy4yOTN6IiBmaWxsPSIjM0E1Q0U0IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=);
      }
      .tn_dropdown.secondary ul {
        top: calc(100% + 0.3125rem);
      }
      .tn_dropdown.secondary.active button {
        outline: none;
      }
      .tn_dropdown.dark:not(.secondary) button {
        background-color: #fff;
        border-color: #fff;
      }
      .tn_dropdown.dark:not(.secondary).active button {
        outline: solid 0.0625rem #e9e9e9;
        border-color: #e9e9e9;
      }
      .tn_dropdown.secondary.dark button {
        color: #fff;
        border-bottom-color: #fff;
      }
      .tn_dropdown.secondary.dark button::after {
        content: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDE0IDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9InRuX2ljb24gZG93bl93aGl0ZSI+PHRpdGxlPkRvd24gV2hpdGU8L3RpdGxlPjxkZXNjPkRvd24gV2hpdGUgSWNvbjwvZGVzYz48cGF0aCBkPSJNNy40IDcuNjU3YS45OTcuOTk3IDAgMCAxLS43MDctLjI5M0wxLjAzNiAxLjcwN0ExIDEgMCAxIDEgMi40NS4yOTNsNC45NSA0Ljk1IDQuOTUtNC45NWExIDEgMCAxIDEgMS40MTQgMS40MTRMOC4xMDcgNy4zNjRhLjk5Ny45OTcgMCAwIDEtLjcwNy4yOTN6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=);
      }
      .tn_dropdown.secondary.dark button:hover {
        color: #7a97f9;
        border-bottom-color: #7a97f9;
      }
      .tn_dropdown.secondary.dark button:hover::after {
        content: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDE0IDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9InRuX2ljb24gZG93bl9ob3Zlcl9saWdodCI+PHRpdGxlPkRvd24gSG92ZXIgTGlnaHQ8L3RpdGxlPjxkZXNjPkRvd24gSG92ZXIgTGlnaHQgSWNvbjwvZGVzYz48cGF0aCBkPSJNNy40IDcuNjU3YS45OTcuOTk3IDAgMCAxLS43MDctLjI5M0wxLjAzNiAxLjcwN0ExIDEgMCAxIDEgMi40NS4yOTNsNC45NSA0Ljk1IDQuOTUtNC45NWExIDEgMCAxIDEgMS40MTQgMS40MTRMOC4xMDcgNy4zNjRhLjk5Ny45OTcgMCAwIDEtLjcwNy4yOTN6IiBmaWxsPSIjN0E5N0Y5IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=);
      }
    `;
  }

  constructor() {
    super();
    Object.assign(this, {
      active: false,
      selectedIndex: 0,
      list: [],
    });
  }

  selectedValue = () => this.list[this.selectedIndex];

  click = () => {
    this.active = !this.active;
    this.requestUpdate();
  };

  change = (event) => {
    Object.assign(this, {
      selectedIndex: event.target.dataset.index,
      active: false,
    });
    this.requestUpdate();
  };

  currentSelectionBtn = () => {
    return html`
      <button @click=${this.click}>${this.list[this.selectedIndex]}</button>
    `;
  };

  dropDownOption = (option, index) => {
    return html`
      <li>
        <input
          data-index=${index}
          type="radio"
          id="dropdown_option_${option}"
          name="dropdownoptions"
          value="${option}"
          ?checked=${this.selectedIndex === index}
          .checked=${this.selectedIndex === index}
          @click=${this.optionClick}
        />
        <label data-index=${index} for="dropdown_option_${option}"
          >${option}</label
        >
      </li>
    `;
  };

  render() {
    return html`
      <fieldset
        @change=${this.change}
        class="tn_dropdown ${this.active ? "active" : ""}"
      >
        ${this.currentSelectionBtn()}
        <ul>
          ${this.list.map((option, index) =>
            this.dropDownOption(option, index)
          )}
        </ul>
      </fieldset>
    `;
  }
}
// Register the new element with the browser.
customElements.define("tds-dropdown", DropDown);
