import React from 'react'
import logo from '../../assets/auto-vehicle-repair-service-logo_681672-1437 1.png'
import carimg from '../../assets/land-rover-range-rover-car-png-25 1.png'
import chooseImg1 from '../../assets/note.png'
import chooseImg2 from '../../assets/emoji-happy.png'
import chooseImg3 from '../../assets/key-square.png'
import chooseImg4 from '../../assets/chart-2.png'
import chooseImg5 from '../../assets/notification-status.png'
import chooseImg6 from '../../assets/24-support.png'
import chooseImg7 from '../../assets/favorite-chart.png'
import chooseImg8 from '../../assets/personalcard.png'
import chooseImg9 from '../../assets/airdrop.png'
import carimg2 from '../../assets/car-free-transparent-png-8 1.png'
import carimg3 from '../../assets/lovepik-a-car-png-image_401434180_wh1200 1.png'
import numPhoto from '../../assets/Group (2).png'
import numPhoto1 from '../../assets/group (2) 7.png'
import numPhoto2 from '../../assets/group (2) 9.png'
import numPhoto3 from '../../assets/group (2) 8.png'
import numPhoto4 from '../../assets/group (2) 10.png'
import numPhoto5 from '../../assets/group (2) 6.png'
import numPhoto6 from '../../assets/group (2) 5.png'
import rectangle from '../../assets/Rectangle 113.png'
import building from '../../assets/building.png'

