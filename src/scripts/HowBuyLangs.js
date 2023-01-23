import { Langs } from "./Langs";



export class HowBuyLangs extends Langs {
    title = document.querySelector('.how-to-buy-title');
    videoInfo = document.querySelector('.videoblock_someinfo');
    videoBlock = document.querySelector('.videoblock');
    steps = document.querySelector('.steps');
    rus(){
        
        this.title.textContent = "КАК КУПИТЬ";  
    
        this.videoInfo.textContent = "SENSAY — это коллекция из 10 000 уникальных NFT Бу    дд, которая является частью нечто большего!";
        this.videoBlock.children[1].textContent = "Как купить наши NFT?";
    
        
        this.steps.children[0].children[1].innerHTML = 'Для покупки NFT вам понадобится любой Ethereum-совместимый криптокошелек и немного ETH. Мы рекомендуем использовать <a href="https://metamask.io/">MetaMask</a>';
        this.steps.children[1].children[1].textContent = "MetaMask доступен в виде плагина для следующих браузеров: Chrome, Firefox, Edge, Brave. Пожалуйста, установите его для вашего браузера и зарегистрируйтесь.";
        this.steps.children[2].children[1].textContent = 'Чтобы получить Ethereum непосредственно в свой криптокошелек, вы можете нажать на кнопку ""купить"" и использовать плагины MetaMask, такие как Coinbase pay, Tranksak, Moonpay, Wyre. Купите столько Ethereum, сколько вам нужно для получения NFT.';
        this.steps.children[3].children[1].textContent = 'Чтобы подключить свой криптокошелек к нашему сайту, вам нужно нажать кнопку ""Подключить кошелек"" и следовать инструкциям плагина Web 3.0. Затем вы сможете совершать покупки на сайте, нажав на кнопку ""MINT"".';
        this.steps.children[4].children[1].textContent = 'После покупки NFT вы сможете увидеть его доступность в MetaMask в разделе транзакций, на Opensea Marketplace или на Etherscan."';
    }
    
    eng(){

    
        this.title.textContent = "HOW TO BUY";
    
        this.videoInfo.textContent = "The SENSAY is a collection of 10,000 unique NFT Buddhas that are part of something bigger!";
        this.videoBlock.children[1].textContent = "How to purchase our NFT?";
    
        
        this.steps.children[0].children[1].innerHTML = 'To buy a Sensay NFT you will need an Ethereum compatible crypto wallet and some ETH. We recommend to use the  <a href="https://metamask.io/">MetaMask.</a>';
        this.steps.children[1].children[1].textContent = "MetaMask is available as a plugin for following browsers: Chrome, Firefox, Edge, Brave.";
        this.steps.children[2].children[1].textContent = 'If you haven’t bought Ethereum yet, the MetaMask plugin has a button to get ETH from Coinbase (crypto exchange platform).';
        this.steps.children[3].children[1].textContent = 'This plugin will allow you to access your Ethereum account from our website and make a purchase.';
        this.steps.children[4].children[1].textContent = 'After the purchase, you can view your Sensay in your MetaMask wallet by visiting your profile page and checking purchases."';
    }
    
    aze(){

    
        this.title.textContent = "كيف اشترى";
    
        this.videoInfo.textContent = "SENSAY عبارة عن مجموعة من 10000 تماثيل NFT فريدة من نوعها هي جزء من شيء أكبر!";
        this.videoBlock.children[1].textContent = "كيفية شراء NFT لدينا؟";
    
        
        this.steps.children[0].children[1].innerHTML = 'لشراء NFT ، ستحتاج إلى أي محفظة تشفير متوافقة مع Ethereum وبعض ETH. نوصي باستخدام <a href="https://metamask.io/">MetaMask</a>';
        this.steps.children[1].children[1].textContent = "يتوفر MetaMask كمكوِّن إضافي للمتصفحات التالية: Chrome و Firefox و Edge و Brave. يرجى تثبيته لمتصفحك والتسجيل.";
        this.steps.children[2].children[1].textContent = 'للحصول على Ethereum مباشرة في محفظتك للعملات المشفرة ، يمكنك النقر فوق الزر ""شراء"" واستخدام مكونات MetaMask الإضافية مثل Coinbase pay و Tranksak و Moonpay و Wyre. قم بشراء كمية Ethereum التي تحتاجها للحصول على NFT.';
        this.steps.children[3].children[1].textContent = 'لتوصيل محفظتك المشفرة بموقعنا على الويب ، تحتاج إلى النقر فوق ""ربط المحفظة"" واتباع تعليمات المكون الإضافي Web 3.0. بعد ذلك ستتمكن من إجراء عمليات شراء على الموقع بالنقر فوق الزر ""Mint"".';
        this.steps.children[4].children[1].textContent = 'بعد شرائك NFT ، يمكنك معرفة مدى توفره في MetaMask في قسم المعاملات أو في سوق Opensea Marketplace  أو على Etherscan."';
    }
    
