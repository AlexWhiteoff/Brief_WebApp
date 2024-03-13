// This file contains type definitions for data.

import { ChangeEventHandler } from "react";

export type InputAttr = {
    type:
        | "text"
        | "email"
        | "password"
        | "tel"
        | "date"
        | "month"
        | "time"
        | "radio"
        | "checkbox"
        | "color";
    name: string;
    value?: string;
    placeholder?: string | undefined;
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
};

export type SelectAttr = {
    name: string;
    options: SelectOptions[];
};

export type TextareaAttr = {
    name: string;
    value?: string;
    placeholder?: string | undefined;
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
};

export type SelectOptions = {
    label: string;
    value: string;
};

export type Input = {
    type:
        | "field"
        | "date"
        | "radio"
        | "checkbox"
        | "textarea"
        | "select"
        | "color";
    alt?: string;
    attr: InputAttr | SelectAttr | TextareaAttr;
};

export type FormChunk = {
    label?: string;
    input: Input[];
    required?: boolean | undefined;
    condition?: boolean | null;
};

export type FormData = {
    header: string;
    chunks: FormChunk[];
}
