import React from "react";
import { use } from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function home() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [newTodos, setNewTodos] = useState("");
  useEffect(() => {
    const fetchtodos = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:4001/todo/fetch", {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(response.data.todos);
        setTodos(response.data.todos);
        setError(null);
      } catch (error) {
        setError("Failed to fetch todos");
      } finally {
        setLoading(false);
      }
    };
    fetchtodos();
  }, []);

  const todoCreate = async () => {
    try {
      if (!newTodos) {
        return;
      }
      const response = await axios.post(
        "http://localhost:4001/todo/create",
        {
          text: newTodos,
          completed: false,
        },
        {
          withCredentials: true,
        }
      );

      setTodos([...todos, response.data.todo]);
      setNewTodos("");
    } catch (error) {}
  };

  const todoStatus = async (id, completed) => {
    const todo = todos.find((t) => t._id === id);
    try {
      const response = await axios.put(
        `http://localhost:4001/todo/update/${id}`,
        {
          ...todo,
          completed: !todo.completed,
        },
        {
          withCredentials: true,
        }
      );
      setTodos(todo.map((t) => (t._id === id ? response.data.todo : t)));
    } catch (error) {
      console.log(error);
    }
  };
  return <div></div>;
}

export default home;
