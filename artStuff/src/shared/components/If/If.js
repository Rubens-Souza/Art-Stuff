const If = ({
    children, isTrue
}) => {
    if (isTrue) {
        return children;
    }

    return null;
};

export default If;