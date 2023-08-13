export interface IUpdateContext {
  hasUpdated: boolean;
  setHasUpdated: (state: boolean) => void;
}

export interface IShopListItem {
  name: string;
  complete: boolean;
}

export interface ITodoContext {
  todoTasks: any;
  stateChange: boolean;
  setStateChange: (state: boolean) => void;
}
