export const OPEN_CLOTHING = 'OPEN_CLOTHING';

export const openClothing = (id, tittle, img, desc, price, category) => (
    { type: OPEN_CLOTHING, payload: id, tittle, img, desc, price, category }
);