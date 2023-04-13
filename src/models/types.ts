export interface TodoItem {
    id: number;
    text: string;
}
export interface LoginProps  {
    onLogin: (email: string, password: string) => void;
}
// interface Item {
//     id: number;
//     name: string;
//     image: string;
//     description: string;
//   }
export interface MenuListProps {
    items: {
      id: number;
      name: string;
      image: string;
      description: string;
    }[];
}