import { El } from "../El"

export const input=(id_input,type,Name,placeholder)=>{
   return El({
        element:'div',
        className:'flex gap-5 w-full',
        children:[
            El({
                element:'input',
                className:'w-full text-black p-2',
                id:`${id_input}`,
                type:`${type}`,
                name:`${Name}`,
                placeholder:`${placeholder}`
            })
        ]
    })
}