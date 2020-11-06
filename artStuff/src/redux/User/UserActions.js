export const USER_LOG_IN = "user/login";
export const USER_LOG_OUT = "user/logout";

export const login = (user) => ({
    type: USER_LOG_IN,
    payload: {
        user: user
    },
});

export const logout = () => ({
    type: USER_LOG_OUT,
});