import React from "react";
import styles from "../style";
import Footer from "./Footer";
import Header from "../components/services/Header";

const Contact = () => {
  return (
    <>
      <div className="bg-primary min-h-screen">
        <Header />

        <section className="py-12 bg-primary">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-white mb-8">
              تماس با ما
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-white mb-6 text-right ">
                  فرم تماس
                </h2>
                <form action="#" method="POST">
                  <div className="mb-4 text-right ">
                    <label
                      htmlFor="name"
                      className="block text-white text-sm font-bold mb-2"
                    >
                      نام کامل
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-3 text-primary rounded bg-gray-100"
                      placeholder="نام خود را وارد کنید"
                      required
                    />
                  </div>
                  <div className="mb-4 text-right ">
                    <label
                      htmlFor="email"
                      className="block text-white text-sm font-bold mb-2"
                    >
                      ایمیل
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-3 text-primary rounded bg-gray-100"
                      placeholder="ایمیل خود را وارد کنید"
                      required
                    />
                  </div>
                  <div className="mb-4 text-right ">
                    <label
                      htmlFor="message"
                      className="block text-white text-sm font-bold mb-2"
                    >
                      پیام
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      className="w-full p-3 text-primary rounded bg-gray-100"
                      placeholder="محتوای سایت خود را بنویسید"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 mt-4 font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    ارسال
                  </button>
                </form>
              </div>

              <div className="text-white text-right">
                <h2 className="text-2xl text-right font-semibold mb-6">
                  اطلاعات تماس
                </h2>
                <p className="mb-4 text-right">
                  برای اطلاعات بیشتر و یا هرگونه سوال، با ما تماس بگیرید یا فرم
                  تماس را پر کنید. ما همیشه آماده پاسخگویی به شما هستیم.
                </p>
                <p className="mb-2">
                  <span className="font-bold">آدرس:</span>
                </p>
                <p className="mb-2">
                  <span className="font-bold">تلفن:</span> 09190319486
                </p>
                <p className="mb-2">
                  <span className="font-bold">ایمیل:</span> Linooxel@gmail.com
                </p>
                <div className="mt-8">
                  <iframe
                    className="w-full rounded-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126917.44830613457!2d51.26831458603822!3d35.68919749930619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e01a5e5e1f7d1%3A0xa4c8e3db33c74811!2sTehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1634045547834!5m2!1sen!2s"
                    height="300"
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Maps"
                  ></iframe>
                </div>
              </div>
            </div>
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

export default Contact;
