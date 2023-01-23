import { Langs } from "./Langs";


export class AboutLangs extends Langs {
    
    articules = document.querySelector('.articules');
    title = document.querySelector('.about-title');
    philosophie = document.querySelector('.philosophie');
    team = document.querySelector('.team');
    quote = document.querySelector('.quote');
    continuationQuote = document.querySelector('.continuation-of-the-quote');


    // changeLang() {
    //     suoer
    // }
    rus(){

        
        this.articules.children[0].children[2].innerHTML = "Соучредитель";
        this.articules.children[1].children[2].innerHTML = "Соучредитель";
        this.articules.children[3].children[2].innerHTML = "Концепт-менеджер";
        this.articules.children[2].children[2].innerHTML = "Менеджер проекта";
        
        this.title.children[0].textContent = "О нас";
        this.philosophie.textContent = "Философия Будды";
        this.team.textContent = "Команда";
    
        this.quote.children[0].textContent = 'Все вокруг есть энергия. Энергия чиста и текуча. Она способна трансформироваться и принимать любую форму. ';
        this.continuationQuote.innerHTML = '<p>Человек обладает способностью управлять энергией. Для этого необходимо познать базовые постулаты бытия. Суета современной жизни гоняет людей по писанному сценарию и они забывают кто они есть на самом деле. Я есть я - это начало путешествия самопознания и осознанности. <br><br> Проект NFT это воплощение энергии света в виде будды. Этим проектом мы хотим подтолкнуть каждого из нас на сторону светлой и осознанной жизни. <br><br> Каждый из нас найдет своего будду. Найди своего будду!</p> ';
        
        this.articules.children[0].children[3].innerHTML = "Сильные стороны: Коммуникабельность, целеустремленность, ответственность, добросовестность, дальновидность. <br><br> Опыт: Инвестиционная деятельность с 2019 года. Руководительская и управленческая деятельность с 2020 года.";
        this.articules.children[1].children[3].innerHTML = "Сильное стороны: Предприимчивость, коммуникабельность, ответственность, креативность, лидерские качества. <br><br> Опыт: Ведение собственного бизнеса с 2011 года, инвестиционная деятельность с 2019 года. Создание и развитие десятка брендов с нуля. ";
        this.articules.children[2].children[3].innerHTML = "Сильное стороны: Организаторские навыки, коммуникабельность, ответственность, креативность, оптимизация процессов. <br><br> Опыт: Fullstack разработчик и IT-Consultant с 2017 года, проект менеджмент с 2019 года, инвестиционная деятельность с 2020 года.";
        this.articules.children[3].children[3].innerHTML = "Сильные стороны: Новаторские способности, концептуальное и аналитическое мышление, рефлексия, чувствительность к эстетике, нестандартное мышление, передача знаний понятным языком. Способность к персональному и бизнес ориентированному коачингу. (visionary)";
    }
    
    eng(){
        
        this.articules.children[0].children[2].innerHTML = "Co-Founder";
        this.articules.children[1].children[2].innerHTML = "Co-Founder";
        this.articules.children[3].children[2].innerHTML = "Concept Manager";
        this.articules.children[2].children[2].innerHTML = "Project Manager";
    
        this.title.children[0].textContent = "ABOUT";
        this.philosophie.textContent = "PHILOSOPHIE OF BUDDHA";
        this.team.textContent = "TEAM";
    
        this.quote.children[0].textContent = 'Everything around us is energy. Energy is pure and fluid. It is capable of transforming and taking any form';
        this.continuationQuote.innerHTML = '<p>Man has the ability to control energy. To do this, it is necessary to know the basic tenets of being. Hustle and bustle of modern life drives people along a written script and they forget who they really are. I Am Me is the beginning of a journey of self-discovery and awareness. The NFT project is an embodiment of the energy of light in the form of a Buddha. With this project we want to push each of us to the side of a light and conscious life. Each of us will find our own buddha. Find your Buddha!</p>';
    
        this.articules.children[0].children[3].innerHTML = "Communicative, goal-oriented, responsible, conscientious, forward-looking <br><br> Investment activities from 2019. Leading and managing activities from 2020.";
        this.articules.children[1].children[3].innerHTML = "Entrepreneurship, communication skills, responsibility, creativity, leadership qualities <br><br> Running his own business since 2011, investment activity since 2019. Creation and development of a dozen brands from scratch.";
        this.articules.children[2].children[3].innerHTML = "Organizational skills, communication skills, responsibility, creativity, process optimization <br><br> Fullstack developer and IT-Consultant since 2017. Project Management since 2019. Investment activities since 2020.";
        this.articules.children[3].children[3].innerHTML = "Innovative abilities, conceptual and analytical thinking, reflexivity, sensitivity to aesthetics, out-of-the-box thinking, conveying knowledge in plain language. Ability for personal and business-oriented coaching (visionary)";
    } 
    
