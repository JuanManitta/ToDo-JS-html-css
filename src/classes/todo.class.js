

export class Todo {

    static fromJson ({ id, tarea, completado, creado }){
       
        const tempTodo = new Todo (tarea);

        tempTodo.id         = id
        tempTodo.completad  = completado;
        tempTodo.creado     = creado;
    }

    constructor ( tarea ) {

        this.tarea      = tarea;

        this.id         = new Date().getTime();
        this.completado = false;
        this.creado     = new Date()
        this.checked    = false;

    }
}