/*
Creamos la base de datos.
*/
CREATE DATABASE attendance;

/*
Creamos una tabla.
Serial hace que sea unico.
*/
CREATE TABLE estudiantes(
    student_code serial PRIMARY KEY,
    student_name VARCHAR(100) NOT NULL,
    student_dir VARCHAR(200) NOT NULL
      
);

CREATE TABLE profesores(
    id_profesor serial PRIMARY KEY,
    id_personal INT NOT NULL,
    facultad VARCHAR(100) NOT NULL,
    FOREIGN KEY (id_personal) REFERENCES personal(id_personal)
);

CREATE TABLE sede(
    id_sede serial PRIMARY KEY,
    ubicacion VARCHAR(200) NOT NULL,
    name_sede VARCHAR(200) NOT NULL
);

CREATE TABLE matricula(
    codigo_c INT NOT NULL,
    codigo_e INT NOT NULL,
    FOREIGN KEY (codigo_e) REFERENCES estudiantes(student_code),
    FOREIGN KEY (codigo_c) REFERENCES cursos(codigo_c)
);

CREATE TABLE administrador (
    id_admin serial PRIMARY KEY,
    id_sede INT NOT NULL,
    name_admin VARCHAR(100) NOT NULL,
    contraseña VARCHAR(100) NOT NULL,
    FOREIGN KEY (id_sede) REFERENCES sede(id_sede)  
);

CREATE TABLE personal(
    id_personal serial PRIMARY KEY,
    name_complete VARCHAR(100) NOT NULL,
    contraseña VARCHAR(100),
    eps VARCHAR(100),
    arl VARCHAR(100),
    direccion VARCHAR(100)
);


CREATE TABLE asistencia_sede (
    id_personal INT NOT NULL,
    student_code INT NOT NULL,
    id_sede INT NOT NULL,
    fecha_hora TIMESTAMP NOT NULL,
    FOREIGN KEY (id_personal) REFERENCES personal(id_personal),
    FOREIGN KEY (id_sede) REFERENCES sede(id_sede)
);

CREATE TABLE cursos (
    codigo_c serial PRIMARY KEY,
    name_c VARCHAR(100) NOT NULL,
    creditos INT NOT NULL,
);

CREATE TABLE asistencia_clase (
    student_code INT NOT NULL,
    codigo_c INT NOT NULL,
    fecha_hora TIMESTAMP NOT NULL,
    presente BOOLEAN,
    FOREIGN KEY (student_code) REFERENCES estudiantes(student_code),
    FOREIGN KEY (codigo_c) REFERENCES cursos(codigo_c)
);

/*
Agegando columna(atributo a la tabla).
*/

ALTER TABLE asistencia_clase ADD COLUMN presente BOOLEAN;
ALTER TABLE asistencia_sede ADD COLUMN presente BOOLEAN;
ALTER TABLE cursos ADD COLUMN id_profesor INT NOT NULL;
ALTER TABLE personal ADD COLUMN id_sede INT NOT NULL;
ALTER TABLE personal ADD COLUMN misional BOOLEAN;
ALTER TABLE personal ADD COLUMN no_misional BOOLEAN;
ALTER TABLE estudiantes ADD COLUMN id_sede INT NOT NULL;

/*Hacemos que una columna sea llave foranea*/
ALTER TABLE cursos ADD FOREIGN KEY(id_profesor) REFERENCES profesores(id_profesor);
ALTER TABLE personal ADD FOREIGN KEY(id_sede) REFERENCES sede(id_sede);
ALTER TABLE estudiantes ADD FOREIGN KEY(id_sede) REFERENCES sede(id_sede);

/*Hacemos que una columna existente sea llave primaria*/
ALTER TABLE asistencia_clase ADD PRIMARY KEY (student_code, codigo_c);
ALTER TABLE asistencia_sede ADD PRIMARY KEY (id_personal, id_sede);
/*
Eliminar una tabla. 
*/
DROP TABLE encargados;

/* Vaciamos la tabla*/
TRUNCATE TABLE cursos;
TRUNCATE TABLE estudiantes;
/*
Eliminar una columna de una tabla.
*/
ALTER TABLE asistencia_sede DROP COLUMN student_code;
ALTER TABLE cursos DROP COLUMN id_profesor;

/*
Insertamos valores en las tabla.
*/



INSERT INTO administrador (id_admin, name_admin, contraseña, id_sede) VALUES
(989898,'Homero simpson', '1234',1000);

INSERT INTO sede (id_sede, ubicacion, name_sede) VALUES  
(1000, 'cra 120 #3-125', 'UniCali Pance');

INSERT INTO cursos (codigo_c, name_c, creditos, id_profesor) VALUES
(400,'Sistemas operativos', 4, 5454),
(611,'Desarrollo de software', 4, 5656);

INSERT INTO estudiantes (student_code, student_name, student_dir, id_sede) VALUES
(1007560453,'Juanes Ortiz','calle 76 #39-2000',1000),
(1111668775,'Camilo Bejarano','calle 13 # 20-20',1000);

INSERT INTO personal (id_personal, name_complete, contraseña, eps, arl, direccion, id_sede, misional, no_misional) VALUES
(333,'Marge simpson','unicornio43', 'Comfandi', 'Sura', 'Av 3 norte #33-11', 1000, true, false),
(444,'Krusty burger','nave2200', 'Comfenalco', 'Sura', 'Av 2 Oeste #87-00', 1000, false, true);

INSERT INTO profesores (id_profesor, id_personal,facultad) VALUES
(5454, 444, 'Facultad de ingenieria');

INSERT INTO profesores (id_profesor, id_personal,facultad) VALUES
(5656, 333, 'Facultad de ingenieria');

INSERT INTO matricula (codigo_c, codigo_e) VALUES
(400,1007560453),
(611,1007560453);

INSERT INTO asistencia_sede (id_personal, id_sede, fecha_hora, presente) VALUES
(333,1000,'2020-06-22 19:10:25',true);

INSERT INTO asistencia_clase (student_code, codigo_c, fecha_hora, presente) VALUES
(1007560453,1000,'2020-06-22 19:20:30',true);
/*
Hacemos la consulta de toda la tabla.
*/

SELECT * FROM personal;

/*
Hacemos la consulta de un atributo en especifico de la tabla.
*/
SELECT student_name FROM students;

/*
Cambiamos el nombre de la tabla a students.
*/
ALTER TABLE estudiantes RENAME TO students;