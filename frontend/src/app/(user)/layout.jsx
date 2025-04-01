import vazirFont from "@/constants/localfont"
import "../styles/globals.css"
import ReactQueryProvider from "@/provaider/ReactQueryProvider"
import { Toaster } from "react-hot-toast"
import Header from "../Header"
import About from "./_components/about"

export const metadata = {
    title: 'shop',
    description:"فروشگاه پارسا"
    
}
export default function rootlayout({ children }) {



    return (
        <html lang="fa" dir="rtl">
            <body className={`${vazirFont.variable} font-sans min-h-screen`}>
                <ReactQueryProvider>
                    <Toaster />
                    <Header />
                    <div className="container xl:max-w-screen-xl">
                        {children}
                        <div className=" bg-secondary-200">
                            <About />
                        </div>
                    </div>
                </ReactQueryProvider>
            </body>
        </html>
    )
}


