"use client"


export default function SizeOptions({sizes = [], selectSize, selected} : {sizes?: string[], selectSize: (data: string) => void, selected: string}){
    return (
        <div className="flex gap-3">
            {sizes.map((option: string) => (
                <label key={option} htmlFor={option} className={`w-8 h-8 rounded-lg flex justify-center items-center border border-gray-900 ${selected == option ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
                    <input 
                        type="radio" 
                        id={option}
                        value={option}
                        hidden={true}
                        checked={selected == option}
                        onChange={(e) => selectSize(e.target.value)}
                    />
                    <p>{option}</p>
                </label>
            ))}
        </div>
    )
}