import React from "react";

export default function LoginModal({ set }) {
  return (
    <div className="fixed z-10 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg text-black shadow-lg">
        <h2 className="text-xl text-center font-bold mb-4">
          O que você quer acessar?
        </h2>
        <p className="mb-4 text-center">Selecione a opção desejada</p>
        <div className="flex justify-center gap-4">
          <a href="https://consultarecibo.com.br/" target="blank">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-400">
              Acesso holerite
            </button>
          </a>
          <a href="https://app.pipefy.com/public/form/6C3h3rJb" target="blank">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-400 mr-2">
              Duvidas, Reclamações e Solicitações
            </button>
          </a>
          <button
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-400"
            onClick={() => set(false)}
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}
