import React from 'react';
import PropTypes from 'prop-types';
import DesktopIcon from '../DesktopIcon/DesktopIcon';
import './DesktopDecor.scss';
import note from '../../images/note.png';

const DesktopDecor = () => (
  <div className="DesktopDecor">
    <DesktopIcon idNum={1} icon={note} name={'1.txt'} />
  </div>
);

DesktopDecor.propTypes = {};

DesktopDecor.defaultProps = {};

export default DesktopDecor;
