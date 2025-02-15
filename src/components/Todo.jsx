import todo_icon from '../assets/todo_icon.png'
import TodoItems from "./TodoItems.jsx";
import useStore from "../store.js";
import {useState} from "react";

function Todo() {
    const[input,setInput] =useState("")
    const {addItem,dataInput}=useStore()

    function handleAdd(){
        if(input!==""){
            addItem(input);
            setInput("");
        }
    }
  return (
       // container.............
    <div className='bg-slate-50 place-self-center w-11/12 max-w-md
     flex flex-col p-7 min-h-[550px] rounded-xl'>

      {/*  title.................*/}
      <div className='flex items-center mt-7 gap-2'>
        <img className='w-8' src={todo_icon} alt=""/>
          <h1 className='text-3xl font-semibold'>To-Do List</h1>
      </div>

        {/*input box.................*/}
        <div className="flex items-center my-7 bg-gray-200 rounded-full">
            <input className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600'
              type="text" placeholder='Add your task' value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button className='border-none rounded-full bg-fuchsia-600
            w-32 h-14 text-white text-lg font-medium cursor-pointer' onClick={handleAdd}>Add+</button>
        </div>

        {/* todo list.................*/}
        <ul className="flex flex-col">
            {dataInput.map((obj)=><TodoItems key={obj.id} obj={obj}/>)}
        </ul>
    </div>
  );
}

export default Todo;
