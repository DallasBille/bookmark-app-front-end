class ArticleAdapter {
  static deleteArticle = articleDelete => {
    return fetch(`http://localhost:3000/articles/${articleDelete.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(articleDelete)
    });
  };

  static postArticle = newArticle => {
    return fetch(`http://localhost:3000/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(newArticle)
    }).then(res => res.json());
  };

  static updateNotes = (noteState, articleObj) => {
    return fetch(`http://localhost:3000/articles/${articleObj.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ article: { summary: noteState } })
    }).then(res => res.json());
  };

  static updateUnreadToRead = readArticle => {
    return fetch(`http://localhost:3000/articles/${readArticle.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ article: { read: "Read" } })
    }).then(res => res.json());
  };
  static updateReadToUnread = unreadArticle => {
    return fetch(`http://localhost:3000/articles/${unreadArticle.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ article: { read: "Unread" } })
    }).then(res => res.json());
  };
}

export default ArticleAdapter;
