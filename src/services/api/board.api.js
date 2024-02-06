export const fetchBoardList = () => {
  return fetch('/api/board', {
    method: 'get',
  }).then((response) => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  });
};

export const fetchBoardView = (id) => {
  return fetch(`/api/board/${id}`, {
    method: 'get',
  }).then((response) => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  });
};

export const saveBoard = (form) => {
  return fetch('/api/board', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form),
  }).then((response) => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  });
};

export const deleteBoard = (id) => {
  return fetch(`/api/board/${id}`, {
    method: 'delete',
  }).then((response) => {
    if (!response.ok) throw new Error(response.status);
  });
};