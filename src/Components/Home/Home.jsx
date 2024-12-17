import React, { useState } from 'react'
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
import bg1 from '../../assets/Group.png'
import bg2 from '../../assets/Group (1).png'
import bg3 from '../../assets/Clip path group.png'
import article from '../../assets/Group 46.png'
import article1 from '../../assets/article1.png'
import article2 from '../../assets/article2.png'
import article3 from '../../assets/article3.png'
import say from '../../assets/say.png'
import say2 from '../../assets/say2.png'
import car from '../../assets/car.png'
import { GoArrowUpRight } from 'react-icons/go'
import Slider from 'react-slick/lib/slider'
import { TbMessageHeart } from 'react-icons/tb'
function Home() {
  const [isOpen, setIsOpen] = useState(false);

  // احجز خدمه الفحص دلوقتي
  const settings = {
    dots: true,  // To show the dots at the bottom
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <div className="custom-next-arrow">→</div>, // Custom next arrow
    prevArrow: <div className="custom-prev-arrow">←</div>, // Custom prev arrow
  };


  // عملائنا قالو عننا ايه ؟
  var settings2 = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,

  };

  return (
    <>

      {/* home */}

      <section className="home flex justify-center py-3  md:py-10  ">
        <div className=" text-3xl md:text-5xl  text-center ">
          <h1 className='min-h-36'>
            <span>قيّم أداءك</span>
            <span className="mt-4 block md:pt-5 font-extrabold">واتخذ قرارات أفضل!</span>
          </h1>
        </div>
      </section>

      {/* احجز خدمه الفحص دلوقتي */}

      <section className=" service mt-10 py-10">
        <div className="w-10/12 mx-auto  border mainBorder rounded-3xl py-12 px-6">
          <h2 className="text-4xl font-bold mb-2 text-center">
            احجز خدمه الفحص دلوقتي
          </h2>
          <Slider {...settings} className="relative pt-3 pb-4">
            <div dir="rtl">
              <div className="grid grid-cols-1 md:grid-cols-7 gap-6 py-4">
                <div className="col-span-2">
                  <label className="block secondColor mb-2">الشركه المصنعه</label>
                  <input
                    type="text"
                    placeholder="الشركه المصنعه"
                    className="w-full py-4 px-5 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block secondColor mb-2">الموديل</label>
                  <input
                    type="text"
                    placeholder="الموديل"
                    className="w-full py-4 px-5 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block secondColor mb-2">السنه</label>
                  <input
                    type="text"
                    placeholder="السنه"
                    className="w-full py-4 px-5 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

              </div>
            </div>
            <div dir="rtl">
              <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-6 py-4">
                <div className="col-span-2">
                  <label className="block secondColor mb-2">الشركه المصنعه</label>
                  <input
                    type="text"
                    placeholder="الشركه المصنعه"
                    className="w-full py-4 px-5 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block secondColor mb-2">الموديل</label>
                  <input
                    type="text"
                    placeholder="الموديل"
                    className="w-full py-4 px-5 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block secondColor mb-2">السنه</label>
                  <input
                    type="text"
                    placeholder="السنه"
                    className="w-full py-4 px-5 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

              </div>
            </div>
            <div dir="rtl">
              <div className="grid grid-cols-1 md:grid-cols-7 gap-6 py-4">
                <div className="col-span-2">
                  <label className="block secondColor mb-2">الشركه المصنعه</label>
                  <input
                    type="text"
                    placeholder="الشركه المصنعه"
                    className="w-full py-4 px-5 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block secondColor mb-2">الموديل</label>
                  <input
                    type="text"
                    placeholder="الموديل"
                    className="w-full py-4 px-5 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block secondColor mb-2">السنه</label>
                  <input
                    type="text"
                    placeholder="السنه"
                    className="w-full py-4 px-5 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

              </div>
            </div>


          </Slider>

        </div>
      </section>


      {/* ليه تختار ؟ */}

      <section className="mt-24 pt-5 relative">
        <img className='absolute top-0 end-0 hidden md:block' src={bg1} alt="" />
        <img className='absolute top-1/2 start-0 -translate-y-1/2  hidden md:block' src={bg2} alt="" />

        <div className=" w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-5 border-2 mainBorder rounded-3xl">
          <div className='col-span-2 pt-20 choose flex flex-col items-center rounded-t-3xl lg:rounded-r-3xl'>
            <div className="">
              <h3 className='text-6xl font-bold '>ليه تختار ؟</h3>
              <h4 className='text-4xl my-4'>كـــــــار ســيــرفــس</h4>
            </div>
            <img className='w-1/2 mt-5' src={carimg} alt=" car photo" />
          </div>
          <div className="col-span-3  p-10 rounded-b-3xl lg:rounded-l-3xl  secondBg">
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

      <section className="my-16 pt-5 relative">
        <img className='absolute top-1/2 end-0 -translate-y-1/2 hidden md:block ' src={bg2} alt="" />

        <div class=" w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-5 border-2 mainBorder rounded-3xl">
          <div className="col-span-3  py-5 px-16 rounded-t-3xl lg:rounded-r-3xl secondBg">
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
            <div className="px-10 text-white">
              <h3 className='text-4xl font-bold '>إيه اللي بيميزنا عن غيرنا؟</h3>
              <h4 className='text-xl my-2'>مع كار سيرفيس، هتلاقي دايمًا قيمة مضافة
                بتخليك في المقدمة</h4>
            </div>
            <img className='w-3/4 my-5' src={carimg2} alt=" car photo" />
          </div>
        </div>
      </section>

      {/* إزاي بنساعدك تحقق أهدافك؟ */}

      <section className="mb-5 pt-5 relative">
        <img className='absolute top-1/2  start-0 -translate-y-1/2  hidden md:block' src={bg2} alt="" />

        <div className=" w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-5 border-2 mainBorder rounded-3xl">
          <div className='col-span-2 pt-16 help flex flex-col items-center rounded-t-3xl lg:rounded-r-3xl'>
            <div className="px-10">
              <h3 className='text-3xl font-bold '>إزاي بنساعدك تحقق أهدافك؟</h3>
            </div>
            <img className='w-3/4 mt-16' src={carimg3} alt=" car photo" />
          </div>
          <div className="col-span-3  py-5 px-8 rounded-b-3xl lg:rounded-l-3xl secondBg">
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

      <section className=' my-10  py-10 relative '>
        <img className='absolute top-0 end-0   hidden md:block' src={bg3} alt="" />
        <div className="w-10/12 mx-auto">
          <div className="header text-center my-8 py-8 relative">
            <h2 className="font-extrabold text-5xl   relative inline-block">
              ارقــامــنــا
              <img
                className="absolute -top-14 left-[-6%] transform -translate-x-1/2  "
                src={numPhoto}
                alt="Logo Icon"
              />
            </h2>
          </div>
          <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-white">
            <div className="secondBg flex flex-col items-center text-center border mainBorder shadow-lg shadow-gray-500 rounded-tl-lg rounded-br-lg py-4 ">
              <img className='w-1/3 my-4' src={numPhoto6} alt="" />
              <h2 className='font-bold text-2xl'>10,000+</h2>
              <p className='my-3'>عميل راضٍ عن خدمتنا</p>
            </div>
            <div className="secondBg flex flex-col items-center text-center border mainBorder shadow-lg shadow-gray-500 rounded-tl-lg rounded-br-lg py-4 ">
              <img className='w-1/3 my-4' src={numPhoto5} alt="" />
              <h2 className='font-bold text-2xl'>+5,000</h2>
              <p className='my-3'>تقرير تحليل دقيق </p>
            </div>
            <div className="secondBg flex flex-col items-center text-center border mainBorder shadow-lg shadow-gray-500 rounded-tl-lg rounded-br-lg py-4 ">
              <img className='w-1/3 my-4' src={numPhoto4} alt="" />
              <h2 className='font-bold text-2xl'>+500</h2>
              <p className='my-3'>تقييم إيجابي من عملائنا</p>
            </div>
            <div className="secondBg flex flex-col items-center text-center border mainBorder shadow-lg shadow-gray-500 rounded-tl-lg rounded-br-lg py-4 ">
              <img className='w-1/3 my-4' src={numPhoto3} alt="" />
              <h2 className='font-bold text-2xl'>24/7</h2>
              <p className='my-3'>دعم متواصل</p>
            </div>
            <div className="secondBg flex flex-col items-center text-center border mainBorder shadow-lg shadow-gray-500 rounded-tl-lg rounded-br-lg py-4 ">
              <img className='w-1/3 my-4' src={numPhoto2} alt="" />
              <h2 className='font-bold text-2xl'>95%</h2>
              <p className='my-3'>نسبة رضا العملاء</p>
            </div>
            <div className="secondBg flex flex-col items-center text-center border mainBorder shadow-lg shadow-gray-500 rounded-tl-lg rounded-br-lg py-4 ">
              <img className='w-1/3 my-4' src={numPhoto1} alt="" />
              <h2 className='font-bold text-2xl'>+1,000</h2>
              <p className='my-3'>سيارة تم فحصها</p>
            </div>


          </div>
        </div>

      </section>

      {/* فروع كار سيرفيس */}

      <section className='w-10/12 mx-auto my-10  py-10'>
        <div className="header text-center my-8 py-8 ">
          <h2 className="font-extrabold text-5xl  inline-block">
            فروع كار سيرفيس
          </h2>
        </div>

        <div className="grid grid-cols-1  lg:grid-cols-9 gap-4">
          <div className="col-span-2 grid grid-cols-2 lg:grid-cols-1 gap-6 justify-center">
            <div className="flex justify-center items-center">
              <button className="secondBg hover:bg-[#ff8f4e] transition-all min-w-40 duration-150 flex  text-white py-4 px-3 border mainBorder rounded-tl-lg rounded-br-lg  text-xl">
                <img className="mx-1" src={building} alt="" />
                المقطم
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button className="secondBg hover:bg-[#ff8f4e] transition-all min-w-40 duration-150 flex  text-white py-4 px-3 border mainBorder rounded-tl-lg rounded-br-lg  text-xl">
                <img className="mx-1" src={building} alt="" />
                المعادي
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button className="secondBg hover:bg-[#ff8f4e] transition-all min-w-40 duration-150 flex  text-white py-4 px-3 border mainBorder rounded-tl-lg rounded-br-lg  text-xl">
                <img className="mx-1" src={building} alt="" />
                نزله السمان
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button className="secondBg hover:bg-[#ff8f4e] transition-all min-w-40 duration-150 flex  text-white py-4 px-3 border mainBorder rounded-tl-lg rounded-br-lg  text-xl">
                <img className="mx-1" src={building} alt="" />
                نزله السمان
              </button>
            </div>
          </div>

          <div className="col-span-4 ">
            <img className='w-full h-full' src={rectangle} alt="" />
          </div>
          <div className="col-span-3">
            <p className='leading-8'>
              الموقع الاستراتيجي في منطقة البايدر الصناعية في عمان - الأردن ، بالقرب من طريق المطار الذي يربط الشمال والجنوب من المملكة. مع مساحة تزيد عن 2000 متر مربع ، وهو منشأة مزودة بأحدث التقنيات الحديثة لفحص المركبات ، و 10 رافعات لضمان الخدمة المثلى ، بسعة 25 مركبة. تم تصميم المرفق خصيصًا للتعامل مع جميع أنواع المركبات في نفس الوقت ، حيث يقوم الموظفون بإجراء عملية تفتيش يتم خلالها اتخاذ جميع تدابير مراقبة الجودة للحفاظ على أعلى مستوى من الدقة والدقة.
            </p>
            <div className=" flex justify-end  mt-10">
              <button className="mainBg text-white py-4 px-8 rounded-lg font-bold text-lg">
                احجز خدمه للفحص الان
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* المقالات */}

      <section className="w-10/12 mx-auto my-10  py-10">
        <div >
          <div className="header my-8 py-8 flex justify-between px-4">
            <h2 className="font-bold text-3xl md:text-5xl inline-block relative">
              المقالات
              <img
                className="absolute -top-4 left-[-13%] transform -translate-x-1/2  "
                src={article}
                alt="Logo Icon"
              />
            </h2>
            <button className='secondColor text-lg'>عرض الكل ...</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="col">
              <div>
                <img className='w-full' src={article3} alt="" />
                <h2 className='font-bold text-md my-3'>ازاي بيتم فحص السياره في مراكز خدمه كار سيرفيس </h2>
                <button className='text-white secondBg flex items-center gap-2 py-3 px-4 rounded-lg w-full justify-center'>
                  <span>اقراء المزيد</span>
                  <GoArrowUpRight className='mainColor' />
                </button>
              </div>
            </div>
            <div className="col">
              <div>
                <img className='w-full' src={article2} alt="" />
                <h2 className='font-bold text-md my-3'>ازاي بيتم فحص السياره في مراكز خدمه كار سيرفيس </h2>
                <button className='text-white secondBg flex items-center gap-2 py-3 px-4 rounded-lg w-full justify-center'>
                  <span>اقراء المزيد</span>
                  <GoArrowUpRight className='mainColor' />
                </button>
              </div>
            </div>
            <div className="col">
              <div>
                <img className='w-full' src={article1} alt="" />
                <h2 className='font-bold text-md my-3'>ازاي بيتم فحص السياره في مراكز خدمه كار سيرفيس </h2>
                <button className='text-white secondBg flex items-center gap-2 py-3 px-4 rounded-lg w-full justify-center'>
                  <span>اقراء المزيد</span>
                  <GoArrowUpRight className='mainColor' />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* عملائنا قالو عننا ايه ؟ */}

      <section className='say w-10/12 mx-auto my-16  py-10 relative'>
        <div className="header my-8 py-8 flex justify-between px-4">
          <h2 className="font-bold text-3xl md:text-5xl inline-block relative">
            عملائنا قالو عننا ايه ؟
            <img
              className="absolute -top-7 left-[-3%] transform -translate-x-1/2  "
              src={say}
              alt="Logo Icon"
            />
          </h2>
        </div>

        <Slider {...settings2}>
          <div className=" w-4/5 text-end m-auto py-7 px-10 text-[#A4A4A4] border mainBorder rounded-3xl ">
            <p className='text-lg md:text-3xl font-semibold md:leading-relaxed '>ما شاء الله تبارك الله، خدمة الفحص عندكم أكثر من رائعة. السيارة تم فحصها بشكل دقيق جداً وكل صغيرة وكبيرة تم شرحها لي بالتفصيل. الصراحة ارتحت مرة بعد التقرير اللي استلمته، وحسيت إني فاهم حالة السيارة بالكامل قبل ما أشتريها. الله يبارك فيكم ويزيدكم من فضله</p>
            <div className=" flex items-center justify-end gap-4 mt-8 text-end">
              <img src={say2} alt="profile image" />
              <h2 className='text-base font-bold'>مصطفي الحسيني</h2>
            </div>
          </div>
          <div className=" w-4/5 text-end m-auto py-7 px-10 text-[#A4A4A4] border mainBorder rounded-3xl ">
            <p className='text-lg md:text-3xl font-semibold md:leading-relaxed '>ما شاء الله تبارك الله، خدمة الفحص عندكم أكثر من رائعة. السيارة تم فحصها بشكل دقيق جداً وكل صغيرة وكبيرة تم شرحها لي بالتفصيل. الصراحة ارتحت مرة بعد التقرير اللي استلمته، وحسيت إني فاهم حالة السيارة بالكامل قبل ما أشتريها. الله يبارك فيكم ويزيدكم من فضله</p>
            <div className=" flex items-center justify-end gap-4 mt-8 text-end">
              <img src={say2} alt="profile image" />
              <h2 className='text-base font-bold'>مصطفي الحسيني</h2>
            </div>
          </div>
          <div className=" w-4/5 text-end m-auto py-7 px-10 text-[#A4A4A4] border mainBorder rounded-3xl ">
            <p className='text-lg md:text-3xl font-semibold md:leading-relaxed '>ما شاء الله تبارك الله، خدمة الفحص عندكم أكثر من رائعة. السيارة تم فحصها بشكل دقيق جداً وكل صغيرة وكبيرة تم شرحها لي بالتفصيل. الصراحة ارتحت مرة بعد التقرير اللي استلمته، وحسيت إني فاهم حالة السيارة بالكامل قبل ما أشتريها. الله يبارك فيكم ويزيدكم من فضله</p>
            <div className=" flex items-center justify-end gap-4 mt-8 text-end">
              <img src={say2} alt="profile image" />
              <h2 className='text-base font-bold'>مصطفي الحسيني</h2>
            </div>
          </div>


        </Slider>

      </section>


      {/* اشترك الان  */}
      <section className='w-10/12 mx-auto mb-10  py-10'>
        <div className="container  ">
          <div className="grid grid-cols-1  md:grid-cols-2 gap-8  border mainBorder rounded-3xl p-4">
            <div className="col-6 mb-8 mx-8">
              <h2 className='my-8 text-2xl md:text-5xl font-semibold max-w-sm leading-10'>اشترك الان في  القائمه البريديه</h2>

              <div className=" flex  justify-between p-2 border mainBorder rounded-xl">
                <input className='px-1 w-1/3 text-white bg-transparent outline-none' type="text" placeholder="بريدك" />
                <span className='flex items-center gap-2 mainBg rounded-xl py-3 px-4 cursor-pointer '>  <TbMessageHeart className='fs-3xl' />  اشترك الان </span>
              </div>
            </div>
            <div className="col-6 flex justify-center">
              <img src={car} alt="" className='w-full object-contain -mt-16' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home