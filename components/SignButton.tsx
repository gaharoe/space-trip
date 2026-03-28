export default function SignButton({width}: {width?: number}){
    return (
        <div className={`flex w-full gap-3`}>
            <button className="rounded-lg font-bold  flex-1 h-10 border-black border">Daftar</button>
            <button className="rounded-lg font-bold bg-black text-white flex-1 h-10">Login</button>
        </div>
    )
}