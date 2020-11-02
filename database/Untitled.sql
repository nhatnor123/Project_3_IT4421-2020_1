create database quybaotrotreem;

use quybaotrotreem;

create table test(
	id 	INT NOT NULL auto_increment,
    name varchar(300) not null,
    age int not null,
    createdAt datetime not null,
    isActive boolean not null,
    primary key (id)
);

-- drop table test;

insert into test ( name, age, createdAt, isActive)  value ('nhật nguyễn', 18, '2020-12-30 15:30:00', true);
insert into test ( name, age, createdAt, isActive)  value ('nhật đây là tôi', 133338, '2020-12-30 15:30:00', falsehibernate_sequence);