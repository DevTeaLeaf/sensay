import { Langs } from "./Langs";




export class MainLangs extends Langs {
    wallet = document.querySelector('.wallet-top span');

    findBuddaTitle = document.querySelector('.find-budda-title');
    video = document.querySelector('video');
    
    benefitTitle = document.querySelector('.benefit-title');
    benefit1 = document.querySelector('.benefit1');
    benefit2 = document.querySelector('.benefit2');
    benefit3 = document.querySelector('.benefit3');
    benefit4 = document.querySelector('.benefit4');

    ecoTitle = document.querySelector('.eco-title');

    findBuddaBody = document.querySelector('.find-budda-body');
    // buddaVideoTitle = document.querySelector('.budda-video-title');
    companyBlock = document.querySelector('.company-block span');
    companyBlock2 = document.querySelector('.company-block2 span');
    ecoBlock = document.querySelector('.eco-block');
    ecoBlock2 = document.querySelector('.eco-block2');
    
    
    
    constructor(lang){
        super(lang)
        this.changeLang(lang)
        
    }    
    changeLang(lang) {
        super.changeLang(lang)
    }
    updateElements() {
    }

    rus() {
        try {
            this.wallet.innerHTML = "ПОДКЛЮЧИТЬ <br> КОШЕЛЁК";
            
            this.findBuddaTitle.textContent = "НАЙДИ СВОЕГО БУДДУ!";
            this.video.src = 'static/video/rus.mp4';
            
            this.benefitTitle.textContent = "ПРЕИМУЩЕСТВА";
            this.benefit1.textContent = "Трансформация в NFT 2 с помощью различных элементов стихий";
            this.benefit2.textContent = "Коллекция NFT 3 действует как аватары в метавселенной";
            this.benefit3.textContent = "Доступ к приложению App - Meditate to earn с дополнительным заработком";
            this.benefit4.textContent = "Пассивный доход в виде нативных токенов";
            this.ecoTitle.textContent = "ЭКОСИСТЕМА";
            
            this.findBuddaBody.innerHTML = "Вместе повышайте ценность своих коллекций <br> Присоединяйтесь к нашему сообществу NFT прямо сейчас!";
            // this.buddaVideoTitle.textContent = "Алмазный король";
            this.companyBlock.textContent = "SENSAY — это коллекция из 10 000 уникальных NFT Будд, которая является частью нечто большего!";
            this.companyBlock2.textContent = "Владение NFT открывает доступ к клубу освещенных, а также к пассивному заработку в перспективе. Будущие привилегии будут открываться сообществом по мере развития дорожной карты.";
            this.ecoBlock.textContent = "Наш NFT проект является неотбемлемой частью большой и взаимодействующей экосистемы, экосистемы Lumeta. Каждый последующий проект связывается с предыдущим путем внедрения платежных систем в виде токена и собственной криптовалюты на основе блокчейн технологий.";
            this.ecoBlock2.textContent = "Вишенкой на торте выступает полная интеграция всех вышеперечисленных проектов в собственную метавселенную с инновационными технологиями и возможностями для каждого из нас.";

            
        } catch (error) {
        }
    }

    eng() {
        this.wallet.innerHTML = "CONNECT <br> WALLET";

        this.findBuddaTitle.textContent = "FIND YOUR BUDDA!";
        this.video.src = 'static/video/eng.mp4';

        this.benefitTitle.textContent = "BENEFITS";
        this.benefit1.textContent = "Transformation into NFT 2 via the various elemental elements";
        this.benefit2.textContent = "NFT 3 collection acts as avatars in the metaverse";
        this.benefit3.textContent = "Access to the App - Meditate to earn with extra earnings";
        this.benefit4.textContent = "Joining the illuminated club on Discord";
        this.ecoTitle.textContent = "ECOSYSTEM";

        this.findBuddaBody.innerHTML = "Add value to your collections together <br> with. Join our NFT community right now!";
        // this.buddaVideoTitle.textContent = "The diamond king";
        this.companyBlock.textContent = "The SENSAY is a collection of 10,000 unique NFT Buddhas that are part of something bigger!";
        this.companyBlock2.textContent = "Owning an NFT opens up access to the illuminated club as well as passive income in the horizon. Future privileges will be unlocked by the community as the roadmap progresses";
        this.ecoBlock.textContent = "Our NFT project is an integral part of a large and interacting ecosystem, the Lumeta ecosystem. Each successive project connects to the previous one by introducing payment systems in the form of a token and its own cryptocurrency based on blockchain technology";
        this.ecoBlock2.textContent = "The cherry on the cake is the full integration of all of the above projects into our own metaverse with innovative technologies and opportunities for each of us";
    }

