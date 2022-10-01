import { Trash } from "phosphor-react";
import styles from "./Task.module.scss";

function handleChecked() {
  console.log("teste");
}

export function Task() {
  return (
    <section className={styles.content}>
      <div className={styles.taskInfo}>
        <input type="checkbox" id="checkboxId" onChange={handleChecked} />
        {/* https://www.w3schools.com/howto/howto_css_custom_checkbox.asp */}
        <label htmlFor="checkboxId"></label>
        <p>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer. Integer urna interdum massa libero auctor
          neque turpis turpis semper. Duis vel sed fames integer.
        </p>
      </div>
      <button>
        <Trash size={24} />
      </button>
    </section>
  );
}
