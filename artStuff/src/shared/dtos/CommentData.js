import UserData from "./UserData";

class CommentData {

    constructor(author, comment) {
        this.id = `${author.nickName}-${Math.random()}`;
        this.author = author;
        this.comment = comment;
    }

    static EmptyCommentData = new CommentData(UserData.EmptyUser, new Array(0));
}

export default CommentData;