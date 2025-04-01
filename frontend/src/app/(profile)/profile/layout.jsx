import vazirFont from "@/constants/localfont"
import "../../styles/globals.css"
import { Toaster } from "react-hot-toast"
import ReactQueryProvider from "@/provaider/ReactQueryProvider"
import SidBar from "./_components/SidBar"
import UserHeader from "./_components/userHeader"

export const metadata = {
    title: 'پروفایل کاربر ',
    description: 'پروفایل کاربر ',
}
export default function rootlayout({ children }) {



    return (
        <html lang="fa" dir="rtl">
            <body className={`${vazirFont.variable} font-sans min-h-screen `}>
                <ReactQueryProvider>
                    <Toaster />
                    <div className="grid grid-cols-12 grid-rows-[50_1fr] md:grid-rows-none h-screen">
                        <div className="col-span-12 md:hidden  "><UserHeader /></div>
                        <div className="hidden md:block bg-secondary-100 md:col-span-2 overflow-y-auto px-2 py-4"><SidBar /></div>
                        <div className="overflow-y-auto col-span-12 bg-secondary-50 md:col-span-10 p-4">{children}</div>
                    </div>
                </ReactQueryProvider>

            </body>
        </html>
    )
}