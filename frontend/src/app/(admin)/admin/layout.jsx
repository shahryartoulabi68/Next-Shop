import vazirFont from "@/constants/localfont"
import "../../styles/globals.css"
import { Toaster } from "react-hot-toast"
import ReactQueryProvider from "@/provaider/ReactQueryProvider"
import AdminSidBar from "./adminSidBar"
import AdminHeader from "./AdminHeader"

export const metadata = {
    title: 'پنل ادمین',
    description: 'پنل ادمین',
}
export default function Rootlayout({ children }) {
    return (
        <html lang="fa" dir="rtl">
            <body
                suppressHydrationWarning={true}
                className={`${vazirFont.variable} font-sans min-h-screen `}>
                <ReactQueryProvider>
                    <Toaster />
                    <div className="grid grid-cols-12 grid-rows-[50_1fr] md:grid-rows-none h-screen">
                        <div className="col-span-12 md:hidden  "><AdminHeader /></div>
                        <div className="hidden md:block bg-secondary-100 md:col-span-2 overflow-y-auto px-2 py-4"><AdminSidBar /></div>
                        <div className="overflow-y-auto col-span-12 bg-secondary-50 md:col-span-10 p-4 ">{children}</div>
                    </div>
                </ReactQueryProvider>
            </body>
        </html>
    )
}
