import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <>
        <div className="navbar bg-base-100">
  <div className="flex-1">
    {/* <a className="btn btn-ghost normal-case text-xl text-black">daisyUI</a> */}
    <Image src="/newmgb.png" width={200} height={220} alt="logo"/>
  </div>
  <div className="flex-none md:pr-8">
    <ul className="menu menu-horizontal font-semibold text-[20px] px-1">
      <li><Link href={"/"} className="text-black/75 hover:bg-[#42A5FF] hover:text-white ">Home</Link></li>
      <li><Link href={"/static/about"} className="text-black/75 hover:bg-[#42A5FF] hover:text-white">About Us</Link></li>
    </ul>
  </div>
</div>
        </>
      );
}
 
export default Navbar;