/**
 * Constantes de Nomes
 * ====================
 * Listas de nomes, sobrenomes e apelidos brasileiros
 * Usadas pelos geradores de identidade para criar dados realistas
 *
 * @module constants/names
 */

/** Nomes próprios femininos e masculinos brasileiros */
export const FIRST_NAMES: string[] = [
  'Ana', 'Beatriz', 'Bruna', 'Camila', 'Carla', 'Daniela', 'Fernanda', 'Gabriela',
  'Isabela', 'Juliana', 'Larissa', 'Mariana', 'Patricia', 'Rafaela', 'Renata', 'Sabrina',
  'Aline', 'Leticia', 'Bianca', 'Eduarda', 'Fabiana', 'Gisele', 'Helena', 'Irene',
  'Joana', 'Karina', 'Lidia', 'Monica', 'Natalia', 'Olivia', 'Paula', 'Quesia',
  'Rosana', 'Sandra', 'Tatiana', 'Ursula', 'Vanessa', 'Wanda', 'Ximena', 'Yasmin',
  'Zelia', 'Adriana', 'Alessandra', 'Amelia',
  'Bruno', 'Caio', 'Carlos', 'Daniel', 'Diego', 'Eduardo', 'Felipe', 'Gustavo',
  'Henrique', 'Igor', 'Joao', 'Lucas', 'Mateus', 'Pedro', 'Rafael', 'Rodrigo',
  'Tiago', 'Victor', 'Vinicius', 'Gabriel', 'Fabio', 'Fernando', 'Francisco', 'Gilberto',
  'Heitor', 'Ismail', 'Julio', 'Leandro', 'Marcelo', 'Norberto', 'Otavio', 'Paulo',
  'Quirino', 'Ronaldo', 'Sergio', 'Thiago', 'Ulisses', 'Valter', 'Wagner', 'Xavier',
  'Yuri', 'Zeferino', 'Abelardo', 'Armando'
];

/** Sobrenomes brasileiros comuns */
export const LAST_NAMES: string[] = [
  'Silva', 'Santos', 'Oliveira', 'Souza', 'Pereira', 'Costa', 'Rodrigues', 'Almeida',
  'Nunes', 'Lima', 'Gomes', 'Ribeiro', 'Carvalho', 'Ferreira', 'Barbosa', 'Melo',
  'Araújo', 'Cardoso', 'Martins', 'Correia', 'Dias', 'Fernandes', 'Gonçalves', 'Herrera',
  'Iglesias', 'Jardim', 'Keller', 'Lemos', 'Machado', 'Nascimento', 'Olivares', 'Pinto',
  'Queiroz', 'Rocha', 'Soares', 'Teixeira', 'Uribe', 'Vasconcelos', 'Wagner', 'Xavier',
  'Yates', 'Zimmerman', 'Abreu', 'Aguiar'
];

/** Apelidos e nomes sociais comuns em redes sociais e comunicação informal */
export const NICKNAMES: string[] = [
  'Mari', 'JP', 'Lú', 'Rafa', 'Gabi', 'Bru', 'Cami', 'Dani', 'Fê', 'Isa',
  'Ju', 'Lari', 'Pati', 'Rê', 'Sab', 'Ade', 'Ale', 'Ame', 'Bia', 'Edu',
  'Fab', 'Gis', 'Hel', 'Ire', 'Joa', 'Kar', 'Lid', 'Mô', 'Nat', 'Oli',
  'Pau', 'Que', 'Ros', 'San', 'Tat', 'Uru', 'Van', 'Wan', 'Xim', 'Yas'
];

/** Handles/usuários para redes sociais e plataformas digitais */
export const SOCIAL_HANDLES: string[] = [
  'marisouza', 'joaopedro.lima', 'brunafernandes', 'camilasilva', 'diegocosta',
  'eduardoferreira', 'feliperodrigues', 'gabrielaribeiro', 'henriquealves', 'isabelapereira'
];

/** Domínios de email para geração de endereços de email aleatórios */
export const EMAIL_DOMAINS: string[] = [
  'example.com', 'mail.com', 'empresa.com.br', 'teste.com.br', 'gmail.com', 'hotmail.com',
  'outlook.com', 'yahoo.com.br', 'empresa.br', 'dev.com.br'
];

/** Gêneros e pronomes para dados demográficos (masculino, feminino, não-binário, prefiro não dizer) */
export const GENDERS: string[] = ['masculino', 'feminino', 'nao_binario', 'prefiro_nao_dizer'];
