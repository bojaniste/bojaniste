import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import InputArea from "./InputArea";
import style from "./ReusableInputContainer.module.css";
import useOutsideClick from "../useOutsideClick/useOutsideClick";

function ReusableInputComponent({ listId, type, addList }) {
  const [open, setOpen] = useState(false);
  const refInput = useRef();

  useOutsideClick(refInput, () => {
    setOpen(false);
  });

  return (
    <>
      <div className={style.inputContainer} ref={refInput}>
        <InputArea
          open={open}
          setOpen={setOpen}
          type={type}
          addList={addList}
          listId={listId}
        />
        {!open ? (
          <div
            className={
              type === "card" ? style.addButtonCard : style.addButtonList
            }
          >
            <h6
              onClick={(e) => {
                e.stopPropagation();
                setOpen(true);
              }}
            >
              {type === "card" ? "+Add card" : "+Add another List"}
            </h6>
          </div>
        ) : null}
      </div>
    </>
  );
}
ReusableInputComponent.propTypes = {
  listId: PropTypes.string,
  type: PropTypes.string,
  addList: PropTypes.func,
};
export default ReusableInputComponent;
