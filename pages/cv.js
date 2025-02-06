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

export default function CV() {
  return(
    <div className="flex items-center justify-center h-screen w-screen bg-rose-500 color:#f43f5e">
        <div className="h-4/5 w-4/5 bg-orange-50 color:#fff7ed">
            <div className="h-10 w-full border-b-4 border-black bg-green-200	background-color: rgb(187 247 208);">
                <div className="my-6 flex flex-direction: row; grid justify-items-stretch ">
                    <div className="flex flex-direction: row; flex space-x-2 w-20">
                    <div className="h-6 w-5 rounded-2xl bg-orange-500 background-color:#f97316 border-2 border-black border-color: rgb(0 0 0);"></div>
                    <div className="h-5 w-5 rounded-2xl bg-red-500 background-color:#ef4444 border-2 border-black border-color: rgb(0 0 0);"></div>
                    <div className="h-5 w-5 rounded-2xl bg-green-700 background-color:#15803d border-2 border-black border-color: rgb(0 0 0);"></div>
                    </div>
                    <div className="justify-self-end mr-10 text-slate-900	color: rgb(15 23 42); font-mono	font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;">Curriculum Vitae</div>
                </div>
            </div>
            <div></div>
        </div>
    </div>
  );
  
}
