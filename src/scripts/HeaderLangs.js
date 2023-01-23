import { Langs } from "./Langs";




export class HeaderLangs extends Langs {
  menuMobile = document.querySelector('.menu-mobile');
  menuTop = document.querySelector('.menu-top');

    constructor (lang) {
      super(lang)
    }

    rus() {
        this.menuMobile.children[0].children[0].textContent = "Главная";
        this.menuMobile.children[1].children[0].textContent = "О нас";
        this.menuMobile.children[2].children[0].textContent = "Дорожная карта";
        this.menuMobile.children[3].children[0].textContent = "Как купить";
        this.menuMobile.children[4].children[0].textContent = "FAQ";
      
        this.menuTop.children[1].children[0].textContent = "О нас";
        this.menuTop.children[2].children[0].textContent = "Карта";
        this.menuTop.children[3].children[0].textContent = "Как купить";
        this.menuTop.children[4].children[0].textContent = "FAQ";
      }
    
      eng() {
        this.menuMobile.children[0].children[0].textContent = "Main";
        this.menuMobile.children[1].children[0].textContent = "About";
        this.menuMobile.children[2].children[0].textContent = "Road map";
        this.menuMobile.children[3].children[0].textContent = "How to buy";
        this.menuMobile.children[4].children[0].textContent = "FAQ";
      
        this.menuTop.children[1].children[0].textContent = "About";
        this.menuTop.children[2].children[0].textContent = "Road map";
        this.menuTop.children[3].children[0].textContent = "How to buy";
        this.menuTop.children[4].children[0].textContent = "FAQ";
      }
    
      aze() {
        this.menuMobile.children[0].children[0].textContent = "الصفحة الرئيسية";
        this.menuMobile.children[1].children[0].textContent = "معلومات عنا";
        this.menuMobile.children[2].children[0].textContent = "خريطة الطريق";
        this.menuMobile.children[3].children[0].textContent = "كيف اشترى";
        this.menuMobile.children[4].children[0].textContent = "التعليمات";
      
        this.menuTop.children[1].children[0].textContent = "معلومات عنا";
        this.menuTop.children[2].children[0].textContent = "خريطة الطريق";
        this.menuTop.children[3].children[0].textContent = "كيف اشترى";
        this.menuTop.children[4].children[0].textContent = "التعليمات";
      }
    
      chn() {  
        this.menuMobile.children[0].children[0].textContent = "家";
        this.menuMobile.children[1].children[0].textContent = "關於我們";
        this.menuMobile.children[2].children[0].textContent = "路線圖";
        this.menuMobile.children[3].children[0].textContent = "如何購買";
        this.menuMobile.children[4].children[0].textContent = "常問問題";
      
        this.menuTop.children[1].children[0].textContent = "關於我們";
        this.menuTop.children[2].children[0].textContent = "路線圖";
        this.menuTop.children[3].children[0].textContent = "如何購買";
        this.menuTop.children[4].children[0].textContent = "常問問題";
      }
    
      ind() {
        this.menuMobile.children[0].children[0].textContent = "घर";
        this.menuMobile.children[1].children[0].textContent = "हमारे बारे में";
        this.menuMobile.children[2].children[0].textContent = "रोड मैप";
        this.menuMobile.children[3].children[0].textContent = "कैसे खरीदे";
        this.menuMobile.children[4].children[0].textContent = "सामान्य प्रश्न";
      
        this.menuTop.children[1].children[0].textContent = "हमारे बारे में";
        this.menuTop.children[2].children[0].textContent = "रोड मैप";
        this.menuTop.children[3].children[0].textContent = "कैसे खरीदे";
        this.menuTop.children[4].children[0].textContent = "सामान्य प्रश्न";
      }
}