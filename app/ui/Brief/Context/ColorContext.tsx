import React, { Dispatch, SetStateAction } from "react";

type ColorsContextType = {
    allColors: string[];
    setAllColors: Dispatch<SetStateAction<string[]>>;
};

type ColorContextType = {
    selectedColor: string;
    setSelectedColor: Dispatch<SetStateAction<string>>;
};

export const ColorsContext = React.createContext<ColorsContextType | null>(null);
export const ColorContext = React.createContext<ColorContextType | null>(null);

