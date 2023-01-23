import { Langs } from "./Langs";




export class RoudmapLangs extends Langs {

    section = document.querySelector('.path');
    title = document.querySelector('.roadmap-title')
    constructor(lang) {
        super(lang)
    }

    rus() {
        this.title.children[0].textContent = "ДОРОЖНАЯ КАРТА";
    
        this.section.children[0].children[1].textContent = "Краудфандинг";
        this.section.children[0].children[2].textContent = 'Привлечение инвестиций с помощью краудфандинговых платформ. Цель 10.000 €';
        
        this.section.children[1].children[1].textContent = "Фундамент";
        this.section.children[1].children[2].textContent = 'Ранняя продажа NFT для фонда Будды';
        
        this.section.children[2].children[2].children[0].textContent = "Раздача";
        this.section.children[2].children[2].children[1].textContent = '"Бесплатное распространение NFT при выполнении условий: 1. Подписаться на социальные сети (Twitter, Discord, Instagram) 2. Сделать репост 2 постов из Twitter  3. Прокомментируйте пост в Twitter с ответом на вопрос ""Чем понравился проект NFT SENSAY"""';
        
        this.section.children[2].children[3].children[0].textContent = "Партнёры";
        this.section.children[2].children[3].children[1].textContent = 'Бесплатное распространение NFT для рекламы и продвижения проекта';
       
        this.section.children[2].children[4].children[0].textContent = "Команда";
        this.section.children[2].children[4].children[1].textContent = 'Буфер / резерв для развития команды и проекта';
        
        this.section.children[3].children[1].textContent = "Препродажа";
        this.section.children[3].children[2].textContent = '"Предварительная продажа NFT при выполнении условий: 1. Подпишитесь на социальные сети (Twitter, Discord, Instagram) 2. Сделать репост 2 постов из Twitter  3. Прокомментируйте пост в Twitter с ответом на вопрос ""Чем понравился проект NFT SENSAY""."';
      
        this.section.children[4].children[1].textContent = "Пост-препродажа";
        this.section.children[4].children[2].textContent = 'Пост-предпродажа NFT при выполнении условий: 1. Подпишитесь на социальные сети (Twitter, Discord, Instagram) 2. Сделать репост 2 постов из Twitter  3. Прокомментируйте пост в Twitter с ответом на вопрос, ""Чем понравился проект NFT SENSAY""';
    
        this.section.children[5].children[1].textContent = "Открытая продажа";
        this.section.children[5].children[2].textContent = "Публичная продажа NFT без скидки";
      
        this.section.children[6].children[1].textContent = "Постоткрытая продажа";
        this.section.children[6].children[2].textContent = "Постпубличная продажа NFT без скидки";
      
        this.section.children[7].children[1].textContent = "Постпродажа 2";
        this.section.children[7].children[2].textContent = "Пост продажа 2 NFT с более высокой стоимостью $";
      
        this.section.children[8].children[1].textContent = "Постпродажа 3";
        this.section.children[8].children[2].textContent = "Пост продажа 3 NFT с более высокой стоимостью $$";
      
        this.section.children[9].children[1].textContent = "Постпродажа 4";
        this.section.children[9].children[2].textContent = "Пост продажа 4 NFT с более высокой стоимостью $$$";
      
        this.section.children[10].children[1].textContent = "Постпродажа 5";
        this.section.children[10].children[2].textContent = "Распродажа 5 NFT с более высокой стоимостью $$$$";
      
        this.section.children[11].children[1].textContent = "Секретная продажа";
        this.section.children[11].children[2].textContent = "Секретная продажа 3 сверхредких NFT $$$$$";
    }

