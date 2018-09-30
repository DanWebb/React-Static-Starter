import {oneOf, shape, string, number, func} from 'prop-types';
import color from './theme/color';
import font from './theme/font';

const colorType = oneOf(Object.keys(color));
const fontType = oneOf(font.weights);

const imageType = shape({
	url: string.isRequired,
	alt: string,
	width: number,
	height: number
});

const buttonType = shape({
	text: string.isRequired,
	url: string,
	onClick: func
});

export {
	colorType,
	fontType
};