    chn(){
        
        this.title.children[0].textContent = "關於我們";
        this.philosophie.textContent = "佛學";
        this.team.textContent = "團隊";
    
        this.quote.children[0].textContent = '我们周围的一切都是能量。 能量是纯净而流动的。 它能够变形并采取任何形式。';
        this.continuationQuote.innerHTML = '<p>人有控制能量的能力。 为此，有必要了解存在的基本原则。 现代生活的喧嚣驱使人们沿着书面剧本前进，他们忘记了自己的真实身份。 我是我是自我发现和意识之旅的开始。 NFT 项目是以佛像的形式体现了光的能量。 通过这个项目，我们希望将我们每个人推向光明和有意识的生活。 我们每个人都会找到自己的佛。找到你的佛！</p>';
    
        this.articules.children[0].children[2].innerHTML = "联合创始人";
        this.articules.children[1].children[2].innerHTML = "联合创始人";
        this.articules.children[3].children[2].innerHTML = "概念经理";
        this.articules.children[2].children[2].innerHTML = "专案经理";
    
        this.articules.children[0].children[3].innerHTML = "善于沟通、目标明确、有责任心、有责任心、有远见。<br><br> 从 2019 年开始的投资活动。从 2020 年开始领导和管理活动。";
        this.articules.children[1].children[3].innerHTML = "创业精神、沟通技巧、责任心、创造力、领导素质。 <br><br> 2011年开始经营自己的生意，2019年开始投资活动。从零开始创建和发展十几个品牌。";
        this.articules.children[2].children[3].innerHTML = "组织能力、沟通能力、责任心、创造力、流程优化。 <br><br> 自 2017 年起担任全栈开发人员和 IT 顾问。自 2019 年起担任项目管理。自 2020 年起从事投资活动。";
        this.articules.children[3].children[3].innerHTML = "创新能力，概念和分析思维，反思性，对美学的敏感性，开箱即用的思维，以通俗易懂的语言传达知识。 个人和商业指导的能力（有远见)。 ";
    } 
    
    aze(){
       
        this.title.children[0].textContent = "معلومات عنا";
        this.philosophie.textContent = "فلسفة بوذا";
        this.team.textContent = "فريق";
    
        this.quote.children[0].textContent = 'كل ما حولنا هو طاقة. الطاقة نقية وسائلة. وهي قادرة على التحول واتخاذ أي شكل.';
        this.continuationQuote.innerHTML = '<p> يمتلك الإنسان القدرة على التحكم في الطاقة. للقيام بذلك ، من الضروري معرفة المبادئ الأساسية للوجود. يدفع صخب الحياة الحديثة الناس إلى كتابة نص مكتوب وينسون من هم حقًا. أنا أنا هي بداية رحلة اكتشاف الذات والوعي. مشروع NFT هو تجسيد لطاقة الضوء في شكل بوذا. مع هذا المشروع نريد دفع كل واحد منا إلى جانب الحياة الواعية والمضيئة. سيجد كل واحد منا بوذا الخاص بنا.  ابحث عن بوذا الخاص بك! </p>';
    
        this.articules.children[0].children[2].innerHTML = "شريك مؤسس";
        this.articules.children[1].children[2].innerHTML = "شريك مؤسس";
        this.articules.children[3].children[2].innerHTML = "مدير المفهوم";
        this.articules.children[2].children[2].innerHTML = "مدير المشروع";
    
        this.articules.children[0].children[3].innerHTML = "تواصلي، هادف ، مسؤول، مبدع استشرافي <br><br> يطور الأنشطة الاستثمارية منذ عام 2019 . يقود ويدير الأنشطة منذ عام 2020.";
        this.articules.children[1].children[3].innerHTML = "رائد أعمال، مواصل اجتماعي، مسؤول، مبدع, الصفات القيادية    <br><br> يدير شركته الخاصة منذ عام 2011، ناشط استثماري منذ عام 2019. منشئ ومطور عشرات العلامات التجارية من الصفر.";
        this.articules.children[2].children[3].innerHTML = "لديه المهارات التنظيمية و الاتصالية، مسؤول ، مبدع ، مطور للعمليات <br><br> مطور Fullstack ومستشار تكنولوجيا المعلومات منذ عام 2017. إدارة المشروع منذ عام 2019. ناشط استثماري منذ عام 2020.";
        this.articules.children[3].children[3].innerHTML = "لديه قدرات ابتكارية و التفكير المفاهيمي والتحليلي والانعكاسي، الحساسية تجاه الجماليات، التفكير خارج الصندوق، نقل المعرفة بلغة واضحة. القدرة على التدريب الشخصي والموجه نحو الأعمال (البصيرة) ";
    } 
    
