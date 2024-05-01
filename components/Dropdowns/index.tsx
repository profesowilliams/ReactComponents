import React, { useState, useRef } from 'react';
import { Form } from 'react-bootstrap';
import { TextField, TextFieldControl, TextFieldFeedback } from '../TextField';
import { Hint, Typeahead } from 'react-bootstrap-typeahead';
import './dropdown.scss';

interface DropdownProps {
  controlId: string;
  label: string;
  supporttext?: string;
  required?: boolean;
  data: string[];
  multiple?: boolean;
  size?: 'sm' | 'lg' | undefined; // Add the 'size' prop
}

const Dropdown: React.FC<DropdownProps> = ({ controlId, label, supporttext, required, data, multiple, size }) => {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <Typeahead
      id={controlId}
      onChange={setSelected}
      options={data}
      placeholder={label}
      multiple={multiple}
      size={size} // Pass the 'size' prop to Typeahead
      renderInput={({ inputRef, referenceElementRef, ...inputProps }) => (
        <Hint>
          <TextField controlId={controlId} label={label} required={required} style={{ height: '100px' }}>
            <TextFieldControl
              {...inputProps}
              ref={(node) => {
                inputRef(node);
                referenceElementRef(node);
              }}
            />
            {supporttext && <Form.Text className="text-muted">{supporttext}</Form.Text>}
          </TextField>
        </Hint>
      )}
      selected={selected}
    />
  );
};

export default Dropdown;
