import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";
import { MdModeEdit, MdDeleteForever } from "react-icons/md";
import GridBackground from "./components/gridBackground";
import Modal from "./components/Modal";

function App() {
  const [Todo, setTodo] = useState("");
  const [Todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const edited = useRef({ id: "", value: "" });
  let addBtn = useRef(null);
  let inputBar = useRef(null);
  let updateBtn = useRef(null);

  const flag = useRef(false);

  const saveToLS = () => {
    localStorage.setItem("Todos", JSON.stringify(Todos));
  };

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };

  useEffect(() => {
    let todoString = localStorage.getItem("Todos");
    if (todoString) {
      let todos = JSON.parse(todoString);
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    if (flag.current) {
      saveToLS();
    }
    flag.current = true;
  }, [Todos]);

  const handleEdit = (e, id) => {
    inputBar.current.focus();
    let temp = Todos.find((val) => val.id === id);
    const value = temp.Todo;
    edited.current.id = temp.id;
    edited.current.value = value;

    setTodo(value);
    setIsUpdate(true);
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    if (deleteId) {
      let newTodos = Todos.filter((item) => item.id !== deleteId);
      setTodos(newTodos);
      setIsModalOpen(false);
      setDeleteId(null);
    }
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
    setDeleteId(null);
  };

  const handleAdd = () => {
    if (Todo.length >= 3) {
      setTodos([...Todos, { id: uuidv4(), Todo, isCompleted: false }]);
      setTodo("");
    } else {
      alert("The Input Length should be greater than 3 !!!");
    }
  };

  const handleUpdate = () => {
    if (Todo.length > 3) {
      const id = edited.current.id;
      let newTodos = [...Todos];
      let index = newTodos.findIndex((item) => item.id === id);
      newTodos[index].Todo = Todo;
      setTodos(newTodos);
      setTodo("");
      edited.current = {};
      setIsUpdate(false);
    } else {
      alert("The Input Length should be greater than 3 !!!");
      setTodo("");
      edited.current = {};
      setIsUpdate(false);
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheck = (e) => {
    let id = e.target.name;
    let index = Todos.findIndex((val) => val.id === id);
    let newTodos = [...Todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  return (
    <>
      <div className="relative overflow-y-auto h-[100vh] w-[100vw]">
        <Navbar />
        <div className="relative min-h-[94vh] overflow-hidden flex item-center-justify-center bg-gray-900">
          <GridBackground />
          <div className="relative md:container mx-auto my-5 rounded-xl p-5 bg-violet-200 bg-opacity-50 min-h-[80vh] md:w-1/2">
            <h1 className="font-bold text-center text-3xl ">
              Todo | Manage your Todos
            </h1>
            <div className="addTodo my-5 flex flex-col gap-4">
              <h2 className="text-2xl font-bold">Add Todo</h2>
              <div className="flex flex-col gap-4 md:gap-0 md:flex-row ">
                <div className="p-1 rounded-full w-full bg-gradient-to-r from-purple-400 via-fuchsia-500 to-rose-600">
                  <input
                    ref={inputBar}
                    onChange={handleChange}
                    value={Todo}
                    type="text"
                    className="w-full rounded-full px-5 py-1 focus:outline-none"
                    placeholder="Add Todo | Greater Than 3 Letters"
                  />
                </div>
                {isUpdate ? (
                  <button
                    className="bg-violet-800 disabled:bg-violet-700 disabled:opacity-30 hover:bg-violet-950 p-3 py-1 text-sm font-semibold text-white rounded-full md:mx-2 "
                    ref={updateBtn}
                    onClick={handleUpdate}
                    disabled={Todo.length <= 3}
                  >
                    Update
                  </button>
                ) : (
                  <button
                    className="bg-violet-800 disabled:bg-violet-700 disabled:opacity-30 hover:bg-violet-950 p-3 py-1 text-sm font-semibold text-white rounded-full md:mx-2 "
                    ref={addBtn}
                    onClick={handleAdd}
                    disabled={Todo.length <= 3}
                  >
                    Save
                  </button>
                )}
              </div>
            </div>
            <input
              type="checkbox"
              checked={showFinished}
              name=""
              id="show"
              onChange={toggleFinished}
            />{" "}
            <label htmlFor="show" className="mx-2">
              Show Finished
            </label>
            <div className="h-[3px] my-3 bg-black opacity-15 w-3/4 mx-auto"></div>
            <h2 className="text-3xl font-bold my-4">Your Todos</h2>
            <div className="Todos">
              {Todos.length === 0 && (
                <div className="m-5">No Todos To Display</div>
              )}
              {Todos.map(
                (item) =>
                  (showFinished || !item.isCompleted) && (
                    <div
                      key={item.id}
                      className="Todo flex my-3 justify-between"
                    >
                      <div className="flex gap-5">
                        <input
                          onChange={handleCheck}
                          type="checkbox"
                          checked={item.isCompleted}
                          name={item.id}
                          id=""
                        />
                        <div
                          className={
                            item.isCompleted ? "text line-through" : "text"
                          }
                        >
                          {item.Todo}
                        </div>
                      </div>
                      <div className="buttons flex h-full">
                        <button
                          onClick={(e) => handleEdit(e, item.id)}
                          className="bg-violet-800 hover:bg-violet-950 p-2 py-1 font-semibold text-white rounded-md mx-1"
                        >
                          <MdModeEdit color="white" />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="bg-violet-800 hover:bg-violet-950 p-2 py-1 font-semibold text-white rounded-md mx-1"
                        >
                          <MdDeleteForever color="white" />
                        </button>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={cancelDelete}
        onConfirm={confirmDelete}
        message="Are you sure you want to delete this note?"
      />
    </>
  );
}

export default App;
