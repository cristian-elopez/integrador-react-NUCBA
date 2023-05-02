import { recommended } from '../../data/Recommended';

const INITIAL_STATE = {
  recommended: Array(4)
  .fill(0)
  .reduce((acc, _item) => {
    const IDs = acc.map(value => value.id);
    let totalRecommended = [];
    do {
      totalRecommended = {
          ...recommended[Math.floor(Math.random() * recommended.length)]};
    } while (IDs.includes(totalRecommended.id));
    return [...acc, totalRecommended];
  }, [])
};

const recommendedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type){
    default:
      return state;
  }
};

export default recommendedReducer;