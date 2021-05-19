const matchStateToProps = (state) => {
  return {
    movies: state.data,
  };
};
const mountPropsToState = async (props,cb) => {
  const data = [];
 await props.movies.forEach((element) => {
    data.push(element.data());
  });
  return cb(data);
};

const utils = {
    matchStateToProps,
    mountPropsToState
}

export default utils;