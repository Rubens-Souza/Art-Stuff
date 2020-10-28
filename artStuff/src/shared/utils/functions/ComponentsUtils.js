import { Dimensions } from "react-native";

export const hasSetFunctionProperty = (value) => value && typeof(value) === "function";

export const isPortrait = () => Dimensions.get("screen").width >= Dimensions.get("screen").height;

export const isLandscape = () => Dimensions.get("screen").width <= Dimensions.get("screen").height;