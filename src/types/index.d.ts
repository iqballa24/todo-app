export interface Todos {
  data: Array<{ id: number; title: string }>;
}

export interface TodoItem {
  id: number;
  title: string;
}

export interface TabAction {
  tabList: Array<string>;
  className?: string;
}
