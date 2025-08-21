"use client";

import Link from "next/link";
import css from "./TagsMenu.module.css";

const tags = ["Todo", "Work", "Personal", "Meeting", "Shopping"];

export default function TagsMenu() {
  return (
    <div className={css.menuContainer}>
      <button className={css.menuButton}>
        Notes ▾
      </button>
      <ul className={css.menuList}>
        {tags.map((tag) => {
          const href =
            tag === "All notes" ? "/notes/filter" : `/notes/filter/${tag}`;

          return (
            <li key={tag} className={css.menuItem}>
              <Link href={href} className={css.menuLink}>
                {tag}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
