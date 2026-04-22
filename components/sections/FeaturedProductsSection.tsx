'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function FeaturedProductsSection() {
  const { t } = useLanguage();

  return (
    <section id="featured-products" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6">{t.productsTitle}</h2>
        <p className="text-xl text-stone-600 mb-16 max-w-3xl mx-auto">{t.productsDesc}</p>

        <div className="flex flex-col gap-20 max-w-5xl mx-auto">
          {/* Product appearance image */}
          <div className="flex flex-col items-center">
            <div className="relative w-full overflow-hidden mb-8">
              <img
                src="/UVACO_products.png"
                alt="UVACO Products Appearance"
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-emerald-800 font-bold text-xl tracking-wide">
              {t.productImg1Caption}
            </p>
          </div>

          {/* Product list image */}
          <div className="flex flex-col items-center">
            <div className="relative w-full overflow-hidden mb-8">
              <img
                src="/UVACO_products_list.png"
                alt="UVACO Products List Info"
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-emerald-800 font-bold text-xl tracking-wide">
              {t.productImg2Caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
