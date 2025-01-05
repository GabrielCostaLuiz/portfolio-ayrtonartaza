import Image from "next/image";
import imageProjectDefault from "../public/images/project/projectDefault.png";

export default function CardProjects({ repositorio }) {
  return (
    <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg flex flex-col h-full">
  
      <div className="bg-red-500 relative overflow-hidden rounded-t-lg w-full h-[20rem]">
        <Image
          src={imageProjectDefault} 
          alt={repositorio.name || "Imagem padrão de projeto"}
          title={repositorio.name || "Imagem padrão de projeto"}
          className="object-fill"
          fill
        />
      </div>

      <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
      
        <div className="space-y-4">
          <h3 className="font-bold tracking-widest uppercase text-lg">
            {repositorio.name.replace(/[-_]/g, " ") || "Nome do projeto não disponível"}
          </h3>

          <div className="flex gap-3">
            {repositorio.tags && repositorio.tags.length > 0 ? (
              repositorio.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-primary px-3 py-1 uppercase text-white rounded-lg text-[0.8rem] tracking-widest"
                >
                  {tag}
                </span>
              ))
            ) : (
              <span className="text-gray-500 text-sm">
                Nenhuma tag disponível
              </span>
            )}
          </div>

          <p>
            {repositorio.description ||
              "Descrição não disponível para este projeto."}
          </p>
        </div>

      
        <div className="flex gap-4 mt-auto">
          {repositorio.html_url ? (
            <a
              href={repositorio.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-4 py-2 rounded-lg uppercase text-sm hover:scale-105 transition-all"
            >
              GitHub
            </a>
          ) : (
            <button
              disabled
              className="bg-gray-400 text-white px-4 py-2 rounded-lg uppercase text-sm cursor-not-allowed"
            >
              GitHub indisponível
            </button>
          )}

          {repositorio.homepage ? (
            <a
              href={repositorio.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-4 py-2 rounded-lg uppercase text-sm hover:bg-green-500 transition"
            >
              Live
            </a>
          ) : (
            <button
              disabled
              className="bg-gray-400 text-white px-4 py-2 rounded-lg uppercase text-sm cursor-not-allowed"
            >
              Live indisponível
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
