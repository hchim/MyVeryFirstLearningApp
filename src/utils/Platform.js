import { Dimensions } from 'react-native';

// orientation
const PORTRAIT = 'portrait';
const LANDSCAPE = 'landscape';

// device type
const TABLET = 'tablet';
const PHONE = 'phone';

/**
 *
 * @param {ScaledSize} dim the dimensions object
 * @param {*} limit the limit on the scaled dimension
 */
const msp = (dim, limit) => {
    return (dim.scale * dim.width) >= limit || (dim.scale * dim.height) >= limit;
};

/**
 * Returns true if the screen is in portrait mode
 */
const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
};

/**
 * Returns true of the screen is in landscape mode
 */
const isLandscape = () => {
    const dim = Dimensions.get('screen');
    return dim.width >= dim.height;
};

/**
 * Returns the orientation of the device
 * @returns {string}
 */
const getOrientation = () => {
    return isPortrait() ? PORTRAIT : LANDSCAPE;
};

/**
 * Returns true if the device is a tablet
 */
const isTablet = () => {
    const dim = Dimensions.get('screen');
    return ((dim.scale < 2 && msp(dim, 1000)) || (dim.scale >= 2 && msp(dim, 1900)));
};

/**
 * Returns true if the device is a phone
 */
const isPhone = () => {
    return !isTablet();
};

/**
 * Get device type
 * @returns {string}
 */
const getDeviceType = () => {
    return isTablet() ? TABLET : PHONE;
};

export default {
    PORTRAIT,
    LANDSCAPE,
    isPortrait,
    isLandscape,
    getOrientation,
    isTablet,
    isPhone,
    getDeviceType,
};