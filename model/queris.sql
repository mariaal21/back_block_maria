--CREATE USER (AUTHOR) TABLE--
CREATE TABLE autores (
  email varchar(100) NOT NULL UNIQUE PRIMARY KEY,
  fullname varchar(45) NOT NULL, 
  password varchar(45) NOT NULL
)

--CREATE USER (READER) TABLE--
CREATE TABLE usuarios (
  email varchar(100) NOT NULL UNIQUE PRIMARY KEY,
  fullname varchar(45) NOT NULL, 
  password varchar(45) NOT NULL
)

--CREATE ENTRIES TABLE --
CREATE TABLE articles (
  id_entry serial NOT NULL PRIMARY KEY, 
  title varchar(100) NOT NULL UNIQUE, 
  content text NOT NULL, 
  image varchar(255),
  email varchar(100) NOT NULL,
  FOREIGN KEY (email) REFERENCES autores (email)
);

--CREATE ENTIES IN AUTHORS TABLE (test data) 
INSERT INTO autores(fullname,email,password)
VALUES
('maria','maria@correo.es','admin123'),
('mm','mm@correo.es','admin123'),
('paula','paula@correo.es','admin123'),
('saul','saul@correo.es','admin123')


--CREATE ENTRY FOR ENTRIES -TEST DATA 

INSERT INTO articles (title,content, image, email)
VALUES 
('Viendo la tele con mis hermanos', 'descripcion de la noticia uno', 'imagen 1', 'mm@correo.es')
('Un dia normal', 'descripcion de la noticia dos', 'imagen 2', 'mm@correo.es')
('Dar una vuelta', 'descripcion de la noticia tres', 'imagen 3', 'mm@correo.es')


--CREATE ENTRIES IN READERS TABLE (test data) 
INSERT INTO autores (fullname,email,password)
VALUES
('usuario uno','uno@correo.es','admin123'),
('usuario dos','dos@correo.es','admin123'),
('usuario tres','tres@correo.es','admin123'),


-- Table: public.articulos

-- DROP TABLE IF EXISTS public.articulos;

-- CREATE TABLE IF NOT EXISTS public.articulos
-- (
--     id_articulo integer NOT NULL DEFAULT 'nextval('articulos_id_articulo_seq'::regclass)',
--     titulo text COLLATE pg_catalog."default" NOT NULL,
--     contenido text COLLATE pg_catalog."default" NOT NULL,
--     imagen text COLLATE pg_catalog."default" NOT NULL,
--     email text COLLATE pg_catalog."default" NOT NULL DEFAULT 'FK'::text,
--     CONSTRAINT articulos_pkey PRIMARY KEY (id_articulo)
-- )

-- TABLESPACE pg_default;

-- ALTER TABLE IF EXISTS public.articulos
--     OWNER to postgres;


--     -- Table: public.autores

-- -- DROP TABLE IF EXISTS public.autores;

-- CREATE TABLE IF NOT EXISTS public.autores
-- (
--     email text COLLATE pg_catalog."default" NOT NULL,
--     nombre text COLLATE pg_catalog."default" NOT NULL,
--     "contraseña" text COLLATE pg_catalog."default" NOT NULL,
--     CONSTRAINT autores_pkey PRIMARY KEY (email)
-- )

-- TABLESPACE pg_default;

-- ALTER TABLE IF EXISTS public.autores
--     OWNER to postgres;