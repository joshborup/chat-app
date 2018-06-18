SELECT users.name, rooms.* FROM users
JOIN rooms
ON(users.id = rooms.room_admin);