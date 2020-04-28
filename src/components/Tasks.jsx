import React, { useState, useEffect, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import tasksReducer from '../reducer';
import TYPES from '../actions/actionTypes';

const TASK_STORAGE_KEY = 'TASK_STORAGE_KEY';

const storeTask = (tasksMap) => {
    localStorage.setItem(
        TASK_STORAGE_KEY,
        JSON.stringify(tasksMap)
    );
};

const getTasks = () => {
    return localStorage.getItem(TASK_STORAGE_KEY) && JSON.parse(localStorage.getItem(TASK_STORAGE_KEY)) ||
        { tasks: [], completedTasks: [] };
}

function Tasks() {
    const storedTasks = getTasks();

    const [taskText, setTaskText] = useState('');
    const [state, dispatch] = useReducer(tasksReducer, storedTasks);

    const { tasks, completedTasks } = state;

    useEffect(() => {
        storeTask({ tasks, completedTasks });
    })

    const updateTaskText = event => {
        setTaskText(event.target.value);
    };

    const addTask = () => {
        dispatch({
            type: TYPES.ADD_TASK,
            task: { taskText, id: uuidv4() }
        });
    };


    const completeTask = (completedTask) => () => {
        dispatch({
            type: TYPES.COMPLETE_TASK,
            completedTask
        });
    };

    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            addTask();
        }
    };

    return (
        <div>
            <h3>Tasks</h3>
            <div className="form">
                <input value={taskText} onChange={updateTaskText} onKeyPress={handleKeyPress} />
                <button onClick={addTask}>Add task</button>

                <div className="task-list">
                    {
                        tasks.map(task => {
                            const { id, taskText } = task;
                            return <div key={id} onClick={completeTask(task)}>{taskText}</div>
                        })
                    }
                </div>
                <div className="completed-list">
                    {
                        completedTasks.map(task => {
                            const { id, taskText } = task;
                            return <div key={id}>{taskText}</div>
                        })
                    }
                </div>
            </div>

        </div>
    );
}

export default Tasks;
