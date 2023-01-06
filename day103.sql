CREATE TABLE constrains(
id INT NOT NULL UNIQUE,-- not null also it should be unique
NAME varchar(50) NOT NULL,-- this should also not be empty 
AGE INT NOT NULL CHECK( AGE>=18),-- age should be above 18 only or else we cant add it 
GENDER varchar(10) NOT NULL DEFAULT 'patanai', -- if we dont put gender than it will not consider
PHONE varchar(10) NOT NULL unique, -- every phone number should be unique
CITY varchar(10) NOT NULL DEFAULT'MUMBAI' -- IF WE DON'T PUT VALUE of city than we will get mumbai
);
-- INSERT INTO constrains(  id , NAME ,GENDER,AGE ,  PHONE )
-- VALUES
-- ( 4 ,"REBELLO" ,"MALE", 20  ,"83970403" );