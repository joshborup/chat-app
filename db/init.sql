DROP TABLE users;

CREATE TABLE users(
    id SERIAL PRIMARY KEY
    ,sub TEXT NOT NULL
    ,name TEXT NOT NULL
    ,picture TEXT NOT NULL
    ,email TEXT NOT NULL
    ,email_verified BOOLEAN NOT NULL
);