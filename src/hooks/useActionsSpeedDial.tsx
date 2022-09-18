import {
  MdPalette
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/App.store";
import { useEffect } from "react";

interface IAction {
  icon: JSX.Element;
  name: string;
  onClick(): void;
  show: boolean;
}

export default function useActionsSpeedDial() {
  const dispatch = useDispatch();

  const actions: IAction[] = [
    {
      icon: <MdPalette />,
      name: "Alterar tema",
      onClick() {
        dispatch(toggleTheme());
      },
      show: true,
    }
  ];

  return actions;
}
