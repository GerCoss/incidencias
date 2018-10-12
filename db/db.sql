
drop DATABASE if EXISTS Edivers;
create database Edivers;

use Edivers;

create table programadores (
    nombre varchar(50) not null,
    email varchar(50) not null,
    password VARCHAR(200) not null,
    imagen VARCHAR(100) default null,
    primary key(email)
);

describe programadores;

insert into programadores (nombre,email,password) values
	('Angel', 'angel.edivers@gmail.com','123456'),
    ('Gerardo', 'gercoss@gmail.com','123456');
    
select * from programadores;