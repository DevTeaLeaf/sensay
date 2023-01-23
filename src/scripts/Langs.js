import { langs } from "../store/reducer/LangReducer";

function setUserLocale(locale) {
  localStorage.setItem('userLocale', locale);
}

export class Langs {  
  lang = '';
  
  constructor(lang) {
    this.lang = lang;
    // this.changeLang(lang)
  }  
  
  
  changeLang(lang) {

    switch (lang) {
      case langs.RUS:
        this.rus()
        break;
      
      case langs.USA:
        this.eng()
        break;
      
      case langs.UAE:
        this.aze()
        break;    
      
      case langs.IND:
        this.ind()
         break;    
        
      case langs.CHN:
        this.chn()
        break;    
        
      default:
        break;
    }
  }

  
}








