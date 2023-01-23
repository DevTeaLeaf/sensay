import cookies from 'js-cookie';

export const langs = {
    RUS: 'RUS',
    USA: 'USA',
    UAE: 'UAE',
    IND: 'IND',
    CHN: 'CHN'
} 
export const SET_LANG = 'SET_LANG' 

const currentLanguageCode = cookies.get('i18next') || 'en'

const Langua = () => {
    switch (currentLanguageCode) {
        case 'ru': 
            return langs.RUS;
        case 'zh': 
            return langs.CHN;
        case 'ar': 
            return langs.UAE;
        case 'inc': 
            return langs.IND;
        default:
            return langs.USA;
    }
}

const initialState = Langua();

export const langReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LANG:
            return state = action.payload;
            return;
    
        default:
            return state;
    }
}