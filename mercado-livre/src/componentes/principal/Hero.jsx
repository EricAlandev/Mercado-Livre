
import { Swiper, SwiperSlide } from 'swiper/react';

const Hero = () => {

    let data = [
        {id: "1", image: "/assets/slides/Slide3.webp"},
        {id: "2", image: "/assets/slides/Slide2.webp"},
        {id: "3", image: "/assets/slides/Slide1.webp"},
        {id: "4", image: "/assets/slides/Slide4.webp"},
        {id: "5", image: "/assets/slides/Slide5.webp"},
        {id: "6", image: "/assets/slides/Slide6.webp"},

    ]

    let items = [
        {id: "1", image: "/assets/MercadoPago.png", descricao: "Mercado Pago"},
        {id: "2", image: "/assets/Ofertas.png" , descricao: "Ofertas Novas"},
        {id: "3", image: "/assets/AssistirOnline.png" , descricao: "Mercado Play"},
        {id: "4", image: "/assets/Descontos.png" , descricao: "Avisos Novos"},
        {id: "5", image: "/assets/PrecoBaixoi.png" , descricao: "Mercado Pago"},
        
    ]


    return(
     <>
       <div className='bg-gradient-to-b from-[#FFF801] to-[#EBEBEB]'>
         <Swiper slidesPerView={1.1}>
            {data.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className='flex w-[300px] h-[150px] ml-[27px] overflow-hidden rounded-[10px]'> {/*Overflow hidden serve para não deixar a imagem pular fora da div.  */}
                        <img src={item.image} alt=""
                        className='scale-[1.9]  object-contain pt-[22px]'  //object contain mantém a proporção
                        />
                    </div>
                </SwiperSlide>
            ))}
         </Swiper>
         
         
         <div className='flex mt-4 ml-5.5 p-2 w-[310px] bg-[white] rounded-[4px] '>
            <img src="/assets/raio.png" alt=""
            className='h-4.5 '
             />
            <h2 className='text-[11.5px]'> 
                <span className='text-[#00A650] mr-[4px]'>Frete grátis</span>
                em milhões de produtos a partir de R$ 19.
            </h2>
         </div>
        
        <div className='flex items-center  overflow-hidden 
         w-[360px] h-[100px] mt-[15px]

         '>
            <Swiper slidesPerView={4}>
                {items.map((opcao) => (
                  <SwiperSlide key={opcao.id}>
                    <div className='relative ml-[10px]'>
                        <img src={opcao.image} alt=""
                        className={`bg-[white] rounded-[50%] object-contain pt-2 pl-2 pb-2 pr-2
                            ${opcao.id === "1" ? " w-[75px] h-[75px] " : opcao.id === "3" ? "border-[2.5px] border-[#00A650] w-[75px] h-[75px] pb-3" : "border-none h-[75px] w-[75px]"}
                            
                            `}
                         />

                         <p className='text-[gray] text-[12px]'>{opcao.descricao}</p>

                         {opcao.id === "3" && (
                            <span className='p-1 bg-[#00A650] text-[white] text-[11px]
                             rounded-[20px] absolute top-[47px] left-[18px]
                             '>Grátis
                             </span>
                         )}
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
        </div>

       </div> 
     </>
    )
}

export default Hero;