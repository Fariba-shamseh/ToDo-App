import tick from "../assets/tick.png"
import deleteIcon from "../assets/delete.png"
import not_tick from "../assets/not_tick.png"
import useStore from "../store.js";


function TodoItems({obj}) {
    const {dellItem, completed}=useStore();

    function handleDel(){
        dellItem(obj.id)
    }
    function handleTick(){
        completed(obj.id)
    }

  return (
    <div className='flex item-center my-3 gap-2'>
      <div className='flex flex-1 item-center cursor-pointer'>
        <img src={obj.check === "true" ? not_tick : tick} alt="" className="w-6 h-6 cursor-pointer" onClick={handleTick}/>
        <p className='text-slate-700 ml-4 text-[17px]'>{obj.input}</p>
      </div>

      <img src={deleteIcon}  alt="" className='w-5 h-5 cursor-pointer' onClick={handleDel}/>
    </div>
  );
}

export default TodoItems;
