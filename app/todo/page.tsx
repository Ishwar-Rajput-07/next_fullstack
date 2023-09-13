import TodoTable from '@/components/TodoTable'
import React from 'react'

const page = () => {

    const todoData: {
        task: FormDataEntryValue | null,
        desc: FormDataEntryValue | null
    } = {
        task: "",
        desc: ""
    }
    const handleUseRasponse = async (e: FormData) => {
        "use server"
        try {
            todoData.task = e.get("task")
            todoData.desc = e.get("desc")
            const res = await fetch("http://localhost:3000/api/todo", {
                method: "POST",
                body: JSON.stringify(todoData),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const result = await res.json()
            console.log(result);

        } catch (error) {
            console.log(error);
        }
    }


    return <>
        <form action={handleUseRasponse}>
            <input className='border-2' type="text" name="task" />
            <input className='border-2' type="text" name="desc" />
            <button className='py-3 px-5 bg-red-400'>Add Todo</button>
            <TodoTable />
        </form>
    </>
}

export default page