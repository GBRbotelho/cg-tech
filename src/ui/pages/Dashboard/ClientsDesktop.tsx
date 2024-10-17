import React from "react";
import Image from "next/image";
import portal4 from "@/public/imgs/Home/portal4.webp";

function ClientsDesktop() {
  return (
    <main className=" hidden flex-col w-screen lg:flex ml-[75px] pt-[40px]">
      <div className="flex bg-[#24242f] w-full h-[250px] text-white">
        <Image className="py-8 px-12" src={portal4} alt="Portal 1" />
        <div className="pt-8 w-full">
          <h1 className="text-[25px] font-[700]">Primeiros passos na CGTECH</h1>
          <p className="text-[17px] max-w-[50%] pt-2">Curso preparatório para você que acabou de chegar na cgtech e precisa saber como funciona, fique tranquilo é tudo bem simples.</p>
        </div>
      </div>
      <div className="w-[60%] pl-8 pt-8 mb-12">
        <p className="text-[17px]">
          Nas margens tranquilas do rio, onde os salgueiros se curvavam graciosamente em direção à água, o tempo parecia desacelerar. O sol poente pintava o céu com uma paleta de cores vibrantes, refletindo sua beleza nas águas serenas. As aves cantavam em harmonia enquanto voavam em círculos acima, e o suave farfalhar das folhas completava a sinfonia da natureza.<br />
          À medida que o crepúsculo avançava, uma aura mágica envolvia o cenário. As sombras alongavam-se lentamente, criando silhuetas suaves e evocativas na paisagem. O ar estava impregnado com o aroma fresco da terra molhada pela chuva recente, enquanto os últimos raios de sol tingiam as nuvens com tons de laranja e rosa.<br />
          Neste momento de quietude, a mente vagava livremente, perdendo-se em pensamentos e memórias. Era como se o tempo se desfizesse em uma tapeçaria de momentos, cada um mais precioso que o anterior. Ali, no crepúsculo dourado, a vida parecia suspensa, imersa em uma eternidade fugaz de serenidade e encanto.<br />
          Nas margens tranquilas do rio, onde os salgueiros se curvavam graciosamente em direção à água, o tempo parecia desacelerar. O sol poente pintava o céu com uma paleta de cores vibrantes, refletindo sua beleza nas águas serenas. As aves cantavam em harmonia enquanto voavam em círculos acima, e o suave farfalhar das folhas completava a sinfonia da natureza.<br />
          À medida que o crepúsculo avançava, uma aura mágica envolvia o cenário. As sombras alongavam-se lentamente, criando silhuetas suaves e evocativas na paisagem. O ar estava impregnado com o aroma fresco da terra molhada pela chuva recente, enquanto os últimos raios de sol tingiam as nuvens com tons de laranja e rosa.<br />
          Neste momento de quietude, a mente vagava livremente, perdendo-se em pensamentos e memórias. Era como se o tempo se desfizesse em uma tapeçaria de momentos, cada um mais precioso que o anterior.
        </p>
      </div>
    </main>
  );
}

export default ClientsDesktop;
