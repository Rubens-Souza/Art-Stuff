import { EmptyString } from "../utils/functions/StringUtils";

class UserData {

    constructor(email, nickName){
        this.email = email;
        this.nickName = nickName;
    }

    static EmptyUser = new UserData(EmptyString, EmptyString);

}

export default UserData;