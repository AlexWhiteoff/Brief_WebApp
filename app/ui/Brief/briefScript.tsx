import { FormData, Input } from "@/app/lib/definitions";
import { useContext } from "react";
import BriefContext from "@/app/ui/Brief/Context/briefContext";
import { FormContent } from "@/app/ui/Brief/inputs";

export default function BriefScript() {
    const briefContext = useContext(BriefContext);

    if (!briefContext) {
        return null;
    }
    const { isSiteExist, setIsSiteExist } = briefContext;

    const websiteCriteriaList = [
        { value: "design", label: "Дизайн" },
        { value: "interface", label: "Інтерфейс (UI/UX)" },
        {
            value: "speedAndLoading",
            label: "Швидкодія та завантаження сторінок",
        },
        { value: "navigation", label: "Навігація" },
        { value: "content", label: "Контент" },
        { value: "mobileCompatibility", label: "Мобільна сумісність" },
        { value: "security", label: "Безпека" },
        { value: "seo", label: "SEO (пошукова оптимізація)" },
        {
            value: "deviceCompatibility",
            label: "Сумісність з різними пристроями/браузерами",
        },
        {
            value: "accessControlAndAuthentication",
            label: "Контроль доступу та аутентифікація",
        },
        { value: "customerSupport", label: "Підтримка клієнтських запитів" },
        { value: "adaptiveDesign", label: "Адаптивний дизайн" },
    ];

    const websiteTypeList = [
        { value: "onePage", label: "Односторінковий сайт" },
        { value: "businessCard", label: "Сайт візитівка" },
        { value: "landingPage", label: "Landing page" },
        { value: "onlineStore", label: "Інтернет магазин" },
        { value: "catalogWebsite", label: "Сайт каталогів" },
        { value: "corporateWebsite", label: "Корпоративний сайт" },
        { value: "uniqueWebsite", label: "Унікальний сайт" },
        { value: "frameworkWebsite", label: "Сайт на Framework" },
    ];

    const designEmotions = [
        { value: "strictCorporateStyle", label: "Суворий корпоративний стиль" },
        {
            value: "brightEye-catchingDesign",
            label: "Яскравий, помітний дизайн",
        },
        {
            value: "positiveCheerfulDesign",
            label: "Позитивний і веселий дизайн",
        },
        { value: "imageRichDesign", label: "Дизайн насичений зображеннями" },
        {
            value: "dynamicSiteAnimationsVideos",
            label: "Динамічний сайт: анімації та відеофони",
        },
        {
            value: "staticSiteNoAnimations",
            label: "Статичний сайт: без анімацій та відволікаючих елементів",
        },
        {
            value: "minimalisticDesign",
            label: "Дизайн з акцентом на мінімалізм",
        },
        {
            value: "functionalDesign",
            label: "Дизайн з акцентом на функціональність",
        },
    ];

    const animationTypeList = [
        { value: "none", label: "Без Анімації" },
        { value: "icons", label: "Іконки" },
        { value: "pageTransition", label: "Перехід між сторінками" },
        { value: "siteCover", label: "Заставка перед сайтом" },
        { value: "logo", label: "Логотип" },
        { value: "menu", label: "Меню" },
        { value: "designerChoice", label: "На розсуд дизайнера" },
    ];

    const graphicTypeList = [
        { value: "bitmap", label: "Растрова графіка" },
        { value: "svg", label: "Векторна графіка (SVG)" },
        { value: "3DGraphics", label: "3D графіка" },
    ];

    const formScript: FormData[] = [
        {
            header: "Спосіб зв'язку",
            chunks: [
                {
                    label: "Як до Вас звертатись?",
                    input: [
                        {
                            type: "field",
                            attr: {
                                type: "text",
                                name: "name",
                                placeholder: "Ваша відповідь...",
                            },
                        },
                    ],
                    required: true,
                },
                {
                    label: "Яка ваша електронна пошта?",
                    input: [
                        {
                            type: "field",
                            attr: {
                                type: "email",
                                name: "email",
                                placeholder: "Ваша відповідь...",
                            },
                        },
                    ],
                    required: true,
                },
                {
                    label: "Який ваш номер телефону?",
                    input: [
                        {
                            type: "field",
                            attr: {
                                type: "tel",
                                name: "phoneNumber",
                                placeholder: "+380-00-000-00-00",
                            },
                        },
                    ],
                    required: true,
                },
                {
                    label: "Який час вам найбільше підходить для зв'язку?",
                    input: [
                        {
                            type: "date",
                            alt: "Від:",
                            attr: {
                                type: "time",
                                name: "timeFrom",
                            },
                        },
                        {
                            type: "date",
                            alt: "До:",
                            attr: {
                                type: "time",
                                name: "timeTo",
                            },
                        },
                    ],
                    required: true,
                },
            ],
        },
        {
            header: "Інформація про компанію",
            chunks: [
                {
                    label: "Чи у вас є зараз власний веб-сайт?",
                    input: [
                        {
                            type: "radio",
                            alt: "Так",
                            attr: {
                                type: "radio",
                                name: "isSiteAlreadyOwned",
                                onChange: () => setIsSiteExist(true),
                            },
                        },
                        {
                            type: "radio",
                            alt: "Ні",
                            attr: {
                                type: "radio",
                                name: "isSiteAlreadyOwned",
                                onChange: () => setIsSiteExist(false),
                            },
                        },
                    ],
                    required: true,
                },
                {
                    label: "Яка адреса вашого веб-сайту?",
                    input: [
                        {
                            type: "field",
                            attr: {
                                type: "text",
                                name: "ownedSiteUrl",
                                placeholder: "Ваша відповідь...",
                            },
                        },
                    ],
                    required: true,
                    condition: isSiteExist,
                },

                {
                    label: "Що саме вам подобається на вашому веб-сайті?",
                    input: [
                        ...websiteCriteriaList.map(
                            (item): Input => ({
                                type: "checkbox",
                                alt: item.label,
                                attr: {
                                    type: "checkbox",
                                    name: "ownedSiteLikes",
                                    value: item.value,
                                },
                            })
                        ),
                        {
                            type: "field",
                            attr: {
                                type: "text",
                                name: "ownedSiteLikes",
                                placeholder: "Інше...",
                            },
                        },
                    ],
                    required: true,
                    condition: isSiteExist,
                },

                {
                    label: "Що саме вам не подобається на вашому веб-сайті?",
                    input: [
                        ...websiteCriteriaList.map(
                            (item): Input => ({
                                type: "checkbox",
                                alt: item.label,
                                attr: {
                                    type: "checkbox",
                                    name: "ownedSiteDislikes",
                                    value: item.value,
                                },
                            })
                        ),
                        {
                            type: "field",
                            attr: {
                                type: "text",
                                name: "ownedSiteDislikes",
                                placeholder: "Інше...",
                            },
                        },
                    ],
                    required: true,
                    condition: isSiteExist,
                },

                {
                    label: "Які конкретно сайти вам подобаються?",
                    input: [
                        {
                            type: "field",
                            attr: {
                                type: "text",
                                name: "preferredSites",
                                placeholder: "Ваша відповідь...",
                            },
                        },
                    ],
                    required: true,
                    condition: isSiteExist === false,
                },
                {
                    label: "Що саме вам в них подобається?",
                    input: [
                        ...websiteCriteriaList.map(
                            (item): Input => ({
                                type: "checkbox",
                                alt: item.label,
                                attr: {
                                    type: "checkbox",
                                    name: "prefferedSiteLikes",
                                    value: item.value,
                                },
                            })
                        ),
                        {
                            type: "field",
                            attr: {
                                type: "text",
                                name: "prefferedSiteLikes",
                                placeholder: "Інше...",
                            },
                        },
                    ],
                    required: true,
                    condition: isSiteExist === false,
                },

                {
                    label: "Які конкретно сайти вам не подобаються?",
                    input: [
                        {
                            type: "field",
                            attr: {
                                type: "text",
                                name: "notpreferredSites",
                                placeholder: "Ваша відповідь...",
                            },
                        },
                    ],
                    required: true,
                    condition: isSiteExist === false,
                },

                {
                    label: "Що саме вам в них не подобається?",
                    input: [
                        ...websiteCriteriaList.map(
                            (item): Input => ({
                                type: "checkbox",
                                alt: item.label,
                                attr: {
                                    type: "checkbox",
                                    name: "nonprefferedSiteDislikes",
                                    value: item.value,
                                },
                            })
                        ),
                        {
                            type: "field",
                            attr: {
                                type: "text",
                                name: "nonprefferedSiteDislikes",
                                placeholder: "Інше...",
                            },
                        },
                    ],
                    required: true,
                    condition: isSiteExist === false,
                },

                {
                    label: "Яке нове доменне ім'я ви хочете використовувати?",
                    input: [
                        {
                            type: "field",
                            attr: {
                                type: "text",
                                name: "domainName",
                                placeholder: "Ваша відповідь...",
                            },
                        },
                    ],
                    required: true,
                },
                {
                    label: "Яка назва вашої компанії?",
                    input: [
                        {
                            type: "field",
                            attr: {
                                type: "text",
                                name: "companyName",
                                placeholder: "Ваша відповідь...",
                            },
                        },
                    ],
                    required: true,
                },

                {
                    label: "Який слоган вашої компанії, якщо є?",
                    input: [
                        {
                            type: "field",
                            attr: {
                                type: "text",
                                name: "companySlogan",
                                placeholder: "Ваша відповідь...",
                            },
                        },
                    ],
                    required: true,
                },

                {
                    label: "Яка кінцева мета вашого веб-сайту?",
                    input: [
                        {
                            type: "field",
                            attr: {
                                type: "text",
                                name: "sitePurpose",
                                placeholder: "Ваша відповідь...",
                            },
                        },
                    ],
                    required: true,
                },
            ],
        },
        {
            header: "Аналіз бізнесу та перспективи розвитку",
            chunks: [
                {
                    label: "На який сегмент ринку ви спрямовані?",
                    input: [
                        {
                            type: "field",
                            attr: {
                                type: "text",
                                name: "marketSegment",
                                placeholder: "Ваша відповідь...",
                            },
                        },
                    ],
                    required: true,
                },
                {
                    label: "Що робить ваш бізнес унікальним в цій ніші?",
                    input: [
                        {
                            type: "textarea",
                            attr: {
                                name: "marketUnique",
                                placeholder: "Ваша відповідь...",
                            },
                        },
                    ],
                    required: true,
                },
                {
                    label: "З якими компаніями ви збираєтеся конкурувати?",
                    input: [
                        {
                            type: "field",
                            attr: {
                                type: "text",
                                name: "competitors",
                                placeholder: "Ваша відповідь...",
                            },
                        },
                    ],
                },
                {
                    label: "Що саме вам в них подобається?",
                    input: [
                        ...websiteCriteriaList.map(
                            (item): Input => ({
                                type: "checkbox",
                                alt: item.label,
                                attr: {
                                    type: "checkbox",
                                    name: "competitorsLikes",
                                    value: item.value,
                                },
                            })
                        ),
                        {
                            type: "field",
                            attr: {
                                type: "text",
                                name: "competitorsLikes",
                                placeholder: "Інше...",
                            },
                        },
                    ],
                },
                {
                    label: "Що саме вам в них не подобається?",
                    input: [
                        ...websiteCriteriaList.map(
                            (item): Input => ({
                                type: "checkbox",
                                alt: item.label,
                                attr: {
                                    type: "checkbox",
                                    name: "competitorsDislikes",
                                    value: item.value,
                                },
                            })
                        ),
                        {
                            type: "field",
                            attr: {
                                type: "text",
                                name: "competitorsDislikes",
                                placeholder: "Інше...",
                            },
                        },
                    ],
                },
                {
                    label: "Які можливості для росту та розвитку ви бачите у вашому бізнесі?",
                    input: [
                        {
                            type: "textarea",
                            attr: {
                                name: "growthOpportunities",
                                placeholder: "Ваша відповідь...",
                            },
                        },
                    ],
                    required: true,
                },
            ],
        },
        {
            header: "Цільова аудиторія",
            chunks: [
                {
                    label: "Який віковий діапазон вашої аудиторії?",
                    input: [
                        {
                            type: "field",
                            attr: {
                                type: "text",
                                name: "communityAge",
                                placeholder: "Ваша відповідь...",
                            },
                        },
                    ],
                    required: true,
                },
                {
                    label: "Яка стать вашої цільової аудиторії?",
                    input: [
                        ...[
                            { name: "male", label: "Чоловіча" },
                            { name: "female", label: "Жіноча" },
                        ].map(
                            (item): Input => ({
                                type: "checkbox",
                                alt: item.label,
                                attr: {
                                    type: "checkbox",
                                    name: "communitySex",
                                    value: item.name,
                                    placeholder: "Ваша відповідь...",
                                },
                            })
                        ),
                    ],
                    required: true,
                },
                {
                    label: "Який рід занять переважно має ваша цільова аудиторія?",
                    input: [
                        {
                            type: "field",
                            attr: {
                                type: "text",
                                name: "communityOccupation",
                                placeholder: "Ваша відповідь...",
                            },
                        },
                    ],
                    required: true,
                },
                {
                    label: "З якої географічної області переважно складається ваша аудиторія?",
                    input: [
                        {
                            type: "field",
                            attr: {
                                type: "text",
                                name: "communityRegion",
                                placeholder: "Ваша відповідь...",
                            },
                        },
                    ],
                    required: true,
                },
                {
                    label: "Які проблеми або потреби вирішує ваш продукт або послуга?",
                    input: [
                        {
                            type: "textarea",
                            attr: {
                                name: "communityNeeds",
                                placeholder: "Ваша відповідь...",
                            },
                        },
                    ],
                    required: true,
                },
            ],
        },
        {
            header: "Дизайн",
            chunks: [
                {
                    label: "Який тип веб-сайту ви плануєте мати?",
                    input: [
                        ...websiteTypeList.map(
                            (item): Input => ({
                                type: "radio",
                                alt: item.label,
                                attr: {
                                    type: "radio",
                                    name: "websiteType",
                                    value: item.value,
                                },
                            })
                        ),
                        {
                            type: "field",
                            attr: {
                                type: "text",
                                name: "websiteType",
                                placeholder: "Інше...",
                            },
                        },
                    ],
                    required: true,
                },
                {
                    label: "Який тип веб-сайту ви плануєте мати?",
                    input: [
                        ...[
                            {
                                name: "ready",
                                label: "У мене є готова структура",
                            },
                            {
                                name: "notReady",
                                label: "Мені потрібне проектування",
                            },
                        ].map(
                            (item): Input => ({
                                type: "radio",
                                alt: item.label,
                                attr: {
                                    type: "radio",
                                    name: "websiteStructure",
                                    value: item.name,
                                },
                            })
                        ),
                    ],
                    required: true,
                },
                {
                    label: "Який настрій має викликати дизайн вашого сайту?",
                    input: [
                        {
                            type: "select",
                            attr: {
                                name: "websiteDesignEmotions",
                                options: designEmotions,
                            },
                        },
                    ],
                    required: true,
                },
                {
                    label: "Наведіть приклади сайтів, дизайн яких вам подобається, та поясніть, що саме вам до них подобається?",
                    input: [
                        {
                            type: "textarea",
                            attr: {
                                name: "websiteDesignLikes",
                                placeholder: "Ваша відповідь...",
                            },
                        },
                    ],
                    required: true,
                },
                {
                    label: "Наведіть приклади сайтів, дизайн яких вам не подобається, та поясніть, що саме вам до них не подобається?",
                    input: [
                        {
                            type: "textarea",
                            attr: {
                                name: "websiteDesignDislikes",
                                placeholder: "Ваша відповідь...",
                            },
                        },
                    ],
                    required: true,
                },
                {
                    label: "Які кольори слід використовувати на сайті? (Не більше трьох кольорів)",
                    input: [
                        {
                            type: "color",
                            attr: {
                                type: "color",
                                name: "websiteDesignColor",
                                value: "#000000",
                            },
                        },
                    ],
                },
                {
                    label: "Які анімаційні ефекти слід використовувати на сайті?",
                    input: [
                        ...animationTypeList.map(
                            (item): Input => ({
                                type: "checkbox",
                                alt: item.label,
                                attr: {
                                    type: "checkbox",
                                    name: "websiteAnimationType",
                                    value: item.value,
                                },
                            })
                        ),
                        {
                            type: "field",
                            attr: {
                                type: "text",
                                name: "websiteAnimationType",
                                placeholder: "Інше...",
                            },
                        },
                    ],
                    required: true,
                },
                {
                    label: "Які типи графіки слід використовувати на сайті?",
                    input: [
                        ...graphicTypeList.map(
                            (item): Input => ({
                                type: "checkbox",
                                alt: item.label,
                                attr: {
                                    type: "checkbox",
                                    name: "websiteGraphicType",
                                    value: item.value,
                                },
                            })
                        ),
                    ],
                    required: true,
                },
                {
                    label: "Чи є у вас ідеї, які ви бажаєте втілити в дизайні?",
                    input: [
                        {
                            type: "textarea",
                            attr: {
                                name: "websiteDesignIdeas",
                                placeholder: "Ваша відповідь...",
                            },
                        },
                    ],
                    required: true,
                },
                {
                    label: "Чи мають головна сторінка та внутрішні сторінки сайту різницю у дизайні або функціоналі?",
                    input: [
                        {
                            type: "radio",
                            alt: "Так, різні, тому необхідно виготовлення дизайн-макету як головної, так івнутрішньої сторінок сайту.",
                            attr: {
                                type: "radio",
                                name: "websitePageDifference",
                                value: "true",
                            },
                        },
                        {
                            type: "radio",
                            alt: "Ні, однакові, передбачається «наскрізний» дизайн всіх сторінок, тому необхідне створення дизайну тільки для головної сторінки",
                            attr: {
                                type: "radio",
                                name: "websitePageDifference",
                                value: "false",
                            },
                        },
                        {
                            type: "field",
                            attr: {
                                type: "text",
                                name: "websitePageDifference",
                                placeholder: "Інше...",
                            },
                        },
                    ],
                    required: true,
                },
                {
                    label: "Які конкретні мови має мати сайт?",
                    input: [
                        ...[
                            { value: "English", label: "Англійська" },
                            { value: "Ukrainian", label: "Українська" },
                        ].map(
                            (item): Input => ({
                                type: "checkbox",
                                alt: item.label,
                                attr: {
                                    type: "checkbox",
                                    name: "websiteLanguage",
                                    value: item.value,
                                },
                            })
                        ),
                    ],
                    required: true,
                },
            ],
        },
        {
            header: "Підготовка контенту для сайту",
            chunks: [
                {
                    label: "Чи маєте ви унікальні тексти для сайту?",
                    input: [
                        ...[
                            { value: "availiable", label: "Є" },
                            {
                                value: "will_beLater",
                                label: "Буде пізніше",
                            },
                            {
                                value: "unavailable",
                                label: "Треба написати",
                            },
                        ].map(
                            (item): Input => ({
                                type: "radio",
                                alt: item.label,
                                attr: {
                                    type: "radio",
                                    name: "contentTexts",
                                    value: item.value,
                                },
                            })
                        ),
                    ],
                    required: true,
                },
                {
                    label: "Чи маєте ви якісні авторські фото для сайту?",
                    input: [
                        ...[
                            { value: "availiable", label: "Є" },
                            {
                                value: "will_beLater",
                                label: "Буде пізніше",
                            },
                            {
                                value: "unavailable",
                                label: "Треба написати",
                            },
                        ].map(
                            (item): Input => ({
                                type: "radio",
                                alt: item.label,
                                attr: {
                                    type: "radio",
                                    name: "contentPhoto",
                                    value: item.value,
                                },
                            })
                        ),
                    ],
                    required: true,
                },
                {
                    label: "Чи маєте ви відеоматеріали для сайту?",
                    input: [
                        ...[
                            { value: "availiable", label: "Є" },
                            {
                                value: "will_beLater",
                                label: "Буде пізніше",
                            },
                            {
                                value: "unavailable",
                                label: "Треба написати",
                            },
                        ].map(
                            (item): Input => ({
                                type: "radio",
                                alt: item.label,
                                attr: {
                                    type: "radio",
                                    name: "contentVideo",
                                    value: item.value,
                                },
                            })
                        ),
                    ],
                    required: true,
                },
            ],
        },
        {
            header: "Подальший розвиток та реклама",
            chunks: [
                {
                    label: "Чи плануєте ви просування вашого сайту у пошукових системах?",
                    input: [
                        ...[
                            { value: "yes", label: "Так" },
                            { value: "no", label: "Ні" },
                        ].map(
                            (item): Input => ({
                                type: "radio",
                                alt: item.label,
                                attr: {
                                    type: "radio",
                                    name: "marketingSeo",
                                    value: item.value,
                                },
                            })
                        ),
                    ],
                    required: true,
                },
                {
                    label: "Чи розглядаєте ви можливість просування вашого сайту у соціальних мережах?",
                    input: [
                        ...[
                            { value: "yes", label: "Так" },
                            { value: "no", label: "Ні" },
                        ].map(
                            (item): Input => ({
                                type: "radio",
                                alt: item.label,
                                attr: {
                                    type: "radio",
                                    name: "marketingSmm",
                                    value: item.value,
                                },
                            })
                        ),
                    ],
                    required: true,
                },
            ],
        },
        {
            header: "Зворотній зв'язок",
            chunks: [
                {
                    label: "Які ваші коментарі, запитання, побажання?",
                    input: [
                        {
                            type: "textarea",
                            attr: {
                                name: "feedback",
                                placeholder: "Ваша відповідь...",
                            },
                        },
                    ],
                },
            ],
        },
    ];

    return <FormContent data={formScript} />;
}
