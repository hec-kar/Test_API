
CREATE DATABASE demo_node_api;

use demo_node_api;

CREATE TABLE IF NOT EXISTS author
(
	id INT primary key auto_increment,
    name varchar(100) unique
)

CREATE TABLE IF NOT EXISTS book
(
	id INT PRIMARY KEY auto_increment,
    name varchar(100) not null,
    image varchar(100) null,
    author_id int not null 
)

ALTER TABLE book
ADD FOREIGN KEY (author_id) REFERENCES author(id);


insert into author (name) values
("Nam Cao"),
("Ngô Tất Tố"),
("Tố Hữu");

insert into book(name, author_id) values
('Lão Hạc và con chó vàng', 1),
('Chí PHèo', 1),
('Lượm', 3),
('Chị Dậu', 2);

INSERT INTO book(name, author_id) VALUES 
('Lão Hạc và con chó vàng', 1)

INSERT INTO book SET
name = 'Lão Hạc và con chó vàng',
author_id = 1;

