import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
    const { tasks: initialTasks, completedTasks: initialComleted } = getTasks();

    const [taskText, setTaskText] = useState('');
    const [tasks, setTasks] = useState(initialTasks);
    const [completedTasks, setCompletedTasks] = useState(initialComleted);

    useEffect(() => {
        storeTask({ tasks, completedTasks });
    })

    const updateTaskText = event => {
        setTaskText(event.target.value);
    };

    const addTask = () => {
        setTasks([...tasks, { taskText, id: uuidv4() }]);
    };


    const completeTask = (completedTask) => () => {
        setCompletedTasks([...completedTasks, completedTask]);
        setTasks(tasks.filter(task => task.id !== completedTask.id));
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
