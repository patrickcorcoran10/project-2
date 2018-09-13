drop database if exists hangry;
create database hangry;
use hangry;

create table users (
	id int NOT NULL AUTO_INCREMENT,
    userName  varchar(40) NOT NULL,
    password varchar(40) NOT NULL,
    primary key(id)
);

create table userData (
	id int NOT NULL AUTO_INCREMENT,
    foodLikes varchar(255) not null,
    zipCode varchar(10) not null,
    starRating integer(1) not null,
    favRestos varchar(255),
	foreign key (user_id) REFERENCES users(id)
);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