    eng(){
    
        this.title.children[0].textContent = "ROAD MAP";
    
        this.section.children[0].children[1].textContent = "Crowdfinding";
        this.section.children[0].children[2].textContent = '"Attracting investments through Crowdfinding Platforms Target 10.000 €"';
    
        this.section.children[1].children[1].textContent = "Foundation";
        this.section.children[1].children[2].textContent = 'Early sale of NFT for Buddha Foundation';
    
        
        this.section.children[2].children[2].children[0].textContent = "Give away";
        this.section.children[2].children[2].children[1].textContent = '"Free distribution of NFT for the fulfilled conditions: 1. Subscribe to social networks (Twitter, Discord, Instagram) 2. Repost 2 posts from Twitter / Discord 3. Comment under the Twitter post with the answer, what did the NFT project like"';
        
        this.section.children[2].children[3].children[0].textContent = "Partners";
        this.section.children[2].children[3].children[1].textContent = 'Free distribution of NFT for advertising and promotion of the project';
        
        this.section.children[2].children[4].children[0].textContent = "Team";
        this.section.children[2].children[4].children[1].textContent = 'Buffer / reserve for team and project development';
    
        
        this.section.children[3].children[1].textContent = "Pre-Sale";
        this.section.children[3].children[2].innerHTML = '"Pre-Sale of NFT for the fulfilled conditions: <br> 1. Subscribe to social networks (Twitter, Discord, Instagram) <br> 2. Repost 2 posts from Twitter <br> 3. Comment under the Twitter post with the answer, what did the NFT project like"';
        
        this.section.children[4].children[1].textContent = "Post Pre-Sale";
        this.section.children[4].children[2].innerHTML = '"Post Pre-Sale of NFT for the fulfilled conditions: <br> 1. Subscribe to social networks (Twitter, Discord, Instagram) <br> 2. Repost 2 posts from Twitter <br> 3. Comment under the Twitter post with the answer, what did the NFT project like"';
        
        this.section.children[5].children[1].textContent = "Public Sale";
        this.section.children[5].children[2].textContent = "Public sale of NFTs without discount";
        
        this.section.children[6].children[1].textContent = "Post Public Sale";
        this.section.children[6].children[2].textContent = "Post Public sale of NFTs without discount";
        
        this.section.children[7].children[1].textContent = "Post Sale 2";
        this.section.children[7].children[2].textContent = "Post sale 2 of NFTs with a higher value $";
        
        this.section.children[8].children[1].textContent = "Post Sale 3";
        this.section.children[8].children[2].textContent = "Post sale 3 of NFTs with a higher value $$";
        
        this.section.children[9].children[1].textContent = "Post Sale 4";
        this.section.children[9].children[2].textContent = "Post sale 4 of NFTs with a higher value $$$";
        
        this.section.children[10].children[1].textContent = "Post Sale 5";
        this.section.children[10].children[2].textContent = "Post sale 5 of NFTs with a higher value $$$$";
        
        this.section.children[11].children[1].textContent = "Secret Sale";
        this.section.children[11].children[2].textContent = "Secret sale of 3 ultra-rare NFTs $$$$$";
    }
    

    aze(){
    
        this.title.children[0].textContent = "خريطة الطريق";
    
        this.section.children[0].children[1].textContent = "التمويل";
        this.section.children[0].children[2].textContent = '"جذب الاستثمارات من خلال منصات Crowdfinding الهدف 10.000 € "';
    
        this.section.children[1].children[1].textContent = "مؤسسة";
        this.section.children[1].children[2].textContent = 'البيع المبكر لـ NFT لمؤسسة بوذا';
    
        
        this.section.children[2].children[2].children[0].textContent = "تبرع";
        this.section.children[2].children[2].children[1].textContent = '"التوزيع المجاني لـ NFT للشروط المستوفاة:1. اشترك في الشبكات الاجتماعية (Twitter ، Discord ، Instagram) 2. إعادة نشر 2 مشاركات من التغريد 3. التعليق أسفل منشور Twitter بالإجابة ، ما الذي أعجب به مشروع NFT "';
        
        this.section.children[2].children[3].children[0].textContent = "الشركاء";
        this.section.children[2].children[3].children[1].textContent = 'التوزيع المجاني لـ NFT للدعاية والترويج للمشروع';
        
        this.section.children[2].children[4].children[0].textContent = "الفريق";
        this.section.children[2].children[4].children[1].textContent = 'احتياطي / احتياطي لفريق تطوير المشروع';
    
        
        this.section.children[3].children[1].textContent = "ما قبل البيع";
        this.section.children[3].children[2].innerHTML = '"ما قبل بيع NFT للشروط المستوفاة: 1. اشترك في الشبكات الاجتماعية (Twitter ، Discord ، Instagram) 2. إعادة نشر 2 مشاركات من التغريد 3. التعليق أسفل منشور Twitter بالإجابة ، ما الذي أعجب به مشروع NFT "';
        
        this.section.children[4].children[1].textContent = "ما بعد البيع";
        this.section.children[4].children[2].innerHTML = '"ما بعد البيع لـ NFT للشروط المستوفاة: 1. اشترك في الشبكات الاجتماعية (Twitter ، Discord ، Instagram) 2. إعادة نشر 2 مشاركات من التغريد 3. التعليق أسفل منشور Twitter بالإجابة ، ما الذي أعجب به مشروع NFT "';
        
        this.section.children[5].children[1].textContent = "مزاد علني";
        this.section.children[5].children[2].textContent = "البيع العام لـ NFTs بدون خصم";
        
        this.section.children[6].children[1].textContent = "بعد البيع العام";
        this.section.children[6].children[2].textContent = "بعد البيع العام لـ NFTs بدون خصم";
        
        this.section.children[7].children[1].textContent = "بعد البيع 2";
        this.section.children[7].children[2].textContent = "بعد البيع 2 من NFTs بقيمة أعلى $";
        
        this.section.children[8].children[1].textContent = "بعد البيع 3";
        this.section.children[8].children[2].textContent = "بعد البيع 3 من NFTs بقيمة أعلى $$";
        
        this.section.children[9].children[1].textContent = "بعد البيع 4";
        this.section.children[9].children[2].textContent = "بعد البيع 4 من NFTs بقيمة أعلى $ $";
        
        this.section.children[10].children[1].textContent = "بعد البيع 5";
        this.section.children[10].children[2].textContent = "بعد البيع 5 من NFTs بقيمة أعلى $$$$";
        
        this.section.children[11].children[1].textContent = "البيع السري";
        this.section.children[11].children[2].textContent = "البيع السري لـ 3 NFTs النادرة للغاية $$$$$";
    }

