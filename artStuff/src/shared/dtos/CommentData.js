class CommentData {

    constructor(author, comment) {
        this.id = `${author.nickName}-${Math.random()}`;
        this.author = author;
        this.comment = comment;
    }

    static EmptyComment = {
        author: null,
        comment: new Array(0),
    };

}

export default CommentData;