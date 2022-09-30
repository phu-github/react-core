
interface ItemNav {
  text: string,
  url: string,
  id?: number,
}
export interface NavProps {
  children?: string;
  items: ItemNav[];
}