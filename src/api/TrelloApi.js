const apiKey = "7f308496b986f45894011acec079edd9";
const apiToken ="c4a94ae7db92564dbf18e0c44110a1661aacf7478e1d69a8370976f1cf6fa9da";

class TrelloApi {
  static fetchBoards() {
    return fetch(
      `https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
    ).then((res) => res.json());
  }
  static fetchLists(boardId) {
    return fetch(
      `https://api.trello.com/1/boards/${boardId}/lists?key=${apiKey}&token=${apiToken}&filter=open`
    ).then((res) => res.json());
  }
  static fetchCards(boardId) {
    return fetch(
      `https://api.trello.com/1/boards/${boardId}/cards?key=${apiKey}&token=${apiToken}`
    ).then((res) => res.json());
  }
  static addList(boardId, value) {
    return fetch(
      `https://api.trello.com/1/boards/${boardId}/lists?key=${apiKey}&token=${apiToken}&name=${value}`,
      {
        method: "post",
      }
    ).then((res) => res.json());
  }
  static addCards(value, listId) {
    return fetch(
      `https://api.trello.com/1/cards?key=${apiKey}&token=${apiToken}&idList=${listId}&name=${value}`,
      {
        method: "post",
      }
    ).then((res) => res.json());
  }
  static updateListName(listName, listId) {
    return fetch(
      `https://api.trello.com/1/lists/${listId}?key=${apiKey}&token=${apiToken}&name=${listName}`,
      {
        method: "put",
      }
    ).then((res) => res.json());
  }
  static updateCards(cardId, cardContent) {
    return fetch(
      `https://api.trello.com/1/cards/${cardId}?key=${apiKey}&token=${apiToken}&name=${cardContent}`,
      {
        method: "put",
      }
    ).then((res) => res.json());
  }
  static deleteCard(cardId) {
    return fetch(
      `https://api.trello.com/1/cards/${cardId}?key=${apiKey}&token=${apiToken}`,
      {
        method: "delete",
      }
    ).then((res) => res.json());
  }
  static addBoard(name) {
    return fetch(
      `https://api.trello.com/1/boards/?key=${apiKey}&token=${apiToken}&name=${name}`,
      {
        method: "post",
      }
    ).then((res) => res.json());
  }
  static addComment(cardId,text) {
    return fetch( 
  `https://api.trello.com/1/cards/${cardId}/actions/comments?key=${apiKey}&token=${apiToken}&text=${text}`,
      {
        method: "post",
      }
    ).then((res) => res.json());
  }
  static getComment(cardId) {
    return fetch( 
  `https://api.trello.com/1/cards/${cardId}/actions?key=${apiKey}&token=${apiToken}`,
      {
        method: "get",
      }
    ).then((res) => res.json());
  }
  static deleteComment(cardId,idAction) {
    return fetch( 
  `https://api.trello.com/1/cards/${cardId}/actions/${idAction}/comments?key=${apiKey}&token=${apiToken}`,
      {
        method: "delete",
      }
    ).then((res) => res.json(
    ));
  }
  static updateComment(cardId,idAction,text) {
    return fetch( 
  `https://api.trello.com/1/cards/${cardId}/actions/${idAction}/comments?key=${apiKey}&token=${apiToken}&text=${text}`,
      {
        method: "put",
      }
    ).then((res) => res.json(
     
    ));
  }
  static archiveList(idList) {
    return fetch( `https://api.trello.com/1/lists/${idList}/closed?key=${apiKey}&token=${apiToken}&value=true`,
      {
        method: "put",
      }
    ).then((res) => res.json(
     console.log(res)
    ));
  }
}

export default TrelloApi;
