import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from "../assets";

export const navLinks = [
  {
    id: "/", 
    title: "خانه",
  },
  {
    id: "features", 
    title: "خدمات",
  },
  {
    id: "product", 
    title: "محصولات",
  },
  {
    id: "clients",
    title: "مشتریان",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: send,
    title: "جوایز ویژه ",
    content:
      "لینوکسل به مشتریان دائمی خود بهترین کارت‌های اعتباری ترکیبی جذاب از پیشنهادات و جوایز منحصر به فرد ارائه می‌دهد",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100٪ امنیت",
    content:
      "در لینوکسل ما با اقدامات پیشگیرانه، اطمینان حاصل می‌کنیم که اطلاعات و تراکنش‌های شما به طور کامل امن و محافظت شده است",
  },
  {
    id: "feature-3",
    icon: star,
    title: "تجربه‌ای نوین در طراحی وب‌سایت با ما",
    content:
      "ما با استفاده از جدیدترین تکنولوژی‌ها و استانداردهای روز دنیا، وب‌سایت‌هایی خلاقانه و کاربرپسند طراحی می‌کنیم. تیم حرفه‌ای ما آماده است تا با طراحی‌های منحصربه‌فرد و راهکارهای نوآورانه، حضور دیجیتال شما را به سطحی بالاتر ببرد",
  },
];
export const services = [
  {
    id: "custom-web-design",
    icon: send,
    title: "طراحی وب‌سایت سفارشی",
    content:
      "خدمات طراحی وب‌سایت سفارشی ما شامل طراحی منحصر به فرد و مطابق با نیازهای خاص کسب‌وکار شماست. ما از جدیدترین تکنولوژی‌ها و استانداردها برای ایجاد وب‌سایت‌هایی زیبا و کاربرپسند استفاده می‌کنیم که نه تنها برند شما را به خوبی نمایش می‌دهند، بلکه تجربه‌ای بی‌نظیر برای کاربران فراهم می‌آورند.",
    route: "/services/CustomeWebsite",
  },
  {
    id: "web-app-development",
    icon: shield,
    title: "توسعه نرم‌افزارهای تحت وب",
    content:
      "توسعه نرم‌افزارهای تحت وب ما به کسب‌وکارها این امکان را می‌دهد که با بهره‌برداری از قدرت وب، سیستم‌های کاربردی و مقیاس‌پذیر ایجاد کنند. از سیستم‌های مدیریت محتوا (CMS) تا نرم‌افزارهای مدیریت مشتری (CRM)، ما راه‌حل‌های سفارشی برای نیازهای خاص شما طراحی می‌کنیم.",
    route: "/services/PWADevelop",
  },
  {
    id: "website-maintenance",
    icon: star,
    title: "پشتیبانی و نگهداری وب‌سایت",
    content:
      "خدمات پشتیبانی و نگهداری وب‌سایت ما شامل نظارت مداوم، بروزرسانی‌ها، و رفع مشکلات فنی است. ما به شما کمک می‌کنیم تا وب‌سایتتان همیشه به روز و بدون مشکل باشد و از عملکرد بهینه آن اطمینان حاصل کنید.",
    route: "/services/BackingWebsite",
  },
  {
    id: "brand-management",
    icon: star,
    title: "طراحی و مدیریت برند",
    content:
      "خدمات طراحی و مدیریت برند ما به شما کمک می‌کند تا هویت بصری برند خود را به خوبی تعریف و مدیریت کنید. از طراحی لوگو و هویت بصری گرفته تا استراتژی‌های بازاریابی و تبلیغات، تیم ما با شما همکاری می‌کند تا تصویری قوی و متمایز از برندتان ارائه دهد.",
    route: "/services/Brandmanagement",
  },
  {
    id: "mobile-app-development",
    icon: star,
    title: "طراحی و توسعه اپلیکیشن موبایل",
    content:
      "خدمات طراحی و توسعه اپلیکیشن موبایل ما شامل ساخت اپلیکیشن‌های بومی و چند پلتفرمه برای iOS و Android است. با استفاده از جدیدترین تکنولوژی‌ها و بهترین شیوه‌های طراحی، ما اپلیکیشن‌هایی ایجاد می‌کنیم که تجربه‌ای عالی برای کاربران و عملکردی بی‌نظیر دارند.",
    route: "/services/MobileApplication",
  },
  {
    id: "Seo",
    icon: star,
    title: "بهینه‌سازی موتور جستجو (SEO)",
    content:
      "خدمات ما شامل تحلیل کلمات کلیدی، بهینه‌سازی محتوا، و استراتژی‌های لینک‌سازی برای ارتقای رتبه سایت شما در نتایج جستجو است.",
    route: "/seoOptimization",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "همکاری با لینوکسل تجربه‌ای بی‌نظیر بود. تیم حرفه‌ای و متعهد آن‌ها به تمام نیازهای ما گوش داد و نتیجه‌ای فراتر از انتظار تحویل داد. بی‌صبرانه منتظر پروژه‌های آینده با آن‌ها هستیم",
    name: "امیر حسین مشایی",
    title: "پروژه طراحی مجدد سایت",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "پروژه ما با لینوکسل نه‌تنها در زمان مقرر و با کیفیت بالا انجام شد، بلکه بهره‌وری تیم ما نیز به‌طرز چشمگیری افزایش یافت. خدمات پشتیبانی و مشاوره آن‌ها نیز همیشه در دسترس و مفید بوده است",
    name: "محمد مهدی مهدوی پیام",
    title: "مدیر پروژه",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "همکاری با لینوکسل به‌راستی لذت‌بخش بود. از مشاوره اولیه تا تحویل نهایی پروژه، همه‌چیز به خوبی و با دقت انجام شد. قطعاً این شرکت را به هر کسی که به دنبال کیفیت است، توصیه می‌کنم.",
    name: "علیرضا فداکار",
    title: "طراحی سایت فروشگاهی",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "کاربر فعال",
    value: "۱۵۰+",
  },
  {
    id: "stats-2",
    title: "شرکت معتبر به ما اعتماد کرده اند",
    value: "۵۰+",
  },
  {
    id: "stats-3",
    title: "تراکنش موفق",
    value: "۵میلیارد+",
  },
];

export const footerLinks = [
  {
    title: " خدمات ما",
    links: [
      {
        name: "طراحی وب‌سایت",
        link: "/services/CustomeWebsite",
      },
      {
        name: "سئو و بهینه‌سازی",
        link: "/seoOptimization",
      },
      {
        name: "توسعه اپلیکیشن",
        link: "/services/MobileApplication",
      },
      {
        name: "مشاوره دیجیتال مارکتینگ",
        link: "/services/Brandmanagement",
      },

    ],
  },
  {
    title: "تماس با ما",
    links: [
      {
        name: "خدمات ما",
        link: "",
      },
      {
        name: "تلفن : ۰۹۱۹۰۳۱۹۴۸۶",
        link: "",
      },
      {
        name: "ایمیل: info@linooxel.com",
        link: "",
      },
      // {
      //   name: "",
      //   link: "",
      // },
      // {
      //   name: "",
      //   link: "",
      // },
    ],
  },
  // {
  //   title: "",
  //   links: [
  //     {
  //       name: " ",
  //       link: "",
  //     },
  //     {
  //       name: "",
  //       link: "",
  //     },
  //   ],
  // },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
