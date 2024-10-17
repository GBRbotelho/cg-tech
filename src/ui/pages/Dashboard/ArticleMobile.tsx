import React, { useState } from "react";
import Image from "next/image";
import portal4 from "@/public/imgs/Home/portal4.webp";
import { ChevronUp, ChevronDown, Play } from 'lucide-react'; 

function ArticleDesktop() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <main className=" flex-col w-screen lg:hidden ml-[75px] pt-[40px]">
            <div className="flex bg-[#24242f] w-full h-[550px] md:h-[250px] text-white flex-col justify-center md:flex-row pt-6">
                <Image className="md:px-8 py-6 mx-auto w-[320px]" src={portal4} alt="Portal 1" />
                <div className="pt-6 w-full md:px-0 px-8">
                    <h1 className="text-[25px] font-[700]">Primeiros passos na CGTECH</h1>
                    <p className="text-[17px] md:max-w-[60%] pt-2">Curso preparatório para você que acabou de chegar na cgtech e precisa saber como funciona, fique tranquilo é tudo bem simples.</p>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="border-2 border-blue-700 w-[95%] mt-12 mb-6">
                    <div
                        className="bg-[#e1e1e1] border-blue-700 h-[50px] w-[100%] flex items-center cursor-pointer"
                        onClick={toggleOpen}
                    >
                        {isOpen ? (
                            <ChevronDown className="ml-4 w-8 h-8" />
                        ) : (
                            <ChevronUp className="ml-4 w-8 h-8" />
                        )}
                        <span className="ml-2">Uniforme</span>
                    </div>
                    {isOpen && (
                        <div className="p-4 h-[300px] border-t-2 border-blue-700">
                            <ul className="space-y-4 text-[17px] pt-2">
                                <li className="flex items-center">
                                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-green-500">
                                        <a href="/dashboard/clients" className="text-white cursor-pointer">
                                            <Play className="h-5 w-5" />
                                        </a>
                                    </div>
                                    <span className="flex-1 pl-2">Onde retirar o uniforme</span>
                                    <span>10m</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-green-500">
                                        <a href="/dashboard/clients" className="text-white cursor-pointer">
                                            <Play className="h-5 w-5" />
                                        </a>
                                    </div>
                                    <span className="flex-1 pl-2">Onde retirar o uniforme</span>
                                    <span>10m</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-green-500">
                                        <a href="/dashboard/clients" className="text-white cursor-pointer">
                                            <Play className="h-5 w-5" />
                                        </a>
                                    </div>
                                    <span className="flex-1 pl-2">Onde retirar o uniforme</span>
                                    <span>10m</span>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}


export default ArticleDesktop;
