import KakaoMap from "@/components/KakaoMap";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });


export default function Detail(){


    return(
        // List
        <main className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">

            {/* Card1 - Cake */}
            <Link
            href={`/`}
            passHref
            className="h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter bg-white"
            >
                <div className="h-72 border-b-2 border-palette-lighter relative">
                    {/* map */}
                    <KakaoMap/>
                </div>
                <div className="h-48 relative">
                <div className="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold">
                    딸기케이크
                </div>
                <div className="text-lg text-gray-600 p-4 font-primary font-light">
                    박효주
                    <p className="text-orange-600">
                    2024.02.24 토 오후 7:00
                    </p>
                </div>
                <div
                    className="text-palette-dark font-primary font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-1 pt-2 bg-palette-lighter 
                    rounded-tl-sm triangle"
                > <span>생케</span>
                </div>
                </div>
            </Link>

            {/* Card2 - Party */}
            <Link
            href={`/`}
            passHref
            className="h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter bg-white"
            >
                <div className="h-72 border-b-2 border-palette-lighter relative">
                    {/* map */}
                </div>
                <div className="h-48 relative">
                <div className="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold">
                    아구찜
                </div>
                <div className="text-lg text-gray-600 p-4 font-primary font-light">
                    예약 안함
                    <p className="text-orange-600">
                    2024.02.24 토 오후 8:30
                    </p>
                </div>
                <div
                    className="text-palette-dark font-primary font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-1 pt-2 bg-palette-lighter 
                    rounded-tl-sm triangle"
                > <span>생파</span>
                </div>
                </div>
            </Link>

        </main>
    )
}