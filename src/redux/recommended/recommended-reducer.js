import { RopaHombre } from '../../data/MaleClothing';
import { RopaMujer } from '../../data/WomenClothing';

const recommendedTotal = () => {
    const totalRecommended = [];
    let count = 0;
    
    while (count < 2) {
        const random_men = Math.floor(Math.random() * RopaHombre.length);
        const arr_men = RopaHombre[random_men];
        const random_women = Math.floor(Math.random() * RopaMujer.length);
        const arr_women = RopaHombre[random_women];

        totalRecommended.push(arr_men,arr_women);
        count++;
    }
    console.log(totalRecommended);
    return totalRecommended;
};

const INITIAL_STATE = {
    recommended: recommendedTotal,
};

const recommendedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type){
    default:
      return state;
  }
};

export default recommendedReducer;