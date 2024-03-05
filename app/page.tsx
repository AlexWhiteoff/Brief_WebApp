"use client";

import Image from "next/image";
import styles from "@/app/ui/brief.module.css";
import { montserrat, roboto } from "@/app/ui/fonts";
import { Suspense, useEffect, useState } from "react";
import BriefForm from "./ui/Brief/briefForm";

export default function Page() {
    return (
        <main className="">
            <h1 className={`${roboto.className} text-3xl font-bold text-gray-700 mb-6`}>
                Бриф на розробку Веб додатку
            </h1>
            <Suspense>
                <BriefForm />
            </Suspense>
        </main>
    );
}
