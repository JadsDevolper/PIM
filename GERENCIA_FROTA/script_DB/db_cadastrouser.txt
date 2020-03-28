create database db_cadastrouser;

use db_cadastrouser;

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


