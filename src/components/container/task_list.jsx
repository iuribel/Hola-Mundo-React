import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskList = () => {
    const defaultTask = new Task('Ejemplo', 'Descripción predeterminada', false, LEVELS.NORMAL);

    const changeState = (id) => {
        console.log('POR HACER: Cambiar el estado de una tarea')
    }

    return (
        <div>
            <div>
                <h1>
                    Tus Tareas:
                </h1>                
            </div>

            {/* TO DO: aplicar un for o un map para renderizar una lista de tarea  */}
            <TaskComponent task={defaultTask}></TaskComponent>

        </div>
    );
};




export default TaskList;
