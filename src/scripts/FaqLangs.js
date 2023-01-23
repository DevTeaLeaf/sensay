import { Langs } from "./Langs";


export class FaqLangs extends Langs {

    leftColumn = document.querySelector('.left-column');
    rightColumn = document.querySelector('.right-column');

    rus(){
        try {
            this.leftColumn.children[0].children[0].children[0].textContent = "Сколько всего будет NFT SENSAY?";
            this.leftColumn.children[1].children[0].children[0].textContent = "Какова будет цена минта?";
            this.leftColumn.children[2].children[0].children[0].textContent = "Что насчет коммерческих прав?";
            this.leftColumn.children[3].children[0].children[0].textContent = "Что делает Будду уникальным?";
            this.leftColumn.children[4].children[0].children[0].textContent = "Как я могу попасть в белый список?";
            this.leftColumn.children[5].children[0].children[0].textContent = "На каком блокчейне находится NFT SENSAY?";
            this.leftColumn.children[6].children[0].children[0].textContent = "Сколько NFT SENSAY я могу сминтить?";
            this.leftColumn.children[7].children[0].children[0].textContent = "Какие права я имею как владелец NFT SENSAY?";
        
            this.rightColumn.children[0].children[0].children[0].textContent = "Когда будет запущен NFT SENSAY?";
            this.rightColumn.children[1].children[0].children[0].textContent = "Будут ли другие коллекции NFT Будд?";
            this.rightColumn.children[2].children[0].children[0].textContent = "Каковы вторичные роялти? ";
            this.rightColumn.children[3].children[0].children[0].textContent = "Какие сборы я плачу, приобретая NFT?";
            this.rightColumn.children[4].children[0].children[0].textContent = "Кому принадлежит смарт-контракт и где я могу найти его?";
            this.rightColumn.children[5].children[0].children[0].textContent = "Какие долгосрочные разработки есть у Lumeta?";
            this.rightColumn.children[6].children[0].children[0].textContent = "Какие существуют классы редкости?";
            this.rightColumn.children[7].children[0].children[0].textContent = "Могу ли я перепродать свой NFT SENSAY?";
        
            this.leftColumn.children[0].children[1].textContent = "Коллекция NFT SENSAY содержит 10.000 NFT";
            this.leftColumn.children[1].children[1].textContent = "Цена зависит от стадии минта NFT. Цена ранней стадии NFT Foundation составляет 0,2 ETH";
            this.leftColumn.children[2].children[1].textContent = "Авторские права принадлежат компании Lumeta. Права собственности и перепродажи принадлежат владельцам NFT. Для коммерческого использования, пожалуйста, свяжитесь с нами!";
            this.leftColumn.children[3].children[1].textContent = "NFT Будда SENSAY является единственным в своем роде, сочетая в себе различные элементы, такие как фон, одежду, очки и головной убор, аксессуары и украшения (важный элемент: Амулеты с различными камнями, символизирующими огонь, землю, ветер, воду) и, самое главное, его тело, которое меняется от кожи до нефрита, дерева, травы и бриллиантов. Будда NFT неподвластен времени, универсален и может унаследовать духовную ценность для своих владельцев.";
            this.leftColumn.children[4].children[1].textContent = "Активные пользователи будут внесены в белый список. Чтобы воспользоваться белым списком, сделайте следующее: 1. Подпишитесь на социальные сети (Twitter, Discord, Instagram, Telegram) 2. Сделайте репост поста из Twitter 3. Прокомментируйте пост в Twitter, рассказав о том, что вам понравилось в проекте NFT 4. Свяжитесь с нами, чтобы получить запись в наш белый список";
            this.leftColumn.children[5].children[1].textContent = "Ethereum";
            this.leftColumn.children[6].children[1].textContent = "Лимит на один криптокошелек составляет 500 NFT";
            this.leftColumn.children[7].children[1].textContent = "Как владелец NFT SENSAY, вы получаете только права, описанные в условиях смарт-контракта, записанного в вашем невзаимозаменяемом токене. Все остальные права принадлежат исключительно создателю. Если вы хотите получить дополнительные права, свяжитесь с создателем.";
        
            this.rightColumn.children[0].children[1].textContent = "Q3-2022";
            this.rightColumn.children[1].children[1].textContent = "Да. Более подробную информацию о будущих коллекциях можно найти в дорожной карте на сайтах компании.";
            this.rightColumn.children[2].children[1].textContent = "Команда LUMETA получит 5% от всех вторичных продаж. Эти средства будут использованы для дальнейшего найма новых штатных сотрудников, финансирования разработки будущих проектов и предоставления еще большей ценности нашему сообществу.";
            this.rightColumn.children[3].children[1].textContent = "При покупке NFT оплачивается: - 5% авторского вознаграждения, предназначенного для дальнейшего развития проектов и увеличения стоимости компании- 5% процент от первоначального минта, предназначенный для создания финансовой безопасности и благотворительности- 2,5% комиссии маркетплейса Opensea ";
            this.rightColumn.children[4].children[1].innerHTML = '<a href="https://etherscan.io/address/0xE20f28f9C268A32C823c8E3f0f77760c140561B5#code">Смарт-контракт разработан и принадлежит компании Lumeta. Смарт-контракт можно найти на Etherscan по адресу</a>';
            this.rightColumn.children[5].children[1].textContent = "Планируются еще две коллекции Будд NFT с собственным токеном, криптовалютой и метавселенной. Каждый проект будет частью большой экосистемы. Для получения дополнительной информации посетите наш сайт, раздел экосистема и дорожная карта.";
            this.rightColumn.children[6].children[1].textContent = "Есть две основные фазы минта: - 1 фаза состоит из 500 загорелых Будд - 2 фаза состоит из 9500 Будд с различными телами (дерево 15%, медь 15%, кожа 15%, трава 10%, серебро 10%, мрамор 10%, сталь 10%, золото 5%, нефрит 5%, алмаз 5%).  Есть еще 8 атрибутов, таких как фон, одежда, очки, прическа, цепь, борода, пирсинг, кольца. И есть 3 ультра-раритетных NFT из всей коллекции.";
            this.rightColumn.children[7].children[1].textContent = "Да, вы можете заниматься перепродажей на платформе Opensea в любое удобное для вас время.";
        } catch (error) {
            console.log(error)
        }
    }
    
