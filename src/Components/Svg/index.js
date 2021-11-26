import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as Santa1} from '../../assets/google.svg';
import {ReactComponent as Snowflake} from '../../assets/snowFlake.svg';
import {ReactComponent as Things} from '../../assets/things.svg';
import {ReactComponent as Santa} from '../../assets/santa.svg';
import {ReactComponent as Santa2} from '../../assets/heat.svg';
import {ReactComponent as Santa3} from '../../assets/google2.svg';
import {ReactComponent as Close} from '../../assets/close.svg';

const capitalize = (str = '') => str.charAt(0).toUpperCase() + str.slice(1);
const SVGComponents = {
  Santa1,
  Snowflake,
  Things,
  Santa,
  Santa2,
  Santa3,
  Close
}
const SVG = React.forwardRef(({
  name,
  className,
  ...remainingProps
}, ref) => {
  const SVGComponent = SVGComponents[capitalize(name)];
  if (!SVGComponent) {
    console.error(`name '${name}' not found.`);
    return null;
  }

  return (
    <SVGComponent
      ref={ref}
      name={name}
      className={className ? className : ''}
      {...remainingProps}
    />
  );
});

SVG.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
};

SVG.defaultProps = {
  className: null
};

export default SVG;