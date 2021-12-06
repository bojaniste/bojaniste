import { useEffect } from "react";
import PropTypes from "prop-types";

function useOutsideClick(ref, callback) {

  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
}

useOutsideClick.propTypes = {
  ref: PropTypes.object,
  callback: PropTypes.func,
};
export default useOutsideClick;
