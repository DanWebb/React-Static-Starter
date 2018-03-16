import {oneOf} from 'prop-types';
import color from './theme/color';

const colorType = oneOf(Object.keys(color));

export {colorType};
