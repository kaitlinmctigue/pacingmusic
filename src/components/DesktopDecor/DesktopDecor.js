import React from 'react';
import PropTypes from 'prop-types';
import DesktopIcon from '../DesktopIcon/DesktopIcon';
import './DesktopDecor.scss';
import note from '../../images/note.png';
import self from '../../images/self.png';
import bird from '../../images/bird.png';

const DesktopDecor = () => (
  <div className="DesktopDecor">
    <DesktopIcon idNum={1} icon={note} name={'1.txt'} />
    <DesktopIcon idNum={2} img={self} name={'self.portrait'} />
    <DesktopIcon idNum={3} img={bird} name={'thebigboss.jpeg'} />
  </div>
);

DesktopDecor.propTypes = {};

DesktopDecor.defaultProps = {};

export default DesktopDecor;
