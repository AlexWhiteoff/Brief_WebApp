import React, { Dispatch, SetStateAction } from "react";

type BriefContextType = {
    isSiteExist: boolean | null;
    setIsSiteExist: Dispatch<SetStateAction<boolean | null>>;
};

const BriefContext = React.createContext<BriefContextType | null>(null);

export default BriefContext;
