DROP TABLE films;

CREATE TABLE films
(
  id SERIAL8 PRIMARY KEY,
  title VARCHAR(255),
  main_star VARCHAR(255),
  year_released INT

);

INSERT INTO films (title, main_star, year_released) VALUES ('Edward Scissorhands', 'Johnny Depp', 1990);
INSERT INTO films (title, main_star, year_released) VALUES ('Beetlejuice', 'Alec Baldwin', 1988);
INSERT INTO films (title, main_star, year_released) VALUES ('Batman Returns', 'Michael Keaton', 1992);
INSERT INTO films (title, main_star, year_released) VALUES ('Nightmare Before Christmas', 'Danny Elfman', 1993);
INSERT INTO films (title, main_star, year_released) VALUES ('Planet of the Apes', 'Mark Wahlberg', 1990);
INSERT INTO films (title, main_star, year_released) VALUES ('Corpse Bride', 'Johnny Depp', 2005);
