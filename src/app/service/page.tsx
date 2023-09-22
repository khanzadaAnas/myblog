"use client";

import React, { useState } from "react";
import { TodoObject } from "../models/Todo";
import { v4 as uuid } from "uuid";

const Service: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodoObject[]>([]);

  const addTodo = () => {
    const newTodo: TodoObject = {
      id: String(Date.now()),
      value: todo,
      done: false,
    };
    setTodos([newTodo, ...todos]);
    setTodo("");
  };

  const markTodoDone = (id) => {
    // Find the todo by ID and update its "done" property
    const updatedTodos = todos.map((todoItem) => {
      if (todoItem.id === id) {
        return { ...todoItem, done: !todoItem.done };
      }
      return todoItem;
    });

    setTodos(updatedTodos);
  };

  return (
    <div className="bg-yellow-100">
      <header className="bg-slate-950 p-4">
        <h1 className="text-3xl text-white">Todos</h1>
      </header>
      <main className="p-4">
        <input
          type="text"
          placeholder="Enter your service"
          className="p-2 rounded mr-5 text-slate-900"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button className="border-2 p-2 rounded" onClick={addTodo}>
          Add todo
        </button>
        <ul className="mt-5">
          {todos.map((todoItem) => (
            <li
              onClick={() => markTodoDone(todoItem.id)}
              className={`text-3xl ml-5 cursor-pointer ${
                todoItem.done ? "line-through" : ""
              }`}
              key={todoItem.id}
            >
              {todoItem.value}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Service;
