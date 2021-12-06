import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../Card/Card";
import ReusableInputComponent from "../ReusableInputContainer/ReusableInputContainer";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import style from "./List.module.css";
import storeApi from "../../utilis/storeApi";
import Popover from "react-bootstrap/Popover";

function List({ list,cards }) {
  const title = list.name;
  const listId = list.id;
  const [listName, setListName] = useState(title);
  const [open, setOpen] = useState(false);
  const { updateListName,archiveList} = useContext(storeApi);

  const getName = (e) => {
    setListName(e.target.value);
  };

  const handleOnBlur = (event) => {
    event.preventDefault()
    updateListName(listName, listId);
    setOpen(false);
  };

  const filterCards = cards.filter((card) => card.idList == listId);

  const popover = (
    <Popover>
      <Popover.Title as="h5">List Actions</Popover.Title>
      <Popover.Content>
        <strong onClick={(e)=>{e.preventDefault(),archiveList(listId)}} style={{cursor:"pointer"}}>Archive List</strong>
      </Popover.Content>
    </Popover>
  );
  return (
    <div className={style.list} onBlur={handleOnBlur}>
      <div className={"card-header " + style.listTitle}>
        {open ? (
          <span>
            <input
              type="text"
              value={listName}
              onChange={getName}
              className={style.inputTitle}
            />
          </span>
        ) : (
          <span onClick={() => setOpen(true)}>{listName}</span>
        )}

        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <FontAwesomeIcon icon={faEllipsisH} className={style.more} />
        </OverlayTrigger>
      </div>
      {filterCards
        ? filterCards.map((card) => {
            return <Card card={card} key={card.id} />;
          })
        : null}
      <ReusableInputComponent type="card" listId={listId} />
    </div>
  );
}

List.propTypes = {
  list: PropTypes.object,
  cards: PropTypes.array,
};
export default List;
