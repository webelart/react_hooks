import React, { useState } from 'react';

import { InputPlus } from '../components/InputPlus';
import { InputTask } from '../components/InputTask';

import styles from './index.module.scss';

export const App = () => {
  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>To Do App</h1>
      <section className={styles.articleSection}>
          <InputPlus
            onAdd={(value) => {
              if (value) {
                // createTask(value)
              }
            }}
          />
      </section>
      <section className={styles.articleSection}>
        {/* {tasks.length <= 0 && (
          <p className={styles.articleText}>There is no one task.</p>
        )}
        {tasks.map((task) => (
          <InputTask
            key={task.id}
            id={task.id}
            title={task.title}
            onDone={removeTask}
            onEdited={updateTask}
            onRemoved={removeTask}
          />
        ))} */}
      </section>
    </article>
  );
}