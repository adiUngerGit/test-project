CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

INSERT INTO users(username, email)
VALUES
('johndoe1', 'johndoe@localhost1'),
('janedoe2', 'janedoe@localhost2');  

SELECT * FROM users
 