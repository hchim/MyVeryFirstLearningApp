export const PORTRAIT = "portrait";
export const LANDSCAPE = "landscape";

export const getOrientation = (width, height) => height > width ? PORTRAIT : LANDSCAPE;