    aze(){
        
        this.leftColumn.children[0].children[0].children[0].textContent = "كم عدد NFT SENSAY سيكون هناك؟";
        this.leftColumn.children[1].children[0].children[0].textContent = "كم سيكون سعر النعناع ؟";
        this.leftColumn.children[2].children[0].children[0].textContent = "ماذا عن الحقوق التجارية؟";
        this.leftColumn.children[3].children[0].children[0].textContent = "ما الذي يجعل بوذا فريدًا؟";
        this.leftColumn.children[4].children[0].children[0].textContent = "كيف يمكنني الحصول على القائمة البيضاء؟";
        this.leftColumn.children[5].children[0].children[0].textContent = "ما هي شبكة البلوك تشين التي تعمل NFT SENSAY عليها؟";
        this.leftColumn.children[6].children[0].children[0].textContent = "كم عدد NFT SENSAY الذي يمكنني سكه؟";
        this.leftColumn.children[7].children[0].children[0].textContent = "ما هي الحقوق التي أمتلكها بصفتي حاملًا لـ NFT SENSAY؟";
    
        this.rightColumn.children[0].children[0].children[0].textContent = "متى سيتم إطلاق NFT SENSAY؟";
        this.rightColumn.children[1].children[0].children[0].textContent = "هل ستكون هناك مجموعات NFT أخرى لبوذا؟";
        this.rightColumn.children[2].children[0].children[0].textContent = "ما هي الإتاوات الثانوية؟";
        this.rightColumn.children[3].children[0].children[0].textContent = "ما هي الرسوم التي أدفعها عن طريق شراء NFT؟";
        this.rightColumn.children[4].children[0].children[0].textContent = "من يملك العقد الذكي وأين يمكنني العثور عليه؟";
        this.rightColumn.children[5].children[0].children[0].textContent = "ما هو التطوير طويل المدى الذي تمتلكه لوميتا؟";
        this.rightColumn.children[6].children[0].children[0].textContent = "ما هي فئات الندرة؟";
        this.rightColumn.children[7].children[0].children[0].textContent = "هل يمكنني إعادة بيع NFT SENSAY الخاص بي؟";
    
        this.leftColumn.children[0].children[1].textContent = "تحتوي مجموعة NFT SENSAY على 10.000 NFT";
        this.leftColumn.children[1].children[1].textContent = "السعر يعتمد على مرحلة النعناع NFT. سعر المرحلة المبكرة من NFT 'Foundation' هو 0،15 ETH";
        this.leftColumn.children[2].children[1].textContent = "حقوق النشر مملوكة لشركة Lumeta. تعود حقوق الملكية وإعادة البيع إلى مالكي NFT. للاستخدام التجاري، يرجى الاتصال بنا!";
        this.leftColumn.children[3].children[1].textContent = "يعتبر NFT Buddha SENSAY فريدًا من نوعه ، حيث يجمع بين عناصر مختلفة مثل الخلفية والزي والعين وأغطية الرأس والإكسسوارات والمجوهرات (عنصر مهم: التمائم ذات الأحجار المختلفة ، والتي ترمز إلى النار والأرض والرياح والماء) والأهم من ذلك جسده ، الذي يتغير من الجلد إلى النفريت والخشب والجرا والماس. إن NFT Buddha خالٍ ومرن وقد يرث قيمة روحية لأصحابه.";
        this.leftColumn.children[4].children[1].textContent = "ستتم إضافة المستخدمين النشطين إلى القائمة البيضاء. للحصول على القائمة البيضاء مسبقًا، اتبع ما يلي: 1. اشترك في الشبكات الاجتماعية التويتر ، الديسكورد ، الانستغرام ، التلغرام) 2. إعد نشر هذا المنصب من التويتر: XYZ 3. قم بتعليق تحت هذا المنشور على التويتر مع الرد على ما أعجبك في مشروع NFT 4. اتصل بنا هنا للحصول على إدخال في قائمتنا البيضاء: ";
        this.leftColumn.children[5].children[1].textContent = "إيثريوم";
        this.leftColumn.children[6].children[1].textContent = "الحد الأقصى لمحفظة تشفير واحدة هو 500 NFT";
        this.leftColumn.children[7].children[1].textContent = "بصفتك مالكًا لـ NFT SENSAY ، فإنك تتلقى فقط الحقوق الموضحة في شروط العقد الذكي المسجل في رمزك غير القابل للاستبدال. جميع الحقوق الأخرى تعود حصريًا إلى المؤلف. إذا كنت تريد حقوقًا إضافية - فاتصل بالمُنشئ.";
    
        this.rightColumn.children[0].children[1].textContent = "Q3-2022";
        this.rightColumn.children[1].children[1].textContent = "نعم. لمزيد من المعلومات حول المجموعات المستقبلية، راجع خريطة الطريق على مواقع الشركة.";
        this.rightColumn.children[2].children[1].textContent = "سيحصل فريق LUMETA على 5٪ من إجمالي المبيعات الثانوية. سيتم استخدام هذه الأموال لمواصلة تعيين موظفين جدد بدوام كامل ، وتمويل تطوير المشاريع المستقبلية وتقديم قيمة أكبر لمجتمعنا.";
        this.rightColumn.children[3].children[1].textContent = "ما هي الرسوم التي يجب أن أدفعها عند شراء NFT؟ يدفع شراء NFT مقابل: - 5٪ رسوم المؤلف والتي مخصصة لمواصلة تطوير المشاريع وزيادة قيمة الشركة - 5٪ فائدة على المنجم والتي تهدف الى بناء الامن المالي والصدقات- 2.5٪ عمولة من السوق المفتوح ";
        this.rightColumn.children[4].children[1].innerHTML = '<a href="https://etherscan.io/address/0xE20f28f9C268A32C823c8E3f0f77760c140561B5#code"> تم تصميم العقد الذكي وتملكه Lumeta. يمكن العثور على العقد الذكي على Etherscan على</a>';
        this.rightColumn.children[5].children[1].textContent = "ستكون هناك مجموعتان أخريان من مجموعات NFT لبوذا برمزها المميز وعملة التشفير والميتافيرس. سيكون كل مشروع جزءًا من نظام بيئي كبير. لمزيد من المعلومات - قم بزيارة موقعنا على الإنترنت،Ecosystem وقائمة الخريطة";
        this.rightColumn.children[6].children[1].textContent = "هناك مرحلتان رئيسيتان للنعناع: - المرحلة الأولى تتكون من 500 تماثيل بوذا حروق الشمس - تتكون المرحلة الثانية من 9500 بوذا بأجسام مختلفة (خشب 15٪ ، كوبر 15٪ ، جلد 15٪ ، عشب 10٪ ، فضة 10٪ ، رخام 10٪ ، فولاذ 10٪ ، ذهب 5٪ ، نفريت 5٪ ، ألماس 5٪ ) هناك 8 سمات أخرى من الملحقات مثل الخلفية ، البطانات ، النظارات ، تصفيفة الشعر ، التشيين ، اللحية ، البيرسبنغ، الخواتم. وهناك 3 NFTs نادرة للغاية من كل المجموعات. ";
        this.rightColumn.children[7].children[1].textContent = "نعم، يمكنك إعادة البيع على منصة Opensea في أي وقت تراه مناسبًا.";
    }
    