    aze() {
        this.wallet.innerHTML = "ربط المحفظة";

        this.findBuddaTitle.textContent = "ابحث عن صديقك!";
        this.video.src = 'static/video/arab.mp4';

        this.benefitTitle.textContent = "ابحث عن صديقك!";
        this.benefit1.textContent = "التحول إلى NFT 2 عبر العناصر الأولية المختلفة";
        this.benefit2.textContent = "تعمل مجموعة NFT 3 كأفاتار في الكون الافتراضي";
        this.benefit3.textContent = "الوصول إلى التطبيق - تأمل لكسب أرباح إضافية";
        this.benefit4.textContent = "الانضمام إلى النادي المضيء على ديسكورد";
        this.ecoTitle.textContent = "النظام البيئي";

        this.findBuddaBody.innerHTML = "أضف قيمة إلى مجموعاتك معًا <br> مع. انضم إلى مجتمع NFT الآن!";
        // this.buddaVideoTitle.textContent = "ملك الماس";
        this.companyBlock.textContent = "SENSAY عبارة عن مجموعة من 10000 تماثيل NFT فريدة من نوعها هي جزء من شيء أكبر!";
        this.companyBlock2.textContent = "إن امتلاك NFT يفتح الوصول إلى النادي المضيء بالإضافة إلى الدخل السلبي في الأفق. سيتم فتح الامتيازات المستقبلية من قبل المجتمع مع تقدم خارطة الطريق";
        this.ecoBlock.textContent = "يعد مشروع NFT الخاص بنا جزءًا لا يتجزأ من نظام بيئي كبير ومتفاعل ، وهو نظام Lumeta البيئي. يرتبط كل مشروع متتالي بالمشروع السابق من خلال إدخال أنظمة الدفع في شكل رمز مميز وعملة مشفرة خاصة به تعتمد على تقنية blockchain";
        this.ecoBlock2.textContent = "الكرز على الكعكة هو التكامل الكامل لجميع المشاريع المذكورة أعلاه في metaverse الخاص بنا مع التقنيات والفرص المبتكرة لكل واحد منا";

    }

    chn() {
        this.wallet.innerHTML = "連接錢包";

        this.findBuddaTitle.textContent = "找到你的佛！";
        this.video.src = 'static/video/chines.mp4';

        this.benefitTitle.textContent = "好處";
        this.benefit1.textContent = "通过各种元素转化为NFT 2";
        this.benefit2.textContent = "NFT 3系列在元界中充当头像";
        this.benefit3.textContent = "访问应用程序 - 冥想以获得额外的收入";
        this.benefit4.textContent = "加入 Discord 上的發光俱樂部";
        this.ecoTitle.textContent = "生態系統";

        this.findBuddaBody.innerHTML = "一起為您的收藏增加價值 和。 <br> 立即加入我們的 NFT 社區！";
        // this.buddaVideoTitle.textContent = "鑽石王";
        this.companyBlock.textContent = "SENSAY 是 10,000 个独特的 NFT 佛像的集合，它们是更大事物的一部分！";
        this.companyBlock2.textContent = " 拥有 NFT 可以打开照明俱乐部以及地平线上的被动收入。 随着路线图的进展，社区将解锁未来的特权。";
        this.ecoBlock.textContent = "我們的 NFT 項目是大型互動生態系統 Lumeta 生態系統的組成部分。每個後續項目都通過引入代幣形式的支付系統和基於區塊鏈技術的自己的加密貨幣來連接前一個項目";
        this.ecoBlock2.textContent = "蛋糕上的櫻桃是將上述所有項目完全整合到我們自己的虛擬世界中，為我們每個人提供創新技術和機會";
    }

    ind() {
        this.wallet.innerHTML = "वॉलेट कनेक्ट करें";

        this.findBuddaTitle.textContent = "अपना बुद्ध खोजें!";
        this.video.src = 'static/video/hindi.mp4';

        this.benefitTitle.textContent = "फ़ायदे";
        this.benefit1.textContent = "विभिन्न मौलिक तत्वों के माध्यम से एनएफटी 2 में परिवर्तन";
        this.benefit2.textContent = "एनएफटी 3 संग्रह आभासी ब्रह्मांड में अवतार के रूप में कार्य करता है";
        this.benefit3.textContent = "ऐप तक पहुंच - अतिरिक्त कमाई के साथ कमाने के लिए ध्यान करें";
        this.benefit4.textContent = "डिस्कॉर्ड पर प्रबुद्ध क्लब में शामिल होना";
        this.ecoTitle.textContent = "पारिस्थितिकी तंत्र";

        this.findBuddaBody.innerHTML = "अपने संग्रह में एक साथ मूल्य जोड़ें <br> साथ। अभी हमारे NFT समुदाय में शामिल हों!";
        // this.buddaVideoTitle.textContent = "हीरा राजा";
        this.companyBlock.textContent = "SENSAY 10,000 अद्वितीय NFT बुद्धों का एक संग्रह है जो किसी बड़ी चीज़ का हिस्सा हैं!";
        this.companyBlock2.textContent = "एनएफटी पर अधिकार होने से प्रबुद्ध क्लब तक पहुँच के साथ-साथ क्षितिज में निष्क्रिय आय भी होती है। रोडमैप के आगे बढ़ने पर समुदाय द्वारा भविष्य के विशेषाधिकारों को अनलॉक किया जाएगा।";
        this.ecoBlock.textContent = "हमारी एनएफटी परियोजना लुमेटा पारिस्थितिकी तंत्र, एक बड़े और अंतःक्रियात्मक पारिस्थितिकी तंत्र का एक अभिन्न अंग है। प्रत्येक क्रमिक परियोजना एक टोकन के रूप में भुगतान प्रणाली की शुरुआत करके और ब्लॉकचेन तकनीक पर आधारित अपनी स्वयं की क्रिप्टोकरेंसी पेश करके पिछले एक से जुड़ती है।";
        this.ecoBlock2.textContent = "केक पर चेरी हम में से प्रत्येक के लिए नवीन तकनीकों और अवसरों के साथ हमारे अपने मेटावर्स में उपरोक्त सभी परियोजनाओं का पूर्ण एकीकरण है";
        
    }

}