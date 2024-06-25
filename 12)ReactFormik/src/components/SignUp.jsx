import { useFormik } from "formik"
import { SignUpSchema } from "../schema/SignUpSchema";



export default function SignUp(){


    const formik = useFormik({
        initialValues:{
            email:"",
            age:"",
            password:"",
            passwordAgain:""
        },
        validationSchema : SignUpSchema,
    })

        //Burada email e tıklanıp tıklanmadığı kontrol ediliyor...!!!!!!!!!!
        //Bu işlemi kullanabilmek için input içerisine onBlur={formik.handleBlur} yazılmalı 
        // console.log(formik.touched["email"]);

    return(<div className="row-span-3 flex justify-center items-center ">
        <form  className="flex flex-col w-1/3 text-white outline-none gap-2">
            <div  className="flex flex-col gap-1 ">
                <label >Email</label>
                <input name="email" onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} className=" outline-none bg-slate-800 border-2 px-2 py-1 rounded-lg  border-gray-600  focus:border-white" type="text" placeholder="Email" />
                <span className="text-red-500">{formik.touched["email"] && formik.errors.email && formik.errors.email}</span>
            </div>

            <div className="flex flex-col gap-1 ">
                <label >Age</label>
                <input name="age" onBlur={formik.handleBlur} value={formik.values.age} onChange={formik.handleChange} className="outline-none bg-slate-800 border-2 px-2 py-1 rounded-lg  border-gray-600  focus:border-white" type="number" placeholder="Age" />
                <span className="text-red-500">{formik.touched["age"] && formik.errors.age && formik.errors.age}</span>
            </div>

            <div className="flex flex-col gap-1 " >
                <label >Password</label>
                <input name="password" onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange} className="outline-none bg-slate-800 border-2 px-2 py-1 rounded-lg  border-gray-600  focus:border-white" type="password" placeholder="Password" />
                <span className="text-red-500">{formik.touched["password"] && formik.errors.password && formik.errors.password}</span>
            </div>

            <div className="flex flex-col gap-1 ">
                <label >Password Again</label>
                <input name="passwordAgain" onBlur={formik.handleBlur} value={formik.values.passwordAgain} onChange={formik.handleChange} className="outline-none bg-slate-800 border-2 px-2 py-1 rounded-lg  border-gray-600  focus:border-white" type="password" placeholder="Password Again" />
                <span className="text-red-500">{formik.touched["passwordAgain"] && formik.errors.passwordAgain && formik.errors.passwordAgain}</span>

            </div>

            <button className="mt-2 bg-green-800 hover:bg-green-900 px-4 py-1 rounded-xl duration-500">SAVE</button>

        </form>
    
    
    </div>)
}