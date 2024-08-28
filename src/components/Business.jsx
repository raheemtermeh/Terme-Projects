import { Link } from "react-router-dom";
import { features } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-AIranianSans text-right font-semibold text-white text-right text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-AIranianSans text-right font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        ,نوآوری <br className="sm:block hidden" /> در هر پیکسل با لینوکسل
      </h2>
      <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
        تیم حرفه‌ای ما با استفاده از آخرین فناوری‌ها و استانداردهای روز،
        وب‌سایت‌های کاربرپسند و جذاب طراحی می‌کند که نه تنها برند شما را به
        بهترین شکل نمایان می‌سازد، بلکه تجربه‌ای بی‌نظیر را برای مخاطبانتان
        فراهم می‌آورد. از ایده‌پردازی تا اجرای نهایی، همراه شما هستیم تا بهترین
        نتیجه را برای کسب‌وکارتان به ارمغان بیاوریم
      </p>
      <Link to="/services">
        <button
          className={`py-3 my-6 px-6 font-AIranianSans font-bold text-[18px] tracking-normal text-primary bg-blue-gradient rounded-[20px] outline-none ${styles}`}
        >
          مشاهده همه خدمات
        </button>
      </Link>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
