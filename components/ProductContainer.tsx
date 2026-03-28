import { Shirt } from "lucide-react";

export default function ProductContainer({children, category} : {children: React.ReactNode, category?: string}) {
    return (
        <div className="px-5 pt-5 text-black box-border">
            <p className="text-2xl font-bold">{category || "Other Products"}</p>
            <p className="mb-3 text-xs text-black/50">Tentukan style terbaikmu</p>
            <div className="flex pb-5 gap-4 overflow-x-auto w-full">
                {children}
            </div>
        </div>
    )
}