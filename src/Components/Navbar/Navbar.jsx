import Accordion from "./Accordion"


function Navbar() {
  return (
    <div className="w-[100%] h-[100vh]">
      <div className="nav w-[300px] h-[100vh] bg-slate-800">
        <div className="logo w-[300px] h-[100px] bg-[#1b50ff]">
          <h1 className="text-[#000] text-center pt-[30px] text-[#fff] text-[25px]">HEMIS Student</h1>
        </div>
        <div className="reja">
          <Accordion />
        </div>
      </div>
    </div>
  )
}

export default Navbar