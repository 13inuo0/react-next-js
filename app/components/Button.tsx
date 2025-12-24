"use client";
import "./Button.css";

type ButtonProps = {
  text: string;
  variant?: "primary" | "danger";
  onClick?: () => void;
  disabled?: boolean;
};
export default function Button({ text, variant = "primary", onClick, disabled = false }: ButtonProps) {
  return (
    <button className={`button ${variant}`} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}
