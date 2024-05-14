import { create } from "zustand";
import { boardData } from "../data/data";

const useBoard = create((set) => ({
  board: boardData,
  setBoard: (board) => set((state) => ({ board })),
}));

export default useBoard;  // we are extractinf or modifying data that we are getting frojm data.js ans give babk to board.js