    chn(){
        this.title.children[0].textContent = "路線圖";
    
        this.section.children[0].children[1].textContent = "众筹";
        this.section.children[0].children[2].textContent = '通过众筹平台吸引投资 目标 10.000 欧元"';
    
        this.section.children[1].children[1].textContent = "基础";
        this.section.children[1].children[2].textContent = '佛陀基金会早期出售 NFT';
    
        
        this.section.children[2].children[2].children[0].textContent = "送";
        this.section.children[2].children[2].children[1].textContent = '满足条件免费分发 NFT：1. 订阅社交网络（Twitter、Discord、Instagram） 2. 从 Twitter 转发 2 个帖子 3. 在推特帖子下评论，回答“NFT 项目喜欢什么';
        
        this.section.children[2].children[3].children[0].textContent = "伙伴";
        this.section.children[2].children[3].children[1].textContent = '免费分发 NFT 用于项目的广告和推广';
        
        this.section.children[2].children[4].children[0].textContent = "团队";
        this.section.children[2].children[4].children[1].textContent = '团队和项目开发的缓冲/储备';
    
        
        this.section.children[3].children[1].textContent = "预售";
        this.section.children[3].children[2].innerHTML = '"满足条件的 NFT 预售：1. 订阅社交网络（Twitter、Discord、Instagram）2. 从 Twitter 转发 2 个帖子 3. 在推特帖子下方评论，附上答案，NFT 项目喜欢什么"';
        
        this.section.children[4].children[1].textContent = "售后";
        this.section.children[4].children[2].innerHTML = '"“满足条件的 NFT 预售后：1. 订阅社交网络（Twitter、Discord、Instagram）2. 从 Twitter 转发 2 个帖子 3. 在推特帖子下评论，回答“NFT 项目喜欢什么”"';
        
        this.section.children[5].children[1].textContent = "公开发售";
        this.section.children[5].children[2].textContent = "无折扣公开发售 NFT";
        
        this.section.children[6].children[1].textContent = "公开发售后";
        this.section.children[6].children[2].textContent = "无折扣公开发售 NFT";
        
        this.section.children[7].children[1].textContent = "售后 2";
        this.section.children[7].children[2].textContent = "售后 2 个价值更高的 NFT $";
        
        this.section.children[8].children[1].textContent = "售后 3";
        this.section.children[8].children[2].textContent = "售后 3 个价值更高的 NFT $$";
        
        this.section.children[9].children[1].textContent = "售后 4";
        this.section.children[9].children[2].textContent = "售后 4 个价值更高的 NFT $$$";
        
        this.section.children[10].children[1].textContent = "售后 5";
        this.section.children[10].children[2].textContent = "售后 5 个价值更高的 NFT $$$$";
        
        this.section.children[11].children[1].textContent = "秘密销售";
        this.section.children[11].children[2].textContent = "秘密出售 3 种超稀有 NFT $$$$$";
    }

