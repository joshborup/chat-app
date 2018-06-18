SELECT rooms.* FROM rooms
JOIN users
ON(users.id = rooms.room_admin)
WHERE rooms.room_name ILIKE CONCAT('%', $1, '%');