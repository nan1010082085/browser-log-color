import { c, colors, groupColors } from './color';
// bg
export const bgBlack = (text, value) => {
    return c(colors(text, 'bgBlack'), value);
};
export const bgRed = (text, value) => {
    return c(colors(text, 'bgRed'), value);
};
export const bgBlue = (text, value) => {
    return c(colors(text, 'bgBlue'), value);
};
export const bgYellow = (text, value) => {
    return c(colors(text, 'bgYellow'), value);
};
export const bgGreen = (text, value) => {
    return c(colors(text, 'bgGreen'), value);
};
export const bgOrange = (text, value) => {
    return c(colors(text, 'bgOrange'), value);
};
export const bgSpringGreen = (text, value) => {
    return c(colors(text, 'bgSpringGreen'), value);
};
// gradient
export const gradientBlack = (text, value) => {
    return c(colors(text, 'gradientBlack'), value);
};
export const gradientGreen = (text, value) => {
    return c(colors(text, 'gradientGreen'), value);
};
// 多组背景变色
export const bgGroup = (text, colors, value) => {
    return c(groupColors(text, colors), value);
};
