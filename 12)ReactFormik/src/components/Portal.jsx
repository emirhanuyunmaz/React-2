import { useFormik } from "formik"
import { PortalSchema } from "../schema/PortalSchema"
import { useState } from "react";

export default function Portal(){

    //Submit işlemi yapıldıktan sonra comp. kullanılamaz hale getirilmesini sağlamaktadır.
    const [isSubmit,setSubmit] = useState(false)

    function onSubmit(){
        console.log("clicked");
        setSubmit(true)
        formik.resetForm()

    }

    const formik = useFormik({
        initialValues:{
            userName:"",
            university:"",
            isAccepted:false
        },
        validationSchema : PortalSchema,
        onSubmit:onSubmit
    })


    return(<div className="row-span-2 flex flex-col justify-center items-center gap-4 text-white ">
        <form onSubmit={formik.handleSubmit} className="w-full md:w-1/3">
            <div className="flex flex-col gap-1 ">
                <label htmlFor="">User Name</label>
                <input disabled={isSubmit} type="text" name="userName" onBlur={formik.handleBlur} value={formik.values.userName} onChange={formik.handleChange} className=" outline-none bg-slate-800 border-2 px-2 py-1 rounded-lg  border-gray-600  focus:border-white" />
                <span className="text-red-500">{formik.touched["userName"] && formik.errors.userName}</span>
            </div>

            <div className="flex flex-col gap-1 ">
                <label >University</label>
                <select disabled={isSubmit} name="university" value={formik.values.university} onBlur={formik.handleBlur} onChange={formik.handleChange} className=" outline-none bg-slate-800 border-2 px-2 py-1 rounded-lg  border-gray-600  focus:border-white">
                    <option value="">Lütfen Üniversiteniz Seçiniz</option>
                    <option value="bogazici">Boğaziçi Üniversitesi</option>
                    <option value="gsu">Galatasaray Üniversitesi</option>
                    <option value="odtü">ODTÜ</option>
                    <option value="itü">İTÜ</option>
                </select>
                <span className="text-red-500"  >{formik.touched["university"] && formik.errors.university}</span>
            </div>
            
            <div className=" gap-2">
                <div className="flex">
                <input disabled={isSubmit} name="isAccepted" value={formik.values.isAccepted} onChange={formik.handleChange}
                onBlur={formik.handleBlur} type="checkbox"/>
                <p><a href="">Kullanım koşulları</a></p>
                </div>
                <span className="text-red-500 block">{formik.touched["isAccepted"] && formik.errors.isAccepted}</span>
            </div>

            <button type="submit" disabled={isSubmit}  className={` mt-2 ${isSubmit && "bg-green-900"} bg-green-800 hover:bg-green-900 px-4 py-1 rounded-xl duration-500 w-full `}>SAVE</button>
        </form>
    </div>)
}