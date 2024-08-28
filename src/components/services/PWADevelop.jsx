import React from "react";
import styles, { layout } from "../../style";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import logo from "../../assets/logo.png";

const pricingPlans = [
  {
    title: "پکیج پایه",
    price: "۷,۰۰۰,۰۰۰ تومان",
    features: [
      "طراحی ریسپانسیو",
      "PWA ساده",
      "هاست و دامین یکساله",
      "پشتیبانی فنی",
    ],
  },
  {
    title: "پکیج استاندارد",
    price: "۱۵,۰۰۰,۰۰۰ تومان",
    features: [
      "طراحی سفارشی و ریسپانسیو",
      "PWA پیشرفته",
      "هاست و دامین یکساله",
      "پشتیبانی فنی و امنیتی",
    ],
  },
  {
    title: "پکیج حرفه‌ای",
    price: "۲۵,۰۰۰,۰۰۰ تومان",
    features: [
      "طراحی ویژه و ریسپانسیو",
      "PWA با ویژگی‌های خاص",
      "هاست و دامین یکساله",
      "پشتیبانی ۲۴/۷ و امنیتی",
      "سئو و بهینه‌سازی",
    ],
  },
];

const PlanCard = ({ title, price, features }) => (
  <div className="bg-primary rounded-lg shadow-2xl p-6 mb-6 hover:bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 shadow-xl transition-shadow duration-800">
    <div className="text-center mb-4">
      <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-xl font-bold text-purple-400">{price}</p>
    </div>
    <ul className="text-white text-center mb-4">
      {features.map((feature, idx) => (
        <li key={idx} className="mb-2 text-white">
          {feature}
        </li>
      ))}
    </ul>
    <a
      href="#_"
      class="inline-flex overflow-hidden text-white bg-gray-900 rounded group"
    >
      <span class="px-3.5 py-2 text-white bg-purple-500 group-hover:bg-purple-600 flex items-center justify-center">
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          ></path>
        </svg>
      </span>
      <span class="pl-4 pr-5 py-2.5 font-AIranianSans">ثبت سفارش</span>
    </a>
  </div>
);

const PWADevelop = () => {
  return (
    <>
      <div className="bg-primary min-h-screen">
        <header className="bg-primary text-white py-6 shadow-md">
          <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
            <img src={logo} alt="logo" className="w-[144px] h-[42px]" />

            <nav className="text-right flex py-6 justify-between items-center navbar">
              <Link
                to="/services"
                className="text-white font-AIranianSans font-medium cursor-pointer text-[18px] hover:text-gray-600"
              >
                خدمات
              </Link>
              <Link
                to="/"
                className="text-white font-AIranianSans font-medium mx-8 cursor-pointer text-[18px] hover:text-gray-600"
              >
                خانه
              </Link>
            </nav>
          </div>
        </header>

        <section className={`${layout.section} py-12 bg-primary`}>
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              ? PWA چرا توسعه 
            </h2>
            <p className={`${styles.paragraph} text-white text-center`}>
              PWA‌ها تجربه کاربری فوق‌العاده‌ای را فراهم می‌کنند که ترکیبی از
              مزایای وب‌سایت‌ها و اپلیکیشن‌های موبایل است. با استفاده از PWA،
              شما می‌توانید دسترسی آفلاین، ارسال نوتیفیکیشن‌ها و به‌روزرسانی
              سریع و خودکار را به کاربران خود ارائه دهید.
            </p>
          </div>
        </section>

        <section className={`${layout.section} py-12 bg-primary`}>
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              پکیج‌های قیمت‌گذاری
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <PlanCard
                  key={index}
                  title={plan.title}
                  price={plan.price}
                  features={plan.features}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary text-white py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">
              آماده‌ایم تا پروژه شما را شروع کنیم
            </h2>
            <p className="mb-6">
              اگر به دنبال شروع یک پروژه جدید هستید یا نیاز به مشاوره دارید، با
              ما تماس بگیرید تا به شما کمک کنیم.
            </p>
            <Link to="/contact">
              <button className="py-3 px-6 font-semibold text-white bg-orange-500 rounded hover:bg-orange-600 transition-colors">
                تماس با ما
              </button>
            </Link>
          </div>
        </section>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default PWADevelop;
