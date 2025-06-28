import ProductCard from "../ProductCard"

const UltimoVisto = () => {
  return (
    <>
      <div className="bg-[white] m-4 pb-[20px] rounded-[8px] ">
        <h2 className="ml-[32px] pt-4 pb-1 pr-4 font-[Inter] font-bold border-b-[2px] border-[#F1F1F1] w-[70%]">
          Inspirado no último visto
        </h2>

        <div className="grid grid-cols-2 grid-rows-2 flex-wrap w-[200px] ml-[20px] ">
          <div>
            <ProductCard
              image="/Mercado-Livre/assets/ultimo_visto/EssencialAto.webp"
              name="Essencial Ato"
              priceDiscount="159.69"
              price="119.99"
              imageSize="w-[90px] h-auto ml-[20px]"
              border="w-[140px] border-[2px] border-[#F1F1F1]"
            />
          </div>

          <div>
            <ProductCard
              image="/Mercado-Livre/assets/ultimo_visto/EssencialPalo.webp"
              name="Essencial Palo"
              priceDiscount="209.99"
              price="199.98"
              imageSize="w-[90px] h-[170px] ml-[20px]"
              border="w-[140px] border-[2px] border-[#F1F1F1] ml-[60px]"
            />
          </div>

          <div>
            <ProductCard
              image="/Mercado-Livre/assets/ultimo_visto/HomemEvolutio.webp"
              name="Essencial Ato"
              priceDiscount="125.99"
              price="119.99"
              imageSize="w-[90px] h-auto mt-[20px] ml-[20px]"
              border="w-[140px] h-[260px] border-[2px] border-[#F1F1F1]"
            />
          </div>

          <div>
            <ProductCard
              image="/Mercado-Livre/assets/ultimo_visto/EssencialAto.webp"
              name="Essencial Ato"
              priceDiscount="299.99"
              price="219.99"
              imageSize="w-[90px] h-auto ml-[20px]"
              border="w-[140px] border-[2px] border-[#F1F1F1] ml-[60px]"
            />
          </div>
        </div>
      </div>

      {/* Tela do meli+ */}
      <div className="w-[345px] ml-[15px] bg-[#FFFFFF] rounded-[8px] overflow-hidden">
        <div
          className="bg-gradient-to-r from-[#5F228D] to-[#A21291] 
                flex items-center pt-[10px] pb-[10px]"
        >
          <img
            src="/Mercado-Livre/assets/Meli+/Meli+Anuncio.png"
            alt=""
            className="h-[35px] w-[35x] ml-[30px] border-r-[2px] border-[white] pr-[9px] object-cover"
          />
          <h2 className="pl-[12px] text-[white] font-[Inter]">
            Assine a partir de <br /> R$ 24.90/mês
          </h2>
        </div>

        {/* Código feito para dizer os benefícios excluivos */}
        <div className="pl-7 flex flex-col gap-2.5 border-b-[1px] border-[#F1F1F1]">
          <h2 className="mt-[17px] font-[Inter font-[600] text-[15px]">
            Aproveite estes benefícios exlusivos:
          </h2>

          <div className="flex items-center gap-2">
            <img
              src="/Mercado-Livre/assets/Meli+/Disney+.png"
              alt=""
              className="w-[50px] rounded-2xl"
            />
            <h2 className="text-[14px]">Disney+ incluído</h2>
          </div>

          <div className="flex items-center gap-2">
            <img
              src="/Mercado-Livre/assets/Meli+/CashBack.png"
              alt=""
              className="w-[50px] rounded-2xl"
            />
            <h2 className="text-[14px]">CashBack em compras e pagamentos</h2>
          </div>

          <div className="flex items-center gap-2">
            <img
              src="/Mercado-Livre/assets/Meli+/Cofrinhos.png"
              alt=""
              className="w-[50px] rounded-2xl"
            />
            <h2 className="text-[14px]">
              Cofrinhos que rendem 120% do CDI no Mercado Pago
            </h2>
          </div>

          <div className="flex items-center gap-2 pb-[10px]">
            <img
              src="/Mercado-Livre/assets/Meli+/Cartao.png"
              alt=""
              className="w-[50px] rounded-2xl"
            />
            <h2 className="text-[14px]">Até 3 parcelas extras sem juros</h2>
          </div>
        </div>

        <div className="flex pt-[8px] pl-7 pb-2.5">
          <h2 className="text-[#3483F9] font-[Inter] font-[500]">
            Assinar o Meli+{" "}
          </h2>
          <p className="ml-[180px] text-[#3483F9]"> ˃ </p>
        </div>
      </div>
    </>
  );
};

export default UltimoVisto;
