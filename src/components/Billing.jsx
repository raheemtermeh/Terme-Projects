import bill from "../assets/CRM.png";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5] rounded-full"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        ,CRM
        <br className="sm:block hidden text-right" />
        مدیریت ارتباط با مشتریان
      </h2>
      <p className={`${styles.paragraph}  max-w-[470px] mt-5`}>
        در دنیای کسب‌وکار امروزی، مدیریت موثر ارتباط با مشتریان می‌تواند به
        عنوان یک عامل کلیدی در موفقیت و رشد کسب‌وکار شما عمل کند. سیستم‌های
        مدیریت ارتباط با مشتریان (CRM) ابزارهایی حیاتی برای سازمان‌ها هستند تا
        بتوانند روابط خود با مشتریان را بهینه کنند و تجربه‌ای شخصی‌سازی‌شده و
        بهبود یافته ارائه دهند
      </p>
    </div>
  </section>
);

export default Billing;
