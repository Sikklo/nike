import { star } from "../assets/icons";
const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="info-text text-center mt-6 max-w-sm">
        {feedback}
      </p>
      <div className="flex gap-2.5 mt-3 justify-center items-center ">
        <img src={star} alt="star" width={24} height={24} className="object-contain m-0"/>
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="text-center mt-1 font-bold text-3xl font-montserrat">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
