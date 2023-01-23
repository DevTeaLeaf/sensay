
export const ACTION_BURGER_TYPES = {
    open: 'OPEN',
    close: 'CLOSE',
    toggle: 'TOGGLE',
} 

const initialState = false;


export const burgerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_BURGER_TYPES.close:
            return false;
        
        case ACTION_BURGER_TYPES.open: 
            return true;

        case ACTION_BURGER_TYPES.toggle:
            return !state
    
        default:
            return state;
    }
}