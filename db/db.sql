
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

insert into programadores (nombre,email,password) values
	('Angel', 'angel.edivers@gmail.com','123456'),
    ('Gerardo', 'gercoss@gmail.com','123456');
    
-- select * from programadores;

CREATE TABLE proyectos (
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(25) not null,
    url VARCHAR(50) DEFAULT 'n',
    estado VARCHAR(5),
    primary key (id)
);

CREATE TABLE pantallas(
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(4) not null,
    url VARCHAR(50) DEFAULT 'n',
    estado VARCHAR(5),
    id_proyecto int(11),
    PRIMARY KEY (id),
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id)
);

CREATE TABLE incidencias(
    descripcion VARCHAR(200) not null,
    captura VARCHAR(50),
    id_pantalla INT(11),
    estado VARCHAR(5),
    FOREIGN KEY (id_pantalla) REFERENCES pantallas(id)
);