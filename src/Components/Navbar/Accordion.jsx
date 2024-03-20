import { useState } from "react"

function Accordion() {
    const [accordionOpen, setAccordionOpen]= useState(false)
  return (
    <div>
        <button className="flex justify-between w-[100%]  h-[50px] bg-slate-400 text-center pt-[10px]" onClick={() => setAccordionOpen(!accordionOpen)}>
            <span className="text-center ml-[15px] text-[20px]">O'quv rejasi</span>
            {accordionOpen ? <span><i className='bx bx-chevron-down bx-rotate-180'></i></span> : <span><i className='bx bx-chevron-down'></i></span>}
        </button>
        <div  className={`grid h-[auto] overflow-hidden transition-all duration-300 ease-in-out bg-slate-600 text-sm ${ accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden flex gap-5 w-[100%] h-[40px] ml-[15px] items-center">
                <input type="radio" name="dars" className="w-[18px] h-[18px]"/>
                <legend className="text-[18px]">O'quv rejasi</legend>
            </div>
            <div className="overflow-hidden flex gap-5 w-[100%] h-[40px] ml-[15px] items-center">
                <input type="radio" name="dars" className="w-[18px] h-[18px]"/>
                <legend className="text-[18px]">Dars jadvali</legend>
            </div>
            <div className="overflow-hidden flex gap-5 w-[100%] h-[40px] ml-[15px] items-center">
                <input type="radio" name="dars" className="w-[18px] h-[18px]"/>
                <legend className="text-[18px]">Nazorat jadvali</legend>
            </div>
            <div className="overflow-hidden flex gap-5 w-[100%] h-[40px] ml-[15px] items-center">
                <input type="radio" name="dars" className="w-[18px] h-[18px]"/>
                <legend className="text-[18px]">Fanlar resurslari</legend>
            </div>
            <div className="overflow-hidden flex gap-5 w-[100%] h-[40px] ml-[15px] items-center">
                <input type="radio" name="dars" className="w-[18px] h-[18px]"/>
                <legend className="text-[18px]">Davomat</legend>
            </div>
            <div className="overflow-hidden flex gap-5 w-[100%] h-[40px] ml-[15px] items-center">
                <input type="radio" name="dars" className="w-[18px] h-[18px]"/>
                <legend className="text-[18px]">O'zlashtirish</legend>
            </div>
            <div className="overflow-hidden flex gap-5 w-[100%] h-[40px] ml-[15px] items-center">
                <input type="radio" name="dars" className="w-[18px] h-[18px]"/>
                <legend className="text-[18px]">Imtihonlar</legend>
            </div>
            <div className="overflow-hidden flex gap-5 w-[100%] h-[40px] ml-[15px] items-center">
                <input type="radio" name="dars" className="w-[18px] h-[18px]"/>
                <legend className="text-[18px]">Reyting daftarcha</legend>
            </div>
            <div className="overflow-hidden flex gap-5 w-[100%] h-[40px] ml-[15px] items-center">
                <input type="radio" name="dars" className="w-[18px] h-[18px]"/>
                <legend className="text-[18px]">Fanlar tanlovi</legend>
            </div>
        </div>

        <div className={`text ${accordionOpen ? 'opacity-100' : 'mt-[-350px]'}`}>
    <div className="w-[100%] h-[40px] text-[#b1b1b1] text-[18px] pl-[10px] mt-[5px]">Qayta o'qish</div>
    <div className="w-[100%] h-[40px] text-[#b1b1b1] text-[18px] pl-[10px] mt-[5px]">Talaba ma'lumoti</div>
    <div className="w-[100%] h-[40px] text-[#b1b1b1] text-[18px] pl-[10px] mt-[5px]">Moliyaviy to'lov</div>
    <div className="w-[100%] h-[40px] text-[#b1b1b1] text-[18px] pl-[10px] mt-[5px]">Xabarlar</div>
    <div className="w-[100%] h-[40px] text-[#b1b1b1] text-[18px] pl-[10px] mt-[5px]">Tizim</div>
    <div className="w-[100%] h-[40px] text-[#b1b1b1] text-[18px] pl-[10px] mt-[5px]">Elektron kutubxona</div>
</div>

    </div>
  )
}

export default Accordion