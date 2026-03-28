import { MessageCircleWarning } from "lucide-react"
import { Zalando_Sans } from "next/font/google"

const zalando = Zalando_Sans({
    display: "swap"
})

export default function Page(){
    return (
        <div className={`text-black top-0 bottom-0 flex-col left-0 right-0 bg-white z-9999 absolute ${zalando.className} flex justify-center items-center gap-3 text-xl`}>
            <MessageCircleWarning width={50} height={50} className="text-yellow-500"/>
            <p>Halaman untuk perangkan Desktop atau Tablet belum tersedia</p>
            <p>Gunakan perangkat mobile</p>
        </div>
    )
}