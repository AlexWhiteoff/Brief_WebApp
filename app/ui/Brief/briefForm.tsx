import { newBrief } from "@/app/lib/actions";
import { useState } from "react";
import BriefContext from "@/app/ui/Brief/Context/briefContext";
import BriefScript from "@/app/ui/Brief/briefScript";

export default function BriefForm() {
    const initialState = { message: null, errors: {} };
    // const [state, dispatch] = useFormState(createInvoice, initialState);
    const [isSiteExist, setIsSiteExist] = useState<boolean | null>(null);

    return (
        <form action={newBrief}>
            <BriefContext.Provider value={{ isSiteExist, setIsSiteExist }}>
                <BriefScript />
            </BriefContext.Provider>
        </form>
    );
}