    chn(){
    
        this.leftColumn.children[0].children[0].children[0].textContent = "NFT SENSAY 会有多少";
        this.leftColumn.children[1].children[0].children[0].textContent = "薄荷的价格是多少？";
        this.leftColumn.children[2].children[0].children[0].textContent = "商业权利呢？";
        this.leftColumn.children[3].children[0].children[0].textContent = "是什么让佛陀与众不同？";
        this.leftColumn.children[4].children[0].children[0].textContent = "我怎样才能被列入白名单？";
        this.leftColumn.children[5].children[0].children[0].textContent = "NFT SENSAY 在哪个区块链网络上？";
        this.leftColumn.children[6].children[0].children[0].textContent = "我可以铸造多少 NFT SENSAY？";
        this.leftColumn.children[7].children[0].children[0].textContent = "作为 NFT SENSAY 持有者，我有什么权利？";
    
        this.rightColumn.children[0].children[0].children[0].textContent = "NFT SENSY 什么时候上线？";
        this.rightColumn.children[1].children[0].children[0].textContent = "会不会有其他的 NFT 收藏佛像？";
        this.rightColumn.children[2].children[0].children[0].textContent = "二次特许权使用费是多少？";
        this.rightColumn.children[3].children[0].children[0].textContent = "购买 NFT 需要支付哪些费用？";
        this.rightColumn.children[4].children[0].children[0].textContent = "谁拥有智能合约，我在哪里可以找到智能合约？";
        this.rightColumn.children[5].children[0].children[0].textContent = "Lumeta有哪些长期发展？";
        this.rightColumn.children[6].children[0].children[0].textContent = "稀有职业有哪些？";
        this.rightColumn.children[7].children[0].children[0].textContent = "我可以转售我的 NFT SENSAY 吗？";
    
        this.leftColumn.children[0].children[1].textContent = "NFT Collection SENSAY 包含 10.000 NFT";
        this.leftColumn.children[1].children[1].textContent = "价格取决于 NFT 铸币的阶段。 早期 NFT“基金会”的价格为 0.15 ETH";
        this.leftColumn.children[2].children[1].textContent = "“版权属于 Lumeta。所有权和转售权属于 NFT 的所有者。用于商业用途，请联系我们！”";
        this.leftColumn.children[3].children[1].textContent = "NFT Buddha SENSAY 是独一无二的，结合了不同的元素，如背景、服装、眼镜和头饰、配饰和珠宝（重要元素：带有不同宝石的护身符，象征火、土、风、水），最重要的是他的身体 ，从皮肤变为软玉、木头、鹅肝和钻石。 NFT 佛像是永恒的、灵活的，并且可以为其所有者继承精神价值。";
        this.leftColumn.children[4].children[1].textContent = "活跃用户将被列入白名单。要提前加入白名单，请执行以下操作：1. 订阅社交网络（Twitter、Discord、Instagram、Telegram） 2. 从 Twitter 转发这篇文章：XYZ 3. 在 Twitter 上的这篇文章下方评论，回复您对 NFT 项目的喜欢 4. 在此联系我们，以获取我们的白名单中的条目。";
        this.leftColumn.children[5].children[1].textContent = "以太坊";
        this.leftColumn.children[6].children[1].textContent = "一个加密钱包的上限为 500 NFT";
        this.leftColumn.children[7].children[1].textContent = "作为 NFT SENSAY 的持有者，您仅获得记录在您的不可替代代币中的智能合约条款中描述的权利。 所有其他权利均专属于创作者。 如果您需要其他权利，请联系创建者。";
    
        this.rightColumn.children[0].children[1].textContent = "Q3-2022";
        this.rightColumn.children[1].children[1].textContent = "是的。 有关未来收藏的更多信息，请参阅公司网站上的路线图。";
        this.rightColumn.children[2].children[1].textContent = "LMETA 团队将获得所有二级销售额的 5%。 这些资金将用于继续雇用新的全职员工，资助未来项目的发展，并为我们的社区提供更多价值。";
        this.rightColumn.children[3].children[1].textContent = "我购买 NFT 时需要支付哪些费用？购买 NFT 需要支付：- 5% 的作者费，用于项目的进一步发展和公司增值- 5% 的矿山权益，旨在建立财务安全和慈善事业- Opensea Marketplace 的 2.5% 佣金";
        this.rightColumn.children[4].children[1].innerHTML = '<a href="https://etherscan.io/address/0xE20f28f9C268A32C823c8E3f0f77760c140561B5#code">智能合约由 Lumeta 设计和拥有。 智能合约可以在 Etherscan 上找到 </a>';
        this.rightColumn.children[5].children[1].textContent = "将有另外两个 NFT 佛像集合，它们有自己的代币、加密货币和元界。 每个项目都将成为一个大生态系统的一部分。 如需更多信息，请访问我们的网站、生态系统和路线图部分。";
        this.rightColumn.children[6].children[1].textContent = "薄荷有两个主要阶段： - 第一阶段包括500个晒伤佛 - 第二阶段包括 9500 个不同身体的佛像（木 15%、铜 15%、皮肤 15%、草 10%、银 10%、大理石 10%、钢 10%、金 5%、软玉 5%、钻石 5% )配饰有另外8个属性，如背景、衣服、眼镜、发型、链条、胡须、穿孔、戒指。并且所有收藏中都有 3 个超稀有的 NFT。";
        this.rightColumn.children[7].children[1].textContent = "是的，您可以随时在 Opensea 平台上进行转售。";
    }
    
