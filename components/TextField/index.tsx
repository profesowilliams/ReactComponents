import React from 'react';
import r2wc from '@r2wc/react-to-web-component';
import { Form } from 'react-bootstrap';
import './textfield.scss';

interface TextFieldProps {
  supporttext?: string;
  required?: boolean;
  label?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  supporttext,
  required,
  label,
  ...props
}) => {
  const labelText = required ? `* ${label}` : label; // Add asterisk if required is true

  return (
    <div className="mb-3">
      <Form.FloatingLabel {...props} label={labelText} />
      {supporttext && <div className="support-text">{supporttext}</div>}
    </div>
  );
};

const TextFieldControl = Form.Control; // Export TextField.Control
const TextFieldFeedback = Form.Control.Feedback; // Export TextField.Feedback

export { Form, TextField, TextFieldControl, TextFieldFeedback }; // Export TextField.Control and TextField.Feedback along with Form and TextField

const TdsForm = r2wc(Form);
customElements.define('tds-form', TdsForm);

const TdsTextField = r2wc(TextField);
customElements.define('tds-textfield', TdsTextField);

const TdsTextFieldControl = r2wc(TextFieldControl);
customElements.define('tds-textfield-control', TdsTextFieldControl);

const TdsTextFieldFeedback = r2wc(TextFieldFeedback);
customElements.define('tds-textfield-feedback', TdsTextFieldFeedback);
