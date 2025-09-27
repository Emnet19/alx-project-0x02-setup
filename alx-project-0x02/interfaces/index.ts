export interface HeaderProps{

}
// interfaces/index.ts
export interface CardProps {
  title: string;
  content: string;
}
// interfaces/index.ts
export interface ButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
}

// interfaces/index.ts
export interface PostProps {
  id: number;
  title: string;
  content: string;
  userId: number;
}