    eng(){

        this.leftColumn.children[0].children[0].children[0].textContent = "How many NFTs will there be?";
        this.leftColumn.children[1].children[0].children[0].textContent = "What will be the mint price?";
        this.leftColumn.children[2].children[0].children[0].textContent = "What about the commercial rights?";
        this.leftColumn.children[3].children[0].children[0].textContent = "What makes Buddha unique?";
        this.leftColumn.children[4].children[0].children[0].textContent = "How can I get whitelisted?";
        this.leftColumn.children[5].children[0].children[0].textContent = "What Blockchain network is NFT SENSAY on?";
        this.leftColumn.children[6].children[0].children[0].textContent = "How many NFT SENSAY can i mint?";
        this.leftColumn.children[7].children[0].children[0].textContent = "What rights do i have as a chimpers holder?";
    
        this.rightColumn.children[0].children[0].children[0].textContent = "When will we launch?";
        this.rightColumn.children[1].children[0].children[0].textContent = "Will there be other NFT collections of Buddhas?";
        this.rightColumn.children[2].children[0].children[0].textContent = "What are the secondary royalties?";
        this.rightColumn.children[3].children[0].children[0].textContent = "Which fees do I pay by purchaysing a NFT?";
        this.rightColumn.children[4].children[0].children[0].textContent = "Who owns the smartcontract and where can I find the smartcontract?";
        this.rightColumn.children[5].children[0].children[0].textContent = "Which long-term development do Lumeta have?";
        this.rightColumn.children[6].children[0].children[0].textContent = "What are the rarity classes?";
        this.rightColumn.children[7].children[0].children[0].textContent = "Can I resell my Sensay NFT?";
    
        this.leftColumn.children[0].children[1].textContent = "NFT Collection SENSAY contains 10.000 NFT";
        this.leftColumn.children[1].children[1].textContent = "The price depends on the phase of NFT mint. The price of early stage NFT 'Foundation' is 0,15 ETH";
        this.leftColumn.children[2].children[1].textContent = "The copyright belongs to Lumeta. Ownership and resale rights belong to the owners of the NFT. For commercial use, please contactBusiness us!";
        this.leftColumn.children[3].children[1].textContent = "The NFT Buddha SENSAY is one of a kind, combining different elements like background, outfit, eye- & headwear, accessories & jewelry (important element: The Amulets with different stones, symbolizing fire, earth, wind, water) and most importantly his body, which changes from skin to nephrite, wood, gras and diamonds. The NFT Buddha is timeless, flexible and may inherit a spiritual value to its owners.";
        this.leftColumn.children[4].children[1].textContent = "Active users will be whitelisted. To take advance of a whitelist do following: 1. Subscribe to social networks (Twitter, Discord, Instagram, Telegram) 2. Repost this post from Twitter 3. Comment under this post on Twitter with a response about what you liked about the NFT project 4. Contact us here, to get an entry in our whitelist";
        this.leftColumn.children[5].children[1].textContent = "Ethereum";
        this.leftColumn.children[6].children[1].textContent = "The limit on one cryptowallet is 500 NFT";
        this.leftColumn.children[7].children[1].textContent = "As a holder of NFT SENSAY, you receive only the rights described in the terms of the smart contract recorded in your non-fungible token. All other rights belong exclusively to the creator. If you want additional rights, contactBusiness the creator.";
    
        this.rightColumn.children[0].children[1].textContent = "Q3-2022";
        this.rightColumn.children[1].children[1].textContent = "Yes. For more information about future collections, see the Road Map on the company's websites.";
        this.rightColumn.children[2].children[1].textContent = "The LUMETA team will receive 5% of all secondary sales. These funds will be used to continue to hire new full-time employees, fund the development of future projects and provide even more value to our community.";
        this.rightColumn.children[3].children[1].textContent = "What fees do I pay when I buy an NFT? Purchasing an NFT pays for: - 5% author's fee, dedicated to the further development of the projects and increasing the value of the company - 5% interest on the mine, which is intended to build financial security and charity - 2.5% commission of the Opensea Marketplace";
        this.rightColumn.children[4].children[1].innerHTML = '<a href="https://etherscan.io/address/0xE20f28f9C268A32C823c8E3f0f77760c140561B5#code">The smart contract is designed and owned by Lumeta. The smart contract can be found on Etherscan at</a>';
        this.rightColumn.children[5].children[1].textContent = "There will be another two NFT collections of Buddhas with its own token, cryptocurrency and metaverse. Every project will be a part of a big ecosystem. For further information, visit our website, Ecosystem and Road Map section.";
        this.rightColumn.children[6].children[1].textContent = "There are two main phases of mint: - the 1 phase consists 500 sunburn Buddhas - the 2 phase consists 9500 Buddhas with different bodies (Wood 15%, cooper 15%, skin 15%, grass 10%, silver 10%, marble 10%, steel 10%, gold 5%, nephrite 5%, diamond 5%) There are 8 another atributes of accessories like background, clothers, glasses, hirestyle, chain, beard, piercing, rings. And there are 3 ultra rarity NFTs of all collection.";
        this.rightColumn.children[7].children[1].textContent = "Yes, you are able to resell on the Opensea platform at anytime you see fit.";
    }
    
