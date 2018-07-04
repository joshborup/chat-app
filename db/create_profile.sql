INSERT INTO profile (user_id, about_me, facebook, instagram, linkedin) VALUES ($1, null, null, null, null)
RETURNING *;
