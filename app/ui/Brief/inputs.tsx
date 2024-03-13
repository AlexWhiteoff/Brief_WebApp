import {
    Input,
    FormChunk,
    InputAttr,
    SelectAttr,
    TextareaAttr,
    FormData,
} from "@/app/lib/definitions";
import styles from "@/app/ui/brief.module.css";
import { montserrat, roboto } from "@/app/ui/fonts";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { DefaultColors } from "tailwindcss/types/generated/colors";
import BriefContext from "./Context/briefContext";
import {ColorContext, ColorsContext} from "./Context/ColorContext";

const FieldInput = ({
    attr,
    required,
}: {
    attr: InputAttr;
    required?: boolean | undefined;
}) => {
    return (
        <input
            type={attr.type}
            name={attr.name}
            className="transition-all w-full px-4 py-2 leading-tight text-gray-700 border-b-2 border-sky-400 rounded-md focus:border-b-3 focus:border-blue-500"
            placeholder={attr.placeholder}
            required={required}
        />
    );
};

const DateInput = ({
    label,
    attr,
    required,
}: {
    label?: string | undefined;
    attr: InputAttr;
    required?: boolean | undefined;
}) => {
    return (
        <label>
            {label && (
                <span
                    className={`${montserrat.className} text-base text-gray-800 mx-4`}
                >
                    {label}
                </span>
            )}
            <input
                type={attr.type}
                name={attr.name}
                className="transition-all px-4 py-2 leading-tight text-gray-700 border-b-2 border-sky-400 rounded-md focus:border-b-3 focus:border-blue-500"
                placeholder={attr.placeholder}
                required={required}
            />
        </label>
    );
};

const RadioInput = ({
    label,
    attr,
    required,
}: {
    label?: string | undefined;
    attr: InputAttr;
    required?: boolean | undefined;
}) => {
    return (
        <label className="flex items-top w-full sm:w-1/3 md:w-1/4 lg:w-1/6 p-2">
            <input
                type={attr.type}
                name={attr.name}
                className={`${styles.radioButton} appearance-none border border-gray-300 rounded-full checked:bg-blue-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500`}
                onChange={attr.onChange}
                required={required}
            />
            {label && (
                <span className={`${montserrat.className} ml-2 text-gray-700`}>
                    {label}
                </span>
            )}
        </label>
    );
};

const CheckboxInput = ({
    label,
    attr,
    required,
}: {
    label?: string | undefined;
    attr: InputAttr;
    required?: boolean | undefined;
}) => {
    return (
        <label className="flex items-top w-full sm:w-1/3 md:w-1/4 lg:w-1/6 p-2">
            <input
                type={attr.type}
                name={attr.name}
                className={`${styles.checkbox} appearance-none border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent`}
                required={required}
            />
            {label && (
                <span className={`${montserrat.className} ml-2 text-gray-700`}>
                    {label}
                </span>
            )}
        </label>
    );
};

const Textarea = ({
    attr,
    required,
}: {
    attr: TextareaAttr;
    required?: boolean | undefined;
}) => {
    return (
        <textarea
            name={attr.name}
            className="resize-none transition-all border border-sky-400 rounded-md p-2 w-full h-32 focus:ring-2 focus:ring-blue-500"
            placeholder={attr.placeholder}
            required={required}
        />
    );
};

const Select = ({
    attr,
    required,
}: {
    attr: SelectAttr;
    required?: boolean | undefined;
}) => {
    return (
        <select
            name={attr.name}
            className="block appearance-none border rounded-md w-full py-2 px-3 leading-tight border-sky-400 focus:ring-2 focus:ring-blue-500"
            defaultValue={"default"}
            required={required}
        >
            <option value={"default"} disabled hidden>
                Виберіть варіант...
            </option>
            {attr.options.map((item, index) => (
                <option key={index} value={item.value}>
                    {item.label}
                </option>
            ))}
        </select>
    );
};

