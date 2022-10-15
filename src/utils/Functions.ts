import { configs } from "shared/content/Content";

export const open = (link: string) => window.open(link, "_blank");

export const onResumeOpen = () => {
   open(configs.common.resume);
};
export const onResumeOpenLang = (lang = 'es') => {
    if(lang === 'es')  open(configs.common.resume_es);
    else onResumeOpen();
};

export const onMailTo = () => {
    open("mailto:" + configs.common.email);
};
