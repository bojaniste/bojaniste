import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import {
  faHome,
  faColumns,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Header.module.css";
import useOutsideClick from "../useOutsideClick/useOutsideClick";
import ModalAddNewBoard from "./Modal/ModalAddNewBoard";

function Header({ boards, addBoard }) {
  const [showDropdown, setDropdown] = useState(false);
  const [openAddModal, setAddModal] = useState(false);
  const [newBoard, setNewBoard] = useState("");

  // click cutom hook
  const refDropdown = useRef();
  useOutsideClick(refDropdown, () => {
    setDropdown(false);
  });
  // modal
  const handleClose = () => setAddModal(false);
  const showModal = () => {
    setAddModal(true);
  };
  // newBoard
  const getNewBoard = (e) => {
    setNewBoard(e.target.value);
  };
  const handlerAddNewBoard = () => {
    addBoard(newBoard);
    setAddModal(false);
  };
  return (
    <>
      <header>
        <div className={`${style.nav} row`}>
          <div>
            <div className="d-flex align-items-center">
              <Link to="/">
                <span className={style.home}>
                  <FontAwesomeIcon icon={faHome} className={style.colorIcon} />
                </span>
              </Link>

              <div className="position-relative" ref={refDropdown}>
                <div className={style.boards} onClick={() => setDropdown(true)}>
                  <FontAwesomeIcon
                    icon={faColumns}
                    className={style.colorIcon}
                  />{" "}
                  Boards
                </div>

                {showDropdown ? (
                  <div className={style.dropdown}>
                    <ul>
                      {boards.map((board) => {
                        return (
                          <li
                            key={board.id}
                            className="py-2 px-4"
                            onClick={() => {
                              setDropdown(false);
                            }}
                          >
                            <NavLink to={"/board/" + board.id}>
                              {board.name}
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div>
            <span>
              <img
                src="https://a.trellocdn.com/prgb/dist/images/header-logo-2x.01ef898811a879595cea.png"
                alt=""
                className={style.logo}
              />
            </span>
          </div>

          <div>
            <span className={style.plus} onClick={showModal}>
              <FontAwesomeIcon icon={faPlus} className={style.colorIcon} />
            </span>
          </div>
        </div>
      </header>
      <ModalAddNewBoard
        getNewBoard={getNewBoard}
        newBoard={newBoard}
        openAddModal={openAddModal}
        handlerAddNewBoard={handlerAddNewBoard}
        handleClose={handleClose}
      />
    </>
  );
}
Header.propTypes = {
  boards: PropTypes.array,
  addBoard: PropTypes.func,
};
export default Header;
