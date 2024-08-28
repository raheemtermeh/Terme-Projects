import React from "react";
import SeoHeader from "./SeoHeader";
import styles, { layout } from "../../style";
import blackBox from "../../assets/boxBack.jpg";
import { Link } from "react-router-dom";

const SeoOptimization = () => {
  return (
    <div className="bg-primary text-white min-h-screen">

      <SeoHeader />


      <section id="hero" className={`${layout.section} ${styles.paddingY}`}>
        <div className={`${layout.sectionInfo} text-right`}>
          <h1 className={`${styles.heading2} text-[36px]`}>
            بهینه‌سازی موتور جستجو (SEO)
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            خدمات ما شامل تحلیل کلمات کلیدی، بهینه‌سازی محتوا، و استراتژی‌های
            لینک‌سازی برای ارتقای رتبه سایت شما در نتایج جستجو است.
          </p>
        </div>
        <div className={`${layout.sectionImg}`}>
          <img
            src={blackBox}
            alt="SEO Optimization"
            className="w-[100%] h-[100%] object-cover rounded-lg"
          />
        </div>
      </section>

      <section
        id="pricing"
        className="bg-primary text-primary text-right py-12 px-6 font-AIranianSans"
      >
        <h2 className="text-[32px] font-bold text-right mb-8">تعرفه‌های ما</h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          <div className="bg-primary text-white p-6 rounded-lg shadow-lg w-full md:w-1/3 relative">
            <h3 className="text-[24px] font-bold mb-4">پلن پایه</h3>
            <p className="text-[18px] mb-4">شروع از 500 هزار تومان</p>
            <ul className=" text-right mb-6">
              <li>تحلیل کلمات کلیدی</li>
              <li>بهینه‌سازی صفحات اصلی</li>
              <li>گزارش ماهانه</li>
            </ul>
            <button
              className={`${styles.paragraph} max-w-[470px] text-center mt-5 w-full py-2 bg-secondary font-AIranianSans text-blue-600 rounded-full hover:bg-transparent transition-colors`}
            >
              <Link to="/orderBasicPlan">سفارش این پلن</Link>
            </button>
          </div>


          <div className="bg-primary text-secondary p-6 rounded-lg shadow-lg w-full md:w-1/3 relative">
            <span className="absolute top-0 right-0 text-green-500 px-3 rounded-bl-lg font-bold">
              پرفروش‌ترین
            </span>
            <h3 className="text-[24px] font-bold text-secondary mb-4">
              پلن استاندارد
            </h3>
            <p className="text-[18px] mb-4">شروع از 1 میلیون تومان</p>
            <ul className="list-disc text-right mb-6 text-secondary">
              <li>تحلیل کلمات کلیدی پیشرفته</li>
              <li>بهینه‌سازی محتوا</li>
              <li>استراتژی لینک‌سازی</li>
              <li>گزارش ماهانه و پشتیبانی</li>
            </ul>
            <button className="w-full py-2 bg-secondary font-AIranianSans text-blue-600 rounded-full hover:bg-transparent transition-colors">
              <Link to="/orderStandardPlan">سفارش این پلن</Link>
            </button>
          </div>

          {/* پلن حرفه‌ای */}
          <div className="bg-primary text-right text-white p-6 rounded-lg shadow-lg w-full md:w-1/3 relative">
            <h3 className="text-[24px] text-right font-bold mb-4">
              پلن حرفه‌ای
            </h3>
            <p className="text-[18px] text-right mb-4">
              شروع از 2 میلیون تومان
            </p>
            <ul className="list-disc text-right mb-6">
              <li>همه امکانات پلن استاندارد</li>
              <li>استراتژی پیشرفته لینک‌سازی</li>
              <li>تحلیل رقبا</li>
              <li>پشتیبانی ویژه</li>
            </ul>
            <button className="w-full py-2 bg-secondary text-primary rounded-full hover:bg-white transition-colors">
              <Link to="/orderProfessionalPlan">سفارش این پلن</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeoOptimization;
