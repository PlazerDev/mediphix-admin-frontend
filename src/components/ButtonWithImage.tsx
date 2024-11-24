import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  style: number;
  img: string;
  to: string;
}

function ButtonWithImage({ title, style, img, to }: Props) {
  const bgStyle =
    style === 1
      ? "bg-mediphix_accent hover:bg-[#ff8520]"
      : "bg-mediphix_text_b hover:bg-[#4c4c4c]";

  const navigate = useNavigate();
  function btnHandler(to: string) {
    navigate(to);
  }
  return (
    <div
      onClick={() => {
        btnHandler(to);
      }}
      className={
        bgStyle +
        " hover:cursor-pointer px-12 py-3 rounded-lg flex flex-col items-center gap-1"
      }
    >
      <img src={img} alt="Button Image" className="w-24 object-cover h-24" />
      <p className="font-medium text-white text-nowrap">{title}</p>
    </div>
  );
}

export default ButtonWithImage;
