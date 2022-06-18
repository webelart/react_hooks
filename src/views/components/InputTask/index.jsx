import React, {useState, useRef, useEffect} from 'react';

import styles from './index.module.scss';



export const InputTask = ({
  id,
  title,
  onDone,
  onEdited,
  onRemoved,
}) => {
    const [checked, setChecked] = useState(false);
    const [isEditMode, setEditMode] = useState(false);
    const [value, setValue] = useState(title);
    const editTitleInputRef = useRef(null);

    useEffect(() => {
        if(isEditMode) {
            editTitleInputRef?.current?.focus();
        }
    }, [isEditMode])

    return (
        <div className={styles.inputTask}>
            <label className={styles.inputTaskLabel}>
                <input
                    type="checkbox"
                    disabled={isEditMode}
                    checked={checked}
                    className={styles.inputTaskCheckbox}
                    onChange={(evt) => {
                        setChecked(evt.target.checked);
                        setTimeout(() => {
                            onDone(id);
                        }, 300);
                    }}
                />
                {isEditMode ? (
                    <input
                        value={value}
                        ref={editTitleInputRef}
                        onChange={({target}) => {
                            setValue(target.value);
                        }}
                        onKeyDown={(evt) => {
                            if (evt.key === 'Enter') {
                                onEdited(id, value);
                                setEditMode(false);
                            }
                        }}
                        className={styles.inputTaskTitleEdit}
                    />
                ) : (
                    <h3 className={styles.inputTaskTitle}>{title}</h3>
                )}
            </label>
            {isEditMode ? (
                <button
                    onClick={() => {
                        onEdited(id, value);
                        setEditMode(false);
                    }}
                    aria-label="Save"
                    className={styles.inputTaskSave}
                />
            ) : (
                <button
                    onClick={() => {
                        setEditMode(true);
                    }}
                    aria-label="Edit"
                    className={styles.inputTaskEdit}
                />
            )}
            <button
                onClick={() => {
                    if (confirm("Are you sure?")) {
                        onRemoved(id);
                    }
                }}
                aria-label="Remove"
                className={styles.inputTaskRemove}
            />
        </div>
    );
}