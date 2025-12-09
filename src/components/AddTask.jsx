import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
    const [inputValue, setInputValue] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        setIsSubmitting(true);
        setError(null);


        try {
            await onAdd({ text: inputValue });
            setInputValue('');
        } catch (err) {
            setError("Failed to add task. Please try again .");
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className="add-task-form" onSubmit={handleSubmit}>
            <div className="input-group ">
                <input
                    type="text"
                    placeholder="What needs to be done?"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    disabled={isSubmitting}
                />
                <button type="submit" disabled={isSubmitting || !inputValue.trim()}>
                    {isSubmitting ? 'Adding...' : 'Add Task'}
                </button>
            </div>
            {error && <p className="error-message">{error}</p>}
        </form>
    );
};

export default AddTask;
