import UserData from "./UserData";
import ImageData from "./ImageData";
import { EmptyString } from "../utils/functions/StringUtils";

class PostData {
    
    constructor(author, title, image, comments) {
        this.id = `${author.nickName}-${title}-${Math.random()}`;
        this.author = author;
        this.title = title;
        this.comments = comments;
        this.image = image;
    }

    static EmptyPost = new PostData(UserData.EmptyUser, EmptyString, ImageData.EmptyImageData, new Array(0));
}

export default PostData;