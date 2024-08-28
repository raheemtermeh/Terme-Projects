import React from "react";
import { useNavigate } from "react-router-dom";
import card from "../assets/bill.png";
import styles, { layout } from "../style";


const CardDeal = () => {
  const navigate = useNavigate(); 

  const seoButtonHandler = () => {
    navigate("/seoOptimization"); 
  };

  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          تقویت روابط و بهینه‌سازی SEO
          <br className="sm:block hidden" />
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] font-AIranianSans mt-5`}>
          حضور موثر در نتایج جستجوی گوگل و دیگر موتورهای جستجو می‌تواند تفاوت
          بزرگی در موفقیت کسب‌وکار شما ایجاد کند. بهینه‌سازی موتورهای جستجو
          (SEO) فرآیند ارتقاء وب‌سایت شما به گونه‌ای است که بتوانید رتبه بالاتری
          در نتایج جستجو کسب کنید و در نتیجه بازدیدکنندگان بیشتری جذب کنید
        </p>

        <button
          onClick={seoButtonHandler}
          className="py-4 px-8 font-AIranianSans font-bold text-[18px] tracking-wide text-secondary bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-l focus:ring-4 focus:ring-blue-300 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          شروع پروژه سئو
        </button>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt="billing"
          className="w-[100%] h-[100%] rounded-full"
        />
      </div>
    </section>
  );
};

export default CardDeal;
