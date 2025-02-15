import {create} from "zustand";

const useStore=create((set)=>({
    dataInput:[],
    addItem:(input)=>set((state)=>({
        dataInput:[...state.dataInput,{id:Date.now(),input,check:"true"}],
    })),
    dellItem:(id)=>set((state)=>({
        dataInput:state.dataInput.filter((obj)=>obj.id !== id) //filter return a new array
    })),
    completed:(id)=>set((state)=>({
        dataInput:state.dataInput.map((obj)=>(obj.id === id? ({...obj,check: obj.check==="false" ? "true" :"false"}):obj))
    })),
}));

export default useStore;