    ind(){
    
        this.title.children[0].textContent = "रोड मैप";
    
        this.section.children[0].children[1].textContent = "क्राउडफाइंडिंग";
        this.section.children[0].children[2].textContent = 'क्राउडफाइंडिंग प्लेटफॉर्म के माध्यम से निवेश को आकर्षित करनालक्ष्य 10.000 €';
    
        this.section.children[1].children[1].textContent = "फाउंडेशन";
        this.section.children[1].children[2].textContent = 'बुद्धा फाउंडेशन के लिए NFT की जल्दी बिक्री';
    
        
        this.section.children[2].children[2].children[0].textContent = "मुफ्त की वस्तु";
        this.section.children[2].children[2].children[1].textContent = 'शर्तें पूरी होने के लिए NFT का मुफ्त वितरण: 1. सोशल नेटवर्क्स को सब्सक्राइब करें (ट्विटर, डिस्कॉर्ड, इंस्टाग्राम) 2. ट्विटर से 2 पोस्ट रीपोस्ट करें 3. ट्विटर पोस्ट के नीचे उत्तर के साथ कमेंट करें कि NFT प्रोजेक्ट कैसा लगा';
        
        this.section.children[2].children[3].children[0].textContent = "भागीदार";
        this.section.children[2].children[3].children[1].textContent = 'प्रोजेक्ट के विज्ञापन और प्रचार के लिए NFT का मुफ्त वितरण';
        
        this.section.children[2].children[4].children[0].textContent = "टीम";
        this.section.children[2].children[4].children[1].textContent = 'टीम और प्रोजेक्ट के विकास के लिए बफर / रिजर्व';
    
        
        this.section.children[3].children[1].textContent = "पूर्व-बिक्री";
        this.section.children[3].children[2].innerHTML = 'शर्तें पूरी होने के लिए NFT की पूर्व-बिक्री: 1. सोशल नेटवर्क्स को सब्सक्राइब करें (ट्विटर, डिस्कॉर्ड, इंस्टाग्राम) 2. ट्विटर से 2 पोस्ट रीपोस्ट करें 3. ट्विटर पोस्ट के नीचे उत्तर के साथ कमेंट करें कि NFT प्रोजेक्ट कैसा लगा';
        
        this.section.children[4].children[1].textContent = "पूर्व बिक्री के बाद";
        this.section.children[4].children[2].innerHTML = 'शर्तें पूरी होने के लिए NFT की पूर्व-बिक्री के बाद: 1. सोशल नेटवर्क्स को सब्सक्राइब करें (ट्विटर, डिस्कॉर्ड, इंस्टाग्राम) 2. ट्विटर से 2 पोस्ट रीपोस्ट करें 3. ट्विटर पोस्ट के नीचे उत्तर के साथ कमेंट करें कि NFT प्रोजेक्ट कैसा लगा';
        
        this.section.children[5].children[1].textContent = "सार्वजनिक बिक्री";
        this.section.children[5].children[2].textContent = "बिना छूट के NFT की सार्वजनिक बिक्री";
        
        this.section.children[6].children[1].textContent = "सार्वजनिक बिक्री के बाद";
        this.section.children[6].children[2].textContent = "बिना छूट के NFT की सार्वजनिक बिक्री के बाद";
        
        this.section.children[7].children[1].textContent = "दूसरी बिक्री के बाद";
        this.section.children[7].children[2].textContent = "उच्च मूल्य $ के साथ NFT की दूसरी बिक्री के बाद";
        
        this.section.children[8].children[1].textContent = "तीसरी बिक्री के बाद";
        this.section.children[8].children[2].textContent = "उच्च मूल्य $$ के साथ NFT की तीसरी बिक्री के बाद";
        
        this.section.children[9].children[1].textContent = "चौथी बिक्री के बाद";
        this.section.children[9].children[2].textContent = "उच्च मूल्य $$$ के साथ NFT की चौथी बिक्री के बाद";
        
        this.section.children[10].children[1].textContent = "पांचवीं बिक्री के बाद";
        this.section.children[10].children[2].textContent = "उच्च मूल्य $$$$ के साथ NFT की पांचवीं बिक्री के बाद";
        
        this.section.children[11].children[1].textContent = "गुप्त बिक्री";
        this.section.children[11].children[2].textContent = "3 अति दुर्लभ NFT की गुप्त बिक्री $$$$$";
    }
}