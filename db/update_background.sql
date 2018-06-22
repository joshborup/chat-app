UPDATE users
SET profile_background = $1
WHERE id = $2;
SELECT * FROM users WHERE id = $2;