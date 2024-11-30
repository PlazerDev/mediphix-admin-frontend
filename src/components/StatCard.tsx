import CountUp from "react-countup";
import patternImg from "./../assets/images/pattern.png";

interface Props {
  title: string;
  val: number;
}
function StatCard({ title, val }: Props) {
  return (
    <div className="bg-mediphix_card_background w-full h-full ps-2 rounded-lg flex  justify-between gap-4">
      <div className="flex flex-col items-start justify-center">
        <p className="text-mediphix_text_b text-sm text-nowrap">{title}</p>
        <p className="font-bold text-3xl">
          <CountUp start={0} end={val} duration={3}></CountUp>
        </p>
      </div>
      <div>
        <img
          src={patternImg}
          alt="Pattern Iamge"
          className="h-full w-40 object-cover mix-blend-luminosity"
        />
      </div>
    </div>
  );
}

export default StatCard;
