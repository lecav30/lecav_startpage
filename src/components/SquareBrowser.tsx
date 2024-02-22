import { FC, useEffect } from "react";
import {
  Link,
  Essentials,
  Entertainment,
  Job,
  Organization,
} from "../util/Links";
import { Style, myStyles } from "../util/Styles";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeStyle, toggleShowOptions } from "../features/styles/stylesSlice";
import dayjs from "dayjs";
import { useCookies } from "react-cookie";

interface ScreenImageProps {
  style: Style;
}

const ScreenImage: FC<ScreenImageProps> = (props) => {
  const [showName, setShowName] = useState<boolean>(false);
  const dispatch = useDispatch();
  // const [cookies, setCookie] = useCookies(["style"]);
  const setCookie = useCookies(["style"])[1];

  return (
    <div
      style={{
        backgroundImage: `url(${props.style.backgroundImage})`,
      }}
      className="h-[12rem] w-[12rem] cursor-pointer bg-cover bg-center"
      onMouseEnter={() => setShowName(true)}
      onMouseLeave={() => setShowName(false)}
      onClick={() => {
        dispatch(changeStyle(props.style));
        dispatch(toggleShowOptions());
        setCookie("style", props.style.name, { path: "/" });
      }}
    >
      <p
        className={`${
          showName ? "block" : "hidden"
        } w-full h-full bg-white bg-opacity-50 flex justify-center items-center text-xl
        font-bold`}
      >
        {props.style.name}
      </p>
    </div>
  );
};

interface ScreenOptionsProps {
  currentStyle: Style;
  visible: boolean;
}

const ScreenOptions: FC<ScreenOptionsProps> = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.currentStyle.lightColor,
      }}
      className={`absolute left-0 top-0 w-full h-full flex justify-center items-center
      ${props.visible ? "block" : "hidden"}`}
    >
      <div className="grid grid-cols-4 grid-rows-2 h-[24rem]">
        {Object.entries(myStyles).map(([key, style]) => (
          <ScreenImage key={key} style={style} />
        ))}
      </div>
    </div>
  );
};

interface LinksColumnProps {
  links: Link[];
  style: Style;
}

const LinksColumn: FC<LinksColumnProps> = (props) => {
  return (
    <div className="flex flex-col gap-2">
      {props.links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          style={{
            textDecorationColor: props.style.alertColor,
          }}
          className="hover:underline"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

const SquareBrowser = () => {
  const style = useSelector((state: any) => state.styles.style);
  const showOptions = useSelector((state: any) => state.styles.showOptions);
  const dispatch = useDispatch();

  // const [cookies, setCookie] = useCookies(["style"]);
  const cookies = useCookies(["style"])[0];

  useEffect(() => {
    if (cookies.style) {
      dispatch(changeStyle(myStyles[cookies.style]));
    }
  });

  return (
    <div
      style={{
        backgroundColor: style.lightColor,
      }}
      className="flex justify-center items-center w-full h-full transition-all duration-500"
    >
      <button
        className="absolute top-10 right-10"
        onClick={() => dispatch(toggleShowOptions())}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill={`${style.darkMode ? "#FFF" : "#000"}`}
            d="m12.07 18.577l2.407-2.402l-2.408-2.402l-.627.627l1.383 1.383q-1.162.005-2.064-.273q-.903-.28-1.448-.823q-.557-.558-.839-1.266q-.282-.708-.282-1.415q0-.425.094-.85t.274-.806l-.677-.6q-.29.529-.433 1.096q-.142.567-.142 1.154q0 .891.346 1.76t1.023 1.553q.677.687 1.779 1.02q1.102.334 2.263.34l-1.277 1.277zm4.067-4.327q.29-.529.432-1.096q.143-.567.143-1.154q0-.888-.344-1.765t-1.03-1.554q-.667-.687-1.775-1.018q-1.109-.33-2.263-.33l1.277-1.283l-.627-.627l-2.408 2.402l2.408 2.402l.627-.627l-1.389-1.388q1.156 0 2.068.281q.911.282 1.455.828q.545.545.83 1.255q.286.709.286 1.418q0 .425-.093.85t-.274.806zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924q-1.216-1.214-1.925-2.856Q3 13.87 3 12.003q0-1.866.708-3.51q.709-1.643 1.924-2.859q1.214-1.216 2.856-1.925Q10.13 3 11.997 3q1.866 0 3.51.708q1.643.709 2.859 1.924q1.216 1.214 1.925 2.856Q21 10.13 21 11.997q0 1.866-.708 3.51q-.709 1.643-1.924 2.859q-1.214 1.216-2.856 1.925Q13.87 21 12.003 21M12 20q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8"
          />
        </svg>
      </button>
      <ScreenOptions currentStyle={style} visible={showOptions} />
      <div
        style={{
          borderColor: style.primaryColor,
          color: style.darkColor,
          backgroundColor: style.lightColor,
          boxShadow: `10px 10px ${style.secondaryColor}`,
        }}
        className="border-2 max-w-6xl max-h-80 flex gap-20"
      >
        <img
          src={style.backgroundImage}
          className="max-w-[25%]"
          alt={style.name}
        />
        <div className="w-full pr-20 py-5">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-2xl">{style.message}</h2>
            <i>{dayjs().format("dddd, MMMM D, YYYY")}</i>
          </div>
          <div className="flex gap-2 my-6 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 256 256"
            >
              <path
                fill={`${style.darkMode ? "#FFF" : "#000"}`}
                d="m228.24 219.76l-51.38-51.38a86.15 86.15 0 1 0-8.48 8.48l51.38 51.38a6 6 0 0 0 8.48-8.48M38 112a74 74 0 1 1 74 74a74.09 74.09 0 0 1-74-74"
              />
            </svg>
            <form
              className="w-full"
              onSubmit={(e) => {
                e.preventDefault();
                window.open(
                  `https://www.google.com/search?q=${
                    (document.getElementById("search") as HTMLInputElement)
                      .value
                  }`
                );
              }}
            >
              <input
                style={{
                  color: style.darkColor,
                  backgroundColor: style.lightColor,
                  borderColor: style.primaryColor,
                }}
                className="w-full focus:outline-none border-b-2 py-1 px-2"
                type="text"
                id="search"
              />
            </form>
          </div>
          <div className="flex justify-between lg:gap-20">
            <LinksColumn links={Essentials} style={style} />
            <LinksColumn links={Entertainment} style={style} />
            <LinksColumn links={Job} style={style} />
            <LinksColumn links={Organization} style={style} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquareBrowser;
