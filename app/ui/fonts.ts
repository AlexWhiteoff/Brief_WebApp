import { Inter, Montserrat, Roboto } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const montserrat = Montserrat({ subsets: ["cyrillic"], style: ["normal", "italic"], display: "swap" });
export const roboto = Roboto({ subsets: ["cyrillic"], weight: ["400", "700"], display: "swap" });