const ColorPicker = ({
    attr,
    required,
}: {
    attr: InputAttr;
    required?: boolean | undefined;
}) => {
    const colorsContext = useContext(ColorsContext);
    const colorContext = useContext(ColorContext);

    if (!colorsContext || !colorContext) {
        return null;
    }

    const { allColors, setAllColors  } = colorsContext;
    const { selectedColor, setSelectedColor } = colorContext;

    const handleColorPicker = () => {
        if (allColors.length < 3) setAllColors([...allColors, selectedColor]);
    };

    const handleColorDelete = (color: string) => {
        setAllColors(allColors.filter((c) => c !== color));
    };

    return (
        <div className="flex flex-col w-full text-sm font-medium">
            <div>
                <div className="flex gap-4 my-2">
                    <input
                        type={attr.type}
                        className="block border rounded-lg w-1/3 h-10 leading-tight focus:ring-2 hover:bg-blue-500 focus:ring-blue-500"
                        onChange={(e) => {
                            setSelectedColor(e.target.value);
                        }}
                        placeholder={attr.placeholder}
                        value={attr.value}
                    />

                    <button
                        type="button"
                        className="flex h-10 items-center rounded-lg bg-blue-600 hover:bg-blue-500 px-4 text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        onClick={handleColorPicker}
                    >
                        <span
                            className={`${montserrat.className} hidden md:block`}
                        >
                            Додати колір
                        </span>{" "}
                        <PlusIcon className="h-5 md:ml-4" />
                    </button>
                </div>
            </div>
            <div>
                {allColors.map((color, index) => (
                    <div className="flex items-center gap-4 my-3" key={index}>
                        <div
                            className="w-1/3 h-10 rounded-lg bg-gray-200 cursor-pointer"
                            style={{
                                backgroundColor: color,
                            }}
                        ></div>
                        <span
                            className={`${montserrat.className} flex w-20 mr-4 justify-center text-gray-700`}
                        >
                            {color}
                        </span>
                        <button
                            type="button"
                            className="rounded-md border p-2 hover:bg-red-500 hover:text-white"
                            onClick={() => handleColorDelete(color)}
                        >
                            <TrashIcon className="w-5" />
                        </button>
                        <input
                            type="hidden"
                            className="hidden"
                            value={color}
                            name={`${attr.name}_${allColors.indexOf(color)}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

const InputSwitch = ({
    input,
    required,
}: {
    input: Input;
    required?: boolean | undefined;
}) => {
    switch (input.type) {
        case "field":
            return (
                <FieldInput
                    attr={input.attr as InputAttr}
                    required={required}
                />
            );

        case "date":
            return (
                <DateInput
                    label={input.alt}
                    attr={input.attr as InputAttr}
                    required={required}
                />
            );
        case "radio":
            return (
                <RadioInput
                    label={input.alt}
                    attr={input.attr as InputAttr}
                    required={required}
                />
            );
        case "checkbox":
            return (
                <CheckboxInput
                    label={input.alt}
                    attr={input.attr as InputAttr}
                    required={required}
                />
            );
        case "textarea":
            return (
                <Textarea
                    attr={input.attr as TextareaAttr}
                    required={required}
                />
            );
        case "select":
            return (
                <Select attr={input.attr as SelectAttr} required={required} />
            );
        case "color":
            return (
                <ColorPicker
                    attr={input.attr as InputAttr}
                    required={required}
                />
            );
        default:
            break;
    }
};

export function FormChuck(data: FormChunk) {
    const condition = data.condition !== undefined ? data.condition : true;

    if (condition)
        return (
            <div className="my-4">
                <div className="flex flex-col text-sm font-medium">
                    {data.label && (
                        <span
                            className={`${montserrat.className} ${
                                data.required && styles.required
                            } text-base text-gray-800 mb-2`}
                        >
                            {data.label}
                        </span>
                    )}
                    <div className="flex flex-row flex-wrap gap-4">
                        {data.input.map((item, index) => (
                            <InputSwitch
                                key={index}
                                input={item}
                                required={data.required}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
}

export function Fieldset({
    header,
    chunks,
}: {
    header: string;
    chunks: FormChunk[];
}) {
    return (
        <fieldset className="my-4">
            <legend
                className={`${roboto.className} text-2xl font-semibold text-gray-800 mb-2`}
            >
                {header}
            </legend>

            {chunks.map((chunk, index) => (
                <FormChuck
                    key={index}
                    label={chunk.label}
                    input={chunk.input}
                    required={chunk.required}
                    condition={chunk.condition}
                />
            ))}
        </fieldset>
    );
}

export function FormContent({ data }: { data: FormData[] }) {
    const briefContext = useContext(BriefContext);
    const [selectedColor, setSelectedColor] = useState<string>("#000000");
    const [allColors, setAllColors] = useState<Array<string>>([]);

    if (!briefContext) {
        return null;
    }

    const { isSiteExist, setIsSiteExist } = briefContext;

    return (
        <ColorsContext.Provider value={{ allColors, setAllColors }}>
            <div
                className={`${montserrat.className} ${styles.required} italic text-slate-500`}
            >
                відмічено пункти, що обов&apos;язкові до заповнення
            </div>

            {data.map((item, index) => (
                <Fieldset
                    key={index}
                    header={item.header}
                    chunks={item.chunks}
                />
            ))}
            <div className="my-4 flex gap-4">
                <button
                    type="reset"
                    className="bg-gray-300 hover:bg-gray-200 text-gray-800 text-sm font-medium px-4 rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    onClick={() => {
                        setAllColors([]);
                        setIsSiteExist(null);
                    }}
                >
                    Очистити
                </button>
                <button
                    type="submit"
                    className="flex h-10 items-center rounded-lg bg-blue-600 hover:bg-blue-500 px-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                    Відправити
                </button>
            </div>
        </ColorsContext.Provider>
    );
}
