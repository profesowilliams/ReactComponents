import React from 'react';
import { Form, TextField, TextFieldControl, TextFieldFeedback } from '../index';

export default {
  title: 'components/TextField',
  component: TextField, // Change component to TextField
  argTypes: {},
};

interface TemplateProps {
  controlId: string;
  label: string;
  className?: string;
  supporttext?: string; // Add supporttext prop
  required?: boolean;
}

const Template: React.FC<TemplateProps> = (args) => {
  return (
    <Form>
      <h3>TextField</h3>
      <TextField
        controlId="floatingInput"
        label="Email address"
        supporttext="This is a support text." // Pass support text as a prop
        required="true"
      >
        <TextFieldControl type="email" placeholder="name@example.com" />
      </TextField>
      <TextField controlId="floatingPassword" label="Password">
        <TextFieldControl type="password" placeholder="Password" />
      </TextField>
      <TextFieldFeedback type="invalid">Looks good!</TextFieldFeedback>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="testing" />
      </Form.Group>
    </Form>
  );
};

export const Floatinglabel: React.FC = Template.bind({});
Floatinglabel.args = {};
