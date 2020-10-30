import { EmptyString } from "../utils/functions/StringUtils";

class PostData {
    
    constructor(author, title, image, comments) {
        this.id = `${author.nickName}-${title}-${Math.random()}`;
        this.author = author;
        this.title = title;
        this.comments = comments;
        this.image = image;
    }

    static EmptyPost = {
        author: null,
        title: EmptyString,
        comments: new Array(0),
        image: null,
    };

}

export default PostData;