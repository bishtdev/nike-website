import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../Components/Button"


const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap item-center max-xl:flex-col-reverse gap-10 max-container" >
      <div className="flex-1">
        <img src={offer} width={773} height={687}
          className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col ">
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg" >
          <br />
          <span className="text-coral-red inline-block mt-3"> Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experince with unbeatable deals. from premier selections to incredeible savings, we offer unparalleled value that sets us a part
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilites designed to fulfill your unique desires, surpassing the loftiest expectations Your journey with us is nothing short of expectional
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label='Shop now' iconUrl={arrowRight}/>
          <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg bg-slate-gray rounded-full text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"> learn more</button>
        </div>
      </div>

    </section>
  )
}

export default SpecialOffers