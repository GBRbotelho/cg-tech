import React from "react";
import Image from "next/image";
import missao from "@/public/imgs/Home/sobre.webp";
import visao from "@/public/imgs/Sobre/carro.webp";
import valores from "@/public/imgs/Sobre/backgroundsobre.webp";
import homem from "@/public/imgs/Sobre/homem.webp";

function SobreDesktop() {
  return (
    <main className="bg-[#f0f7ff] hidden flex-col items-center w-screen lg:flex">
      <section className="w-screen bgSobre text-center text-white h-[45vw] min-h-[550px] max-h-[700px] bg-cover bg-center items-center justify-center flex">
        <div className="absolute w-screen h-[45vw] min-h-[550px] max-h-[700px] bg-black bg-opacity-80 top-0 left-0 z-10"></div>
        <div className="flex items-center flex-col gap-5 z-20 px-5">
          <h1 className="font-[800] leading-[55px] m-0 p-0 text-[40px]">
            Sobre a CGTECH
          </h1>
          <p className="2xl:text-[18px] text-[15px] max-w-[1400px] w-full m-0 p-0">
            Há 25 anos sendo referência no mercado de prestação de serviços para
            condomínios residenciais e empresariais, com mais de 400 condomínios
            atendidos por suas 5 sedes localizadas nas cidades de São José dos
            Campos, Campinas, Jundiaí, São Paulo, Grande ABC, Indaiatuba,
            Sorocaba, Alphaville e Faria Lima.
          </p>
          <p className="2xl:text-[18px] text-[15px] max-w-[1400px] w-full m-0 p-0">
            Para continuar atuando com excelência no segmento de segurança e
            vigilância patrimonial, o grupo CGTECH Security possui o registro na
            Polícia Federal, onde o cliente recebe um atendimento personalizado
            de acordo com sua necessidade, por uma equipe especializada em
            planejamento de segurança e análise de risco.
          </p>
          <p className="2xl:text-[18px] text-[15px] max-w-[1400px] m-0 p-0">
            Visando atuar de forma assertiva, a empresa tem como foco
            identificar as possíveis falhas ou vulnerabilidade na segurança
            propondo soluções para seus clientes.
          </p>
          <p className="2xl:text-[18px] text-[15px] max-w-[1400px] w-full m-0 p-0">
            Com o compromisso de cuidar e zelar por todos, o Grupo CGTECH
            Security dispõe de uma equipe treinada, equipada e muito bem
            preparada, profissionais credenciados armados ou desarmados e
            monitoramento de imagens de células de segurança, controle de
            acessos (pedestres, mercadorias e veículos) para a prevenção de
            crimes e vigilância ostensiva.
          </p>
        </div>
      </section>
      <section className="flex w-[80%] my-5 max-w-[1400px] justify-around">
        <div className="flex flex-col text-[#003f88] items-center justify-center">
          <h1 className="text-center text-[50px] p-0">100+</h1>
          <p className="text-center text-[22px] font-[300]  leading-6">
            Viaturas <br /> Pŕoprias
          </p>
        </div>
        <div className="flex flex-col text-[#003f88] items-center justify-start">
          <h1 className="text-center text-[50px] p-0">7+</h1>
          <p className="text-center text-[22px] font-[300]  leading-6">
            Sedes <br /> no Brasil
          </p>
        </div>
        <div className="flex flex-col text-[#003f88] items-center justify-start">
          <h1 className="text-center text-[50px] p-0">800+</h1>
          <p className="text-center text-[22px] font-[300] leading-6">
            Clientes
          </p>
        </div>
        <div className="flex flex-col text-[#003f88] items-center justify-start">
          <h1 className="text-center text-[50px] p-0">4 mil+</h1>
          <p className="text-center text-[22px] font-[300] leading-6">
            Funcionários{" "}
          </p>
        </div>
      </section>
      <section className="flex flex-col w-[80%] my-5 max-w-[1400px] text-[#003f88] justify-around">
        <h1 className="font-[800] text-[40px]">Um pouco da nossa historia</h1>
        <p className="text-[18px]">
          A CGTECH tem sido um pilar de segurança e confiança no mercado de
          segurança patrimonial e Facilities. Com um compromisso inabalável com
          a excelência e integridade, operamos continuamente com o mesmo CNPJ,
          todas as certidões negativas de débitos em dia, e uma trajetória de
          sucesso comprovada com foco apenas em Associações, condomínios
          residenciais, comerciais e industriais." "A nossa dedicação à melhoria
          contínua é impulsionada pela integração da tecnologia em todos os
          nossos processos. Realizamos auditorias rigorosas para garantir que
          nossos serviços não apenas atendam, mas superem as expectativas dos
          nossos clientes." "Estamos comprometidos com a sustentabilidade e
          responsabilidade social. Implementando os três pilares do ASG –
          Ambiental, Social e Governança – buscamos constantemente parcerias que
          agreguem valor e contribuam para um futuro melhor." "Na CGTECH,
          valorizamos as pessoas. Nossos clientes são a nossa prioridade, e
          trabalhamos incansavelmente para construir relacionamentos de
          confiança e parceria." 25 anos de inovação, confiança e segurança.
          Juntos, protegemos o seu futuro. CGTECH SECURITY – Segurança para o
          Patrimônio Tranquilidade para você.
        </p>
      </section>
      <section className="flex w-[80%] flex-col  my-5 max-w-[1400px] justify-around">
        <div className="bg-white h-[200px] flex items-start justify-between">
          <div className="flex flex-col text-[#003f88] px-10">
            <h1 className="font-[800] text-[40px]">Missão</h1>
            <p className="text-[16px]">
              Proporcionar aos nossos clientes um serviço diferenciado na área
              de segurança patrimonial e facílities, agregando tecnologia de
              ponta e gerando aos nossos clientes atendimento de alta qualidade
              e satisfação nos serviços realizados.
            </p>
          </div>
          <div className="relative w-[300px] min-w-[300px] bg-[#003f88] h-full">
            <Image
              src="/img/background.webp"
              fill
              alt="Video"
              style={{ height: "100%", overflow: "hidden" }}
            />
          </div>
        </div>
        <div className="bg-[#003f88] h-[200px] flex items-start justify-between">
          <div className="w-[300px] min-w-[300px] bg-[#ffffff] h-full">
            <Image
              src={visao}
              alt="Video"
              style={{ height: "100%", overflow: "hidden" }}
            />
          </div>
          <div className="flex flex-col items-end text-[#ffffff] px-10">
            <h1 className="font-[800] text-[40px]">Visão</h1>
            <p className="text-[16px] text-end">
              “Ser reconhecida no mercado como uma as maiores e melhores empresa
              no ramo de segurança e faciliteis, no âmbito nacional e
              internacional. Com soluções inovadoras e de tecnologia avançada,
              através da estruturação de nossos processos internos e trabalho em
              equipe, destacando-se pela capacitação constante dos nossos
              colaboradores. Garantindo a melhor relação custo/benefício e a
              satisfação dos nossos clientes e parceiros.
            </p>
          </div>
        </div>
        <div className="bg-white h-[200px] flex items-start justify-between">
          <div className="flex flex-col text-[#003f88] px-10">
            <h1 className="font-[800] text-[40px]">Valores</h1>
            <ul className="text-[16px] justify-center text-center flex flex-wrap gap-5 xl:text-[22px]">
              <li>• Ética</li>
              <li>• Transparência</li>
              <li>• Prudência</li>
              <li>• Lealdade</li>
              <li>• Acolhimento</li>
              <li>• Competência</li>
              <li>• Responsabilidade Social e Meio Ambiente</li>
              <li>• Inovação</li>
            </ul>
          </div>
          <div className="w-[300px] min-w-[300px] bg-[#003f88] h-full">
            <Image
              src={valores}
              alt="Video"
              style={{ height: "100%", overflow: "hidden" }}
            />
          </div>
        </div>
      </section>
      <section className="flex w-[80%] flex-col  my-10 max-w-[1400px] items-center justify-center">
        <div className="flex flex-grow items-center border-collapse border-[#003f88] border-[2px]">
          {/* <Image
            src={homem}
            alt="Video"
            style={{
              height: "100%",
              objectFit: "contain",
            }}
          /> */}
          <div className="px-[60px] flex flex-col justify-evenly gap-4">
            <h1 className="font-[900] text-[25px] text-[#003f88]">
              Mensagem do nosso CEO
            </h1>
            <p className="w-full max-w-[500px] text-[14px]">
              Há 25 anos, a CGTECH construiu uma trajetória marcada pela
              excelência no mercado de segurança patrimonial e de facílities,
              sendo reconhecida por sua atuação em mais de 400 condomínios, em
              localidades estratégicas como São José dos Campos, Campinas,
              Jundiaí, São Paulo, e outras. Nosso compromisso é oferecer
              soluções de segurança sob medida, ancoradas na mais alta
              tecnologia e em processos rigorosos Contamos com uma equipe de
              profissionais treinados, treinados para lidar com as mais
              complexas demandas de segurança, seja por meio de vigilância
              armada, desarmada ou monitoramento remoto. Nosso diferencial
              reside na capacidade de antecipar riscos e vulnerabilidades,
              proporcionando um serviço que vai além da proteção: entregamos
              segurança para o patrimônio, tranquilidade para você.
            </p>
            <div>
              <h2 className="text-[#003f88] font-[800] text-[14px]">
                ANTONIO CHAUL NETTO
              </h2>
              <span className="text-[#003f88] text-[12px]">CEO e Fundador</span>
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-full mb-[-40px] items-center justify-between">
        <div className="w-full py-5 flex flex-col justify-center items-center gap-2 bg-[#003f88]">
          <h1 className="text-[23px] text-white font-[900] text-center">
            Quer ser um cliente <br /> CGTECH?
          </h1>
          <button className="px-6 py-1 bg-white text-[#003f88]">
            Solicitar Orçamento
          </button>
        </div>
        <div className="w-full py-5 flex flex-col justify-center items-center gap-2 bg-white">
          <h1 className="text-[23px] text-[#003f88] font-[900] text-center">
            Quer ser um colaborador <br /> CGTECH?
          </h1>
          <button className="px-6 py-1 text-white bg-[#003f88]">
            Trabalhe Conosco
          </button>
        </div>
      </section>
    </main>
  );
}

export default SobreDesktop;
