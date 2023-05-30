import React, { ReactNode, createContext, useEffect, useState } from 'react';
import { LayoutAnimation } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Todo {
    text: string;
    selected: boolean;
}

interface TodoContextType {
    todos: Todo[];
    newTodo: string;
    selectedTodos: number[];
    addTodo: () => void;
    removeTodo: () => void;
    handleCheckBoxToggle: () => void;
    toggleSelectTodo: (index: number) => void;
    setNewTodo: (text: string) => void;
}

const dados: Todo[] = [
    { text: 'Ler Livros', selected: false },
    { text: 'Praticar Esportes', selected: false },
    { text: 'Jogar videogame', selected: false },
    { text: 'Trabalhar', selected: false },
];

const TodoContext = createContext<TodoContextType>({
    todos: [],
    newTodo: '',
    selectedTodos: [],
    addTodo: () => { },
    removeTodo: () => { },
    handleCheckBoxToggle: () => { },
    toggleSelectTodo: () => { },
    setNewTodo: () => { },
});

interface propsChildren {
    children: ReactNode;
}

const TodoProvider: React.FC<propsChildren> = ({ children }) => {

    const [todos, setTodos] = useState<Todo[]>(dados);
    const [newTodo, setNewTodo] = useState<string>('');
    const [selectedTodos, setSelectedTodos] = useState<number[]>([]);
    const [checked, setChecked] = useState(false);

    useEffect(() => {

        async function fetchData() {
            try {
                const storedData = await AsyncStorage.getItem('todos');
                if (storedData !== null) {
                    const parsedData = JSON.parse(storedData);
                    setTodos(parsedData);
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [])

    const addTodo = async () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
        if (newTodo.trim() !== '') {
            setTodos([...todos, { text: newTodo, selected: false }]);
            setNewTodo('');
        }

        try {
            await AsyncStorage.setItem('todos', JSON.stringify([...todos, { text: newTodo, selected: false }]));
        } catch (error) {
            console.log('Error saving todos to AsyncStorage:', error);
        }
    };

    const removeTodo = async () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
        const updatedTodos = todos.filter((_, index) => !selectedTodos.includes(index));
        setTodos(updatedTodos);
        try {
            await AsyncStorage.setItem('todos', JSON.stringify(updatedTodos));
        } catch (error) {
            console.log('Error saving todos to AsyncStorage:', error);
        }
        setSelectedTodos([]);
    };

    const handleCheckBoxToggle = () => {
        setChecked(!checked);
    };

    const toggleSelectTodo = (index: number) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring); // Configura a animação de layout

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

    const setNewTodoText = (text: string) => {
        setNewTodo(text);
    };


    return (
        <TodoContext.Provider
            value={{
                todos,
                newTodo,
                selectedTodos,
                addTodo,
                removeTodo,
                handleCheckBoxToggle,
                toggleSelectTodo,
                setNewTodo: setNewTodoText,
            }}
        >
            {children}
        </TodoContext.Provider>
    )
};

export { TodoContext, TodoProvider };