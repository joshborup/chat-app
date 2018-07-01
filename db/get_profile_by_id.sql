SELECT users.id, name, picture, email_verified, profile_background, profile.user_id	, profile.about_me	, profile.facebook	, profile.instagram	, profile.linkedin FROM
users JOIN profile
ON (users.id = profile.user_id)
WHERE users.id = $1;