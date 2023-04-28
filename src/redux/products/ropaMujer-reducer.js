import { RopaMujer, TotalRopaMujer } from '../../data/WomenClothing';

const INITIAL_STATE = {
    ropaMujer: RopaMujer,
    totalRopaMujer: TotalRopaMujer,
};

const ropaMujerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        default : 
        return state;
    }
  };
  
export default ropaMujerReducer;