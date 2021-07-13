export class Todo {
    id: number = 0;
    label: string = '';
    important: boolean = false;
    done: boolean = false;

    constructor(values: Object = {}) {
      Object.assign(this, values);
    }

}
