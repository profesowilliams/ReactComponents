import React, { useEffect, useRef } from 'react';
import r2wc from "@r2wc/react-to-web-component";
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import _keyBy from 'lodash/keyBy';
import './toggle.scss';

interface SwitchProps {
  data: {
    id: string;
    name: string;
    indeterminate?: boolean;
    disabled?: boolean;
  }[];
  name?: string;
  inline?: boolean;
  value: string[];
  onChange: (value: string[], event: React.ChangeEvent<HTMLInputElement>) => void;
  theme?: 'light' | 'dark';
}

const Switch: React.FC<SwitchProps> = ({ data, name = 'switch-group-name', inline = true, value, onChange, theme = 'light', ...props }) => {
  const objectValue = React.useMemo(() => _keyBy(value), [value]);
  const checkboxRefs = useRef < HTMLInputElement[] > (new Array(data.length).fill(null));

  useEffect(() => {
    data.forEach((item, index) => {
      if (checkboxRefs.current[index]) {
        checkboxRefs.current[index].indeterminate = item.indeterminate;
      }
    });
  }, [data]);

  const handleOnClick = (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (objectValue[id]) {
      delete objectValue[id];
    } else {
      objectValue[id] = id;
    }
    onChange(Object.values(objectValue), e);
  }

  return (
    <div className="mb-3">
      {
        data.map((item, index) => (
          <Form.Check
            key={item.id}
            id={item.id}
            label={item.name}
            inline={inline}
            name={name}
            disabled={item.disabled}
            checked={objectValue[item.id]}
            onChange={handleOnClick(item.id)}
            ref={(el) => checkboxRefs.current[index] = el as HTMLInputElement}
            data-theme={theme} // Set the data-theme attribute
            {...props}
          />
        ))
      }
    </div>
  );
};

Switch.defaultProps = {
  data: [],
  name: 'switch-group-name',
  theme: 'light',
  inline: true,
  value: [],
  onChange: () => { },
};

Switch.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    indeterminate: PropTypes.bool,
    disabled: PropTypes.bool,
  })),
  name: PropTypes.string,
  inline: PropTypes.bool,
  theme: PropTypes.oneOf(['light', 'dark']),
  value: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

export default React.memo(Switch);
export { Switch as Toggle };

// const TdsSwitch = r2wc(Switch);
// customElements.define('tds-switch', TdsSwitch);
