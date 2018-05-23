INSERT INTO users(sub ,name ,picture ,email ,email_verified) VALUES($1,$2,$3,$4,$5);
SELECT * FROM users
WHERE sub = $1;

 