import React from 'react';
import Image from 'next/image';
import sobre from "@/public/imgs/Home/sobre.webp";
import portal1 from "@/public/imgs/Home/portal1.webp";
import portal2 from "@/public/imgs/Home/portal2.webp";
import portal3 from "@/public/imgs/Home/portal3.webp";
import portal4 from "@/public/imgs/Home/portal4.webp";
import { ChevronDown } from 'lucide-react';

function Portal() {
    return (
        <main className="bg-[#ffffff] hidden flex-col items-center w-screen lg:flex">
            <section className="bg-[#050642] w-screen text-center text-white h-[48vw] min-h-[800px] max-h-[700px] bg-cover bg-center flex flex-col items-center pt-60">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="">
                            <div className="">
                                <Image
                                    src={sobre}
                                    alt="Video"
                                    style={{ width: "100%", height: "auto", overflow: "hidden" }}
                                />
                            </div>
                        </div>
                        <div className="text-left">
                            <h1 className="font-[700] leading-[55px] m-0 pt-12 pb-6 text-[45px]">Titulo do primeiro artigo</h1>
                            <p className="m-0 p-0 text-[20px] max-w-[500px]">
                                Só tenho que elogiar as pessoas que trabalham no nosso condominio , pessoas educadas e que trabalham para a melhoria do nosdo ambiente. Parabéns a vcs .
                            </p>
                            <a
                                href="https://wa.me/5519974017905?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
                                target="_blank"
                            >
                                <button className="font-[800] text-[#1e3a8a] text-[25px] bg-[#ffffff] mt-12 w-fit px-10 py-1 rounded-[5px]">
                                    Ler mais
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white-700 min-h-[700px] w-[100%] flex flex-col items-start">
                <div className="ml-12 p-10 pb-2">
                    <div className="flex justify-between mb-4" data-aos="zoom-in-up">
                        <h2 className="font-[900] text-[#14168f] text-[30px] pb-4">Ultimas noticias</h2>
                    </div>
                </div>

                <div className="ml-12 p-10 flex gap-6" data-aos="zoom-in-up">
                    <div className="h-[250px] w-[380px] flex items-center justify-center">
                        <Image
                            src={portal4}
                            alt="Video"
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="font-[800] text-[#14168f] leading-[55px] mb-2 text-[30px]">
                            Titulo do primeiro artigo
                        </h1>
                        <p className="m-0 p-0 text-[18px] max-w-[500px]">
                            Só tenho que elogiar as pessoas que trabalham no nosso condomínio, pessoas educadas e que trabalham para a melhoria do nosso ambiente. Parabéns a vocês.
                        </p>
                        <button className="font-[800] text-[#ffffff] text-[18px] bg-[#14168f] mt-5 w-fit px-10 py-1 rounded-[5px]">
                            Ler mais
                        </button>
                    </div>
                </div>

                <div className="ml-12 p-10 flex gap-6" data-aos="zoom-in-up">
                    <div className="h-[250px] w-[380px] flex items-center justify-center">
                        <Image
                            src={portal3}
                            alt="Video"
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="font-[800] text-[#14168f] leading-[55px] mb-2 text-[30px]">
                            Titulo do primeiro artigo
                        </h1>
                        <p className="m-0 p-0 text-[18px] max-w-[500px]">
                            Só tenho que elogiar as pessoas que trabalham no nosso condomínio, pessoas educadas e que trabalham para a melhoria do nosso ambiente. Parabéns a vocês.
                        </p>
                        <button className="font-[800] text-[#ffffff] text-[18px] bg-[#14168f] mt-5 w-fit px-10 py-1 rounded-[5px]">
                            Ler mais
                        </button>
                    </div>
                </div>

                <div className="ml-12 p-10 flex gap-6" data-aos="zoom-in-up">
                    <div className="h-[250px] w-[380px] flex items-center justify-center">
                        <Image
                            src={portal2}
                            alt="Video"
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="font-[800] text-[#14168f] leading-[55px] mb-2 text-[30px]">
                            Titulo do primeiro artigo
                        </h1>
                        <p className="m-0 p-0 text-[18px] max-w-[500px]">
                            Só tenho que elogiar as pessoas que trabalham no nosso condomínio, pessoas educadas e que trabalham para a melhoria do nosso ambiente. Parabéns a vocês.
                        </p>
                        <button className="font-[800] text-[#ffffff] text-[18px] bg-[#14168f] mt-5 w-fit px-10 py-1 rounded-[5px]">
                            Ler mais
                        </button>
                    </div>
                </div>

                <div className="ml-12 p-10 flex gap-6" data-aos="zoom-in-up">
                    <div className="h-[250px] w-[380px] flex items-center justify-center">
                        <Image
                            src={portal1}
                            alt="Video"
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="font-[800] text-[#14168f] leading-[55px] mb-2 text-[30px]">
                            Titulo do primeiro artigo
                        </h1>
                        <p className="m-0 p-0 text-[18px] max-w-[500px]">
                            Só tenho que elogiar as pessoas que trabalham no nosso condomínio, pessoas educadas e que trabalham para a melhoria do nosso ambiente. Parabéns a vocês.
                        </p>
                        <button className="font-[800] text-[#ffffff] text-[18px] bg-[#14168f] mt-5 w-fit px-10 py-1 rounded-[5px]">
                            Ler mais
                        </button>
                    </div>
                </div>

                <div className="flex items-end justify-end absolute right-0 mt-12 mr-12 space-x-4 text-[18px]" data-aos="zoom-in-up">
                    <div className="flex items-end px-4 py-2 cursor-pointer">
                        Ordenar por
                        <ChevronDown size={25} strokeWidth={5} className="ml-5" />
                    </div>
                    <div className="flex items-end px-4 py-2 cursor-pointer">
                        Categorias
                        <ChevronDown size={25} strokeWidth={5} className="ml-5" />
                    </div>
                </div>
            </section>
        </main>

        
    );
}

export default Portal;
