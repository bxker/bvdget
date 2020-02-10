INSERT INTO users (email, username, hash, first_name, last_name, profile_img)
VALUES ($1, $2, $3, $4, $5, 'https://www.cmcaindia.org/wp-content/uploads/2015/11/default-profile-picture-gmail-2.png')
RETURNING *;