INSERT INTO tb_user (email, password) VALUES ('elias@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (email, password) VALUES ('joao@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_search (cep, logradouro, bairro, localidade, created_At, uf, user_id) VALUES ('74605080', 'Rua 227', 'St Leste Universitario', 'Goiânia', '2021-04-22T03:26:14.815539700Z', 'GO', 1);
INSERT INTO tb_search (cep, logradouro, bairro, localidade, created_At, uf, user_id) VALUES ('76310000', 'Rua 01', 'Centro', 'Rialma', '2021-04-22T03:28:14.815539700Z', 'GO', 1);
INSERT INTO tb_search (cep, logradouro, bairro, localidade, created_At, uf, user_id) VALUES ('76300000', 'Rua 03', 'Centro', 'Ceres', NOW(), 'GO', 1);
INSERT INTO tb_search (cep, logradouro, bairro, localidade, created_At, uf, user_id) VALUES ('76300000', 'Rua 02', 'Centro', 'Ceres', NOW(), 'GO', 2);
INSERT INTO tb_search (cep, logradouro, bairro, localidade, created_At, uf, user_id) VALUES ('74605080', 'Periferia 10', 'Barranca', 'Goiânia', NOW(), 'GO', 2);