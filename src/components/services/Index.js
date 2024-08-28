import React from "react";
import { services } from "../../constants";
import styles, { layout } from "../../style";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "../Footer";

const ServiceCard = ({ icon, title, content, route }) => (
  <div className="bg-primary rounded-lg shadow-2xl p-6 mb-6 hover:bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 shadow-xl transition-shadow duration-800">
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} mb-4`}>
      <img
        src={icon}
        alt={title}
        className="w-[40px] h-[40px] object-contain"
      />
    </div>
    <h4 className="text-xl font-semibold text-white text-right mb-2">
      {title}
    </h4>
    <p className="text-base mb-4 text-white text-right">{content}</p>
    <Link to={route}>
      <a href="#_" className="relative px-5 py-2 font-medium text-white group">
        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
        <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
        <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
        <span className="relative">اطلاعات بیشتر و سفارش</span>
      </a>
    </Link>
  </div>
);


const ServicesPage = () => (
  <>
    <div className="bg-primary min-h-screen">

      <Header />

      <section className={`${layout.section} pt-12 bg-primary pb-24`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            خدمات ما
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((feature, index) => (
              <ServiceCard
                key={feature.id}
                {...feature}
                link={`/service-details/${feature.id}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            آماده‌ایم تا به شما کمک کنیم
          </h2>
          <p className="mb-6">
            اگر سوالی دارید یا به مشاوره نیاز دارید، با ما تماس بگیرید تا بهترین
            راهکارها را برای شما ارائه دهیم. تیم ما در دسترس است تا شما را در هر
            مرحله از مسیر یاری کند.
          </p>
          <Link to="/contact"></Link>
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

export default ServicesPage;
