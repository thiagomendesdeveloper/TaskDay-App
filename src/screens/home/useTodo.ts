import React, { useState } from 'react';

interface Todo {
    text: string;
    selected: boolean;
}

const dados = [{ text: "Ler Livos", selected: false }, { text: "Praticar Esportes", selected: false }, { text: "Jogar videogame", selected: false }, { text: "Trabalhar", selected: false }]

export const useTodo = () => {


    const [todos, setTodos] = useState<Todo[]>(dados);
    const [newTodo, setNewTodo] = useState<string>('');
    const [selectedTodos, setSelectedTodos] = useState<number[]>([]);
    const [checked, setChecked] = useState(false);

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, { text: newTodo, selected: false }]);
            setNewTodo('');
        }
    };

    const removeTodo = () => {
        const updatedTodos = todos.filter((_, index) => !selectedTodos.includes(index));
        setTodos(updatedTodos);
        setSelectedTodos([]);
    };

    const handleCheckBoxToggle = () => {
        setChecked(!checked);
    };

    const toggleSelectTodo = (index: number) => {
        const updatedTodos = [...todos];
        updatedTodos[index].selected = !updatedTodos[index].selected;

        if (updatedTodos[index].selected) {
            setSelectedTodos([...selectedTodos, index]);
        } else {
            const selectedIndex = selectedTodos.indexOf(index);
            const updatedSelectedTodos = [...selectedTodos];
            updatedSelectedTodos.splice(selectedIndex, 1);
            setSelectedTodos(updatedSelectedTodos);
        }

        setTodos(updatedTodos);
    };

    return {
        toggleSelectTodo,
        handleCheckBoxToggle,
        removeTodo,
        addTodo,
        todos,
        setNewTodo,
        selectedTodos,
        newTodo
    }
};