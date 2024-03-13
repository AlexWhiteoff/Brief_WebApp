'use server';

import { z } from "zod";

const FormSchema = z.object({
    id: z.string(),
    date: z.string(),
    name: z.string({invalid_type_error: 'Будь ласка, заповніть поле'}),
    // email: z.string({invalid_type_error: 'Будь ласка, заповніть поле'}).isEmail,
});

export async function newBrief(formData: FormData) {
    const rawFormData = {};

    console.log(formData);
}