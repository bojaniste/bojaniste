import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Board from "../Board/Board";
import StoreApi from "../../utilis/storeApi";
import TrelloApi from "../../api/TrelloApi";

function BoardPage() {
  const [lists, setLists] = useState([]);
  const [cards, setCards] = useState([]);
  const[comments,setComments]=useState([])

  // board id
  let { id } = useParams();
  useEffect(() => {
    fetchLists();
    fetchCards();
  }, [id,comments]);

  const fetchLists = () => {
    TrelloApi.fetchLists(id).then((data) => {
      setLists(data);
    });
  };
  const fetchCards = () => {
    TrelloApi.fetchCards(id).then((data) => {
      setCards(data);
    
    });
  };

  const addList = (value) => {
    TrelloApi.addList(id, value).then(() =>
     fetchLists());
  };

  const addCards = (value, listId) => {
    TrelloApi.addCards(value, listId).then(() => {
      fetchCards();
    });
  };

  const updateListName = (listName, listId) => {
    TrelloApi.updateListName(listName, listId).then(() => {
      fetchLists();
    });
  };

  const updateCards = (cardId,cardContent) => {
    TrelloApi.updateCards(cardId,cardContent).then(() => {
      fetchCards();
    });
  };
  const deleteCard = (cardId) => {
    TrelloApi.deleteCard(cardId).then(() => {
      fetchCards();
    });
  };
  const addComment = (cardId,text) => {
    TrelloApi.addComment(cardId,text).then(() => {
    });
    getComment(cardId)
  };
  const getComment = (cardId) => {
    TrelloApi.getComment(cardId).then((data) => {
    setComments(data)
    });
  };
  const deleteComment = (cardId,idAction) => {
    TrelloApi.deleteComment(cardId,idAction).then(() => {
     getComment(cardId)
     fetchCards()
    });
  };
  const updateComment = (cardId,idAction,text) => {
    TrelloApi.updateComment(cardId,idAction,text).then(() => {
     getComment(cardId)

    });
  };
  const archiveList = (idList) => {
    TrelloApi.archiveList(idList).then(() => {
    });
    fetchLists()
  };

  return (
    <StoreApi.Provider
      value={{
        addList,
        fetchLists,
        addCards,
        fetchCards,
        updateListName,
        updateCards,
        deleteCard,
        addComment,
        getComment,
        comments,
        deleteComment,
        updateComment,
        archiveList,
      
      }}
    >
      <Board lists={lists} cards={cards} />
       </StoreApi.Provider>
  );
}

export default BoardPage;
