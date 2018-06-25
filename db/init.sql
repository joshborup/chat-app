DROP TABLE rooms;
DROP TABLE profile;
DROP TABLE users;

CREATE TABLE users(
    id SERIAL PRIMARY KEY
    ,sub TEXT NOT NULL
    ,name TEXT NOT NULL
    ,picture TEXT NOT NULL
    ,email TEXT NOT NULL
    ,email_verified BOOLEAN NOT NULL
    ,profile_background TEXT
);

CREATE TABLE profile(
    id SERIAL PRIMARY KEY
    user_id INTEGER not null references users(id)
    , aboutMe TEXT
    , facebook TEXT
    , instagram TEXT
    , linkedin TEXT
)


CREATE TABLE rooms(
    id SERIAL PRIMARY KEY
    ,room_name TEXT not null
    ,room_admin INTERGER not null references users(id)
    ,date_created TEXT not null
    ,date_last_used TEXT
);

INSERT INTO rooms (room_name, room_admin, date_created, date_last_used) VALUES ('BoardGames', 1, 'Mon Jun 18 2018 11:11:40', 'Mon Jun 18 2018 11:11:40');
INSERT INTO rooms (room_name, room_admin, date_created, date_last_used) VALUES ('Gaming', 1, 'Mon Jun 18 2018 11:11:40', 'Mon Jun 18 2018 11:11:40');
INSERT INTO rooms (room_name, room_admin, date_created, date_last_used) VALUES ('Sports', 1, 'Mon Jun 18 2018 11:11:40', 'Mon Jun 18 2018 11:11:40');
INSERT INTO rooms (room_name, room_admin, date_created, date_last_used) VALUES ('Astronomy', 1, 'Mon Jun 18 2018 11:11:40', 'Mon Jun 18 2018 11:11:40');
INSERT INTO rooms (room_name, room_admin, date_created, date_last_used) VALUES ('JavaScript', 1, 'Mon Jun 18 2018 11:11:40', 'Mon Jun 18 2018 11:11:40');
INSERT INTO rooms (room_name, room_admin, date_created, date_last_used) VALUES ('Reactjs', 1, 'Mon Jun 18 2018 11:11:40', 'Mon Jun 18 2018 11:11:40');
INSERT INTO rooms (room_name, room_admin, date_created, date_last_used) VALUES ('Politics', 1, 'Mon Jun 18 2018 11:11:40', 'Mon Jun 18 2018 11:11:40');