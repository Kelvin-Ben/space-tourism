import React from "react";
import { ClipLoader } from "react-spinners";

const Spinner = ({ loading }) => {
  return (
    <div>
      <ClipLoader color="#fff" loading={loading} size={50} />
    </div>
  );
};

export default Spinner;
