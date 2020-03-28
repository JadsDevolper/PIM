const express = require('express');
var mySQL = require('mysql');
const routes = express.Router();

var conection = mySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Super123456@',
    database: 'db_gerenciafrota'
});

/* API'S PARA CADASTRO DE USUARIOS*/
/*==============================================================*/

routes.get("/cadastrousuario", function(req, res){
    conection.query('select * from tb_cadastrousuario', function(err, rows, fields){
        if(!err)
            res.json(rows);
        else
            res.json(err);
    })
    
});


routes.get("/cadastrousuario/:Cd_usuario", function(req, res){
    conection.query('select * from tb_cadastrousuario where Cd_usuario = ?', [req.params.id], function(err, rows, fields){
        if (!err)
            res.json(rows);
        else   
            res.json(err);
    })
});

routes.post("/cadastrousuario", function(req, res){
    conection.query('insert tb_cadastrousuario set ?', req.body, function(err,rows, fiels){
        if(!err)
            res.json(rows);
        else
            res.json(err);
    })
});

routes.delete("/cadastrousuario", function(req, res){
    connect.query('delete from tb_cadastrousuario where cd_usuario = ?', [req.body.id], function (err, rows, fields){
        if(!err)
            res.json(rows);
        else
            res.json(err);
    })
});

routes.put("/cadastrousuario/:cd_usuario", function(req, res){
    conection.query('update tb_cadastrousuario set ? where cd_usuario = ?', [req.body, req.params.id], function(err, rows, fields){
        if(!err)
            res.json(rows);
        else
            res.json(err);
    })
});

/* APIS PARA CADASTRO DE VEÍCULOS */
/*============================================================== */
routes.get("/veiculos", function(req, res){
    conection.query('select * from tb_veiculo', function(err, rows, fields){
    if(!err)
        res.json(rows);
    else    
        res.json(err);

    })
});

routes.get("/veiculos/:id", function(req, res){
    conection.query('select * from tb_veiculo where id_veiculo = ?', [req.params.id], function(err, rows, fields){
        if (!err)
            res.json(rows);
        else   
            res.json(err);
    })
});

routes.post("/veiculos", function(req, res){
    conection.query('insert tb_veiculo set ?', req.body, function(err,rows, fiels){
        if(!err)
            res.json(rows);
        else
            res.json(err);
    })
});

routes.put("/veiculos/:id", function(req, res){
    conection.query('update tb_veiculo set ? where id_veiculo = ?', [req.body, req.params.id], function(err, rows, fields){
        if(!err)
            res.json(rows);
        else
            res.json(err);
    })
});


routes.delete("/veiculos/:id", function(req, res) {
    conection.query('delete from tb_veiculo where id_veiculo = ?', [req.params.id], function (err, rows, fields) {
        if(!err)
            res.json(rows);
        else
            res.json(err);
    })
});

/* API'S PPARA CADASTRO DE VIAGENS */
/* ================================================================ */

routes.get("/viagens", function(req, res){
    conection.query('select * from tb_viagem', function(err, rows, fields){
    if(!err)
        res.json(rows);
    else    
        res.json(err);

    })
});

routes.get("/viagens/:id", function(req, res){
    conection.query('select * from tb_viagem where id_viagem = ?', [req.params.id], function(err, rows, fields){
        if (!err)
            res.json(rows);
        else   
            res.json(err);
    })
});

routes.post("/viagens", function(req, res){
    conection.query('insert tb_viagem set ?', req.body, function(err,rows, fiels){
        if(!err)
            res.json(rows);
        else
            res.json(err);
    })
});

routes.put("/viagens/:id", function(req, res){
    conection.query('update tb_viagem set ? where id_viagem = ?', [req.body, req.params.id], function(err, rows, fields){
        if(!err)
            res.json(rows);
        else
            res.json(err);
    })
});


routes.delete("/viagens", function(req, res){
    connect.query('delete from tb_viagem where id_viagem = ?', [req.body.id], function (err, rows, fields){
        if(!err)
            res.json(rows);
        else
            res.json(err);
    })
});

/* API'S PPARA CADASTRO DE EMPRESAS */
/* ================================================================ */

routes.get("/empresa", function(req, res){
    conection.query('select * from tb_empresa', function(err, rows, fields){
    if(!err)
        res.json(rows);
    else    
        res.json(err);

    })
});

routes.get("/empresa/:cd_empresa", function(req, res){
    conection.query('select * from tb_empresa where cd_empresa = ?', [req.params.id], function(err, rows, fields){
        if (!err)
            res.json(rows);
        else   
            res.json(err);
    })
});

routes.post("/empresa", function(req, res){
    conection.query('insert tb_empresa set ?', req.body, function(err,rows, fiels){
        if(!err)
            res.json(rows);
        else
            res.json(err);
    })
});

routes.put("/empresa/:cd_empresa", function(req, res){
    conection.query('update tb_empresa set ? where cd_empresa = ?', [req.body, req.params.id], function(err, rows, fields){
        if(!err)
            res.json(rows);
        else
            res.json(err);
    })
});


routes.delete("/empresa", function(req, res){
    connect.query('delete from tb_empresa where cd_empresa = ?', [req.body.id], function (err, rows, fields){
        if(!err)
            res.json(rows);
        else
            res.json(err);
    })
});

/* API'S PARA CADASTRO DE MOTORISTAS */

routes.get("/motorista", function(req, res){
    conection.query('select * from tb_motorista', function(err, rows, fields){
    if(!err)
        res.json(rows);
    else    
        res.json(err);

    })
});

routes.get("/motorista/:id", function(req, res){
    conection.query('select * from tb_motorista where id_motorista = ?', [req.params.id], function(err, rows, fields){
        if (!err)
            res.json(rows);
        else   
            res.json(err);
    })
});

routes.post("/motorista", function(req, res){
    conection.query('insert tb_motorista set ?', req.body, function(err,rows, fiels){
        if(!err)
            res.json(rows);
        else
            res.json(err);
    })
});

routes.put("/motorista/:id", function(req, res){
    conection.query('update tb_motorista set ? where id_motorista = ?', [req.body, req.params.id], function(err, rows, fields){
        if(!err)
            res.json(rows);
        else
            res.json(err);
    })
});


routes.delete("/motorista", function(req, res){
    connect.query('delete from tb_mmotorista where id_motorista = ?', [req.body.id], function (err, rows, fields){
        if(!err)
            res.json(rows);
        else
            res.json(err);
    })
});

module.exports = routes;