"use client";

import React, { useState} from 'react'

function ToDoList(){
    
    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "Walk the dog"]);
    const [newTask, setNewTask] = useState("");
    
    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    
    function addTask(){
        
        if(newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
        
    }
    
    function deleteTask(index){
        
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        
        
    }
    
    function moveTaskUp(index){
        
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    
    function moveTaskDown(index){

        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="bg-white shadow-lg rounded-xl p-6">
            <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
                To-Do List
            </h1>

            <div className="flex gap-2 mb-6">
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange}
                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <button
                    onClick={addTask}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                >
                    Add
                </button>
            </div>

            <ol className="space-y-2">
                {tasks.map((task, index) => (
                    <li
                        key={index}
                        className="flex items-center justify-between bg-gray-100 rounded-md px-4 py-2"
                    >
                        <span className="text-gray-800">{task}</span>
                        <div className="flex gap-2">
                            <button
                                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                                onClick={() => deleteTask(index)}
                            >
                                Delete
                            </button>
                            <button
                                className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 transition"
                                onClick={() => moveTaskUp(index)}
                            >
                                Up
                            </button>
                            <button
                                className="bg-purple-500 text-white px-2 py-1 rounded hover:bg-purple-600 transition"
                                onClick={() => moveTaskDown(index)}
                            >
                                Down
                            </button>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;