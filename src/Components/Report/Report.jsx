import React, { useState } from 'react'
import reportimg from '../../assets/reportimg.png'
import reportimg1 from '../../assets/BMW.png'
import reportimg2 from '../../assets/reportimg2.png'
import reportimg3 from '../../assets/reportimg3.png'
import reportimg4 from '../../assets/reportimg4.png'
import addition1 from '../../assets/addition1.png'
import addition2 from '../../assets/addition2.png'
import addition3 from '../../assets/addition3.png'
import addition4 from '../../assets/addition4.png'
import addition5 from '../../assets/addition5.png'
import addition6 from '../../assets/addition6.png'
import addition7 from '../../assets/addition7.png'
import addition8 from '../../assets/addition8.png'
import addition9 from '../../assets/addition9.png'
import addition10 from '../../assets/addition10.png'
import addition11 from '../../assets/addition11.png'
import addition12 from '../../assets/addition12.png'
import addition13 from '../../assets/addition13.png'
import system1 from '../../assets/system1.png'
import system2 from '../../assets/system2.png'
import system3 from '../../assets/system3.png'
import system4 from '../../assets/system4.png'
import system5 from '../../assets/system5.png'
import system6 from '../../assets/system6.png'
import system7 from '../../assets/system7.png'
import system8 from '../../assets/system8.png'
import system9 from '../../assets/system9.png'
import system10 from '../../assets/system10.png'
import system11 from '../../assets/system11.png'
import system12 from '../../assets/system12.png'
import system13 from '../../assets/system13.png'
import system14 from '../../assets/system14.png'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'

