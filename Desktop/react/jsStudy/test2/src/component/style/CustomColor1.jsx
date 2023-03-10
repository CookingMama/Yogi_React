import { useState } from "react";
import "./CustomColor1.css";
import { css } from "@emotion/css";
import styled from "styled-components";


// const Box = styled.div`
//   width: ${(props) => props.width};
//   height: ${(props) => props.height};
//   background-color: ${(props) => props.color};
//   color: black;
//   textalign: center;
//   border: ${(props) => props.border && "1px solid red"};
//   &:hover {
//     color: white;
//   }
// `;
const CustomColor1 = () => {
  const [styleForm, setStyleForm] = useState({
    width: "100px",
    height: "100px",
    backgroundColor: "red",
    textAlign: "center",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "color") {
      setStyleForm({ ...styleForm, backgroundColor: value });
    } else {
      setStyleForm({
        ...styleForm,
        height: `${value}px`,
        width: `${value}px`,
      });
    }
  };

  return (
    <div>
        <div
  className={`h-20 w-20 bg-[${styleForm.backgroundColor}] text-center items-center border boarder-solid border-emerald-200 hover: text-gray-500
                `}
>
  hover
</div>;
    {/* //   <div className="box"> </div> */}
      {/* <div style={styleForm} /> */}
      {/* <div
        className={css`
          width: ${styleForm.width};
          height: ${styleForm.height};
          background-color: ${styleForm.backgroundColor};
          color: black;
          text-align: ${styleForm.textAlign};
          &:hover {
            color: white;
          }
        `}
      >
        hover
      </div> */}
      {/* <Box
        width={styleForm.width}
        height={styleForm.height}
        textAlign={styleForm.textAlign}
        backgroundColor={styleForm.backgroundColor}
        border
      >
        hover
      </Box> */}
      <input name="color" type="color" onChange={onChangeHandler} />
      <input type={"number"} onChange={onChangeHandler} />
    </div>
  );
};

export default CustomColor1;
