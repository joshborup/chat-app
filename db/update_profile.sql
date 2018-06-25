UPDATE profile
set about_me = ${aboutMe},
    facebook = ${facebook},
    instagram = ${instagram},
    linkedin = ${linkedin}
WHERE user_id = ${user_id}
RETURNING *;