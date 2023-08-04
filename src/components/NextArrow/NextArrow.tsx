//@ts-nocheck
import { BsChevronRight } from "react-icons/bs";
import { CustomArrowProps } from "react-slick";

interface NextArrowProps {
  props?: CustomArrowProps;
  breakpoints?: Array<Object>;
  customClassName?: string;
  currentSlide?:number;
  numberItem?:number
}

const NextArrow: React.FC<NextArrowProps> = (props) => {
  const {
    style,
    onClick,
    currentSlide,
    slideCount,
    numberItem
  } = props;
  const disabled = slideCount - numberItem === currentSlide;

  return (
    <div
      className={
        "absolute right-0 top-0 h-full  w-10 z-10  "
      }
      style={{ ...style }}
    >
      <div className={`h-full w-full flex  items-center bg-transparent ${disabled && 'hidden'}`}>
        {!disabled && (
          <div
            onClick={onClick}
            className={
              "translate-x-full w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
            }
          >
            <BsChevronRight size={18} className="text-mainColor rounded-full" />
          </div>
        )}
      </div>
    </div>
  );
};

export default NextArrow;
