// Import the LitElement library
import { LitElement, html } from 'lit';

// Create the Card class that extends LitElement
class Card extends LitElement {
  // Define the properties of the component
  static get properties() {
    return {
      title: { type: String },
      content: { type: String },
      type: { type: String, reflect: true, default: '' },
    };
  }

  // Set the initial values for the properties in the constructor
  constructor() {
    super();
    this.title = '';
    this.content = '';
  }

  // Render the HTML template for the component
  render() {
    return html`
      <div class="card">
        <h2 class="card-title">${this.title}</h2>
        <p class="card-content">${this.content}</p>
      </div>
    `;
  }
}

// Register the component with a custom name 'card-element'
customElements.define('tds-card', Card);
