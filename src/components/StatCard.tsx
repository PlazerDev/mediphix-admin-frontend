import CountUp from "react-countup";
import patternImg from "./../assets/images/pattern.png";

interface Props {
  title: string;
  val: number;
}
function StatCard({ title, val }: Props) {
  return (
    <div className="bg-mediphix_card_background w-full rounded-lg flex items-center justify-between">
      <div className="flex flex-col p-4 items-start justify-start">
        <p className="text-mediphix_text_b text-sm">{title}</p>
        <p className="font-bold text-3xl">
          <CountUp start={0} end={val} duration={3}></CountUp>
        </p>
      </div>
      <div>
        <img
          src={patternImg}
          alt="Pattern Iamge"
          className="h-24 mix-blend-luminosity"
        />
      </div>
    </div>
  );
}

export default StatCard;
