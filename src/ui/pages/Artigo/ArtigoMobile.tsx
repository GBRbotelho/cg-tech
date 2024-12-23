/* eslint-disable react/no-unescaped-entities */

import React from "react";
import Image from "next/image";
import sobre from "@/public/imgs/Home/sobre.webp";
import portal1 from "@/public/imgs/Home/portal1.webp";
import portal2 from "@/public/imgs/Home/portal2.webp";
import portal4 from "@/public/imgs/Home/portal4.webp";

function ArtigoMobile() {
  return (
    <main className="bg-[#f5f5f5] flex flex-col items-center w-screen lg:hidden">
      <section className="bg-[#003070] w-screen text-center text-white h-auto bg-cover bg-center flex flex-col items-center pt-16 md:min-h-[800px]">
        <div className="container px-4 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex justify-center">
              <div className="h-[300px] w-[500px]">
                <Image
                  src={sobre}
                  alt="Video"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="text-left">
              <h1 className="font-[700] leading-[55px] m-0 pt-12 pb-6 text-[45px] flex items-center">
                Titulo do primeiro artigo
              </h1>
              <p className="m-0 p-0 text-[20px] flex justify-center">
                Só tenho que elogiar as pessoas que trabalham no nosso
                condominio , pessoas educadas e que trabalham para a melhoria do
                nosdo ambiente. Parabéns a vcs .
              </p>
              <button className="font-[800] text-[#1e3a8a] text-[25px] bg-[#ffffff] mt-12 w-fit px-10 py-1 rounded-[5px] mb-4">
                Ler mais
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white min-h-[600px] max-h-[700px] w-[100%]">
        <div className="flex flex-col-reverse mb-4 w-[100%] min-h-[700px]">
          <div className="w-full bg-white">
            <h1
              className="font-black text-[#14168f] pt-12 text-[35px] ml-4"
              data-aos="zoom-in-up"
            >
              Veja também
            </h1>
            <div className="p-5 flex" data-aos="zoom-in-up">
              <div className="h-[125px] w-[200px]">
                <Image
                  src={portal1}
                  alt="Video"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="font-[800] text-[#14168f] mb-2 text-[20px] ml-4">
                  Titulo do primeiro artigo
                </h1>
                <button className="font-[800] text-[#14168f] text-[15px] border-2 border-blue-900 bg-[#ffffff] mt-5 w-fit px-5 ml-4">
                  Ler mais
                </button>
              </div>
            </div>

            <div className="p-5 flex" data-aos="zoom-in-up">
              <div className="h-[125px] w-[200px]">
                <Image
                  src={portal2}
                  alt="Video"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="font-[800] text-[#14168f] mb-2 text-[20px] ml-4">
                  Titulo do primeiro artigo
                </h1>
                <button className="font-[800] text-[#14168f] text-[15px] border-2 border-blue-900 bg-[#ffffff] mt-5 w-fit px-5 ml-4">
                  Ler mais
                </button>
              </div>
            </div>

            <div className="p-5 flex" data-aos="zoom-in-up">
              <div className="h-[125px] w-[200px]">
                <Image
                  src={portal4}
                  alt="Video"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="font-[800] text-[#14168f] mb-2 text-[20px] ml-4">
                  Titulo do primeiro artigo
                </h1>
                <button className="font-[800] text-[#14168f] text-[15px] border-2 border-blue-900 bg-[#ffffff] mt-5 w-fit px-5 ml-4">
                  Ler mais
                </button>
              </div>
            </div>
          </div>
          <div className="w-full">
            <p className="text-[18px] p-5" data-aos="zoom-in-up">
              O vento soprava suavemente através das árvores, fazendo as folhas
              dançarem em um ritmo hipnótico. O sol da tarde lançava seus raios
              dourados sobre o campo, criando um cenário de paz e serenidade. No
              centro do campo, uma pequena casa de pedra se erguia, suas paredes
              cobertas de hera e seu telhado vermelho brilhando à luz do sol.
              <br />
              Dentro da casa, Maria estava sentada em sua cadeira de balanço,
              costurando um bordado intrincado. Ela gostava da tranquilidade
              daquele lugar, onde podia ouvir o canto dos pássaros e o murmúrio
              distante de um riacho. Seu gato, Felipe, dormia aos seus pés,
              ronronando suavemente. De repente, o som de passos na varanda fez
              Maria levantar a cabeça. Ela olhou pela janela e viu uma figura
              familiar se aproximando. Era João, seu velho amigo de infância.
              Ele carregava uma cesta cheia de maçãs frescas e sorriu ao vê-la.
              "Bom dia, Maria!", disse ele, entrando na casa. "Trouxe algumas
              maçãs para você." "Obrigada, João!", respondeu Maria,
              levantando-se para abraçá-lo. "É sempre bom te ver. Sente-se, vou
              fazer um chá." Enquanto Maria preparava o chá, eles conversavam
              sobre os velhos tempos e as aventuras que viveram juntos. João
              contava histórias engraçadas sobre suas viagens e Maria ria com
              prazer. Era como se o tempo tivesse parado e eles fossem novamente
              crianças, correndo pelos campos e explorando o mundo ao seu redor.
              Quando o chá ficou pronto, eles se sentaram à mesa e continuaram a
              conversar, saboreando as maçãs frescas e o chá quente. A tarde
              passou rapidamente, e logo o sol começou a se pôr, pintando o céu
              com tons de rosa e laranja. Antes de partir, João prometeu voltar
              em breve, e Maria acenou enquanto ele se afastava pela trilha. Ela
              sabia que aqueles momentos de amizade e alegria eram preciosos e
              guardava cada um deles em seu coração. Com um suspiro contente,
              ela voltou para sua cadeira de balanço e continuou a costurar,
              sentindo-se grata por aquele dia e pelas pessoas queridas em sua
              vida. O vento continuava a soprar suavemente, e a noite caía
              tranquilamente sobre o campo, trazendo consigo a promessa de um
              novo amanhecer.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ArtigoMobile;
