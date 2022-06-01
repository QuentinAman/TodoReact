// Enable SVG <use xlink:href> support in IE11
import svg4everybody from "svg4everybody";
svg4everybody();

/**
 * You can use two method to create the svg sprite :
 * 1. Import all icon in the current folder with the require.context command.
 *    The  second argument has to be true if you want to check the subfolder
 * 2. Import the icon one by one, can be usefull if you want to build more than one sprite
 */

 /* 1 */
// Import automatically all the icon
const req = require.context("./", true, /\.svg$/);
req.keys().forEach(req);

/* 2 */
// Import each icon that we want to include in our SVG sprite
// (built by Webpack + svg-sprite-loader)
// import "./angle.svg";
// import "./cross.svg";
// import "./menu.svg";
