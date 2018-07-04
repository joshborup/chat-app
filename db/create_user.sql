INSERT INTO users(sub ,name ,picture ,email ,email_verified, profile_background) VALUES($1,$2,$3,$4,$5,$6);
SELECT * FROM users
WHERE sub = $1;

 