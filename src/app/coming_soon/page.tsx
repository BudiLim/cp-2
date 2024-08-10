import Link from "next/link";

export default function CommingSoon () {
    return (
    <div className="text-center pt-6">
        <h1 className=" font-bold text-3xl">Coming Soon 😅</h1>    
        <button className="mt-10 bg-[#213021] px-5 text-2xl pt-2 pb-2 rounded-md bg-opacity-50 text-white">
        <Link href="/product">Back</Link>
        </button>
    </div>
    )
}