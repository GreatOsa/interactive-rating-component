import React, { useState } from "react";
import star from "./assets/icon-star.svg";
import thankYou from "./assets/illustration-thank-you.svg";

function RatingInfo({ onRate, ratingNum, onSubmit }) {
  const ratingNumStyle =
    "w-[45px] h-[45px] cursor-pointer rounded-full flex flex-row justify-center items-center    hover:bg-[var(--Orange)] hover:text-[var(--Very-Dark-Blue)]  font-bold ";

  const activeNum = "bg-[var(--White)] text-[var(--Very-Dark-Blue)] ";
  const inactiveNum = "bg-[var(--Light-Grey)]/10 text-[var(--Light-Grey)]";

  return (
    <div className=" h-full flex flex-col justify-between ">
      <div className="w-fit h-fit shadow-[0_1px_3px_var(--Very-Dark-Blue)] bg-[var(--Light-Grey)]/10 p-3 rounded-full">
        <img src={star} alt="star" />
      </div>
      <div className="flex flex-col gap-2 ">
        <h2 className="text-[var(--White)]  text-3xl ">How did we do?</h2>
        <p className="text-[var(--Light-Grey)] text-xs ">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>

      <div className="flex flex-row w-full justify-between">
        <div
          onClick={() => onRate(1)}
          className={`${ratingNumStyle} ${
            ratingNum === 1 ? activeNum : inactiveNum
          }`}
        >
          1
        </div>
        <div
          onClick={() => onRate(2)}
          className={`${ratingNumStyle} ${
            ratingNum === 2 ? activeNum : inactiveNum
          }`}
        >
          2
        </div>
        <div
          onClick={() => onRate(3)}
          className={`${ratingNumStyle} ${
            ratingNum === 3 ? activeNum : inactiveNum
          }`}
        >
          3
        </div>
        <div
          onClick={() => onRate(4)}
          className={`${ratingNumStyle} ${
            ratingNum === 4 ? activeNum : inactiveNum
          }`}
        >
          4
        </div>
        <div
          onClick={() => onRate(5)}
          className={`${ratingNumStyle} ${
            ratingNum === 5 ? activeNum : inactiveNum
          }`}
        >
          5
        </div>
      </div>
      <button
        onClick={() => onSubmit()}
        className=" p-[4px] rounded-full w-full bg-[var(--Orange)]  hover:bg-[var(--White)] cursor-pointer shadow-[0_1px_3px_rgba(0,0,0,0.5)] active:shadow-[0_0px_1px_rgba(0,0,0,0.5)] active:scale-[0.995]"
      >
        <div className=" w-full py-1">
          <div className="flex flex-row  justify-center items-center">
            <span className="font-semibold">SUBMIT</span>
          </div>
        </div>
      </button>
    </div>
  );
}

function RatingCard() {
  const [ratingNum, setRatingNum] = useState(null);
  const [isSubmited, setIsSubmited] = useState(false);

  function onRate(i) {
    setRatingNum(i);
  }
  function onSubmit() {
    if (ratingNum) {
      setIsSubmited(true);
    }
  }

  return (
    <div
      className="w-[90%] max-w-[350px]  h-[350px] bg-[var(--Dark-Blue)] rounded-4xl p-[1.8rem]"

      // style="padding: 10px"
    >
      {!isSubmited ? (
        <RatingInfo ratingNum={ratingNum} onSubmit={onSubmit} onRate={onRate} />
      ) : (
        <ThankYouCard ratingNum={ratingNum} />
      )}
    </div>
  );
}

const App = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-[var(--Very-Dark-Blue)] flex justify-center items-center">
      <RatingCard />
    </div>
  );
};

export default App;

function ThankYouCard({ ratingNum }) {
  return (
    <div className=" w-full h-full flex flex-col items-center justify-between p-3 ">
      <div className="flex flex-col items-center gap-3">
        <img
          className="w-[150px] "
          src={thankYou}
          alt="illustration-thank-you"
        />
        <p className="w-fit px-4 py-1 rounded-full text-[var(--Orange)]/80 bg-[var(--Light-Grey)]/10 ">
          {" "}
          You selected {ratingNum} out of 5
        </p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-2xl font-bold text-[var(--White)] ">Thank you!</h3>
        <p className="text-[var(--Light-Grey)] text-sm text-center">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}
