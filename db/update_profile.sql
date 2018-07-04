UPDATE profile
set about_me = $1,
    facebook = $2,
    instagram = $3,
    linkedin = $4
WHERE user_id = $5
RETURNING *;