
import { useState } from "react";


const HeaderCima = () => {
  const [isFocused, SetIsFocused] = useState(false);

  return(
   <>

    <div className={`flex bg-[#FFF159] ${isFocused ? "pt-2 pl-2 pb-2 pr-1" : "p-2"}`}
    >

      {/*Logo Da empresa que fica na esquerda
      A primeira imagem é a logo no mobile e a segunda imagem é a logo do desktop
       */}
        <div>
              {!isFocused && (
              <>
                <img src="/assets/LogoMobile.png" alt=""
                className="block w-[45px] pt-[3px] md:hidden "
                />

                <img src="/assets/LogoMercadoLIVRE.webp" alt=""
                className="hidden md:block"
                />
              </>
              )}
        </div>

        <div className="relative flex items-center gap-4">
              {!isFocused && (
                  <label htmlFor=""></label>
              )

              }
              <input placeholder="Estou Buscando.." type="text"
              className={`bg-[white]  pt-1.5 pl-9 pb-2
              focus:outline-none focus:ring-2 focus:ring-[black] rounded-[4px]
               duration-300 ease-out 
              ${isFocused ? "w-[340px]" : "w-[220px]"}
              `}
              onFocus={ () => SetIsFocused(true)}
              onBlur={() => SetIsFocused(false)}
              />

              {!isFocused && (
                  <button>
                  <img src="/assets/Search.png" alt=""
                  className="h-4 absolute left-[30px] top-[13px]"
                  />
                  </button>
              )}

              {isFocused && (
                <button>
                  <h2 className="absolute left-[15px] mt-[-12px]">˂-</h2>
                </button>
              )}


              {!isFocused && (
                <>
                 <div className="relative md:hidden">
                    <img src="/assets/carrinho.webp" alt=""
                    className="h-5 mt-[5px]"
                    />

                    <h2 className="absolute left-[4px] top-[-12px] p-1 bg-[white] rounded-[50%]
                    text-[10px]
                    ">1</h2>
                 </div>
                </>
              )}
          </div> 
            
          {/*Anúncio da esquerda do Meli+ */}
          <div>
              <img src="/assets/Meli+.webp" alt=""
              className="hidden md:block"
              />
       </div>
    </div>
   </>
  )
}



export default HeaderCima;