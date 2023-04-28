import { RopaHombre, TotalRopaHombre } from '../../data/MaleClothing';

const INITIAL_STATE = {
    ropaHombre: RopaHombre,
    totalRopaHombre: TotalRopaHombre, 
};

const ropaHombreReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        default : 
        return state;
    }
  };
  
export default ropaHombreReducer;