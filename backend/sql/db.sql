--DATABASE
drop table prospectos;
drop table rechazados;

CREATE TABLE prospectos (
    fechaalta TIMESTAMP DEFAULT NOW(),
    folio PRIMARY KEY SERIAL,
    nombre CHARACTER(200) NOT NULL,
    primerapellido CHARACTER(200) NOT NULL,
    segundoapellido CHARACTER(200),
    calle CHARACTER(200) NOT NULL,
    numero CHARACTER(30) NOT NULL,
    colonia CHARACTER(200) NOT NULL,
    codigopostal INTEGER NOT NULL,
    telefono CHARACTER(10),
    rfc CHARACTER(13) NOT NULL,
    estatus character(10) DEFAULT 'Enviado'
);

CREATE TABLE rechazados(
    folio INTEGER NOT NULL,
    observacion CHARACTER(200) NOT NULL
);

INSERT INTO prospectos (nombre,primerapellido,segundoapellido,calle,numero,colonia,codigopostal,telefono,rfc,estatus) values ('HECTOR','GASTELUM','LOPEZ','AVE. GUADALUPE VICTORIA1','169 SUR','JORGE ALMADA',80200,'6672096948','GALH920811DL4','Enviado');
INSERT INTO prospectos (nombre,primerapellido,segundoapellido,calle,numero,colonia,codigopostal,telefono,rfc,estatus) values ('HECTOR2','GASTELUM3','LOPEZ4','AVE. GUADALUPE VICTORIA','168 SUR','JORGE ALMADA',80200,'6672096948','GALH920811DL4','Enviado');
INSERT INTO rechazados values (1,'PORQUE SE PORTO MAL');


select * from prospectos;
select * from rechazados;