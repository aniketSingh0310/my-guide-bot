import Image from "next/image";
import Link from "next/link";

const NewNav = () => {
    return (
        <>
        <div className="drawer z-10">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar bg-base-100">
      <div className="flex-1 px-2 mx-2"><Image src="/newmgb.png" width={200} height={220} alt="logo"/></div>
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6" stroke="#42A5FF">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
</svg>

        </label>
      </div> 
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal font-semibold text-[20px]">
          {/* Navbar menu content here */}
          <li><Link href={"/"} className="text-black/75 hover:bg-[#42A5FF] hover:text-white ">Home</Link></li>
          <li><Link href={"/static/about"} className="text-black/75 hover:bg-[#42A5FF] hover:text-white">About Us</Link></li>
        </ul>
      </div>
    </div>
    {/* Page content here */}
    Content
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200">
      {/* Sidebar content here */}
      <li><Link href={"/"} className="text-black/75">Home</Link></li>
      <li><Link href={"/static/about"} className="text-black/75">About Us</Link></li>
    </ul>
  </div>
</div>
        </>
      );
}
 
export default NewNav;