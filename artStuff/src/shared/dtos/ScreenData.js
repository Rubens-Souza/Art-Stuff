import { EmptyString } from "../utils/functions/StringUtils";

class ScreenData {

    constructor(name){
        this.name = name;
    }
    
    static EmptyScreenData = new ScreenData(EmptyString);
}

export default ScreenData;