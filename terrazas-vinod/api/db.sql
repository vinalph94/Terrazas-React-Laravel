CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `password_hashed` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email_verification_code` varchar(255) NOT NULL,
  `phone_verification_code` varchar(255) NOT NULL,
  `email_verified` varchar(5) NOT NULL DEFAULT 0,
  `phone_verified` varchar(5) NOT NULL DEFAULT 0,
  `role` varchar(30) NOT NULL DEFAULT "resident",
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;


INSERT INTO USERS(email, phone, password_hashed, name, email_verification_code, phone_verification_code ,email_verified ,phone_verified,role) 
values ("garden@gmail.com","9999999999","728992e2df061f7056ebe2d92db5b066","Rohit k.","456007","567890",1,1,"g-manager");


INSERT INTO USERS(email, phone, password_hashed, name, email_verification_code, phone_verification_code ,email_verified ,phone_verified,role) 
values ("pool@gmail.com","9999999999","728992e2df061f7056ebe2d92db5b066","Suni k.","456007","567890",1,1,"p-manager");

INSERT INTO USERS(email, phone, password_hashed, name, email_verification_code, phone_verification_code ,email_verified ,phone_verified,role) 
values ("super@gmail.com","9999999999","728992e2df061f7056ebe2d92db5b066","Logan k.","456007","567890",1,1,"s-admin");



CREATE TABLE `visitor` (`ID` INT(10) NOT NULL AUTO_INCREMENT , `VisitorName` VARCHAR(20) NOT NULL , `email` VARCHAR(20) NOT NULL , `phone` VARCHAR(20) NOT NULL , `CarPlateNumber` VARCHAR(20) NOT NULL , `Vehicle` VARCHAR(20) NOT NULL , `TimeDate` VARCHAR(20) NOT NULL , `ApartmentNo` VARCHAR(20) NOT NULL , PRIMARY KEY (`ID`),
`approved` int default 0);

