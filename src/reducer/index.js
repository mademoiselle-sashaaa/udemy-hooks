import TYPES from '../actions/actionTypes';

const tasksReducer = (state, action) => {
    switch (action.type) {
        case (TYPES.ADD_TASK):
            return {
                ...state,
                tasks: [...state.tasks, action.task]
            };

        case (TYPES.COMPLETE_TASK):
            const { completedTask } = action;
            return {
                ...state,
                completedTasks: [...state.completedTasks, completedTask],
                tasks: state.tasks.filter(task => task.id !== completedTask.id)
            };

        default:
            return state;
    }
}

export default tasksReducer;