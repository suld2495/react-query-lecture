import { useMutation, useQuery } from "@tanstack/react-query"
import * as boardApi from '../services/api/board.api';

export const useFetchBoardListQuery = () => {
  return useQuery({
    queryKey: ['board'],
    queryFn() {
      return boardApi.fetchBoardList();
    }
  });
};

export const useFetchBoardView = (id) => {
  return useQuery({
    queryKey: ['board', id],
    queryFn() {
      return boardApi.fetchBoardView(id);
    },
  })
};

export const useSaveBoardMutation = () => {
  return useMutation({
    mutationFn(form) {
      return boardApi.saveBoard(form);
    },

    onError() {
      alert('빈값이 존재합니다.');
    }
  })
};