    chn(){

    
        this.title.textContent = "如何購買";
    
        this.videoInfo.textContent = "SENSAY 是 10,000 个独特的 NFT 佛像的集合，它们是更大事物的一部分！";
        this.videoBlock.children[1].textContent = "如何購買我們的 NFT？";
    
        
        this.steps.children[0].children[1].innerHTML = '要购买 NFT，你需要任何与以太坊兼容的加密钱包和一些 ETH。我们建议使用 <a href="https://metamask.io/">MetaMask</a>';
        this.steps.children[1].children[1].textContent = "MetaMask 可作为以下浏览器的插件使用：Chrome、Firefox、Edge、Brave。 请为您的浏览器安装并注册。";
        this.steps.children[2].children[1].textContent = '要直接在您的加密货币钱包中获取以太坊，您可以单击“购买”按钮并使用 MetaMask 插件，例如 Coinbase pay、Tranksak、Moonpay、Wyre。 购买尽可能多的以太坊以获得 NFT。';
        this.steps.children[3].children[1].textContent = '要将您的加密钱包连接到我们的网站，您需要单击“连接钱包”并按照 Web 3.0 插件的说明进行操作。 然后，您将能够通过单击“薄荷”按钮在网站上进行购买。';
        this.steps.children[4].children[1].textContent = '购买 NFT 后，您可以在 MetaMask 的交易部分、Opensea Marketplace 或 Etherscan 上查看它的可用性';
    }
    
    ind(){

    
        this.title.textContent = "कैसे खरीदे";
    
        this.videoInfo.textContent = "SENSAY 10,000 अद्वितीय NFT बुद्धों का एक संग्रह है जो किसी बड़ी चीज़ का हिस्सा हैं!";
        this.videoBlock.children[1].textContent = "हमारा एनएफटी कैसे खरीदें?";
    
        
        this.steps.children[0].children[1].innerHTML = 'एनएफटी खरीदने के लिए, आपको किसी भी एथेरियम को सपोर्ट करने वाला क्रिप्टो वॉलेट और कुछ ईटीएच की आवश्यकता होगी। हम <a href="https://metamask.io/">MetaMask</a> का उपयोग करने की सलाह देते हैं।';
        this.steps.children[1].children[1].textContent = "मेटामास्क निम्नलिखित ब्राउज़रों के लिए एक प्लगइन के रूप में उपलब्ध है: क्रोम, फ़ायरफ़ॉक्स, एज, ब्रेव। कृपया इसे अपने ब्राउज़र में इनस्टॉल करें और पंजीकरण करें।";
        this.steps.children[2].children[1].textContent = 'एथेरियम को सीधे अपने क्रिप्टोक्यूरेंसी वॉलेट में प्राप्त करने के लिए आप ""खरीदें"" बटन पर क्लिक कर सकते हैं और कॉइनबेस पे, ट्रैंकसाक, मूनपे, वायर जैसे मेटामास्क प्लगइन्स का उपयोग कर सकते हैं। एनएफटी प्राप्त करने के लिए जितनी जरूरत हो उतने इथेरियम खरीदें।';
        this.steps.children[3].children[1].textContent = 'अपने क्रिप्टो वॉलेट को हमारी वेबसाइट से जोड़ने के लिए, आपको ""कनेक्ट वॉलेट"" पर क्लिक करना होगा और वेब 3.0 प्लगइन के निर्देशों का पालन करना होगा। फिर आप ""मिंट"" बटन पर क्लिक करके वेबसाइट पर खरीदारी कर सकेंगे।';
        this.steps.children[4].children[1].textContent = 'आपके एनएफटी खरीदने के बाद, आप ओपनसी मार्केटप्लेस पर या इथरस्कैन पर लेनदेन वाले अनुभाग में मेटामास्क में इसकी उपलब्धता देख सकते हैं।';
    }

    
}