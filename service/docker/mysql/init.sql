DROP DATABASE IF EXISTS posse;
CREATE DATABASE posse;
use posse;

DROP TABLE IF EXISTS quizzes;
CREATE TABLE quizzes (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  quiz_text VARCHAR(255) NOT NULL,
  img VARCHAR(255) NOT NULL,
  supplement_text VARCHAR(255),
  supplement_url VARCHAR(255)
  ) CHARSET=utf8;

INSERT INTO quizzes(quiz_text, img, supplement_text, supplement_url) VALUES 
  (
  '日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか?',
  'img-quiz01.png',
  '経済産業省 2019年3月 - IT 人材需給に関する調査',
  'https://www.meti.go.jp/policy/it_policy/jinzai/houkokusyo.pdf'
  ),
  (
  '既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？',
  'img-quiz02.png',
  '',
  ''
  ),
  (
  'IoTとは何の略でしょう？',
  'img-quiz03.png',
  '',
  ''
  ),
  (
  '日本が目指すサイバー空間とフィジカル空間を高度に融合させたシステムによって開かれる未来社会のことをなんと言うでしょうか？',
  'img-quiz04.png',
  'Society5.0 - 科学技術政策 - 内閣府',
  'https://www8.cao.go.jp/cstp/society5_0/'
  ),
  (
  'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
  'img-quiz05.png',
  '',
  ''
  ),
  (
  '先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？',
  'img-quiz06.png',
  'Accenture Technology Vision 2021',
  'https://www.accenture.com/jp-ja/insights/technology/technology-trends-2021'
  );


DROP TABLE IF EXISTS choices;
CREATE TABLE choices (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  quiz_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  isCorrect boolean,
  FOREIGN KEY (quiz_id) REFERENCES quizzes (id) 
  ) CHARSET=utf8;

INSERT INTO choices(quiz_id, name, isCorrect) VALUES 
  (1, '約28万人', false),
  (1, '約79万人', true),
  (1, '約183万人', false),
  (2, 'INTECH', false),
  (2, 'BIZZTECH', false),
  (2, 'X-TECH', true),
  (3, 'Internet of Things', true),
  (3, 'Integrate into Technology', false),
  (3, 'Information  on Tool', false),
  (4, 'Society 5.0', true),
  (4, 'CyPhy', false),
  (4, 'SDGs', false),
  (5, 'Web3.0', true),
  (5, 'NFT', false),
  (5, 'メタバース', false),
  (6, '約2倍', false),
  (6, '約5倍', true),
  (6, '約11倍', false);


-- DROP TABLE IF EXISTS users;
-- CREATE TABLE users (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   name VARCHAR(255),
--   email VARCHAR(255),
--   password VARCHAR(255)
-- ) CHARSET=utf8;

-- Insert into users (name, email, password) values ("管理者1", "admin@example.com", "password");

-- DROP TABLE IF EXISTS user_invitations;
-- CREATE TABLE user_invitations (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   user_id INT,
--   invited_at DATETIME DEFAULT CURRENT_TIMESTAMP,
--   activated_at DATETIME,
--   token VARCHAR(255),
--   FOREIGN KEY (user_id) REFERENCES users(id)
-- ) CHARSET=utf8;

-- insert into user_invitations (user_id, invited_at, activated_at, token) values (1, DATE_SUB(CURRENT_DATE, INTERVAL 1 DAY), CURRENT_DATE, "token");