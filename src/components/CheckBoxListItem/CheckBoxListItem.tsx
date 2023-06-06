import { ChangeEventHandler } from "react";
import styles from "./CheckBoxListItem.module.css";

interface CheckBoxListItemProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export function CheckBoxListItem({ value, onChange }: CheckBoxListItemProps) {
  return (
    <li className={styles.listItem}>
      <input type="checkbox" onChange={onChange} value={value} />{" "}
      <span>{value}</span>
    </li>
  );
}
