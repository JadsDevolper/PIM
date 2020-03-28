create database db_gerenciafrota;
use db_gerenciafrota;

create table tb_cadastrousuario(
		cd_usuario int not null auto_increment primary key
        ,nome varchar(50) not null
        ,senha varchar(10) not null
        ,email varchar(25) null
        ,dicasenha varchar(150) null
		,telefone varchar (30) null
);

select * from tb_cadastrousuario;

insert tb_cadastrousuario (nome, senha, email, dicasenha, telefone) values ('Jadson', '12345678', 'jadson@gmail.com.br', 'senhapadrao', '+551396968587');



create table tb_login(
			cd_login int not null auto_increment primary key,
		login varchar(255),
        login_password varchar(255)
);
 
 use tb_login;
 
 select * from tb_login;
 
 insert tb_login (login, login_password) values ('joseffe','123456');
 insert tb_login (login, login_password) values ('joao','111222');
 
 create table tb_empresa(
		cd_empresa int not null auto_increment primary key
        ,nome varchar(50) not null
        ,cnpj varchar(10) not null
        ,email varchar(25) null
        ,telefone varchar(150) null
		,endereco varchar (30) null
);
select * from tb_empresa;


create table tb_motorista(
		cd_motorista int not null auto_increment primary key
        ,nome varchar(50) not null
        ,RG varchar(10) not null
        ,email varchar(25) null
        ,datanasc varchar(150) null
		,telefone varchar (30) null
        ,cpf varchar(30) null
        ,cnh varchar(30) null
);

select * from tb_motorista;

insert tb_motorista (nome, RG, email, datanasc, telefone, cpf, cnh) values ('Atonio','7887995','antonio@gmail.com','125245','1334258597','78458745898','7954656245');

create table tb_veiculo(
		cd_veiculo int not null auto_increment primary key
        ,nome varchar(50) not null
        ,fabricante varchar(10) not null
        ,cor varchar(25) null
        ,renavan varchar(150) null
		,placa varchar (30) null
        ,ano varchar(10) null
);
select * from tb_veiculo;

create table tb_viagem(
		cd_viagem int not null auto_increment primary key
        ,nomeviagem varchar(50) not null
        ,destino varchar(150) not null
        ,dataviagem varchar(25) null
        ,estatus varchar(10) null
		
);

select * from tb_viagem;