export class Todos {
  id: number;
  title: string;
  isChecked: boolean;

  constructor(todoText: string) {
    this.id = +new Date();
    this.title = todoText;
    this.isChecked = false;
  }
}

export type TodoContextObj = {
  items: Todos[];
  filterType: string;
  setTodos: (e: any) => void,
  addTodoHandler: (title: string) => void;
  removeTodoHandler: (id: number) => void;
  clearTodoCompleteHandler: () => void;
  checkTodoHandler: (id: number) => void;
  changeTypeFilter: (type: string) => void;
};

export interface TabAction {
  tabList: {
    group: string;
    list: Array<string>;
  };
  className?: string;
}
