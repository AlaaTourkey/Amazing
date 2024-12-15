import React, { useState } from 'react';
import vector from '../../assets/Vector 196 (Stroke).png';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

function Questions() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: 'إزاي أقدر أستخدم الموقع؟', answer: 'يمكنك استخدام الموقع بسهولة عبر تسجيل الدخول واتباع الإرشادات.' },
    { question: 'الموقع ده بيشتغل على كل أنواع العربيات؟', answer: 'نعم، الموقع يدعم كل أنواع السيارات بمختلف الموديلات.' },
    { question: 'لو عندي مشكلة في استخدام الموقع أعمل إيه؟', answer: 'لو واجهتك أي مشكلة أثناء استخدام الموقع، إحنا موجودين علشان نساعدك. أول حاجة ممكن تدخل على الشات المباشر اللي موجود على الموقع، وفريق الدعم هيكون متاح للرد عليك فورًا. لو الموضوع محتاج شرح أكتر، تقدر تتواصل معانا من خلال الاتصال على الرقم الخاص بالدعم الفني أو تبعت مشكلتك بالتفصيل على البريد الإلكتروني.' },
    { question: 'الموقع يوفر خدمات تانية غير الكشف؟', answer: 'نعم، نوفر خدمات إضافية مثل الصيانة وتقييم السيارات.' },
    { question: 'لكشف على العربية مجاني', answer: 'نعم، نوفر خدمات إضافية مثل الصيانة وتقييم السيارات.' },
    { question: 'الكشف على العربية بياخد وقت قد إيه؟', answer: 'نعم، نوفر خدمات إضافية مثل الصيانة وتقييم السيارات.' },
    { question: 'هل البيانات بتاعتي آمنة؟', answer: 'نعم، نوفر خدمات إضافية مثل الصيانة وتقييم السيارات.' },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section className="bg-black text-white py-10">
        <div className="container mx-auto text-center relative mb-16">
          <h3 className="text-5xl my-5">الأسئلة الشائعة في</h3>
          <h2 className="text-5xl font-extrabold">كار سيرفس</h2>
          <img
            className="absolute right-1/2 translate-x-1/2 bottom-[-20px]"
            src={vector}
            alt="decorative vector"
          />
        </div>

        <div className="container mx-auto px-4 md:w-3/4">
          {faqs.map((item, index) => (
            <div key={index} className="mb-3">
              {/* Question */}
              <div
                className={`flex justify-between items-center p-4 cursor-pointer ${activeIndex === index ? 'bg-[#ff8f4e33]' : 'bg-[#1A1A1A]'
                  }`}
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg md:text-xl">{item.question}</h3>
                {activeIndex === index ? (
                  <IoMdArrowDropup className="text-orange-500 text-2xl" />
                ) : (
                  <IoMdArrowDropdown  className="text-gray-400 text-2xl" />
                )}
              </div>

              {/* Answer */}
              {activeIndex === index && (
                <div className="p-4 bg-[#ff8f4e33] text-gray-200">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Questions;
