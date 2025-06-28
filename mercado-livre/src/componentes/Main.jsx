import Hero from "./principal/Hero"
import PraVoce from "./principal/Recentes"
import SlideFinal from "./principal/UltimoSlide"
import UltimoVisto from "./principal/UltimoVisto"

const Main = () => {

    return(
     <>
      <div className="bg-[#EBEBEB] h-full">
        <Hero/>
        <PraVoce/>
        <UltimoVisto/>
        <SlideFinal/>
      </div>
     </>
    )
}

export default Main