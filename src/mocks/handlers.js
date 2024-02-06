import { HttpResponse, http } from 'msw'
 
const getId = (list) => {
  let result = '';
  const usedStrings = list.map(({ id }) => id);
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  do {
    result = '';
    for (let i = 0; i < 3; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  } while (usedStrings.includes(result));

  return result; 
};

export const generateRandomDate = () => {
  const startDate = new Date('2020-01-01');
  const endDate = new Date(); // 현재 날짜
  const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
  const randomDateTime = new Date(randomTime);
  
  const year = randomDateTime.getFullYear();
  const month = String(randomDateTime.getMonth() + 1).padStart(2, '0');
  const day = String(randomDateTime.getDate()).padStart(2, '0');
  const hours = String(randomDateTime.getHours()).padStart(2, '0');
  const minutes = String(randomDateTime.getMinutes()).padStart(2, '0');
  const seconds = String(randomDateTime.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

const boardList = [
  { subject: 'Snow', content: 'Jon', date: generateRandomDate() },
  { subject: 'Lannister', content: 'Cersei', date: generateRandomDate() },
  { subject: 'Lannister', content: 'Jaime', date: generateRandomDate() },
  { subject: 'Stark', content: 'Arya', date: generateRandomDate() },
  { subject: 'Targaryen', content: 'Daenerys', date: generateRandomDate() },
  { subject: 'Melisandre', content: null, date: generateRandomDate() },
  { subject: 'Clifford', content: 'Ferrara', date: generateRandomDate() },
  { subject: 'Frances', content: 'Rossini', date: generateRandomDate() },
  { subject: 'Roxie', content: 'Harvey', date: generateRandomDate() },
].reduce((acc, board) => {
  board.id = getId(acc);
  acc.push(board);
  return acc; 
}, []).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const handlers = [];