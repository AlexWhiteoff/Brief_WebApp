import { Color } from "@/app/lib/definitions";
import styles from "@/app/ui/brief.module.css";
import { montserrat, roboto } from "@/app/ui/fonts";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function BriefForm() {
    const [isSiteExist, setIsSiteExist] = useState<Boolean | null>(null);
    const [selectedColor, setSelectedColor] = useState<string>("#000000");
    const [allColors, setAllColors] = useState<Array<string>>([]);

    const websiteCriteriaList = [
        { name: "design", label: "Дизайн" },
        { name: "interface", label: "Інтерфейс (UI/UX)" },
        { name: "speedAndLoading", label: "Швидкодія та завантаження сторінок" },
        { name: "navigation", label: "Навігація" },
        { name: "content", label: "Контент" },
        { name: "mobileCompatibility", label: "Мобільна сумісність" },
        { name: "security", label: "Безпека" },
        { name: "seo", label: "SEO (пошукова оптимізація)" },
        { name: "deviceCompatibility", label: "Сумісність з різними пристроями/браузерами" },
        { name: "accessControlAndAuthentication", label: "Контроль доступу та аутентифікація" },
        { name: "customerSupport", label: "Підтримка клієнтських запитів" },
        { name: "adaptiveDesign", label: "Адаптивний дизайн" },
    ];
    const websiteTypeList = [
        { name: "onePage", label: "Односторінковий сайт" },
        { name: "businessCard", label: "Сайт візитівка" },
        { name: "landingPage", label: "Landing page" },
        { name: "onlineStore", label: "Інтернет магазин" },
        { name: "catalogWebsite", label: "Сайт каталогів" },
        { name: "corporateWebsite", label: "Корпоративний сайт" },
        { name: "uniqueWebsite", label: "Унікальний сайт" },
        { name: "frameworkWebsite", label: "Сайт на Framework" },
    ];
    const designEmotions = [
        { name: "strictCorporateStyle", label: "Суворий корпоративний стиль" },
        { name: "brightEye-catchingDesign", label: "Яскравий, помітний дизайн" },
        { name: "positiveCheerfulDesign", label: "Позитивний і веселий дизайн" },
        { name: "imageRichDesign", label: "Дизайн насичений зображеннями" },
        { name: "dynamicSiteAnimationsVideos", label: "Динамічний сайт: анімації та відеофони" },
        { name: "staticSiteNoAnimations", label: "Статичний сайт: без анімацій та відволікаючих елементів" },
        { name: "minimalisticDesign", label: "Дизайн з акцентом на мінімалізм" },
        { name: "functionalDesign", label: "Дизайн з акцентом на функціональність" },
    ];
    const animationTypeList = [
        { name: "none", label: "Без Анімації" },
        { name: "icons", label: "Іконки" },
        { name: "pageTransition", label: "Перехід між сторінками" },
        { name: "siteCover", label: "Заставка перед сайтом" },
        { name: "logo", label: "Логотип" },
        { name: "menu", label: "Меню" },
        { name: "designerChoice", label: "На розсуд дизайнера" },
    ];
    const graphicTypeList = [
        { name: "bitmap", label: "Растрова графіка" },
        { name: "svg", label: "Векторна графіка (SVG)" },
        { name: "3DGraphics", label: "3D графіка" },
    ];

    function handleColorPicker() {
        if (allColors.length < 3) setAllColors([...allColors, selectedColor]);
    }

    function handleColorDelete(color: string) {
        setAllColors(allColors.filter((c) => c !== color));
    }

    return (
        <form>
            <div className={`${montserrat.className} ${styles.required} italic text-slate-500`}>
                відмічено пункти, що обов&apos;язкові до заповнення
            </div>

            <fieldset className="my-4">
                <legend className={`${roboto.className} text-2xl font-semibold text-gray-800 mb-2`}>
                    Спосіб зв&apos;язку
                </legend>
                <div className="my-4">
                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className={`${montserrat.className} ${styles.required} text-base text-gray-800 mb-2`}>
                            Як до Вас звертатись?
                        </span>
                        <input
                            type="text"
                            name="name"
                            className="transition-all px-4 py-2 leading-tight text-gray-700 border-b-2 border-sky-400 rounded-md focus:border-b-3 focus:border-blue-500"
                            placeholder="Ваша відповідь..."
                            required
                        />
                    </label>
                </div>
                <div className="my-4">
                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className={`${montserrat.className} ${styles.required} text-base text-gray-800 mb-2`}>
                            Яка ваша електронна пошта?
                        </span>
                        <input
                            type="email"
                            name="email"
                            className="transition-all px-4 py-2 leading-tight text-gray-700 border-b-2 border-sky-400 rounded-md focus:border-b-3 focus:border-blue-500"
                            placeholder="Ваша відповідь..."
                            required
                        />
                    </label>
                </div>
                <div className="my-4">
                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className={`${montserrat.className} ${styles.required} text-base text-gray-800 mb-2`}>
                            Який ваш номер телефону?
                        </span>
                        <input
                            type="tel"
                            name="phone_number"
                            className="transition-all px-4 py-2 leading-tight text-gray-700 border-b-2 border-sky-400 rounded-md focus:border-b-3 focus:border-blue-500"
                            placeholder="+380-00-000-00-00"
                            required
                        />
                    </label>
                </div>
                <div className="my-4">
                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className={`${montserrat.className} ${styles.required} text-base text-gray-800 mb-2`}>
                            Який час вам найбільше підходить для зв&apos;язку?
                        </span>
                        <div>
                            <label>
                                <span className={`${montserrat.className} text-base text-gray-800 mx-4`}>Від:</span>
                                <input
                                    type="time"
                                    name="time_from"
                                    className="transition-all px-4 py-2 leading-tight text-gray-700 border-b-2 border-sky-400 rounded-md focus:border-b-3 focus:border-blue-500"
                                    required
                                />
                            </label>
                            <label>
                                <span className={`${montserrat.className} text-base text-gray-800 mx-4`}>До:</span>
                                <input
                                    type="time"
                                    name="time_to"
                                    className="transition-all px-4 py-2 leading-tight text-gray-700 border-b-2 border-sky-400 rounded-md focus:border-b-3 focus:border-blue-500"
                                    required
                                />
                            </label>
                        </div>
                    </label>
                </div>
            </fieldset>

            <fieldset className="my-4">
                <legend className={`${roboto.className} text-2xl font-semibold text-gray-800 mb-2`}>
                    Інформація про компанію
                </legend>
                <div className="my-4">
                    <div className="flex flex-col text-sm font-medium text-gray-700">
                        <span className={`${montserrat.className} ${styles.required} text-base text-gray-800 mb-2`}>
                            Чи у вас є зараз власний веб-сайт?
                        </span>
                        <div className="flex">
                            <label className="flex items-center mx-4">
                                <input
                                    type="radio"
                                    name="is_site_already_owned"
                                    className={`${styles.radioButton} appearance-none border border-gray-300 rounded-full checked:bg-blue-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    onChange={() => setIsSiteExist(true)}
                                    required
                                />
                                <span className={`${montserrat.className} ml-2 text-gray-700`}>Так</span>
                            </label>
                            <label className="flex items-center mx-4">
                                <input
                                    type="radio"
                                    name="is_site_already_owned"
                                    className={`${styles.radioButton} appearance-none border border-gray-300 rounded-full checked:bg-blue-500 checked:border-transparent`}
                                    onChange={() => setIsSiteExist(false)}
                                    required
                                />
                                <span className={`${montserrat.className} ml-2 text-gray-700`}>Ні</span>
                            </label>
                        </div>
                    </div>
                </div>
                {isSiteExist ? (
                    <>
                        <div className="my-4">
                            <label className="flex flex-col text-sm font-medium text-gray-700">
                                <span
                                    className={`${montserrat.className} ${styles.required} text-base text-gray-800 mb-2`}
                                >
                                    Яка адреса вашого веб-сайту?
                                </span>
                                <input
                                    type="text"
                                    name="owned_site_url"
                                    className="transition-all px-4 py-2 leading-tight text-gray-700 border-b-2 border-sky-400 rounded-md focus:border-b-3 focus:border-blue-500"
                                    placeholder="Ваша відповідь..."
                                    required
                                />
                            </label>
                        </div>
                        <div className="my-4">
                            <label className="flex flex-col text-sm font-medium text-gray-700">
                                <span
                                    className={`${montserrat.className} ${styles.required} text-base text-gray-800 mb-2`}
                                >
                                    Що саме вам подобається на вашому веб-сайті?
                                </span>

                                <div className="flex flex-wrap gap-4">
                                    {websiteCriteriaList.map((criteria) => (
                                        <div
                                            key={`owned_site_likes_${criteria.name}`}
                                            className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6 p-2"
                                        >
                                            <label className="flex items-top">
                                                <input
                                                    type="checkbox"
                                                    name="owned_site_likes"
                                                    className={`${styles.checkbox} appearance-none border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent`}
                                                    required
                                                />
                                                <span className={`${montserrat.className} ml-2 text-gray-700`}>
                                                    {criteria.label}
                                                </span>
                                            </label>
                                        </div>
                                    ))}
                                </div>

                                <input
                                    type="text"
                                    name="owned_site_likes"
                                    className="transition-all px-4 py-2 my-2 leading-tight text-gray-700 border-b-2 border-sky-400 rounded-md focus:border-b-3 focus:border-blue-500"
                                    placeholder="Інше..."
                                    required
                                />
                            </label>
                        </div>
                        <div className="my-4">
                            <div className="flex flex-col text-sm font-medium text-gray-700">
                                <span
                                    className={`${montserrat.className} ${styles.required} text-base text-gray-800 mb-2`}
                                >
                                    Що саме вам не подобається на вашому веб-сайті?
                                </span>

                                <div className="flex flex-wrap gap-4">
                                    {websiteCriteriaList.map((criteria) => (
                                        <div
                                            key={`owned_site_dislikes_${criteria.name}`}
                                            className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6 p-2"
                                        >
                                            <label className="flex items-top">
                                                <input
                                                    type="checkbox"
                                                    name="owned_site_dislikes"
                                                    className={`${styles.checkbox} appearance-none border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent`}
                                                    required
                                                />
                                                <span className={`${montserrat.className} ml-2 text-gray-700`}>
                                                    {criteria.label}
                                                </span>
                                            </label>
                                        </div>
                                    ))}
                                </div>

                                <input
                                    type="text"
                                    name="owned_site_dislikes"
                                    className="transition-all px-4 py-2 my-2 leading-tight text-gray-700 border-b-2 border-sky-400 rounded-md focus:border-b-3 focus:border-blue-500"
                                    placeholder="Інше..."
                                    required
                                />
                            </div>
                        </div>
                    </>
                ) : !isSiteExist && isSiteExist !== null ? (
                    <>
                        <div className="my-4">
                            <label className="flex flex-col text-sm font-medium text-gray-700">
                                <span
                                    className={`${montserrat.className} ${styles.required} text-base text-gray-800 mb-2`}
                                >
                                    Які конкретно сайти вам подобаються?
                                </span>
                                <input
                                    type="text"
                                    name="preferred_sites"
                                    className="transition-all px-4 py-2 leading-tight text-gray-700 border-b-2 border-sky-400 rounded-md focus:border-b-3 focus:border-blue-500"
                                    placeholder="Ваша відповідь..."
                                    required
                                />
                            </label>
                        </div>
                        <div className="my-4">
                            <div className="flex flex-col text-sm font-medium text-gray-700">
                                <span
                                    className={`${montserrat.className} ${styles.required} text-base text-gray-800 mb-2`}
                                >
                                    Що саме вам в них подобається?
                                </span>

                                <div className="flex flex-wrap gap-4">
                                    {websiteCriteriaList.map((criteria) => (
                                        <div
                                            key={`preffered_site_likes_${criteria.name}`}
                                            className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6 p-2"
                                        >
                                            <label className="flex items-top">
                                                <input
                                                    type="checkbox"
                                                    name="preffered_site_likes"
                                                    className={`${styles.checkbox} appearance-none border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent`}
                                                    required
                                                />
                                                <span className={`${montserrat.className} ml-2 text-gray-700`}>
                                                    {criteria.label}
                                                </span>
                                            </label>
                                        </div>
                                    ))}
                                </div>

                                <input
                                    type="text"
                                    name="preffered_site_likes"
                                    className="transition-all px-4 py-2 my-2 leading-tight text-gray-700 border-b-2 border-sky-400 rounded-md focus:border-b-3 focus:border-blue-500"
                                    placeholder="Інше..."
                                    required
                                />
                            </div>
                        </div>

                        <div className="my-4">
                            <label className="flex flex-col text-sm font-medium text-gray-700">
                                <span
                                    className={`${montserrat.className} ${styles.required} text-base text-gray-800 mb-2`}
                                >
                                    Які конкретно сайти вам не подобаються?
                                </span>
                                <input
                                    type="text"
                                    name="nonpreferred_sites"
                                    className="transition-all px-4 py-2 leading-tight text-gray-700 border-b-2 border-sky-400 rounded-md focus:border-b-3 focus:border-blue-500"
                                    placeholder="Ваша відповідь..."
                                    required
                                />
                            </label>
                        </div>
                        <div className="my-4">
                            <div className="flex flex-col text-sm font-medium text-gray-700">
                                <span
                                    className={`${montserrat.className} ${styles.required} text-base text-gray-800 mb-2`}
                                >
                                    Що саме вам в них не подобається?
                                </span>

                                <div className="flex flex-wrap gap-4">
                                    {websiteCriteriaList.map((criteria) => (
                                        <div
                                            key={`nonpreffered_site_dislikes_${criteria.name}`}
                                            className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6 p-2"
                                        >
                                            <label className="flex items-top">
                                                <input
                                                    type="checkbox"
                                                    name="nonpreffered_site_dislikes"
                                                    className={`${styles.checkbox} appearance-none border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent`}
                                                    required
                                                />
                                                <span className={`${montserrat.className} ml-2 text-gray-700`}>
                                                    {criteria.label}
                                                </span>
                                            </label>
                                        </div>
                                    ))}
                                </div>

                                <input
                                    type="text"
                                    name="nonpreffered_site_dislikes"
                                    className="transition-all px-4 py-2 my-2 leading-tight text-gray-700 border-b-2 border-sky-400 rounded-md focus:border-b-3 focus:border-blue-500"
                                    placeholder="Інше..."
                                    required
                                />
                            </div>
                        </div>
                    </>
                ) : null}
                <div className="my-4">
                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className={`${montserrat.className} ${styles.required} text-base text-gray-800 mb-2`}>
                            Яке нове доменне ім&apos;я ви хочете використовувати?
                        </span>
                        <input
                            type="text"
                            name="domain_name"
                            className="transition-all px-4 py-2 leading-tight text-gray-700 border-b-2 border-sky-400 rounded-md focus:border-b-3 focus:border-blue-500"
                            placeholder="Ваша відповідь..."
                            required
                        />
                    </label>
                </div>
                <div className="my-4">
                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className={`${montserrat.className} ${styles.required} text-base text-gray-800 mb-2`}>
                            Яка назва вашої компанії?
                        </span>
                        <input
                            type="text"
                            name="company_name"
                            className="transition-all px-4 py-2 leading-tight text-gray-700 border-b-2 border-sky-400 rounded-md focus:border-b-3 focus:border-blue-500"
                            placeholder="Ваша відповідь..."
                            required
                        />
                    </label>
                </div>
                <div className="my-4">
                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className={`${montserrat.className} text-base text-gray-800 mb-2`}>
                            Який слоган вашої компанії, якщо є?
                        </span>
                        <input
                            type="text"
                            name="company_slogan"
                            className="transition-all px-4 py-2 leading-tight text-gray-700 border-b-2 border-sky-400 rounded-md focus:border-b-3 focus:border-blue-500"
                            placeholder="Ваша відповідь..."
                        />
                    </label>
                </div>
                <div className="my-4">
                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className={`${montserrat.className} ${styles.required} text-base text-gray-800 mb-2`}>
                            Яка кінцева мета вашого веб-сайту?
                        </span>
                        <input
                            type="text"
                            name="site_purpose"
                            className="transition-all px-4 py-2 leading-tight text-gray-700 border-b-2 border-sky-400 rounded-md focus:border-b-3 focus:border-blue-500"
                            placeholder="Ваша відповідь..."
                            required
                        />
                    </label>
                </div>
            </fieldset>

            <fieldset className="my-4">
                <legend className={`${roboto.className} text-2xl font-semibold text-gray-800 mb-2`}>
                    Аналіз бізнесу та перспективи розвитку
                </legend>
                <div className="my-4">
                    <div className="flex flex-col text-sm font-medium text-gray-700">
                        <span className={`${montserrat.className} ${styles.required} text-base text-gray-800 mb-2`}>
                            На який сегмент ринку ви спрямовані?
                        </span>
                        <input
                            type="text"
                            name="market_segment"
                            className="transition-all px-4 py-2 leading-tight text-gray-700 border-b-2 border-sky-400 rounded-md focus:border-b-3 focus:border-blue-500"
                            placeholder="Ваша відповідь..."
                            required
                        />
                    </div>
                </div>

                <div className="my-4">
                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className={`${montserrat.className} ${styles.required} text-base text-gray-800 mb-2`}>
                            Що робить ваш бізнес унікальним в цій ніші?
                        </span>
                        <textarea
                            name="market_unique"
                            className="resize-none transition-all border border-sky-400 rounded-md p-2 w-full h-32 focus:ring-2 focus:ring-blue-500"
                            placeholder="Ваша відповідь..."
                            required
                        />
                    </label>
                </div>
                <div className="my-4">
                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className={`${montserrat.className} text-base text-gray-800 mb-2`}>
                            З якими компаніями ви збираєтеся конкурувати?
                        </span>
                        <input
                            type="text"
                            name="competitors"
                            className="transition-all px-4 py-2 leading-tight text-gray-700 border-b-2 border-sky-400 rounded-md focus:border-b-3 focus:border-blue-500"
                            placeholder="Ваша відповідь..."
                        />
                    </label>
                </div>

                <div className="flex flex-col text-sm font-medium text-gray-700 my-4">
                    <span className={`${montserrat.className} text-base text-gray-800 mb-2`}>
                        Що саме вам в них подобається?
                    </span>

                    <div className="flex flex-wrap gap-4">
                        {websiteCriteriaList.map((criteria) => (
                            <label
                                key={`competitors_likes_${criteria.name}`}
                                className="flex items-top w-full sm:w-1/3 md:w-1/4 lg:w-1/6 p-2"
                            >
                                <input
                                    type="checkbox"
                                    name="competitors_likes"
                                    className={`${styles.checkbox} appearance-none border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent`}
                                />
                                <span className={`${montserrat.className} ml-2 text-gray-700`}>{criteria.label}</span>
                            </label>
                        ))}
                    </div>

                    <input
                        type="text"
                        name="competitors_likes"
                        className="transition-all px-4 py-2 my-2 leading-tight text-gray-700 border-b-2 border-sky-400 rounded-md focus:border-b-3 focus:border-blue-500"
                        placeholder="Інше..."
                    />
                </div>

                <div className="flex flex-col text-sm font-medium text-gray-700 my-4">
                    <span className={`${montserrat.className} text-base text-gray-800 mb-2`}>
                        Що саме вам в них не подобається?
                    </span>

                    <div className="flex flex-wrap gap-4">
                        {websiteCriteriaList.map((criteria) => (
                            <label
                                key={`competitors_dislikes_${criteria.name}`}
                                className="flex items-top w-full sm:w-1/3 md:w-1/4 lg:w-1/6 p-2"
                            >
                                <input
                                    type="checkbox"
                                    name="competitors_dislikes"
                                    className={`${styles.checkbox} appearance-none border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent`}
                                />
                                <span className={`${montserrat.className} ml-2 text-gray-700`}>{criteria.label}</span>
                            </label>
                        ))}
                    </div>

                    <input
                        type="text"
                        name="competitors_dislikes"
                        className="transition-all px-4 py-2 my-2 leading-tight text-gray-700 border-b-2 border-sky-400 rounded-md focus:border-b-3 focus:border-blue-500"
                        placeholder="Інше..."
                    />
                </div>

                <div className="my-4">
                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className={`${montserrat.className} ${styles.required} text-base text-gray-800 mb-2`}>
                            Які можливості для росту та розвитку ви бачите у вашому бізнесі?
                        </span>
                        <textarea
                            name="company_slogan"
                            className="resize-none transition-all border border-sky-400 rounded-md p-2 w-full h-32 focus:ring-2 focus:ring-blue-500"
                            placeholder="Ваша відповідь..."
                            required
                        />
                    </label>
                </div>
            </fieldset>

            <fieldset className="my-4">
                <legend className={`${roboto.className} text-2xl font-semibold text-gray-800 mb-2`}>
                    Цільова аудиторія
                </legend>
                <div className="my-4">
                    <div className="flex flex-col text-sm font-medium text-gray-700">
                        <span className={`${montserrat.className} ${styles.required} text-base text-gray-800 mb-2`}>
                            Який віковий діапазон вашої аудиторії?
                        </span>
                        <input
                            type="text"
                            name="community_age"
                            className="transition-all px-4 py-2 leading-tight text-gray-700 border-b-2 border-sky-400 rounded-md focus:border-b-3 focus:border-blue-500"
                            placeholder="Ваша відповідь..."
                            required
                        />
                    </div>
                </div>

                <div className="my-4">
                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className={`${montserrat.className} ${styles.required} text-base text-gray-800 mb-2`}>
                            Яка стать вашої цільової аудиторії?
                        </span>
                        {[
                            { name: "male", label: "Чоловіча" },
                            { name: "female", label: "Жіноча" },
                        ].map((sex) => (
                            <label
                                key={`community_sex_${sex.name}`}
                                className="flex items-top w-full sm:w-1/3 md:w-1/4 lg:w-1/6 p-2"
                            >
                                <input
                                    type="checkbox"
                                    name={`community_sex`}
                                    className={`${styles.checkbox} appearance-none border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent`}
                                    required
                                />
                                <span className={`${montserrat.className} ml-2 text-gray-700`}>{sex.label}</span>
                            </label>
                        ))}
                    </label>
                </div>

                <div className="my-4">
                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className={`${montserrat.className} text-base text-gray-800 mb-2`}>
                            Який рід занять переважно має ваша цільова аудиторія?
                        </span>
                        <input
                            type="text"
                            name="community_occupation"
                            className="transition-all px-4 py-2 leading-tight text-gray-700 border-b-2 border-sky-400 rounded-md focus:border-b-3 focus:border-blue-500"
                            placeholder="Ваша відповідь..."
                        />
                    </label>
                </div>

                <div className="my-4">
                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className={`${montserrat.className} ${styles.required} text-base text-gray-800 mb-2`}>
                            З якої географічної області переважно складається ваша аудиторія?
                        </span>

                        <input
                            type="text"
                            name="community_region"
                            className="transition-all px-4 py-2 leading-tight text-gray-700 border-b-2 border-sky-400 rounded-md focus:border-b-3 focus:border-blue-500"
                            placeholder="Ваша відповідь..."
                            required
                        />
                    </label>
                </div>

                <div className="my-4">
                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className={`${montserrat.className} ${styles.required} text-base text-gray-800 mb-2`}>
                            Які проблеми або потреби вирішує ваш продукт або послуга?
                        </span>

                        <textarea
                            name="community_needs"
                            className="resize-none transition-all border border-sky-400 rounded-md p-2 w-full h-32 focus:ring-2 focus:ring-blue-500"
                            placeholder="Ваша відповідь..."
                            required
                        />
                    </label>
                </div>
            </fieldset>

            <fieldset className="my-4">
                <legend className={`${roboto.className} text-2xl font-semibold text-gray-800 mb-2`}>Дизайн</legend>

                <div className="flex flex-col text-sm font-medium text-gray-700 my-4">
                    <span className={`${montserrat.className} ${styles.required} text-base text-gray-800 mb-2`}>
                        Який тип веб-сайту ви плануєте мати?
                    </span>

                    <div className="flex flex-wrap gap-4">
                        {websiteTypeList.map((type) => (
                            <label
                                key={`websiteType_${type.name}`}
                                className="flex items-top w-full sm:w-1/3 md:w-1/4 lg:w-1/6 p-2"
                            >
                                <input
                                    type="checkbox"
                                    name="websiteType"
                                    className={`${styles.checkbox} appearance-none border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent`}
                                    required
                                />
                                <span className={`${montserrat.className} ml-2 text-gray-700`}>{type.label}</span>
                            </label>
                        ))}
                    </div>

                    <input
                        type="text"
                        name="websiteType"
                        className="transition-all px-4 py-2 my-2 leading-tight text-gray-700 border-b-2 border-sky-400 rounded-md focus:border-b-3 focus:border-blue-500"
                        placeholder="Інше..."
                        required
                    />
                </div>

                <div className="my-4">
                    <div className="flex flex-col text-sm font-medium text-gray-700">
                        <span className={`${montserrat.className} ${styles.required} text-base text-gray-800 mb-2`}>
                            Чи ви маєте вже структуру для вашого сайту (проектування)?
                        </span>
                        {[
                            { name: "ready", label: "У мене є готова структура" },
                            { name: "notReady", label: "Мені потрібне проектування" },
                        ].map((structure) => (
                            <label key={`websiteStructure_${structure.name}`} className="flex items-top w-full p-2">
                                <input
                                    type="checkbox"
                                    name={`websiteStructure`}
                                    className={`${styles.checkbox} appearance-none border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent`}
                                    required
                                />
                                <span className={`${montserrat.className} ml-2 text-gray-700`}>{structure.label}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="my-4">
                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className={`${montserrat.className} ${styles.required} text-base text-gray-800 mb-2`}>
                            Який настрій має викликати дизайн вашого сайту?
                        </span>

                        <select
                            name="website_design_emotions"
                            className="block appearance-none border rounded-md w-full py-2 px-3 leading-tight border-sky-400 focus:ring-2 focus:ring-blue-500"
                            defaultValue={"default"}
                            required
                        >
                            <option value={"default"} disabled hidden>
                                Виберіть варіант...
                            </option>
                            {designEmotions.map((emotion) => (
                                <option key={emotion.name} value={emotion.name}>
                                    {emotion.label}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>

                <div className="my-4">
                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className={`${montserrat.className} ${styles.required} text-base text-gray-800 mb-2`}>
                            Наведіть приклади сайтів, дизайн яких вам подобається, та поясніть, що саме вам до них
                            подобається?
                        </span>

                        <textarea
                            name="website_design_likes"
                            className="resize-none transition-all border border-sky-400 rounded-md p-2 w-full h-32 focus:ring-2 focus:ring-blue-500"
                            placeholder="Ваша відповідь..."
                            required
                        />
                    </label>
                </div>

                <div className="my-4">
                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className={`${montserrat.className} ${styles.required} text-base text-gray-800 mb-2`}>
                            Наведіть приклади сайтів, дизайн яких вам не подобається, та поясніть, що саме вам до них не
                            подобається?
                        </span>

                        <textarea
                            name="website_design_dislikes"
                            className="resize-none transition-all border border-sky-400 rounded-md p-2 w-full h-32 focus:ring-2 focus:ring-blue-500"
                            placeholder="Ваша відповідь..."
                            required
                        />
                    </label>
                </div>

                <div className="my-4">
                    <div className="flex flex-col text-sm font-medium text-gray-700">
                        <span className={`${montserrat.className} text-base text-gray-800 mb-2`}>
                            Які кольори слід використовувати на сайті? (Не більше трьох кольорів)
                        </span>
                        <div className="flex gap-4 my-2">
                            <input
                                type="color"
                                className="block border rounded-lg w-1/3 h-10 leading-tight focus:ring-2 hover:bg-blue-500 focus:ring-blue-500"
                                onChange={(e) => {
                                    setSelectedColor(e.target.value);
                                }}
                                placeholder="Ваша відповідь..."
                                value={"#000000"}
                            />

                            <button
                                type="button"
                                className="flex h-10 items-center rounded-lg bg-blue-600 hover:bg-blue-500 px-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                onClick={handleColorPicker}
                            >
                                <span className={`${montserrat.className} hidden md:block`}>Додати колір</span>{" "}
                                <PlusIcon className="h-5 md:ml-4" />
                            </button>
                        </div>
                    </div>
                    <div>
                        {allColors.map((color) => (
                            <div className="flex gap-4 my-3" key={color}>
                                <div
                                    className="w-1/3 h-10 rounded-lg bg-gray-200 cursor-pointer"
                                    style={{
                                        backgroundColor: color,
                                    }}
                                ></div>
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
                                    name={`website_design_colorPicker_${allColors.indexOf(color)}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="my-4">
                    <div className="flex flex-col text-sm font-medium text-gray-700">
                        <span className={`${montserrat.className} ${styles.required} text-base text-gray-800 mb-2`}>
                            Які анімаційні ефекти слід використовувати на сайті?
                        </span>

                        <div className="flex flex-wrap gap-4 my-2">
                            {animationTypeList.map((animationType) => (
                                <label
                                    key={`animationType_${animationType.name}`}
                                    className="flex items-topw-full sm:w-1/3 md:w-1/4 lg:w-1/6 p-2"
                                >
                                    <input
                                        type="checkbox"
                                        name="animationType"
                                        className={`${styles.checkbox} appearance-none border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent`}
                                        required
                                    />
                                    <span className={`${montserrat.className} ml-2 text-gray-700`}>
                                        {animationType.label}
                                    </span>
                                </label>
                            ))}
                        </div>

                        <input
                            type="text"
                            name="animationType"
                            className="transition-all px-4 py-2 my-2 leading-tight text-gray-700 border-b-2 border-sky-400 rounded-md focus:border-b-3 focus:border-blue-500"
                            placeholder="Інше..."
                            required
                        />
                    </div>
                </div>

                <div className="my-4">
                    <div className="flex flex-col text-sm font-medium text-gray-700">
                        <span className={`${montserrat.className} text-base text-gray-800 mb-2`}>
                            Які типи графіки слід використовувати на сайті?
                        </span>
                        <div className="flex flex-wrap gap-4 my-2">
                            {graphicTypeList.map((graphicType) => (
                                <div
                                    key={`graphicType_${graphicType.name}`}
                                    className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6 p-2"
                                >
                                    <label className="flex items-top">
                                        <input
                                            type="checkbox"
                                            name={`graphicType`}
                                            className={`${styles.checkbox} appearance-none border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent`}
                                        />
                                        <span className={`${montserrat.className} ml-2 text-gray-700`}>
                                            {graphicType.label}
                                        </span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="my-4">
                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className={`${montserrat.className} text-base text-gray-800 mb-2`}>
                            Чи є у вас ідеї, які ви бажаєте втілити в дизайні?
                        </span>

                        <textarea
                            name="design_ideas"
                            className="resize-none transition-all border border-sky-400 rounded-md p-2 w-full h-32 focus:ring-2 focus:ring-blue-500"
                            placeholder="Ваша відповідь..."
                        />
                    </label>
                </div>

                <div className="my-4">
                    <div className="flex flex-col text-sm font-medium text-gray-700">
                        <span className={`${montserrat.className} text-base text-gray-800 mb-2`}>
                            Чи мають головна сторінка та внутрішні сторінки сайту різницю у дизайні або функціоналі?
                        </span>

                        <div className="flex flex-wrap gap-4 my-2">
                            <div className="w-full p-2">
                                <label className="flex items-top">
                                    <input
                                        type="radio"
                                        name={`design_page_difference`}
                                        className={`${styles.radioButton} appearance-none border border-gray-300 rounded-full checked:bg-blue-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    />
                                    <span className={`${montserrat.className} ml-2 text-gray-700`}>
                                        Так, різні, тому необхідно виготовлення дизайн-макету як головної, так і
                                        внутрішньої сторінок сайту.
                                    </span>
                                </label>
                            </div>
                            <div className="w-full p-2">
                                <label className="flex items-top">
                                    <input
                                        type="radio"
                                        name={`design_page_difference`}
                                        className={`${styles.radioButton} appearance-none border border-gray-300 rounded-full checked:bg-blue-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    />
                                    <span className={`${montserrat.className} ml-2 text-gray-700`}>
                                        Ні, однакові, передбачається «наскрізний» дизайн всіх сторінок, тому необхідне
                                        створення дизайну тільки для головної сторінки
                                    </span>
                                </label>
                            </div>
                        </div>

                        <input
                            type="text"
                            name="design_page_difference_else"
                            className="transition-all px-4 py-2 my-2 leading-tight text-gray-700 border-b-2 border-sky-400 rounded-md focus:border-b-3 focus:border-blue-500"
                            placeholder="Інше..."
                        />
                    </div>
                </div>

                <div className="my-4">
                    <div className="flex flex-col text-sm font-medium text-gray-700">
                        <span className={`${montserrat.className} ${styles.required} text-base text-gray-800 mb-2`}>
                            Які конкретні мови має мати сайт?
                        </span>
                        <div className="flex flex-wrap gap-4 my-2">
                            {[
                                { name: "English", label: "Англійська" },
                                { name: "Ukrainian", label: "Українська" },
                            ].map((language) => (
                                <div
                                    key={`language_${language.name}`}
                                    className="flex items-top w-full sm:w-1/3 md:w-1/4 lg:w-1/6 p-2"
                                >
                                    <input
                                        type="checkbox"
                                        name={`language`}
                                        className={`${styles.checkbox} appearance-none border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent`}
                                        required
                                    />
                                    <span className={`${montserrat.className} ml-2 text-gray-700`}>
                                        {language.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </fieldset>

            <fieldset className="my-4">
                <legend className={`${roboto.className} text-2xl font-semibold text-gray-800 mb-2`}>
                    Підготовка контенту для сайту
                </legend>

                <div className="my-4">
                    <div className="flex flex-col text-sm font-medium text-gray-700">
                        <span className={`${montserrat.className} ${styles.required} text-base text-gray-800 mb-2`}>
                            Чи маєте ви унікальні тексти для сайту?
                        </span>
                        <div className="flex flex-wrap gap-4 my-2">
                            {[
                                { name: "availiable", label: "Є" },
                                { name: "will_be_later", label: "Буде пізніше" },
                                { name: "unavailable", label: "Треба написати" },
                            ].map((item) => (
                                <div
                                    key={`suggestedTexts_${item.name}`}
                                    className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6 p-2"
                                >
                                    <label className="flex items-top">
                                        <input
                                            type="radio"
                                            name={`suggestedTexts`}
                                            className={`${styles.radioButton} appearance-none border border-gray-300 rounded-full checked:bg-blue-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                            required
                                        />
                                        <span className={`${montserrat.className} ml-2 text-gray-700`}>
                                            {item.label}
                                        </span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="my-4">
                    <div className="flex flex-col text-sm font-medium text-gray-700">
                        <span className={`${montserrat.className} ${styles.required} text-base text-gray-800 mb-2`}>
                            Чи маєте ви якісні авторські фото для сайту?
                        </span>
                        <div className="flex flex-wrap gap-4 my-2">
                            {[
                                { name: "availiable", label: "Є" },
                                { name: "will_be_later", label: "Буде пізніше" },
                                { name: "unavailable", label: "Треба написати" },
                            ].map((item) => (
                                <div
                                    key={`suggestedPhotos_${item.name}`}
                                    className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6 p-2"
                                >
                                    <label className="flex items-top">
                                        <input
                                            type="radio"
                                            name={`suggestedPhotos`}
                                            className={`${styles.radioButton} appearance-none border border-gray-300 rounded-full checked:bg-blue-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                            required
                                        />
                                        <span className={`${montserrat.className} ml-2 text-gray-700`}>
                                            {item.label}
                                        </span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="my-4">
                    <div className="flex flex-col text-sm font-medium text-gray-700">
                        <span className={`${montserrat.className} ${styles.required} text-base text-gray-800 mb-2`}>
                            Чи маєте ви відеоматеріали для сайту?
                        </span>
                        <div className="flex flex-wrap gap-4 my-2">
                            {[
                                { name: "availiable", label: "Є" },
                                { name: "will_be_later", label: "Буде пізніше" },
                                { name: "unavailable", label: "Треба написати" },
                            ].map((item) => (
                                <div
                                    key={`suggestedVideos_${item.name}`}
                                    className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6 p-2"
                                >
                                    <label className="flex items-top">
                                        <input
                                            type="radio"
                                            name={`suggestedVideos`}
                                            className={`${styles.radioButton} appearance-none border border-gray-300 rounded-full checked:bg-blue-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                            required
                                        />
                                        <span className={`${montserrat.className} ml-2 text-gray-700`}>
                                            {item.label}
                                        </span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </fieldset>

            <fieldset className="my-4">
                <legend className={`${roboto.className} text-2xl font-semibold text-gray-800 mb-2`}>
                    Подальший розвиток та реклама
                </legend>

                <div className="my-4">
                    <div className="flex flex-col text-sm font-medium text-gray-700">
                        <span className={`${montserrat.className} ${styles.required} text-base text-gray-800 mb-2`}>
                            Чи плануєте ви просування вашого сайту у пошукових системах?
                        </span>
                        <div className="flex flex-wrap gap-4 my-2">
                            {[
                                { name: "yes", label: "Так" },
                                { name: "no", label: "Ні" },
                            ].map((item) => (
                                <div
                                    key={`marketing_seo_${item.name}`}
                                    className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6 p-2"
                                >
                                    <label className="flex items-top">
                                        <input
                                            type="radio"
                                            name={`marketing_seo`}
                                            className={`${styles.radioButton} appearance-none border border-gray-300 rounded-full checked:bg-blue-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                            required
                                        />
                                        <span className={`${montserrat.className} ml-2 text-gray-700`}>
                                            {item.label}
                                        </span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="my-4">
                    <div className="flex flex-col text-sm font-medium text-gray-700">
                        <span className={`${montserrat.className} ${styles.required} text-base text-gray-800 mb-2`}>
                            Чи розглядаєте ви можливість просування вашого сайту у соціальних мережах?
                        </span>
                        <div className="flex flex-wrap gap-4 my-2">
                            {[
                                { name: "yes", label: "Так" },
                                { name: "no", label: "Ні" },
                            ].map((item) => (
                                <div
                                    key={`marketing_sm_${item.name}`}
                                    className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6 p-2"
                                >
                                    <label className="flex items-top">
                                        <input
                                            type="radio"
                                            name={`marketing_sm`}
                                            className={`${styles.radioButton} appearance-none border border-gray-300 rounded-full checked:bg-blue-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                            required
                                        />
                                        <span className={`${montserrat.className} ml-2 text-gray-700`}>
                                            {item.label}
                                        </span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </fieldset>
            <fieldset className="my-4">
                <legend className={`${roboto.className} text-2xl font-semibold text-gray-800 mb-2`}>
                    Зворотній зв&apos;язок
                </legend>

                <div className="my-2">
                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className={`${montserrat.className} text-base text-gray-800 mb-2`}>
                            Які ваші коментарі, запитання, побажання?
                        </span>
                        <textarea
                            name="feedback"
                            className="resize-none transition-all border border-sky-400 rounded-md p-2 w-full h-32 focus:ring-2 focus:ring-blue-500"
                            placeholder="Ваша відповідь..."
                        />
                    </label>
                </div>
            </fieldset>
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
        </form>
    );
}
