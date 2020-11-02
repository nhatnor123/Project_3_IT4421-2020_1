create database quybaotrotreem;

use quybaotrotreem;

CREATE TABLE test (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(300) NOT NULL,
    age INT NOT NULL,
    createdAt DATETIME NOT NULL,
    isActive BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);

-- drop table test;

insert into test ( name, age, createdAt, isActive)  value ('nhật nguyễn', 18, '2020-12-30 15:30:00', true);
insert into test ( name, age, createdAt, isActive)  value ('nhật đây là tôi', 133338, '2020-12-30 15:30:00', false);

CREATE TABLE Account (
    accountId INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(40) NOT NULL,
    role VARCHAR(40) NOT NULL,
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    phoneNo VARCHAR(15) NOT NULL,
    email VARCHAR(40) NOT NULL UNIQUE,
    imageId INT,
    isApproved BOOLEAN NOT NULL,
    isActive BOOLEAN NOT NULL,
    createdAt DATETIME,
    createdBy INT,
    updatedAt DATETIME,
    updatedBy INT,
    PRIMARY KEY (accountId)
);


CREATE TABLE Article (
    articleId INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(150) NOT NULL,
    description VARCHAR(300),
    content VARCHAR(2000) NOT NULL,
    author VARCHAR(60),
    tag VARCHAR(40),
    isActive BOOLEAN NOT NULL,
    createdAt DATETIME,
    createdBy INT,
    updatedAt DATETIME,
    updatedBy INT,
    PRIMARY KEY (articleId)
);
   

CREATE TABLE Profile (
    profileId INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(60) NOT NULL,
    age INT,
    address VARCHAR(100) NOT NULL,
    description VARCHAR(1000) NOT NULL,
    isApproved BOOLEAN NOT NULL,
    isApprovedAt DATETIME,
    isApprovedBy VARCHAR(30),
    isActive BOOLEAN NOT NULL,
    createdAt DATETIME,
    createdBy INT,
    updatedAt DATETIME,
    updatedBy INT,
    PRIMARY KEY (profileId)
);

CREATE TABLE Sponsor (
    sponsorId INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phoneNo VARCHAR(15) NOT NULL,
    description VARCHAR(1000),
    isActive BOOLEAN NOT NULL,
    createdAt DATETIME,
    createdBy INT,
    updatedAt DATETIME,
    updatedBy INT,
    PRIMARY KEY (sponsorId)
);

CREATE TABLE Image (
    imageId INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(150),
    path VARCHAR(300) NOT NULL,
    type VARCHAR(20) NOT NULL,
    owner INT NOT NULL,
    isActive BOOLEAN NOT NULL,
    createdAt DATETIME,
    createdBy int,
    PRIMARY KEY (imageId)
);

-- constraint--
alter table Account
add foreign key (createdBy) references Account(accountId);

alter table Account
add foreign key (updatedBy) references Account(accountId);

alter table Article
add foreign key (createdBy) references Account(accountId);
   
alter table Article
add foreign key (updatedBy) references Account(accountId);  
   
   
alter table Profile
add foreign key (createdBy) references Account(accountId);
   
alter table Profile
add foreign key (updatedBy) references Account(accountId);  
   
   
alter table Sponsor
add foreign key (createdBy) references Account(accountId);
   
alter table Sponsor
add foreign key (updatedBy) references Account(accountId); 
   
   
alter table Image
add foreign key (createdBy) references Account(accountId);
   
   
