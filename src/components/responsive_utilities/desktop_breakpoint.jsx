import React from 'react';
import Breakpoint from './breakpoint';
import PropTypes from 'prop-types';
export default function DesktopBreakpoint(props) {
  return <Breakpoint name='desktop'>{props.children}</Breakpoint>;
}

React.propTypes = {
  name: string,
  children: object
};
