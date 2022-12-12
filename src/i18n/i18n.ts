import React from "react";
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "Manufacturing": "Manufacturing",
            "Home" : "Home",
            "DashBoard": "Dashboard",
            "Setting" : "Setting",

        }
    },
    vi: {
        translation: {
            "Manufacturing": "Chế tạo",
            "Home" : "Trang chủ",
            "Dashboard" : "Bảng điều khiển",
            "Setting" : "Cấu hình",
        }
    }

};
i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "vi", // if you're using a language detector, do not define the lng option
        fallbackLng: "vi",
        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });


