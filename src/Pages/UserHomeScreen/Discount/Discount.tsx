
import Button from "../../../Components/reUse/ButtonProps/Button";
import CountdownTimer2 from "../../../Components/reUse/Counter/CounterDownTimer";
import "../../../index.css"

const Discount = () => {
  const targetTime = new Date();
  targetTime.setDate(targetTime.getDate() + 40);

  return (
    <div
      className="bg-[#F3F4F6] w-[100%] flex items-center justify-center mb-[60px] "
      id="shop"
    >
      <div className="w-[95%] flex justify-between flex-wrap">
        <div className=" w-[45%] h-[500px]  discountCard flex  justify-center items-center ">
          <div className=" w-[70%] h-[90%] flex items-center justify-center flex-col">
            <div className=" w-[100%] h-[97%] flex  items-center flex-col gap-[20px]">
              <button className="bg-[var(--accent1)] w-[120px] py-[10px] text-[white] rounded-[5px] hover:bg-[white] hover:text-[var(--secondaryColor1)]     hover:cursor-pointer transition duration-300 ease-in-out hover:scale-[1.05]">
                Hurry Up!
              </button>

              <div className="text-[45px] w-[100%]  text-center leading-[55px] discountText">
                Upto 25% Discount Check it out Now!
              </div>
              <CountdownTimer2 />
              <Button
                width="132px"
                text="Shop Now!!"
                backgroundColor="var(--mainColor1)"
                color="white"
                height="45px"
                link="/contact"
                hoverColor=""
                backgroundColorHover=""
                border=""
              />
            </div>
          </div>
        </div>
        <div className="w-[45%] flex items-center justify-center h-[500px] discountCard">
          <img
            src="https://i.etsystatic.com/32558044/r/il/506f7c/5598037925/il_600x600.5598037925_pdej.jpg"
            alt=""
            className="h-[80%] w-[80%] object-cover rounded-[20px]"
          />
        </div>
        
      </div>
    </div>
  );
};

export default Discount;