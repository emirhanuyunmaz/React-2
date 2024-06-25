import * as yup from "yup"

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const SignUpSchema = yup.object().shape({
  email: yup.string().email("Lütfen geçerli bir email giriniz.").required("Email girmek zorunludur"),
  age : yup.number().positive("Lütfen pozitif bir tam sayı giriniz.").integer("Lütfen tam sayı giriniz.").required("Yaş girmek zorunludur."),
  password: yup.string().min(6,"Şifre 6 karakterden kısa olamaz").matches(passwordRules,"Şifrede en az bir büyük bir küçük harf ve sayı olması gerekmektedir.").required("Şifre girmek zorunludur."),
  passwordAgain: yup.string().oneOf([yup.ref("password")],"Şifreler eşleşmiyor").required("Lütfen şifreyi tekrar giriniz.")
})