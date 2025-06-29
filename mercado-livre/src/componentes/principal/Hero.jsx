import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

const Hero = () => {
  let data = [
    { id: '1', image: '/Mercado-Livre/assets/slides/Slide3.webp' },
    { id: '2', image: '/Mercado-Livre/assets/slides/Slide2.webp' },
    { id: '3', image: '/Mercado-Livre/assets/slides/Slide1.webp' },
    { id: '4', image: '/Mercado-Livre/assets/slides/Slide4.webp' },
    { id: '5', image: '/Mercado-Livre/assets/slides/Slide5.webp' },
    { id: '6', image: '/Mercado-Livre/assets/slides/Slide6.webp' },
  ];

  let items = [
    { id: '1', image: '/Mercado-Livre/assets/MercadoPago.png', descricao: 'Mercado Pago' },
    { id: '2', image: '/Mercado-Livre/assets/Ofertas.png', descricao: 'Ofertas Novas' },
    { id: '3', image: '/Mercado-Livre/assets/AssistirOnline.png', descricao: 'Mercado Play' },
    { id: '4', image: '/Mercado-Livre/assets/Descontos.png', descricao: 'Avisos Novos' },
    { id: '5', image: '/Mercado-Livre/assets/PrecoBaixoi.png', descricao: 'Mercado Pago' },
  ];

  return (
    <>
      <div className="bg-gradient-to-b from-[#FFF801] to-[#EBEBEB] md:bg-none md:bg-[#FFF801]">
        {/* Swiper Principal */}
        <Swiper
          slidesPerView={1.1}
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          className="relative max-w-[1200px] mx-auto"
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className={`flex w-[300px] h-[150px] ml-[27px] overflow-hidden rounded-[10px] 
                md:w-[1200px] md:h-[400px] md:mx-auto`}
              >
                <img
                  src={item.image}
                  alt=""
                  className={`scale-[1.9] object-contain pt-[22px] md:scale-[1.35] 
                    ${
                      item.id === '1'
                        ? 'md:pt-[20px]'
                        : item.id === '2'
                        ? ' md:pt-[60px]'
                        : item.id === '3'
                        ? ' md:pt-[60px] md:pl-[20px]'
                        : item.id === '4'
                        ? 'md:pt-[80px] md:ml-[80px]'
                        : item.id === '5'
                        ? 'md:pt-[70px]'
                        : item.id === '6'
                        ? ' md:pt-[70px]'
                        : ''
                    }`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Frete Grátis - Mobile */}
        <div className="flex mt-4 mx-auto p-2 w-[310px] bg-[white] rounded-[4px] md:hidden">
          <img src="/Mercado-Livre/assets/raio.png" alt="" className="h-4.5" />
          <h2 className="text-[11.5px]">
            <span className="text-[#00A650] mr-[4px]">Frete grátis</span>
            em milhões de produtos a partir de R$ 19.
          </h2>
        </div>

        {/* Slider inferior - Mobile */}
        <div className="flex items-center overflow-hidden w-[360px] h-[100px] mt-[15px] mx-auto md:hidden">
          <Swiper slidesPerView={4}>
            {items.map((opcao) => (
              <SwiperSlide key={opcao.id}>
                <div className="relative ml-[10px]">
                  <img
                    src={opcao.image}
                    alt=""
                    className={`bg-[white] rounded-[50%] object-contain pt-2 pl-2 pb-2 pr-2
                      ${
                        opcao.id === '1'
                          ? ' w-[75px] h-[75px] '
                          : opcao.id === '3'
                          ? 'border-[2.5px] border-[#00A650] w-[75px] h-[75px] pb-3'
                          : 'border-none h-[75px] w-[75px]'
                      }`}
                  />
                  <p className="text-[gray] text-[12px]">{opcao.descricao}</p>

                  {opcao.id === '3' && (
                    <span className="p-1 bg-[#00A650] text-[white] text-[11px] rounded-[20px] absolute top-[47px] left-[18px]">
                      Grátis
                    </span>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Hero;
