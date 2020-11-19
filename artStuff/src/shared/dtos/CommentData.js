import UserData from "./UserData";
import { EmptyString } from "../utils/functions/StringUtils";

class CommentData {

    constructor(author, comment) {
        this.id = `${author.nickName}-${Math.random()}`;
        this.author = author;
        this.comment = comment;
    }

    static EmptyCommentData = new CommentData(UserData.EmptyUser, EmptyString);
}

export default CommentData;