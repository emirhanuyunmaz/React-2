import * as yup from "yup"

export const PortalSchema = yup.object().shape({
    userName : yup.string().min(6,"Kullanıcı adı 6 karakterden uzun olmalı.").required("Lütfen bir kullanıcı adı giriniz"),
    university : yup.string().oneOf(["bogazici","gsu","odtü","itü"],"Lütfen üniversite seçiniz.").required("Üniversite seçimi zorunludur."),
    isAccepted:yup.boolean().oneOf([true],"Kullanım koşullarını kabul ediniz.")
})