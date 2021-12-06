import React from "react";
import PropTypes from "prop-types";
import ReusableInputComponent from "../ReusableInputContainer/ReusableInputContainer";
import List from "../List/List";
import style from "./Board.module.css";


function Board({ lists,addList,cards }) {
  const listData = lists.map((list) => {
    return <List list={list} key={list.id} cards={cards}/>;
  });

  return (
    <>
      <div className={style.containerBoard}>
          {listData}
        <ReusableInputComponent type="list" addList={addList} />
      </div>
    </>
  );
}
Board.propTypes = {
  lists: PropTypes.array,
  cards: PropTypes.array,
  addList: PropTypes.func,
};
export default Board;
