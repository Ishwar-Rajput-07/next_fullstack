"use client"
import { useEffect, useState } from "react"


type TODO = {
    _id?: string,
    task: string,
    desc: string,
    createdAt?: string,
    updateAt?: string,
    _v?: string,
}

const TodoTable = () => {
    const [allTodos, setAllTodos] = useState<TODO[]>([])
    const getTodos = async () => {
        const res = await fetch("/api/todo", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const { result } = await res.json()
        console.log(result);
        setAllTodos(result)

    }
    const deleteTodos = async () => {
        const res = await fetch("/api/todo", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const { result } = await res.json()
        console.log(result);
        setAllTodos(result)

    }

    useEffect(() => {
        getTodos()
    }, [])

    return <>
        <h1>Todo Table </h1>
        <hr />
        {
            allTodos.map(item => <div key={item._id}>
                <h1 className="text-2xl">{item.task}</h1>
                <p>{item.desc}</p>
                <button className="py-2 px-4 bg-red-500">Delete</button>

            </div>)
        }
    </>
}

export default TodoTable