import React from "react";

import {

} from "./styles";

import ImagePicker from "../../shared/components/ImagePicker/ImagePicker";

import Icons from "../../shared/utils/constants/Icons";

import ScreenData from "../../shared/dtos/ScreenData";

const AddArt = () => {

    

    return (
        <ImagePicker/>
    );
};

export const AddArtScreenData = new ScreenData("AddArt", Icons.AddArtFill, Icons.AddArt);;
export default AddArt;