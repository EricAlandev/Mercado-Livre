import { useState } from "react";

const HeaderCima = () => {
  const [isFocused, SetIsFocused] = useState(false);

  return (
    <>
      <div className={`flex bg-[#FFF159] 
        ${isFocused ? "pt-2 pl-2 pb-2 pr-1" : "p-2"}

        md:flex md:justify-center md:items-center md:gap-2 md:bg-[#FFE600]

        `}>

        {/* Logo Da empresa que está na versão mobile*/}
        <div className="md:hidden">
          {!isFocused && (
            <>
              <img
                src="/Mercado-Livre/assets/LogoMobile.png"
                alt=""
                className="block w-[45px] pt-[3px] md:hidden"
              />

              
            </>
          )}
        </div>
        
        {/*Logo apenas pra versão de desktop */}
        <div>
              <img
                src="/Mercado-Livre/assets/LogoMercadoLIVRE.webp"
                alt=""
                className="hidden md:block md:w-[150px] "
              />
        </div>

        
        <div className="relative flex items-center gap-2 ">
            {/*SEARCH BAR - Versão mobile*/}
          <div className="md:hidden">
            {!isFocused && <label htmlFor=""></label>}
            <input
              placeholder="Estou Buscando.."
              type="text"
              className={`bg-[white] ml-[10px] pt-1.5 pl-9 pb-2
                focus:outline-none focus:ring-2 focus:ring-[black] rounded-[4px]
                duration-300 ease-out
                ${isFocused ? "w-[340px] " : "w-[220px]"}

              `}
              onFocus={() => SetIsFocused(true)}
              onBlur={() => SetIsFocused(false)}
            />
          </div>

          {/*SEARCH BAR - Versão desktop*/}
          <div className="hidden md:block">
            <label htmlFor=""></label>
            <input
              placeholder="Buscar produtos, marcas e muito mais..."
              type="text"
              className={`bg-[white] pt-2.5 pl-3 pb-2.5 ml-[15px] mr-[30px]
                focus:outline-none focus:ring-2 focus:ring-[black] rounded-[4px]
                duration-300 ease-out
                w-[600px] text-[16px]
              `}
            />
          </div>

          {/*Logo da lupa que está dentro da SearchBar */}
          {!isFocused && (
            <button>
              <img
                src="/Mercado-Livre/assets/Search.png"
                alt=""
                className="h-4 absolute left-[23px] top-[10px] 
                md:absolute md:left-[565px] md:top-[14px] md:border-l-[2px] md:border-[#EBEBEB] md:pl-[8px] md:h-[16px]
                "
              />
            </button>
          )}

          {/*Feito apenas pro mobile. Na hora do click, ele muda o ícone da lupa pela seta. */}
          <div className="md:hidden">
            {isFocused && (
              <button>
                <h2 className="absolute left-[15px] mt-[-18.5px]">˂-</h2>
              </button>
            )}
          </div>

          {!isFocused && (
            <>
              <div className="relative md:hidden">
                <img
                  src="/Mercado-Livre/assets/carrinho.webp"
                  alt=""
                  className="h-5 mt-[5px]"
                />

                <h2
                  className="absolute left-[4px] top-[-12px] p-1 bg-[white] rounded-[50%]
                    text-[10px]"
                >
                  1
                </h2>
              </div>
            </>
          )}
        </div>

        {/* Anúncio da esquerda do Meli+ */}
        <div className="">
          <img
            src="/Mercado-Livre/assets/Meli+.webp"
            alt=""
            className="hidden md:block md:w-[390px] h-[45px] overflow-hidden"
          />

        </div>
      </div>
    </>
  );
};

export default HeaderCima;
