"use client"
import Loarder from "@/components/Loarder/Loarder";
import { useEffect, useState } from "react";

export default function Notfound() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time (you can remove this in production)
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loarder />;
    }

    return (
        <div className='w-[full] h-[100vh] bg-[#1B7261] flex justify-center items-center'>
            <h4 className='text-[#FFFF] text-[35px] OpenSans-font'>404 Not Found</h4>
        </div>
    )
}