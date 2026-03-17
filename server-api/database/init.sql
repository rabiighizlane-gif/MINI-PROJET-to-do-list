
DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    status VARCHAR(50) DEFAULT 'en cours',
    task_date DATE
);


INSERT INTO tasks (title, status, task_date) VALUES 
('Apprendre Vue.js', 'done', '2026-03-16'),
('Terminer le projet To-do', 'en cours', '2026-03-20');