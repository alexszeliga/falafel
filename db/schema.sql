

CREATE DATABASE falafel_db;
USE falafel_db;

CREATE TABLE falafel
(
    id INT NOT NULL
    AUTO_INCREMENT,
	falafel_name varchar
    (255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY
    (id)
);
