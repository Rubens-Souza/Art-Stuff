import { EmptyString } from "../utils/functions/StringUtils";

class ImageData {

    constructor(uri, base64, height, width, formatType) {
        this.uri = uri;
        this.base64 = base64;
        this.height = height;
        this.width = width;
        this.formatType = formatType;
    }

    getImageSource() {
        const imageSourceData = {
            image: {
                uri: this.uri,
                base64: this.base64,
            },
        };
        return imageSourceData;
    }

    static EmptyImageData = new ImageData(EmptyString, EmptyString, 0, 0, EmptyString);
}

export default ImageData;