function Report() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // list in last section
  const [openIndex, setOpenIndex] = useState(null); // Track which list is open

  const reports = [
    { title: 'الهكيل الخارجي', image: system1, items: ['العنصر الأول', 'العنصر الثاني', 'العنصر الثالث'], },
    { title: 'الشاسي والهكيل', image: system7, items: ['العنصر الرابع', 'العنصر الخامس', 'العنصر السادس'],},
    { title: 'المحرك وناقل الحركة', image: system2, items: ['العنصر الرابع', 'العنصر الخامس', 'العنصر السادس'],},
    { title: 'نظام التوجيه', image: system8, items: ['العنصر الرابع', 'العنصر الخامس', 'العنصر السادس'],},
    { title: 'المجموعة الكهربائية', image: system3, items: ['العنصر الرابع', 'العنصر الخامس', 'العنصر السادس'],},
    { title: 'نظام التكييف', image: system9, items: ['العنصر الرابع', 'العنصر الخامس', 'العنصر السادس'],},
    { title: 'المكابح والسلامة', image: system4, items: ['العنصر الرابع', 'العنصر الخامس', 'العنصر السادس'],},
    { title: 'التاريخ والسجلات', image: system10, items: ['العنصر الرابع', 'العنصر الخامس', 'العنصر السادس'],},
    { title: 'فحص Bosch السلامة', image: system5, items: ['العنصر الرابع', 'العنصر الخامس', 'العنصر السادس'],},
    { title: 'فحص الطريق', image: system11, items: ['العنصر الرابع', 'العنصر الخامس', 'العنصر السادس'],},
    { title: 'صور الفحص', image: system6, items: ['العنصر الرابع', 'العنصر الخامس', 'العنصر السادس'],},
    { title: 'جميع الملاحظات', image: system12, items: ['العنصر الرابع', 'العنصر الخامس', 'العنصر السادس'],},

  ];

  const toggleList = (index) => {
    setOpenIndex(openIndex === index ? null : index); 
  };


  return (
    <>

      {/* الفحص الشامل */}
      <section>
        <div className="w-10/12 mx-auto my-10 py-10 ">
          <div className=" flex items-center justify-between p-3">
            <h5>الفحص الشامل</h5>
            <img src={reportimg} alt="" />
          </div>
          <div className=" flex items-center  p-3  gap-10 ">
            <h3>نوع السياره</h3>
            <h4 className='flex items-center gap-3'>BMW ES300H 2016 <img src={reportimg1} alt="" /> </h4>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 text-white">
            {/* First Section */}
            <div className="flex items-center justify-around">
              <div>
                <h4 className="text-[#98989A]">رقم التقرير</h4>
                <p className="font-bold">25082054</p>
              </div>
              <div>
                <h4 className="text-[#98989A]">رقم الشاصي</h4>
                <p className="font-bold">LexusEsDemoReport</p>
              </div>
            </div>

            {/* Second Section */}
            <div className="flex items-center justify-between px-5 py-3">
              <div className="border-r-2 border-white px-5">
                <h4 className="text-[#98989A]">النتيجة النهائية</h4>
                <p className="text-[#FF8F4E] font-bold">A+</p>
              </div>
              <div className="border-l-2 border-r-2 border-white px-5">
                <h4 className="text-[#98989A]">المجموع</h4>
                <p className="font-bold">82%</p>
              </div>
              <div className="border-l-2 border-white px-5">
                <h4 className="text-[#98989A]">القيمة السوقية</h4>
                <p className="font-bold">N/A</p>
              </div>
            </div>

            {/* Third Section */}
            <div className="flex justify-between items-center gap-5">
              <img
                src={reportimg2}
                alt="Car 1"
                className="rounded-lg w-full object-cover max-w-[100px] lg:max-w-[200px]"
              />
              <img
                src={reportimg3}
                alt="Car 2"
                className="rounded-lg w-full object-cover max-w-[100px] lg:max-w-[200px]"
              />
              <img
                src={reportimg4}
                alt="Car 3"
                className="rounded-lg w-full object-cover max-w-[100px] lg:max-w-[200px]"
              />
            </div>
          </div>

        </div>
      </section>

      {/*معلومات التقرير*/}
      <section>
        <div className="container w-10/12 mx-auto my-3 py-4 ">
          <h3 className='text-[#98989A] font-bold text-base' >معلومات التقرير</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
            <div className="col ">
              <table className="w-full border-collapse border border-gray-600 text-center my-8">
                <tbody>
                  <tr className="border-b border-gray-600">
                    <td className="p-3 text-gray-400">التاريخ</td>
                    <td className="p-3 font-bold">Aug 25, 2020</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="p-3 text-gray-400">نوع الفحص</td>
                    <td className="p-3 font-bold">الفحص الشامل</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col ">
              <table className="w-full border-collapse border border-gray-600 text-center my-8">
                <tbody>
                  <tr className="border-b border-gray-600">
                    <td className="p-3 text-gray-400">رقم التقرير</td>
                    <td className="p-3 font-bold">25082054</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="p-3 text-gray-400">فرع الفحص</td>
                    <td className="p-3 font-bold">البادار</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/*معلومات المركبة*/}
      <section>
        <div className="container w-10/12 mx-auto my-3 py-4 ">
          <h3 className='text-[#98989A] font-bold text-base' >معلومات المركبة</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
            <div className="col ">
              <table className="w-full border-collapse border border-gray-600 text-center my-8">
                <tbody>

                  <tr className="border-b border-gray-600">
                    <td className="p-3 text-gray-400">النوع</td>
                    <td className="p-3 font-bold">Lexus</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="p-3 text-gray-400">سنة الصنع</td>
                    <td className="p-3 font-bold">2016</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="p-3 text-gray-400">العداد الحالي</td>
                    <td className="p-3 font-bold">105784 KM</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="p-3 text-gray-400">لون السيارة</td>
                    <td className="p-3 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-blue-500 border border-gray-200 mr-2"></div>
                      <span className="font-bold">أزرق</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col ">
              <table className="w-full border-collapse border border-gray-600 text-center my-8">
                <tbody>

                  <tr className="border-b border-gray-600">
                    <td className="p-3 text-gray-400">الموديل</td>
                    <td className="p-3 font-bold">ES300H</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="p-3 text-gray-400">سعة المحرك</td>
                    <td className="p-3 font-bold">2500</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="p-3 text-gray-400">رقم اللوحة</td>
                    <td className="p-3 font-bold">000000</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="p-3 text-gray-400">نوع المحرك</td>
                    <td className="p-3 font-bold">Hybrid</td>

                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* الإضافات */}
      <section>
        <div className="container w-10/12 mx-auto my-3 py-4">
          <h3 className="text-[#98989A] font-bold text-base">الإضافات</h3>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="flex items-center gap-2 border border-white rounded-lg px-2 py-2 w-auto">
              <img src={addition1} alt="" className="w-6 h-6" />
              <h5>كراسي كهربائية</h5>
            </span>
            <span className="flex items-center gap-2 border border-white rounded-lg px-2 py-2 w-auto">
              <img src={addition2} alt="" className="w-6 h-6" />
              <h5>كراسي جلد</h5>
            </span>
            <span className="flex items-center gap-2 border border-white rounded-lg px-2 py-2 w-auto">
              <img src={addition3} alt="" className="w-6 h-6" />
              <h5>شاشة أمامية</h5>
            </span>
            <span className="flex items-center gap-2 border border-white rounded-lg px-2 py-2 w-auto">
              <img src={addition4} alt="" className="w-6 h-6" />
              <h5>نظام الرادار \ مانع تصادم</h5>
            </span>
            <span className="flex items-center gap-2 border border-white rounded-lg px-2 py-2 w-auto">
              <img src={addition5} alt="" className="w-6 h-6" />
              <h5>تشغيل الضوء العالي</h5>
            </span>
            <span className="flex items-center gap-2 border border-white rounded-lg px-2 py-2 w-auto">
              <img src={addition6} alt="" className="w-6 h-6" />
              <h5>حساسات ضغط الإطارات</h5>
            </span>
            <span className="flex items-center gap-2 border border-white rounded-lg px-2 py-2 w-auto">
              <img src={addition7} alt="" className="w-6 h-6" />
              <h5>الدخول بدون مفتاح (بصمة)</h5>
            </span>
            <span className="flex items-center gap-2 border border-white rounded-lg px-2 py-2 w-auto">
              <img src={addition8} alt="" className="w-6 h-6" />
              <h5>تتبع المسار</h5>
            </span>
            <span className="flex items-center gap-2 border border-white rounded-lg px-2 py-2 w-auto">
              <img src={addition9} alt="" className="w-6 h-6" />
              <h5>النقطة العمياء</h5>
            </span>
            <span className="flex items-center gap-2 border border-white rounded-lg px-2 py-2 w-auto">
              <img src={addition10} alt="" className="w-6 h-6" />
              <h5>أضواء زينون</h5>
            </span>
            <span className="flex items-center gap-2 border border-white rounded-lg px-2 py-2 w-auto">
              <img src={addition11} alt="" className="w-6 h-6" />
              <h5>أضوية LED</h5>
            </span>
            <span className="flex items-center gap-2 border border-white rounded-lg px-2 py-2 w-auto">
              <img src={addition4} alt="" className="w-6 h-6" />
              <h5>حساسات اصطفاف</h5>
            </span>
            <span className="flex items-center gap-2 border border-white rounded-lg px-2 py-2 w-auto">
              <img src={addition12} alt="" className="w-6 h-6" />
              <h5>كاميرا خلفية</h5>
            </span>
            <span className="flex items-center gap-2 border border-white rounded-lg px-2 py-2 w-auto">
              <img src={addition13} alt="" className="w-6 h-6" />
              <h5>فتحة سقف</h5>
            </span>
          </div>
        </div>
      </section>

      {/* أنظمة الفحص */}
      <section className=" bg-black text-white  ">
        <div className="container w-10/12 mx-auto px-7 ">
          <h3 className="text-gray-400 mb-3 text-right">أنظمة الفحص</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {/* right column */}
            <div className="space-y-2">
              <div className="flex items-center justify-between border border-gray-600 p-2 rounded">
                <div className="flex items-center gap-2">
                  <img src={system1} alt="Check" className="w-5 h-5" />
                  <span>الهكيل الخارجي</span>
                </div>
                <img src={system13} alt="Exterior Icon" className="w-5 h-5" />
              </div>

              <div className="flex items-center justify-between border border-gray-600 p-2 rounded">
                <div className="flex items-center gap-2">
                  <img src={system2} alt="Check" className="w-5 h-5" />
                  <span>المحرك وناقل الحركة</span>
                </div>
                <img src={system13} alt="Engine Icon" className="w-5 h-5" />
              </div>

              <div className="flex items-center justify-between border border-gray-600 p-2 rounded">
                <div className="flex items-center gap-2">
                  <img src={system3} alt="Check" className="w-5 h-5" />
                  <span>المجموعة الكهربائية</span>
                </div>
                <img src={system13} alt="Electric Icon" className="w-5 h-5" />
              </div>

              <div className="flex items-center justify-between border border-gray-600 p-2 rounded">
                <div className="flex items-center gap-2">
                  <img src={system4} alt="Check" className="w-5 h-5" />
                  <span>المكابح والسلامة</span>
                </div>
                <img src={system13} alt="Brake Icon" className="w-5 h-5" />
              </div>

              <div className="flex items-center justify-between border border-gray-600 p-2 rounded">
                <div className="flex items-center gap-2">
                  <img src={system5} alt="Bosch" className="w-5 h-5" />
                  <span>فحص Bosch السلامة</span>
                </div>
                {/* <img src=" " alt="Bosch Icon" className="w-5 h-5" /> */}
              </div>

              <div className="flex items-center justify-between border border-gray-600 p-2 rounded">
                <div className="flex items-center gap-2">
                  <img src={system6} alt="Photos Icon" className="w-5 h-5" />
                  <span>صور الفحص</span>
                </div>
                <div>
                  <span className="text-orange-400">19</span>
                </div>
              </div>

            </div>
            {/* left column */}
            <div className="space-y-2">
              <div className="flex items-center justify-between border border-gray-600 p-2 rounded">
                <div className="flex items-center gap-2">
                  <img src={system7} alt="Alert" className="w-5 h-5" />
                  <span>الشاسي والهكيل</span>
                </div>
                <img src={system14} alt="Steering Icon" className="w-5 h-5" />
              </div>

              <div className="flex items-center justify-between border border-gray-600 p-2 rounded">
                <div className="flex items-center gap-2">
                  <img src={system8} alt="Check" className="w-5 h-5" />
                  <span>نظام التوجيه</span>
                </div>
                <img src={system13} alt="Steering Icon" className="w-5 h-5" />
              </div>

              <div className="flex items-center justify-between border border-gray-600 p-2 rounded">
                <div className="flex items-center gap-2">
                  <img src={system9} alt="Check" className="w-5 h-5" />
                  <span>نظام التكييف</span>
                </div>
                <img src={system13} alt="AC Icon" className="w-5 h-5" />
              </div>

              <div className="flex items-center justify-between border border-gray-600 p-2 rounded">
                <div className="flex items-center gap-2">
                  <img src={system10} alt="Check" className="w-5 h-5" />
                  <span>التاريخ والسجلات</span>
                </div>
                {/* <img src="records_icon.png" alt="Records Icon" className="w-5 h-5" /> */}
              </div>

              <div className="flex items-center justify-between border border-gray-600 p-2 rounded">
                <div className="flex items-center gap-2">
                  <img src={system11} alt="Check" className="w-5 h-5" />
                  <span>فحص الطريق</span>
                </div>
                <img src={system13} alt="Road Icon" className="w-5 h-5" />
              </div>

              <div className="flex items-center justify-between border border-gray-600 p-2 rounded">
                <div className="flex items-center gap-2">
                  <img src={system12} alt="Check" className="w-5 h-5" />
                  <span>جميع الملاحظات</span>
                </div>
                {/* <img src="notes_icon.png" alt="Notes Icon" className="w-5 h-5" /> */}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/*  */}

      <section className="bg-black w-10/12 mx-auto text-white">
      <div className="container mx-auto my-10">
        <div className="grid grid-rows-1 gap-4">
          {reports.map((report, index) => (
            <div key={index}>
              {/* Main clickable div */}
              <div
                className="flex items-center justify-between border border-gray-600 p-3 rounded-lg cursor-pointer"
                onClick={() => toggleList(index)}
              >
                <div className="flex items-center gap-2">
                  {openIndex === index ? (
                    <RiArrowUpSLine className="text-2xl text-gray-600" />
                  ) : (
                    <RiArrowDownSLine className="text-2xl text-gray-600" />
                  )}
                  <span>{report.title}</span>
                </div>
                {/* Dynamic image */}
                <img src={report.image} alt="Report Icon" className="w-5 h-5" />
              </div>

              {/* List that appears when openIndex matches current index */}
              {openIndex === index && (
                <ul className="mt-2 bg-[#ff8f4e33] text-gray-200 border border-gray-400 rounded-lg p-3">
                  {report.items.map((item, i) => (
                    <li key={i} className="py-1">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Report