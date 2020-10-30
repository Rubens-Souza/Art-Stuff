import { EmptyString } from "../utils/functions/StringUtils";

class UserData {

    constructor(email, nickName){
        this.email = email;
        this.nickName = nickName;
    }

    static EmptyUser = {
        email: EmptyString,
        nickName: EmptyString,
    };

}

export default UserData;