import React, { useCallback } from 'react';
import r2wc from "@r2wc/react-to-web-component";
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import './radio.scss';

interface RadioItem {
  id: string;
  name: string;
  disabled?: boolean;
}

interface RadioProps {
  data: RadioItem[];
  name?: string;
  inline?: boolean;
  value?: string;
  onChange?: (id: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  theme: 'light' | 'dark'; // Add a theme prop
}

const Radio: React.FC<RadioProps> = ({ data = [], name = 'checkbox-group-name', inline = true, value = '', onChange = () => { }, theme, ...props }) => {
  const handleOnClick = useCallback((id: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(id, e);
  }, [onChange]);

  return (
    <div className="mb-3" data-bs-theme={theme}>
      {data.map((item) => (
        <Form.Check
          key={item.id}
          id={item.id}
          label={item.name}
          inline={inline}
          name={name}
          disabled={item.disabled}
          checked={value === item.id} // Set checked explicitly
          type="radio"
          onChange={handleOnClick(item.id)}
          {...props}
        />
      ))}
    </div>
  );
};

Radio.defaultProps = {
  data: [],
  name: 'checkbox-group-name',
  inline: true,
  value: '',
  onChange: () => { },
  theme: 'light', // Set default theme
};

Radio.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string,
  inline: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  theme: PropTypes.oneOf(['light', 'dark']), // Specify theme prop type
};

const TdsRadio = r2wc(Radio);
customElements.define("tds-radio", TdsRadio);

export default Radio;
export { Radio };
