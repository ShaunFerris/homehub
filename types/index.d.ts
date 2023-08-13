export interface IUpdateContext {
  hasUpdated: boolean;
  setHasUpdated: (state: boolean) => void;
}

export interface IShopListItem {
  name: string;
  complete: boolean;
}
