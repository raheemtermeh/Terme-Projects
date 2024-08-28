import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2} text-xl `}>
        پروژه‌های خود را به سطح بالاتری ببرید
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        شروع همکاری با لینوکسل فرصتی طلایی برای توسعه کسب‌وکار شماست!
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
