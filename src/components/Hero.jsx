import styles from "../style";
import robot from "../assets/robot.png";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} rtl`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-AIranianSans font-semibold ss:text-[52px] text-[52px] text-white ss:leading-[90.8px] leading-[75px] text-right">
            تحولی <br className="sm:block hidden" />{" "}
            <span className="text-gradient">در دنیای دیجیتال</span>{" "}
          </h1>
        </div>

        <h1 className="font-AIranianSans font-semibold w-full ss:text-[58px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full text-right">
          با طراحی‌های خلاقانه
        </h1>
        <p className={`${styles.paragraph} max-w-[700px] mt-5 text-right`}>
          تیم ما با تخصص و تجربه در طراحی و توسعه وب‌سایت‌های واکنش‌گرا،
          فروشگاه‌های اینترنتی و اپلیکیشن‌های موبایل، به شما کمک می‌کند تا
          کسب‌وکار خود را به سطح بالاتری ببرید.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </section>
  );
};

export default Hero;