function Home() {
  return (
    <>
      {/* nav in home */}
      <div className="nav w-4/5 mx-auto my-10">
        <div className=" flex justify-between items-center px-5 py-3   border border-[#7F7F7F] rounded-full	">
          <div className="flex justify-between items-center">
            <img src={logo} alt="logo" />

            <h2 className=" md:text-2xl mx-4">
              <strong className=" ">كـــــار</strong> سيرفيس
            </h2>
          </div>
          <div className=" border-2 border-white  px-2 py-1 rounded-lg  ">
            <span>English</span>
          </div>
        </div>
      </div>

      {/* home */}


      <section className="home flex justify-center py-3  md:py-10  ">
        <div className=" text-3xl md:text-5xl  text-center ">
          <h1 className='min-h-36'>
            <span>قيّم أداءك</span>
            <span className="mt-4 block md:pt-5 font-extrabold">واتخذ قرارات أفضل!</span>
          </h1>
        </div>
      </section>

      {/* info */}

      <section className="info  mt-10 py-10">
        <div className="w-10/12 mx-auto bg-gray-200 rounded-lg shadow-md p-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="w-full ">
            <label className="block text-gray-800 font-medium mb-2">الشركه المصنعه</label>
            <input
              type="text"
              placeholder="الشركه المصنعه"
              className="w-full py-4 px-5 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="w-full ">
            <label className="block text-gray-800 font-medium mb-2">الموديل</label>
            <input
              type="text"
              placeholder="الموديل"
              className="w-full py-4 px-5 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="w-full ">
            <label className="block text-gray-800 font-medium mb-2">السنه</label>
            <input
              type="text"
              placeholder="السنه"
              className="w-full py-4 px-5 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className=" flex items-end  mt-6">
            <button className="bg-black text-white py-4 px-8 rounded-lg font-bold text-lg">
              احجز خدمه للفحص الان
            </button>
          </div>
        </div>


      </section>

      {/* ليه تختار ؟ */}

      <section className="mt-24 pt-5">
        <div class=" w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-5 border-2 border-[#7F7F7F] rounded-3xl">
          <div className='col-span-2 pt-20 choose flex flex-col items-center rounded-t-3xl lg:rounded-r-3xl'>
            <div className="">
              <h3 className='text-6xl font-bold '>ليه تختار ؟</h3>
              <h4 className='text-4xl my-4'>كـــــــار ســيــرفــس</h4>
            </div>
            <img className='w-1/2 mt-5' src={carimg} alt=" car photo" />
          </div>
          <div className="col-span-3  p-10 rounded-b-3xl lg:rounded-l-3xl  bg-[#141414]">
            <div className="grid grid-rows-3 gap-6">
              <div className=" p-4  flex items-center gap-4">
                <img className="w-12 h-12 object-cover rounded-full" src={chooseImg1} alt="Feature Icon" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">تقارير دقيقة وشاملة</h2>
                  <p className="text-white text-sm max-w-lg  ">
                    كل التفاصيل اللي محتاجها في مكان واحد، بناءً على بيانات موثوقة وتحليلات ذكية
                  </p>
                </div>
              </div>
              <div className=" p-4  flex items-center gap-4">
                <img className="w-12 h-12 object-cover rounded-full" src={chooseImg2} alt="Feature Icon" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">سهولة في الاستخدام</h2>
                  <p className="text-white text-sm max-w-md ">
                    واجهة بسيطة وسريعة تضمن تجربة استخدام مريحة
                  </p>
                </div>
              </div>
              <div className=" p-4  flex items-center gap-4">
                <img className="w-12 h-12 object-cover rounded-full" src={chooseImg3} alt="Feature Icon" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">أمان البيانات</h2>
                  <p className="text-white text-sm max-w-md ">
                    خصوصيتك أولويتنا، كل معلوماتك في أيدٍ أمينة
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* إيه اللي بيميزنا عن غيرنا؟ */}

      <section className="my-16 pt-5">
        <div class=" w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-5 border-2 border-[#7F7F7F] rounded-3xl">
          <div className="col-span-3  py-5 px-16 rounded-t-3xl lg:rounded-r-3xl bg-[#141414]">
            <div className="grid grid-rows-3 gap-6">
              <div className=" p-2  flex items-center gap-4">
                <img className="w-12 h-12 object-cover rounded-full" src={chooseImg4} alt="Feature Icon" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">تحليلات متطورة</h2>
                  <p className="text-white  max-w-lg  ">
                    نعتمد على أحدث تقنيات الذكاء الاصطناعي لتقديم رؤية واضحة ودقيقة
                  </p>
                </div>
              </div>
              <div className=" p-2  flex items-center gap-4">
                <img className="w-12 h-12 object-cover rounded-full" src={chooseImg5} alt="Feature Icon" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">تحديثات مستمرة</h2>
                  <p className="text-white  max-w-lg ">
                    تطوّر مستمر في خدماتنا عشان نضمن أفضل تجربة ليك
                  </p>
                </div>
              </div>
              <div className=" p-2  flex items-center gap-4">
                <img className="w-12 h-12 object-cover rounded-full" src={chooseImg6} alt="Feature Icon" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">دعم على مدار الساعة</h2>
                  <p className="text-white  max-w-lg ">
                    فريقنا موجود دائمًا للإجابة على كل استفساراتك
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-2 pt-16 spesial flex flex-col items-center rounded-b-3xl lg:rounded-l-3xl'>
            <div className="px-10">
              <h3 className='text-4xl font-bold '>إيه اللي بيميزنا عن غيرنا؟</h3>
              <h4 className='text-xl my-2'>مع كار سيرفيس، هتلاقي دايمًا قيمة مضافة
                بتخليك في المقدمة</h4>
            </div>
            <img className='w-3/4 my-5' src={carimg2} alt=" car photo" />
          </div>
        </div>
      </section>

      {/* إزاي بنساعدك تحقق أهدافك؟ */}

      <section className="mb-5 pt-5">
        <div className=" w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-5 border-2 border-[#7F7F7F] rounded-3xl">
          <div className='col-span-2 pt-16 help flex flex-col items-center rounded-t-3xl lg:rounded-r-3xl'>
            <div className="px-10">
              <h3 className='text-3xl font-bold '>إزاي بنساعدك تحقق أهدافك؟</h3>
            </div>
            <img className='w-3/4 mt-16' src={carimg3} alt=" car photo" />
          </div>
          <div className="col-span-3  py-5 px-8 rounded-b-3xl lg:rounded-l-3xl bg-[#141414]">
            <div className="grid grid-rows-3 gap-6">
              <div className=" p-4  flex items-center gap-4">
                <img className="w-12 h-12 object-cover rounded-full" src={chooseImg7} alt="Feature Icon" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">تحليل الأداء بشكل عميق</h2>
                  <p className="text-white  max-w-lg  ">
                    نوفرلك تقارير تفصيلية عشان تشوف الصورة كاملة
                  </p>
                </div>
              </div>
              <div className=" p-4  flex items-center gap-4">
                <img className="w-12 h-12 object-cover rounded-full" src={chooseImg8} alt="Feature Icon" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">نتائج قابلة للقياس</h2>
                  <p className="text-white  max-w-lg ">
                    تابع تقدمك وأثر التحسينات اللي بتطبقها بسهولة
                  </p>
                </div>
              </div>
              <div className=" p-4  flex items-center gap-4">
                <img className="w-12 h-12 object-cover rounded-full" src={chooseImg9} alt="Feature Icon" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">تحديد نقاط القوة والضعف</h2>
                  <p className="text-white  max-w-lg ">
                    ساعدك تفهم فين بتتميز وفين محتاج تحسين
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ارقــامــنــا */}

      <section className='w-10/12 mx-auto my-10  py-10'>
        <div className="header text-center my-8 py-8 relative">
          <h2 className="font-extrabold text-5xl text-white relative inline-block">
            ارقــامــنــا
            <img
              className="absolute -top-14 left-[-6%] transform -translate-x-1/2  "
              src={numPhoto}
              alt="Logo Icon"
            />
          </h2>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div className="bg-[#141414] flex flex-col items-center text-center border border-[#7F7F7F] rounded-tl-lg rounded-br-lg py-4 ">
            <img className='w-1/3 my-4' src={numPhoto6} alt="" />
            <h2 className='font-bold text-2xl'>10,000+</h2>
            <p className='my-3'>عميل راضٍ عن خدمتنا</p>
          </div>
          <div className="bg-[#141414] flex flex-col items-center text-center border border-[#7F7F7F] rounded-tl-lg rounded-br-lg py-4 ">
            <img className='w-1/3 my-4' src={numPhoto5} alt="" />
            <h2 className='font-bold text-2xl'>+5,000</h2>
            <p className='my-3'>تقرير تحليل دقيق </p>
          </div>
          <div className="bg-[#141414] flex flex-col items-center text-center border border-[#7F7F7F] rounded-tl-lg rounded-br-lg py-4 ">
            <img className='w-1/3 my-4' src={numPhoto4} alt="" />
            <h2 className='font-bold text-2xl'>+500</h2>
            <p className='my-3'>تقييم إيجابي من عملائنا</p>
          </div>
          <div className="bg-[#141414] flex flex-col items-center text-center border border-[#7F7F7F] rounded-tl-lg rounded-br-lg py-4 ">
            <img className='w-1/3 my-4' src={numPhoto3} alt="" />
            <h2 className='font-bold text-2xl'>24/7</h2>
            <p className='my-3'>دعم متواصل</p>
          </div>
          <div className="bg-[#141414] flex flex-col items-center text-center border border-[#7F7F7F] rounded-tl-lg rounded-br-lg py-4 ">
            <img className='w-1/3 my-4' src={numPhoto2} alt="" />
            <h2 className='font-bold text-2xl'>95%</h2>
            <p className='my-3'>نسبة رضا العملاء</p>
          </div>
          <div className="bg-[#141414] flex flex-col items-center text-center border border-[#7F7F7F] rounded-tl-lg rounded-br-lg py-4 ">
            <img className='w-1/3 my-4' src={numPhoto1} alt="" />
            <h2 className='font-bold text-2xl'>+1,000</h2>
            <p className='my-3'>سيارة تم فحصها</p>
          </div>


        </div>

      </section>

      {/* فروع كار سيرفيس */}

      <section className='w-10/12 mx-auto my-10  py-10'>
        <div className="header text-center my-8 py-8 ">
          <h2 className="font-extrabold text-5xl text-white  inline-block">
            فروع كار سيرفيس
          </h2>
        </div>

        <div className="grid grid-cols-1  lg:grid-cols-9 gap-4">
          <div className="col-span-2 flex flex-col items-center gap-8">
            <button className="bg-[#141414] hover:bg-[#ff8f4e] transition-all min-w-40 duration-150 flex  text-white py-4 px-3 border border-[#7F7F7F] rounded-tl-lg rounded-br-lg  text-xl">
              <img className='mx-1' src={building} alt="" />
              المقطم
            </button>
            <button className="bg-[#141414] hover:bg-[#ff8f4e] transition-all min-w-40 duration-150 flex  text-white py-4 px-3 border border-[#7F7F7F] rounded-tl-lg rounded-br-lg  text-xl">
              <img className='mx-1' src={building} alt="" />
              المعادي
            </button>
            <button className="bg-[#141414] hover:bg-[#ff8f4e] transition-all min-w-40 duration-150 flex  text-white py-4 px-3 border border-[#7F7F7F] rounded-tl-lg rounded-br-lg  text-xl">
              <img className='mx-1' src={building} alt="" />
              نزله السمان
            </button>
            <button className="bg-[#141414] hover:bg-[#ff8f4e] transition-all min-w-40 duration-150 flex  text-white py-4 px-3 border border-[#7F7F7F] rounded-tl-lg rounded-br-lg  text-xl">
              <img className='mx-1' src={building} alt="" />
              نزله السمان
            </button>

          </div>
          <div className="col-span-4 ">
            <img className='w-full h-full' src={rectangle} alt="" />
          </div>
          <div className="col-span-3">
            <p className='leading-8'>
              الموقع الاستراتيجي في منطقة البايدر الصناعية في عمان - الأردن ، بالقرب من طريق المطار الذي يربط الشمال والجنوب من المملكة. مع مساحة تزيد عن 2000 متر مربع ، وهو منشأة مزودة بأحدث التقنيات الحديثة لفحص المركبات ، و 10 رافعات لضمان الخدمة المثلى ، بسعة 25 مركبة. تم تصميم المرفق خصيصًا للتعامل مع جميع أنواع المركبات في نفس الوقت ، حيث يقوم الموظفون بإجراء عملية تفتيش يتم خلالها اتخاذ جميع تدابير مراقبة الجودة للحفاظ على أعلى مستوى من الدقة والدقة.
            </p>
            <div className=" flex justify-end  mt-10">
              <button className="bg-[#ff8f4e] text-white py-4 px-8 rounded-lg font-bold text-lg">
                احجز خدمه للفحص الان
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home