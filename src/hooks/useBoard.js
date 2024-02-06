import { useMutation, useQuery } from "@tanstack/react-query"
import * as boardApi from '../services/api/board.api';
import { useNavigate } from "react-router";

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
  const navigate = useNavigate();

  return useMutation({
    mutationFn(form) {
      return boardApi.saveBoard(form);
    },

    onSuccess(form) {
      alert('등록되었습니다');
      navigate(`/view/${form.id}`);
    },

    onError() {
      alert('빈값이 존재합니다.');
    }
  })
};

export const useDeleteBoardMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn(id) {
      return boardApi.deleteBoard(id);
    },

    onSuccess() {
      alert('삭제되었습니다.')
      navigate('/');
    },
  })
};