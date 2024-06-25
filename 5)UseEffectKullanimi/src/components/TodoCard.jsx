import axios from "axios"

export default function TodoCard({todo}){

    function checkboxHandleClick(){
        if(!todo.done){
            const doneTodo = {
                text:todo.text,
                done:!todo.done
            }

            axios.put(`http://localhost:3000/todos/${todo.id}`,doneTodo)
            
        }else{

            const doneTodo = {
                text:todo.text,
                done:!todo.done
            }
            axios.put(`http://localhost:3000/todos/${todo.id}`,doneTodo)

        }
    }

    
    function deleteHandleClick() {
        axios.delete(`http://localhost:3000/todos/${todo.id}`)
    }


    return(<div className="bg-blue-400 flex w-1/3 justify-between border-2 border-gray-500 rounded-2xl">
    <div className="flex items-center gap-3">
    <input checked = {todo.done} onChange={checkboxHandleClick} type="checkbox" className="ml-2 size-5"/>
    <p className= { `${todo.done ? "line-through" : ""}`} >{todo.text}</p>
    </div>
    <button onClick={deleteHandleClick} className="bg-red-500 hover:bg-red-600 duration-500 px-3 py-1 rounded-2xl" >Delete</button>
</div>)
}  