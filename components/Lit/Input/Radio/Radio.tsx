import { html, TemplateResult } from 'lit';

export const RadioInput = (id: string, placeholder: string, label: string, attrs: Record<string, any>): TemplateResult => html`
  <input type="radio" class="form-control" id="${id}" placeholder="${placeholder}" ...="${attrs}" />
  <label for="${id}">${label}</label>
`;
