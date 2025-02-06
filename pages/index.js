import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return(
    <div className="flex flex-col justify-center items-center text-2xl 
    text-white-500 h-screen font-mono font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
   bg-black">
    <div className="h-100 w-100 bg-purple-500 flex flex-col justify-center items-center rounded-2xl border-red-900 border-4 border-dotted text-red-100	color: rgb(254 226 226); shadow-slate-50	--tw-shadow-color: #f8fafc;">
    <Image className="border-emerald-900 border-4 rounded-2xl border-dashed" src="/naraa.jpg" height={50} width={250} border-image/>
    <div className="rounded-2xl border-yellow-600 color: rgb(202 138 4); border-4 border-dashed">
    <div>Name:Naran-Erdene</div>
    <div>Age:16</div>
    <div>School:Nest It</div>
    <div>Hobby:Sport</div></div> </div>
    </div>
  );
  
}
