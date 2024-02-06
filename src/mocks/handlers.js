import { HttpResponse, http } from 'msw'
 
const boardList = [
  { id: 1, subject: 'Snow', author: 'Jon', date: 35 },
  { id: 2, subject: 'Lannister', author: 'Cersei', date: 42 },
  { id: 3, subject: 'Lannister', author: 'Jaime', date: 45 },
  { id: 4, subject: 'Stark', author: 'Arya', date: 16 },
  { id: 5, subject: 'Targaryen', author: 'Daenerys', date: null },
  { id: 6, subject: 'Melisandre', author: null, date: 150 },
  { id: 7, subject: 'Clifford', author: 'Ferrara', date: 44 },
  { id: 8, subject: 'Frances', author: 'Rossini', date: 36 },
  { id: 9, subject: 'Roxie', author: 'Harvey', date: 65 },
];

export const handlers = [
  http.get('/api/board', () => {
    return HttpResponse.json(boardList);
  }),

  http.get('/api/board/:id', ({ params: { id } }) => {
    const board = boardList.find((board) => board.id === id);

    if (board) {
      throw new HttpResponse(null, { status: 400 })
    }

    return HttpResponse.json(board);
  }),

  http.post('/api/board', ({ request }) => {
    const form = request.json();

    if ([form.password, form.subject, form.content].some(value => !value)) {
      throw new HttpResponse(null, { status: 400 })
    }

    return new HttpResponse(null, { status: 200 });
  }),
];