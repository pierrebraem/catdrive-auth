CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    is_admin BOOLEAN NOT NULL DEFAULT FALSE,
    last_login TIMESTAMP NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

/* Temporary user for dev purpose, DO NOT USE IT ON PROD */
INSERT INTO users (firstname, lastname, email, password, is_admin) VALUES ('Pierre', 'Braem', 'pierre.braem@test.com', 'any', TRUE);