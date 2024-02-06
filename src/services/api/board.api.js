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

export const saveBoard = () => {
  return fetch('/api/board', {
    method: 'post'
  }).then((response) => {
    if (!response.ok) throw new Error(response.status);
  });
};