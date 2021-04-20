INSERT INTO tb_user (email, password) VALUES ('elias@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (email, password) VALUES ('joao@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_search (cep, logradouro, bairro, localidade, created_At, uf, user_id) VALUES ('74605080', 'Rua 227', 'St Leste Universitario', 'Goiânia', NOW(), 'GO', 1);
INSERT INTO tb_search (cep, logradouro, bairro, localidade, created_At, uf, user_id) VALUES ('76310000', 'Rua 01', 'Centro', 'Rialma', NOW(), 'GO', 1);
INSERT INTO tb_search (cep, logradouro, bairro, localidade, created_At, uf, user_id) VALUES ('76300000', 'Rua 02', 'Centro', 'Ceres', NOW(), 'GO', 2);