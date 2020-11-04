import { EmptyString } from "../utils/functions/StringUtils";

class TabData {
    constructor(name, enableIcon, disableIcon) {
        this.name = name;
        this.enableIcon = enableIcon;
        this.disableIcon = disableIcon;
    }

    static EmptyTabData = new TabData(EmptyString, EmptyString, EmptyString);
}

export default TabData;