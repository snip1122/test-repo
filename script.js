(function () {
  const translations = {
    mn: {
      meta: {
        title: 'Hunnu Store – Монголын технологийн шинэ үе',
        description:
          'Hunnu Store-оор дамжуулан Монголын хэрэглэгчдэд зориулсан дээд зэрэглэлийн электроник, найдвартай баталгаат үйлчилгээ, соёлын онцлогтой үйлчилгээг мэдрээрэй.',
      },
      skip: 'Үндсэн хэсэг рүү алгасах',
      topBar: {
        location: '📍 Улаанбаатар хотын төв',
        phone: '☎ +976 77 11 22 33',
        hours: 'Даваа–Бямба: 09:00–21:00',
        storeLocator: 'Дэлгүүрийн байршил',
      },
      languageSwitcher: {
        aria: 'Хэл сонгох',
      },
      search: {
        aria: 'Сайтын хайлт',
        placeholder: 'Гар утас, зөөврийн компьютер, смарт гэр...',
      },
      header: {
        wishlist: 'Хүслийн жагсаалт',
        compare: 'Харьцуулах бүтээгдэхүүн',
        account: 'Хэрэглэгчийн бүртгэл',
        cart: 'Сагс',
      },
      nav: {
        aria: 'Үндсэн цэс',
        phones: 'Гар утас',
        laptops: 'Зөөврийн & Таблет',
        audio: 'Аудио',
        smartHome: 'Смарт гэр',
        accessories: 'Дагалдах хэрэгсэл',
        stories: 'Түүх & нийтлэл',
        promo: 'Нээлтийн долоо хоногт 3 дахин урамшуулал авцагаая ⚡',
      },
      hero: {
        tag: 'Уламжлал ба инновацийн огтлолцол',
        heading: 'Монголын шинэ үеийн манлайлагчдад зориулагдсан дээд зэрэглэлийн электроник.',
        body: 'Hunnu Store нь дэлхийд танигдсан брэндүүдийг монгол үйлчилгээ, баталгаа, төлбөрийн уян хатан нөхцөлтэй хослуулан хүргэдэг. Онлайн болон дэлгүүрээр итгэлтэй худалдан аваарай, бүгдийг Cody платформоор ажиллуулж байна.',
        ctaPrimary: 'Шинэ бүтээгдэхүүнтэй танилцах',
        ctaSecondary: 'Hunnu амлалтыг мэдрээрэй',
        metrics: {
          rating: {
            label: '4.9★',
            value: '8 мянган хэрэглэгчийн дундаж үнэлгээ',
          },
          delivery: {
            label: '48ц',
            value: 'Улаанбаатар дотор яаралтай хүргэлт',
          },
          support: {
            label: '24/7',
            value: 'Хүний + хиймэл оюуны холимог дэмжлэг',
          },
        },
        slides: [
          {
            heading: 'Hunnu Care+ багцтай флагман утаснууд',
            body: 'Дэлгэцийн даатгал, хуучин утсаа сэлгэх баталгаа, монгол хэлтэй мэргэжилтний сургалтыг хамтад нь аваарай.',
            cta: 'Гар утсыг үзэх',
          },
          {
            heading: 'Гэрийн дулааны уламжлалаас сэдэвлэсэн смарт шийдлүүд',
            body: 'Халаалт, гэрэлтүүлэг, аюулгүй байдлаа автоматжуулж, монгол айлын халуун дотно уур амьсгалыг хадгалъя.',
            cta: 'Гэрээ шинэчилье',
          },
        ],
        carousel: {
          prev: 'Өмнөх слайд',
          next: 'Дараагийн слайд',
          dot: 'Слайд {index} рүү очих',
        },
      },
      categories: {
        eyebrow: 'Ангиллаар хайх',
        heading: 'Монголчуудын амьдралын бүх хэсэгт тохирсон технологи.',
        body: 'Нүүдэлчин аялал, хотын бүтээмж гээд бидний шалгаруулсан ангилал бүр нь нутгийн нөхцөлд туршигдсан бүтээгдэхүүнийг онцолдог.',
        cards: {
          phones: {
            title: 'Гар утас',
            subtitle: '5G бэлэн · Монгол интерфэйс',
            alt: 'Гар утас',
          },
          laptops: {
            title: 'Зөөврийн & Таблет',
            subtitle: 'Бүтээлч хүчин чадал · Дотоодын баталгаа',
            alt: 'Зөөврийн компьютер',
          },
          audio: {
            title: 'Аудио',
            subtitle: 'Тоглолтын тунгалаг дуу · Аялалд бэлэн',
            alt: 'Аудио төхөөрөмж',
          },
          smartHome: {
            title: 'Смарт гэр',
            subtitle: 'Аюулгүй байдал · Тайтгаруулалт · Хэмнэлт',
            alt: 'Смарт гэрийн төхөөрөмж',
          },
        },
      },
      featured: {
        eyebrow: 'Энэ долоо хоногийн онцлох',
        heading: 'Hunnu давуу талтай шинэчлэлийг онцолж байна.',
        body: 'Онцлох бүтээгдэхүүн бүр дээр монгол хэлтэй тохиргоо, хоёр хэлний дэмжлэг, Cody платформд суурилсан сунгасан баталгааг дагалдуулдаг.',
        products: [
          {
            badge: 'Шинэ',
            alt: 'Galaxy S флагман',
            title: 'Galaxy S Ultra Hunnu Edition',
            body: 'Монголын байгальд зориулагдсан камер, 2 жилийн Hunnu Care+ хамгаалалттай хамт.',
            wishlist: 'Galaxy S Ultra-г хүслийн жагсаалтад нэмэх',
            cart: 'Сагсанд нэмэх',
          },
          {
            badge: 'Багц',
            alt: 'Студи чихэвч',
            title: 'Nomad Studio Audio Set',
            body: 'Дуу чимээ тусгаарлагч чихэвч, монгол хэлтэй ухаалаг чанга яригч, Spotify багцыг цуг аваарай.',
            wishlist: 'Nomad Studio-г хүслийн жагсаалтад нэмэх',
            cart: 'Сагсанд нэмэх',
          },
          {
            badge: 'Онцгой',
            alt: 'Бүтээлч зөөврийн компьютер',
            title: 'Steppe Creator Laptop 16"',
            body: 'OLED дэлгэц, AI хөргөлттэй их бие, монгол уран бүтээлчидтэй хамт боловсруулсан аялалд тэсвэртэй кейс.',
            wishlist: 'Steppe Creator-г хүслийн жагсаалтад нэмэх',
            cart: 'Сагсанд нэмэх',
          },
          {
            badge: 'Эко',
            alt: 'Смарт термостат',
            title: 'Ger Smart Climate Hub',
            body: 'Агаарын чанар, температурыг гадаа дотор ялгалгүй хянаж, эрчим хүч хэмнэлтийг ухаалгаар тооцоолно.',
            wishlist: 'Ger Smart Climate Hub-ийг хүслийн жагсаалтад нэмэх',
            cart: 'Сагсанд нэмэх',
          },
        ],
      },
      carousel: {
        prev: 'Бүтээгдэхүүнийг гүйлгэх',
        next: 'Бүтээгдэхүүнийг гүйлгэх',
      },
      value: {
        eyebrow: 'Hunnu амлалт',
        heading: 'Уламжлалт зочломтгой үйлчилгээ, дэвшилтэт технологийн хүчтэй хослол.',
        body: 'Захиалга бүрт Cody худалдааны платформын нарийвчлал, монгол зочломтгой үйлчилгээ хосолж, дижитал тав тухыг соёлын бахархалтай нэгтгэнэ.',
        cards: [
          {
            title: 'Найдвартай баталгаа, засвар',
            body: 'Сертифтэй инженерүүд хурдан солилт, ил тод үнийн саналтайгаар итгэлийг бий болгодог.',
          },
          {
            title: 'Уян хатан төлбөр',
            body: 'Монголын томоохон банкуудын зээл, BNPL шийдэл, худалдан авалт бүрд хуримтлагдах оноо.',
          },
          {
            title: 'Тохиргоо, сургалттай',
            body: 'Туршлагын танхимд биечлэн эсвэл онлайн уулзалтаар монгол, англи, хоёр хэлээр хөтлүүлээрэй.',
          },
          {
            title: 'Нийгэмд түшиглэсэн мэдлэг',
            body: 'Орон нутгийн бүтээлчид, инженерүүдтэй хамтран сургалт, зөвлөгөө, смарт гэрийн туршлагаа хуваалцана.',
          },
        ],
      },
      stories: {
        eyebrow: 'Мэдлэг & боловсрол',
        heading: 'Технологийг итгэлтэй сонгох хүчийг монголчуудад олгоно.',
        body: 'Шүүмж, худалдан авалтын зөвлөмж, соёлын онцлогийг нэг дор. Бүтээгдэхүүний мэдлэгийг монгол үнэт зүйлтэй уялдуулсан түүхүүдийг уншаарай.',
        cards: [
          {
            title: 'Талын нөхцөлд тохирсон ноутбук',
            body: 'Батарейн хугацаа, бат бөх байдал, хэлний дэмжлэгийг харьцуулсан нарийвчилсан гарын авлага.',
            cta: 'Гарын авлагыг унших →',
          },
          {
            title: 'Монгол гэрийн смарт цуврал',
            body: 'Эрчим хүчний хэмнэлттэй халаалт, монгол хэлтэй туслахтай болсон айлуудын бодит түүхийг үзээрэй.',
            cta: 'Цувралыг үзэх →',
          },
          {
            title: 'Hunnu онооны нууц',
            body: 'Бонус оноо, давхар шинэчлэлт, баярын багцыг хэрхэн авах тухай бүрэн тайлбар.',
            cta: 'Гишүүнчлэлийн давуу талыг үзэх →',
          },
        ],
      },
      payments: {
        eyebrow: 'Төлбөр & урамшуулал',
        heading: 'Хүссэн технологио нутгийн уян хатан сонголтоор.',
        body: 'Таны зорилгод нийцсэн төлөвлөгөөг сонгоод, үйлчилгээ ба чанартай хэзээ ч буулт хийх хэрэггүй.',
        cards: [
          {
            title: 'Урамшууллын түвшин',
            items: [
              '₮10,000 тутамд 1 оноо цуглуулж, улирлын шинэчлэлтэд нэгдээрэй.',
              'Insider гишүүд давхар баталгаа, баярын хязгаарлагдмал багц авна.',
            ],
          },
          {
            title: 'Банкны түншлэл',
            items: [
              'ХААН, Худалдаа Хөгжлийн, Хас банкны 0% хүүтэй лизинг.',
              'BNPL болон байгууллагын нэхэмжлэхийг кассан дээр шийднэ.',
            ],
          },
          {
            title: 'Хаанаас ч дэмжлэг',
            items: [
              'AI тусламжтай 24/7 халуун шугам хүний зөвлөгөөгөөр дэмжинэ.',
              'Улаанбаатар дахь туршлагын төв, Дархан ба Эрдэнэтэд түр салбаруудтай.',
            ],
          },
        ],
      },
      newsletter: {
        heading: 'Hunnu Insider мэдээллийг урьдчилан аваарай.',
        body: 'Шинэ нээлт, соёлын хамтын ажиллагаа, технологийг монгол урлагтай хослуулсан гишүүнчлэлийн багцыг цаг алдалгүй мэдээд аваарай.',
        aria: 'И-мэйл бүртгүүлэх',
        label: 'И-мэйл хаяг',
        placeholder: 'you@example.mn',
        button: 'Нийтлэлд нэгдэх',
        success: 'Баярлалаа! {email} хаягийг шинэ мэдээллээр байнга сэргээж байя.',
      },
      footer: {
        body: 'Инноваци, хүртээмж, итгэл, чанарыг эрхэмлэсэн Hunnu Store дэлхийн технологийг монгол сэтгэл, Cody системийн найдвартай ажиллагаатайгаар нийлүүлдэг.',
        badges: ['Итгэмжлэгдсэн үйлчилгээ', 'Баталгаат төв', 'AI дэмжлэгтэй'],
        navAria: 'Доод цэс',
        nav: ['Нүүр', 'Ангилал', 'Онцлох', 'Түүх', 'Төлбөр & урамшуулал', 'Бидний тухай'],
        visit: 'Манайд зочлоорой',
        address: 'Улаанбаатар, Сүхбаатар дүүрэг, Энхтайваны өргөн чөлөө 15',
        links: ['Нууцлалын бодлого', 'Үйлчилгээний нөхцөл', 'Буцаах журам'],
        copyright: '© <span id="year"></span> Hunnu Store. Бүх эрх хамгаалагдсан.',
      },
    },
    en: {
      meta: {
        title: 'Hunnu Store – Mongolian Technology Elevated',
        description:
          'Discover Hunnu Store, a modern Mongolian e-commerce destination for premium electronics, trusted warranties, and culturally inspired service.',
      },
      skip: 'Skip to main content',
      topBar: {
        location: '📍 Ulaanbaatar City Center',
        phone: '☎ +976 77 11 22 33',
        hours: 'Mon–Sat: 09:00–21:00',
        storeLocator: 'Store Locator',
      },
      languageSwitcher: {
        aria: 'Select language',
      },
      search: {
        aria: 'Site search',
        placeholder: 'Search phones, laptops, smart home...',
      },
      header: {
        wishlist: 'Wishlist',
        compare: 'Compare products',
        account: 'Account',
        cart: 'Shopping cart',
      },
      nav: {
        aria: 'Primary navigation',
        phones: 'Phones',
        laptops: 'Laptops & Tablets',
        audio: 'Audio',
        smartHome: 'Smart Home',
        accessories: 'Accessories',
        stories: 'Stories',
        promo: 'Earn 3x loyalty points on launch week ⚡',
      },
      hero: {
        tag: 'Tradition meets innovation',
        heading: 'Premium electronics curated for Mongolia’s modern pioneers.',
        body: 'Hunnu Store pairs trusted international brands with Mongolian service, warranties, and payment flexibility. Shop with confidence online or in-store, all powered by the Cody e-commerce engine.',
        ctaPrimary: 'Shop latest arrivals',
        ctaSecondary: 'Discover the Hunnu promise',
        metrics: {
          rating: {
            label: '4.9★',
            value: 'Average rating across 8k local customers',
          },
          delivery: {
            label: '48h',
            value: 'Express delivery in Ulaanbaatar',
          },
          support: {
            label: '24/7',
            value: 'Human & AI assisted support',
          },
        },
        slides: [
          {
            heading: 'Flagship phones with Hunnu Care+',
            body: 'Exclusive screen protection, trade-in guarantees, and Mongolian language onboarding from our experts.',
            cta: 'Explore phones',
          },
          {
            heading: 'Smart homes inspired by ger hospitality',
            body: 'Automate heating, lighting, and security while honoring the warmth of Mongolian tradition.',
            cta: 'Upgrade your home',
          },
        ],
        carousel: {
          prev: 'Previous slide',
          next: 'Next slide',
          dot: 'Go to slide {index}',
        },
      },
      categories: {
        eyebrow: 'Shop by category',
        heading: 'Technology for every part of Mongolian life.',
        body: 'From nomadic journeys to city productivity, our curated categories highlight products proven to withstand local conditions and lifestyles.',
        cards: {
          phones: {
            title: 'Phones',
            subtitle: '5G ready · Mongolian interface',
            alt: 'Phones',
          },
          laptops: {
            title: 'Laptops & Tablets',
            subtitle: 'Creative power · Local warranty',
            alt: 'Laptop computer',
          },
          audio: {
            title: 'Audio',
            subtitle: 'Concert clarity · Travel ready',
            alt: 'Audio equipment',
          },
          smartHome: {
            title: 'Smart Home',
            subtitle: 'Security · Comfort · Efficiency',
            alt: 'Smart home devices',
          },
        },
      },
      featured: {
        eyebrow: 'Featured this week',
        heading: 'Highlighting innovation with exclusive Hunnu perks.',
        body: 'Each featured product includes localized setup, bilingual support, and extended warranty coverage backed by our Cody-powered service desk.',
        products: [
          {
            badge: 'New',
            alt: 'Galaxy S flagship',
            title: 'Galaxy S Ultra Hunnu Edition',
            body: 'Top-tier camera tuned for Mongolian landscapes, includes 2-year Hunnu Care+ protection.',
            wishlist: 'Add Galaxy S Ultra to wishlist',
            cart: 'Add to cart',
          },
          {
            badge: 'Bundle',
            alt: 'Studio headphones',
            title: 'Nomad Studio Audio Set',
            body: 'Noise-cancelling headphones plus smart speaker with Mongolian voice control and Spotify bundle.',
            wishlist: 'Add Nomad Studio to wishlist',
            cart: 'Add to cart',
          },
          {
            badge: 'Exclusive',
            alt: 'Creator laptop',
            title: 'Steppe Creator Laptop 16"',
            body: 'OLED display, AI-cooled chassis, and a rugged travel case co-designed with Mongolian artists.',
            wishlist: 'Add Steppe Creator to wishlist',
            cart: 'Add to cart',
          },
          {
            badge: 'Eco',
            alt: 'Smart thermostat',
            title: 'Ger Smart Climate Hub',
            body: 'Monitor temperature and air quality across yurts and apartments with adaptive energy savings.',
            wishlist: 'Add Ger Smart Climate Hub to wishlist',
            cart: 'Add to cart',
          },
        ],
      },
      carousel: {
        prev: 'Scroll products',
        next: 'Scroll products',
      },
      value: {
        eyebrow: 'The Hunnu promise',
        heading: 'Service grounded in heritage, powered by innovation.',
        body: 'Every order combines the precision of the Cody commerce platform with Mongolian hospitality. We blend digital convenience and cultural pride across the entire journey.',
        cards: [
          {
            title: 'Trusted warranties & repairs',
            body: 'Certified technicians, rapid replacements, and transparent pricing ensure trust from purchase to upgrade.',
          },
          {
            title: 'Flexible payments',
            body: 'Installments through major Mongolian banks, BNPL options, and loyalty credits that reward every purchase.',
          },
          {
            title: 'Guided setup & training',
            body: 'Visit our experience lounge or book live video onboarding in Mongolian, English, or bilingual sessions.',
          },
          {
            title: 'Community powered insights',
            body: 'Join workshops with local creators and engineers to learn, ask questions, and share your smart home wins.',
          },
        ],
      },
      stories: {
        eyebrow: 'Insights & education',
        heading: 'Empowering Mongolians to choose technology with confidence.',
        body: 'Explore reviews, buying guides, and cultural spotlights. Each story blends product expertise with Mongolian values of resilience and community.',
        cards: [
          {
            title: 'Steppe ready laptops guide',
            body: 'Compare battery life, durability, and language support for laptops tuned to the Mongolian climate.',
            cta: 'Read the guide →',
          },
          {
            title: 'Mongolian smart home series',
            body: 'Watch families modernize their gers with energy-efficient heating and voice assistants speaking Mongolian.',
            cta: 'Watch the series →',
          },
          {
            title: 'Hunnu loyalty decoded',
            body: 'Learn how to earn bonus points, double upgrades, and exclusive festival bundles as a Hunnu Insider.',
            cta: 'See membership perks →',
          },
        ],
      },
      payments: {
        eyebrow: 'Payments & loyalty',
        heading: 'Access the tech you love with flexible, local options.',
        body: 'Choose the plan that fits your goals—no compromises on quality or service.',
        cards: [
          {
            title: 'Loyalty tiers',
            items: [
              'Earn 1 point per ₮10,000 and unlock seasonal upgrades.',
              'Insider members receive double warranty and festival drops.',
            ],
          },
          {
            title: 'Bank partnerships',
            items: [
              '0% installment plans with Khan, Trade & Development, and XacBank.',
              'BNPL programs and corporate invoicing available at checkout.',
            ],
          },
          {
            title: 'Support wherever you shop',
            items: [
              '24/7 hotline blending AI troubleshooting with human experts.',
              'Experience lounges in Ulaanbaatar plus pop-ups in Darkhan & Erdenet.',
            ],
          },
        ],
      },
      newsletter: {
        heading: 'Stay ahead with Hunnu Insider updates.',
        body: 'Receive launch alerts, cultural collaborations, and member-only bundles blending tech with Mongolian artistry.',
        aria: 'Newsletter signup',
        label: 'Email address',
        placeholder: 'you@example.mn',
        button: 'Join the community',
        success: 'Thank you! We will keep {email} informed about new drops.',
      },
      footer: {
        body: 'Innovation, accessibility, trust, and quality. Hunnu Store brings global technology home with Mongolian spirit and Cody-powered reliability.',
        badges: ['Trusted Service', 'Warranty Center', 'AI Assisted'],
        navAria: 'Footer navigation',
        nav: ['Home', 'Categories', 'Featured', 'Stories', 'Payments & Loyalty', 'About Us'],
        visit: 'Visit us',
        address: 'Peace Avenue 15, Sukhbaatar District, Ulaanbaatar',
        links: ['Privacy Policy', 'Terms of Service', 'Return Policy'],
        copyright: '© <span id="year"></span> Hunnu Store. All rights reserved.',
      },
    },
  };

  const defaultLanguage = 'mn';
  const storageKey = 'hunnu-store-language';
  const fallbackLanguage = translations.en ? 'en' : defaultLanguage;

  const getNestedTranslation = (lang, key) => {
    const source = translations[lang];
    if (!source) return undefined;
    return key.split('.').reduce((acc, part) => {
      if (acc === undefined || acc === null) return undefined;
      return acc[part];
    }, source);
  };

  const parseParams = (raw) => {
    if (!raw) return undefined;
    try {
      return JSON.parse(raw);
    } catch (error) {
      return undefined;
    }
  };

  const formatValue = (value, params) => {
    if (typeof value !== 'string') {
      return value;
    }
    if (!params) {
      return value;
    }
    return value.replace(/\{(.*?)\}/g, (match, token) => {
      if (Object.prototype.hasOwnProperty.call(params, token)) {
        return params[token];
      }
      return match;
    });
  };

  let currentLanguage = defaultLanguage;

  const translateValue = (key, params, lang = currentLanguage) => {
    const primary = getNestedTranslation(lang, key);
    if (primary !== undefined) {
      return formatValue(primary, params);
    }
    const fallback = getNestedTranslation(fallbackLanguage, key);
    if (fallback !== undefined) {
      return formatValue(fallback, params);
    }
    if (fallbackLanguage !== defaultLanguage) {
      const defaultValue = getNestedTranslation(defaultLanguage, key);
      if (defaultValue !== undefined) {
        return formatValue(defaultValue, params);
      }
    }
    return undefined;
  };

  const applyText = (selector, datasetKey, apply) => {
    document.querySelectorAll(selector).forEach((element) => {
      const key = element.dataset[datasetKey];
      if (!key) return;
      const params = parseParams(element.dataset.i18nParams);
      const value = translateValue(key, params);
      if (typeof value === 'string') {
        apply(element, value);
      }
    });
  };

  const applyLanguage = () => {
    applyText('[data-i18n]', 'i18n', (element, value) => {
      element.textContent = value;
    });
    applyText('[data-i18n-html]', 'i18nHtml', (element, value) => {
      element.innerHTML = value;
    });
    applyText('[data-i18n-placeholder]', 'i18nPlaceholder', (element, value) => {
      element.setAttribute('placeholder', value);
    });
    applyText('[data-i18n-aria-label]', 'i18nAriaLabel', (element, value) => {
      element.setAttribute('aria-label', value);
    });
    applyText('[data-i18n-title]', 'i18nTitle', (element, value) => {
      element.setAttribute('title', value);
    });
    applyText('[data-i18n-alt]', 'i18nAlt', (element, value) => {
      element.setAttribute('alt', value);
    });
    applyText('[data-i18n-content]', 'i18nContent', (element, value) => {
      element.setAttribute('content', value);
    });
    document.documentElement.setAttribute('lang', currentLanguage);
  };

  const updateLanguageButtons = () => {
    document.querySelectorAll('[data-language]').forEach((button) => {
      const lang = button.dataset.language;
      const isActive = lang === currentLanguage;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  };

  const saveLanguage = (lang) => {
    try {
      window.localStorage.setItem(storageKey, lang);
    } catch (error) {
      /* ignore */
    }
  };

  const readSavedLanguage = () => {
    try {
      return window.localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  };

  const dispatchLanguageChange = () => {
    document.dispatchEvent(
      new CustomEvent('hunnu:languagechange', {
        detail: { language: currentLanguage },
      }),
    );
  };

  const updateYear = () => {
    const yearTarget = document.querySelector('#year');
    if (yearTarget) {
      yearTarget.textContent = new Date().getFullYear();
    }
  };

  const setLanguage = (lang, { persist = true } = {}) => {
    const next = translations[lang] ? lang : fallbackLanguage;
    const changed = next !== currentLanguage;
    currentLanguage = next;
    applyLanguage();
    updateLanguageButtons();
    updateYear();
    if (persist) {
      saveLanguage(currentLanguage);
    }
    if (changed) {
      dispatchLanguageChange();
    }
  };

  const initializeLanguage = () => {
    const saved = readSavedLanguage();
    if (saved && translations[saved]) {
      currentLanguage = saved;
    }
    applyLanguage();
    updateLanguageButtons();
  };

  initializeLanguage();

  document.querySelectorAll('[data-language]').forEach((button) => {
    button.addEventListener('click', () => {
      const lang = button.dataset.language || fallbackLanguage;
      setLanguage(lang);
    });
  });

  const t = (key, params) => translateValue(key, params);

  updateYear();
  document.addEventListener('hunnu:languagechange', updateYear);

  const header = document.querySelector('[data-scroll-header]');

  if (header) {
    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  const hero = document.querySelector('[data-hero]');
  if (hero) {
    const slidesContainer = hero.querySelector('.hero-carousel__slides');
    const slides = Array.from(hero.querySelectorAll('.hero-slide'));
    const dotsContainer = hero.querySelector('.hero-dots');
    const prevBtn = hero.querySelector('[data-hero-prev]');
    const nextBtn = hero.querySelector('[data-hero-next]');
    let current = 0;
    let autoTimer;

    const renderDots = () => {
      dotsContainer.innerHTML = '';
      slides.forEach((_, index) => {
        const button = document.createElement('button');
        button.className = 'hero-dot';
        button.type = 'button';
        button.dataset.i18nAriaLabel = 'hero.carousel.dot';
        button.dataset.i18nParams = JSON.stringify({ index: index + 1 });
        button.setAttribute('aria-label', t('hero.carousel.dot', { index: index + 1 }));
        button.addEventListener('click', () => {
          goToSlide(index);
        });
        dotsContainer.appendChild(button);
      });
    };

    const updateDots = () => {
      const dots = Array.from(dotsContainer.children);
      dots.forEach((dot, index) => {
        dot.classList.toggle('is-active', index === current);
      });
    };

    const goToSlide = (index) => {
      current = (index + slides.length) % slides.length;
      slidesContainer.style.transform = `translateX(-${current * 100}%)`;
      updateDots();
      resetAuto();
    };

    const next = () => goToSlide(current + 1);
    const prev = () => goToSlide(current - 1);

    const resetAuto = () => {
      if (autoTimer) {
        window.clearInterval(autoTimer);
      }
      autoTimer = window.setInterval(next, 7000);
    };

    renderDots();
    applyLanguage();
    updateDots();
    resetAuto();

    if (nextBtn) nextBtn.addEventListener('click', next);
    if (prevBtn) prevBtn.addEventListener('click', prev);

    document.addEventListener('hunnu:languagechange', () => {
      const dots = Array.from(dotsContainer.children);
      dots.forEach((dot, index) => {
        dot.setAttribute('aria-label', t('hero.carousel.dot', { index: index + 1 }));
      });
    });
  }

  const carousel = document.querySelector('[data-carousel]');
  if (carousel) {
    const track = carousel.querySelector('.product-track');
    const cards = Array.from(track.children);
    const prev = carousel.querySelector('[data-carousel-prev]');
    const next = carousel.querySelector('[data-carousel-next]');
    let position = 0;
    const gap = 24;

    const cardWidth = () => cards[0]?.getBoundingClientRect().width ?? 0;

    const visibleCount = () => {
      const step = cardWidth() + gap;
      if (step === 0) return 1;
      return Math.max(1, Math.round(carousel.getBoundingClientRect().width / step));
    };

    const maxPosition = () => {
      const step = cardWidth() + gap;
      const remaining = cards.length - visibleCount();
      return step * Math.max(0, remaining);
    };

    const applyPosition = () => {
      position = Math.min(Math.max(position, 0), maxPosition());
      track.style.transform = `translateX(-${position}px)`;
    };

    const move = (direction) => {
      const step = cardWidth() + gap;
      if (step === 0) return;
      position += direction * step;
      applyPosition();
    };

    if (prev) {
      prev.addEventListener('click', () => move(-1));
    }

    if (next) {
      next.addEventListener('click', () => move(1));
    }

    window.addEventListener('resize', () => {
      applyPosition();
    });

    applyPosition();
  }

  const newsletterForm = document.querySelector('.newsletter__form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(newsletterForm);
      const email = String(formData.get('email') ?? '').trim();
      if (email.includes('@')) {
        window.alert(t('newsletter.success', { email }));
        newsletterForm.reset();
      }
    });
  }
})();
