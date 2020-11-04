class Action {

    constructor(type, payload = null) {
        this.type = type;
        this.payload = payload;
    }

    static EmptyAction = new Action(null);
}

export default Action;