    ind(){
    
    
        this.leftColumn.children[0].children[0].children[0].textContent = "कितने NFT SENSAY होंगे?";
        this.leftColumn.children[1].children[0].children[0].textContent = "NFT SENSAY कब लॉन्च होगा?";
        this.leftColumn.children[2].children[0].children[0].textContent = "मिंट की कीमत क्या होगी?";
        this.leftColumn.children[3].children[0].children[0].textContent = "मैं श्वेतसूची में कैसे आ सकता हूँ?";
        this.leftColumn.children[4].children[0].children[0].textContent = "वाणिज्यिक अधिकारों के बारे में क्या जानकारी है?";
        this.leftColumn.children[5].children[0].children[0].textContent = "बुद्ध को क्या अद्वितीय बनाता है?";
        this.leftColumn.children[6].children[0].children[0].textContent = "NFT SENSAY किस ब्लॉकचेन नेटवर्क पर है?";
        this.leftColumn.children[7].children[0].children[0].textContent = "मुझे सहायता कहाँ से मिल सकती है?";
    
        this.rightColumn.children[0].children[0].children[0].textContent = "NFT SENSAY धारक के रूप में मेरे पास क्या अधिकार हैं?";
        this.rightColumn.children[1].children[0].children[0].textContent = "क्या बुद्धों के अन्य NFT संग्रह होंगे?";
        this.rightColumn.children[2].children[0].children[0].textContent = "माध्यमिक रॉयल्टी क्या हैं?";
        this.rightColumn.children[3].children[0].children[0].textContent = "NFT खरीदने पर मुझे कौन सी फीस का भुगतान करना होगा?";
        this.rightColumn.children[4].children[0].children[0].textContent = "स्मार्ट अनुबंध का मालिक कौन है और मुझे स्मार्ट अनुबंध कहाँ मिल सकता है?";
        this.rightColumn.children[5].children[0].children[0].textContent = "लुमेटा के पास कौन सा दीर्घकालिक विकास है?";
        this.rightColumn.children[6].children[0].children[0].textContent = "दुर्लभ वर्ग क्या हैं?";
        this.rightColumn.children[7].children[0].children[0].textContent = "मैं कितने NFT SENSAY को मिंट कर सकता हूँ?";
    
        this.leftColumn.children[0].children[1].textContent = "कितने NFT SENSAY होंगे?";
        this.leftColumn.children[1].children[1].textContent = "Q3-2022";
        this.leftColumn.children[2].children[1].textContent = 'कीमत NFT मिंट की स्थिति पर निर्भर करती है। प्रारंभिक रूप के NFT "फाउंडेशन" की कीमत 0,15 ETH है';
        this.leftColumn.children[3].children[1].textContent = "सक्रिय उपयोगकर्ताओं को श्वेतसूची में डाल दिया जाएगा। श्वेतसूची को अग्रिम रूप में लेने के लिए निम्नलिखित कार्य करें: 1. सोशल नेटवर्क की सदस्यता लें (ट्विटर, डिस्कॉर्ड, इंस्टाग्राम, टेलीग्राम) 2. इस पोस्ट को ट्विटर से दोबारा पोस्ट करें: XYZ 3. ट्विटर पर इस पोस्ट के नीचे टिप्पणी करें कि आपको NFT परियोजना के बारे में क्या पसंद आया 4. हमारी श्वेतसूची में प्रवेश पाने के लिए हमसे यहाँ संपर्क करें:";
        this.leftColumn.children[4].children[1].textContent = "कॉपीराइट अधिकार लुमेटा के पास हैं। स्वामित्व और पुनर्विक्रय के अधिकार NFT के मालिकों के पास हैं।व्यावसायिक उपयोग के लिए, कृपया हमसे संपर्क करें!";
        this.leftColumn.children[5].children[1].textContent = "NFT बुद्धा SENSAY अपनी तरह का इकलौता है, जो पृष्ठभूमि, पोशाक, चश्मे और हेडवियर, सहायक उपकरण और गहने (महत्वपूर्ण तत्व: विभिन्न पत्थरों वाले साथ ताबीज जो आग, पृथ्वी, हवा, पानी का प्रतीक हैं) और सबसे महत्वपूर्ण रूप से उनके शरीर जैसे तत्वों का संयोजन है जो त्वचा से नेफ्राइट, लकड़ी, घास और हीरे में बदल जाता है। NFT बुद्ध असामयिक, लचीला है और इसके मालिकों को इससे आध्यात्मिक मूल्य विरासत में मिल सकता है।";
        this.leftColumn.children[6].children[1].textContent = "Ethereum";
        this.leftColumn.children[7].children[1].textContent = "ईमेल info@lumeta.io + सोशल नेटवर्क्स + डिसॉर्डर चैनल";
    
        this.rightColumn.children[0].children[1].textContent = "NFT SENSAY के धारक के रूप में, आपको केवल आपके नॉन फंजिबल टोकन में दर्ज स्मार्ट अनुबंध की शर्तों में वर्णित अधिकार प्राप्त होते हैं। अन्य सभी अधिकार विशेष रूप से निर्माता के पास हैं। यदि आप अतिरिक्त अधिकार चाहते हैं, तो निर्माता से संपर्क करें।";
        this.rightColumn.children[1].children[1].textContent = "हाँ। भविष्य के संग्रह के बारे में अधिक जानकारी के लिए, कंपनी की वेबसाइट पर रोड मैप देखें।";
        this.rightColumn.children[2].children[1].textContent = "LUMETA टीम को सभी द्वितीयक बिक्री का 5% प्राप्त होगा। इन निधियों का उपयोग नए पूर्णकालिक कर्मचारियों को काम पर रखने, भविष्य की परियोजनाओं के विकास के लिए निधि देने और हमारे समुदाय को और भी अधिक मूल्य प्रदान करने के लिए किया जाएगा।";
        this.rightColumn.children[3].children[1].textContent = "जब मैं NFT खरीदता हूँ तो मुझे कौन सी फीस देनी पड़ती है? NFT खरीदने के लिए भुगतान करना होता है: - 5% लेखक का शुल्क, परियोजनाओं के और विकास और कंपनी के मूल्य में वृद्धि के लिए समर्पित - खनन पर 5% ब्याज, जिसका उद्देश्य वित्तीय सुरक्षा और दान का निर्माण करना है - ओपनसी मार्केटप्लेस का 2.5% कमीशन";
        this.rightColumn.children[4].children[1].innerHTML = '<a href="https://etherscan.io/address/0xE20f28f9C268A32C823c8E3f0f77760c140561B5#code">स्मार्ट अनुबंध का मालिक कौन है और मुझे स्मार्ट अनुबंध कहाँ मिल सकता है?</a>';
        this.rightColumn.children[5].children[1].textContent = "अपने स्वयं के टोकन, क्रिप्टोकरेंसी और मेटावर्स के साथ बुद्ध के दो और NFT संग्रह होंगे। हर परियोजना एक बड़े पारिस्थितिकी तंत्र का हिस्सा होगी। अधिक जानकारी के लिए, हमारी वेबसाइट, पारिस्थितिकी तंत्र और रोड मैप के अनुभाग देखें।";
        this.rightColumn.children[6].children[1].textContent = "मिंट के दो मुख्य चरण हैं: - पहले चरण में 500 सनबर्न बुद्ध होते हैं - दूसरे चरण में विभिन्न निकायों (लकड़ी 15%, कूपर 15%, त्वचा 15%, घास 10%, चांदी 10%, संगमरमर 10%, स्टील 10%, सोना 5%, नेफ्राइट 5%, हीरा 5%) के साथ 9500 बुद्ध होते हैं पृष्ठभूमि, कपड़े, चश्मा, केश, चेन, दाढ़ी, भेदी, अंगूठियां जैसे अन्य 8 सहायक उपकरण हैं। और सभी संग्रहों के 3 अति दुर्लभ NFT हैं।";
        this.rightColumn.children[7].children[1].textContent = "एक क्रिप्टोवॉलेट की सीमा 500 NFT है";
    }
    
    
}