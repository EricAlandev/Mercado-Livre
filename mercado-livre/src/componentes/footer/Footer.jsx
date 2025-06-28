const Footer = () => {
    return (
      <>
        <div>
          <div className="flex bg-[#FFF159] justify-center items-center h-[60px] gap-2 p-6">
            <img
              src="/Mercado-Livre/assets/LogoMobile.png"
              alt=""
              className="w-[55px] border-[2px] border-[#F1F1] shadow-2xl p-1"
            />
            <p className="font-[Inter] font-light text-[18px]">Compre e venda com o app!</p>
          </div>
  
          <div className="border-b-[2px] border-[#F1F1F1] pb-4">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-[35px] ml-[46px] ">
              <h2 className="text-[14px] font-[Inter] font-light">Minha conta</h2>
              <h2 className="text-[14px] font-[Inter] font-light">Compras</h2>
              <h2 className="text-[14px] font-[Inter] font-light">Histórico</h2>
              <h2 className="text-[14px] font-[Inter] font-light">Ofertas</h2>
              <h2 className="text-[14px] font-[Inter] font-light">Favoritos</h2>
              <h2 className="text-[14px] font-[Inter] font-light">Lojas oficiais</h2>
              <h2 className="text-[14px] font-[Inter] font-light">Categorias</h2>
              <h2 className="text-[14px] font-[Inter] font-light">Meli+</h2>
              <h2 className="text-[14px] font-[Inter] font-light">Contato</h2>
              <h2 className="text-[14px] font-[Inter] font-light">Vender</h2>
              <h2 className="text-[14px] font-[Inter] font-light">Programa de Afiliados</h2>
              <h2 className="text-[14px] font-[Inter] font-light">Lista de presentes</h2>
            </div>
          </div>
  
          <div>
            <div className="flex mt-[10px] ml-[37px] gap-1.5">
              <img
                src="/Mercado-Livre/assets/Meli+/usuario.webp"
                alt=""
                className="h-[27px] border-[2px] rounded-[50%]"
              />
              <h2 className="font-[Inter] font-light text-[18px] ">Eric</h2>
            </div>
  
            <div className="text-[12px] mt-[12px] ml-[35px] mb-[20px]">
              <p>
                Termos e condições Promoções Como cuidamos da sua <br /> privacidade AcessibilidadeInformações sobre <br /> seguros Blog Afiliados Tendências
              </p>
              <p className="mt-[12px] text-[gray]">© 1999-2025 Ebazar.com.br LTDA.</p>
              <p className="text-[gray]">
                CNPJ n.º 03.007.331/0001-41 / Av. das Nações Unidas, <br />
                nº 3.003, Bonfim, Osasco/SP - CEP 06233-903 - <br />
                empresa do grupo Mercado Livre
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Footer;
  