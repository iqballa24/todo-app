export interface TodoItem {
  id: number;
  title: string;
  isChecked: boolean;
}

export interface Todos {
  data: Array<TodoItem>;
}

export interface TabAction {
  tabList: {
    group: string;
    list: Array<string>;
  };
  className?: string;
}