    ind(){
        
        this.title.children[0].textContent = "हमारे बारे में";
        this.philosophie.textContent = "बुद्ध दर्शन";
        this.team.textContent = "टीम";
    
        this.quote.children[0].textContent = 'हमारे चारों ओर सब कुछ ऊर्जा है। ऊर्जा शुद्ध और तरल है। यह किसी भी रूप को बदलने और लेने में सक्षम है।';
        this.continuationQuote.innerHTML = '<p>मनुष्य में ऊर्जा को नियंत्रित करने की क्षमता है। ऐसा करने के लिए, अस्तित्व के मूल सिद्धांतों को जानना आवश्यक है। आधुनिक जीवन की हलचल लोगों को एक लिखित लिपि के अनुसार चलाती है और वे भूल जाते हैं कि वे वास्तव में कौन हैं। आई एम मी आत्म-खोज और जागरूकता की यात्रा की शुरुआत है। NFT प्रोजेक्ट बुद्ध के रूप में प्रकाश की ऊर्जा का एक अवतार है। हम इस प्रोजेक्ट के साथ हम में से प्रत्येक को एक हल्के और सचेत जीवन की ओर ले जाना चाहते हैं। हम में से प्रत्येक को अपना बुद्ध मिलेगा। अपने बुद्ध को पाएँ!</p>';
    
        this.articules.children[0].children[2].innerHTML = "सह संस्थापक";
        this.articules.children[1].children[2].innerHTML = "सह संस्थापक";
        this.articules.children[3].children[2].innerHTML = "अवधारणा प्रबंधक";
        this.articules.children[2].children[2].innerHTML = "प्रोजेक्ट मैनेजर";
    
        this.articules.children[0].children[3].innerHTML = "संचारी, लक्ष्य-उन्मुख, जिम्मेदार, कर्तव्यनिष्ठ, दूरंदेशी <br><br> 2019 से निवेश की गतिविधियाँ। 2020 से गतिविधियाँ का प्रबंधन और अगुवाई कर रहे हैं।";
        this.articules.children[1].children[3].innerHTML = "उद्यमिता, संचार कौशल, जिम्मेदारी, रचनात्मकता, नेतृत्व गुण <br><br> 2011 से अपना खुद का व्यवसाय चला रहे हैं, 2019 से निवेश की गतिविधि कर रहे हैं। स्क्रैच से एक दर्जन ब्रांडों का निर्माण और विकास। ";
        this.articules.children[2].children[3].innerHTML = "संगठनात्मक कौशल, संचार कौशल, जिम्मेदारी, रचनात्मकता, प्रक्रिया अनुकूलन <br><br> 2017 से फुलस्टैक डेवलपर और आईटी-सलाहकार। 2019 से प्रोजेक्ट्स का प्रबंधन। 2020 से निवेश की गतिविधियाँ।";
        this.articules.children[3].children[3].innerHTML = "नवीन क्षमताएं, वैचारिक और विश्लेषणात्मक सोच, रिफ्लेक्सिविटी, सौंदर्यशास्त्र के प्रति संवेदनशीलता, आउट-ऑफ-द-बॉक्स सोच, ज्ञान को सरल भाषा में संप्रेषित करना। व्यक्तिगत और व्यवसाय-उन्मुख कोचिंग की क्षमता (दूरदर्शी)";
    } 
} 