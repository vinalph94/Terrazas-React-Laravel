-- MySQL dump 10.13  Distrib 8.0.32, for macos13.0 (arm64)
--
-- Host: localhost    Database: terrazas
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `AllEvent`
--

DROP TABLE IF EXISTS `AllEvent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `AllEvent` (
  `event_id` int NOT NULL AUTO_INCREMENT,
  `event_name` varchar(20) NOT NULL,
  `event_Description` varchar(50) NOT NULL,
  `event_date` date NOT NULL,
  `place` varchar(10) NOT NULL,
  `image` varchar(50) NOT NULL,
  PRIMARY KEY (`event_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AllEvent`
--

LOCK TABLES `AllEvent` WRITE;
/*!40000 ALTER TABLE `AllEvent` DISABLE KEYS */;
INSERT INTO `AllEvent` VALUES (2,'Pool','Pool party','2023-04-12','garden','swimmingpool.jpg');
/*!40000 ALTER TABLE `AllEvent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EventRegistration`
--

DROP TABLE IF EXISTS `EventRegistration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `EventRegistration` (
  `Regid` int NOT NULL AUTO_INCREMENT,
  `event_id` int NOT NULL,
  `participant_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `resident_id` int NOT NULL,
  PRIMARY KEY (`Regid`),
  KEY `event_id` (`event_id`),
  KEY `resident_id` (`resident_id`),
  CONSTRAINT `eventregistration_ibfk_1` FOREIGN KEY (`event_id`) REFERENCES `AllEvent` (`event_id`),
  CONSTRAINT `eventregistration_ibfk_2` FOREIGN KEY (`resident_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EventRegistration`
--

LOCK TABLES `EventRegistration` WRITE;
/*!40000 ALTER TABLE `EventRegistration` DISABLE KEYS */;
/*!40000 ALTER TABLE `EventRegistration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `garden_Access`
--

DROP TABLE IF EXISTS `garden_Access`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `garden_Access` (
  `membership_id_r` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `join_date` date NOT NULL,
  `decision` varchar(10) DEFAULT 'pending',
  `resident_type` varchar(10) NOT NULL,
  `resident_id` int NOT NULL,
  PRIMARY KEY (`membership_id_r`),
  UNIQUE KEY `resident_id` (`resident_id`),
  CONSTRAINT `garden_access_ibfk_1` FOREIGN KEY (`resident_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `garden_Access`
--

LOCK TABLES `garden_Access` WRITE;
/*!40000 ALTER TABLE `garden_Access` DISABLE KEYS */;
INSERT INTO `garden_Access` VALUES (9,'Ravi Ailani','2023-04-13','accept','resident',2);
/*!40000 ALTER TABLE `garden_Access` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `garden_timing`
--

DROP TABLE IF EXISTS `garden_timing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `garden_timing` (
  `garden_id` int NOT NULL AUTO_INCREMENT,
  `day` varchar(10) NOT NULL,
  `start_time` time(4) NOT NULL,
  `end_time` time(4) NOT NULL,
  PRIMARY KEY (`garden_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `garden_timing`
--

LOCK TABLES `garden_timing` WRITE;
/*!40000 ALTER TABLE `garden_timing` DISABLE KEYS */;
INSERT INTO `garden_timing` VALUES (1,'Monday','19:28:00.0000','19:30:00.0000');
/*!40000 ALTER TABLE `garden_timing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pool_Access`
--

DROP TABLE IF EXISTS `pool_Access`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pool_Access` (
  `membership_id_r` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `join_date` date NOT NULL,
  `decision` varchar(10) DEFAULT 'pending',
  `resident_type` varchar(10) NOT NULL,
  `resident_id` int NOT NULL,
  PRIMARY KEY (`membership_id_r`),
  UNIQUE KEY `resident_id` (`resident_id`),
  CONSTRAINT `pool_access_ibfk_1` FOREIGN KEY (`resident_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pool_Access`
--

LOCK TABLES `pool_Access` WRITE;
/*!40000 ALTER TABLE `pool_Access` DISABLE KEYS */;
INSERT INTO `pool_Access` VALUES (2,'Ravi Ailani','2023-04-13','pending','resident',2);
/*!40000 ALTER TABLE `pool_Access` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Pool_timing`
--

DROP TABLE IF EXISTS `Pool_timing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Pool_timing` (
  `pool_id` int NOT NULL AUTO_INCREMENT,
  `day` varchar(10) NOT NULL,
  `start_time` time(4) NOT NULL,
  `end_time` time(4) NOT NULL,
  PRIMARY KEY (`pool_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Pool_timing`
--

LOCK TABLES `Pool_timing` WRITE;
/*!40000 ALTER TABLE `Pool_timing` DISABLE KEYS */;
/*!40000 ALTER TABLE `Pool_timing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `property`
--

DROP TABLE IF EXISTS `property`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `property` (
  `id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `property`
--

LOCK TABLES `property` WRITE;
/*!40000 ALTER TABLE `property` DISABLE KEYS */;
/*!40000 ALTER TABLE `property` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resident`
--

DROP TABLE IF EXISTS `resident`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resident` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `property_id` int DEFAULT '-1',
  `name` varchar(255) NOT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `property_id` (`property_id`),
  CONSTRAINT `resident_ibfk_1` FOREIGN KEY (`property_id`) REFERENCES `property` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resident`
--

LOCK TABLES `resident` WRITE;
/*!40000 ALTER TABLE `resident` DISABLE KEYS */;
INSERT INTO `resident` VALUES (1,NULL,'ravi ailani','7635878046','rvbugs0@gmail.com','5f4dcc3b5aa765d61d8327deb882cf99','2023-04-07 19:42:30'),(14,NULL,'ravi ailani','7635878046','rxa6214@mavs.uta.edu','5f4dcc3b5aa765d61d8327deb882cf99','2023-04-07 19:57:32'),(16,NULL,'Ravi Ailani','7635878046','iraviailani@gmail.com','5f4dcc3b5aa765d61d8327deb882cf99','2023-04-09 00:38:42'),(21,NULL,'Ravi Ailani','7635878046','raviailani@gmail.com','5f4dcc3b5aa765d61d8327deb882cf99','2023-04-09 00:41:24'),(26,NULL,'Ravi Ailani','7635878046','rxa6214@mavs.uta.ed','5f4dcc3b5aa765d61d8327deb882cf99','2023-04-09 00:46:06'),(27,NULL,'Ravi Ailani','7635878046','rxa6214@mavs.uta.e','5f4dcc3b5aa765d61d8327deb882cf99','2023-04-09 00:46:37');
/*!40000 ALTER TABLE `resident` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Resident_vehicle_mapping`
--

DROP TABLE IF EXISTS `Resident_vehicle_mapping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Resident_vehicle_mapping` (
  `id` int NOT NULL AUTO_INCREMENT,
  `resident_id` int NOT NULL,
  `vehicle_make` varchar(255) NOT NULL,
  `vehicle_model` varchar(255) NOT NULL,
  `vehicle_color` varchar(255) NOT NULL,
  `license_plate_number` varchar(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `resident_id` (`resident_id`),
  CONSTRAINT `resident_vehicle_mapping_ibfk_1` FOREIGN KEY (`resident_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Resident_vehicle_mapping`
--

LOCK TABLES `Resident_vehicle_mapping` WRITE;
/*!40000 ALTER TABLE `Resident_vehicle_mapping` DISABLE KEYS */;
INSERT INTO `Resident_vehicle_mapping` VALUES (15,2,'2023','Toyota camry','Black','MP13PK TEXAS','2023-04-12 19:33:23'),(16,2,'2023','Toyota camry','Black','MP13PK TEXAS','2023-04-12 19:36:25');
/*!40000 ALTER TABLE `Resident_vehicle_mapping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `phone` varchar(10) COLLATE utf8mb4_general_ci NOT NULL,
  `password_hashed` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `email_verification_code` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `phone_verification_code` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `email_verified` varchar(5) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '0',
  `phone_verified` varchar(5) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '0',
  `role` varchar(30) COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'resident',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'student123@gmail.com','7635878046','728992e2df061f7056ebe2d92db5b066','Ravi Ailani','284010','773902','1','0','resident'),(3,'garden@gmail.com','9999999999','728992e2df061f7056ebe2d92db5b066','Rohit k.','456007','567890','1','1','g-manager'),(4,'pool@gmail.com','9999999999','728992e2df061f7056ebe2d92db5b066','Suni k.','456007','567890','1','1','p-manager'),(5,'super@gmail.com','9999999999','728992e2df061f7056ebe2d92db5b066','Logan k.','456007','567890','1','1','s-admin');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `visitor`
--

DROP TABLE IF EXISTS `visitor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `visitor` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `VisitorName` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `CarPlateNumber` varchar(20) NOT NULL,
  `Vehicle` varchar(20) NOT NULL,
  `TimeDate` varchar(20) NOT NULL,
  `ApartmentNo` varchar(20) NOT NULL,
  `approved` int DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visitor`
--

LOCK TABLES `visitor` WRITE;
/*!40000 ALTER TABLE `visitor` DISABLE KEYS */;
INSERT INTO `visitor` VALUES (1,'Ravi Ailani','rxa6214@mavs.uta.edu','7635878046','salkdfjds','PP','2023-04-12T16:44','12',1);
/*!40000 ALTER TABLE `visitor` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-13  4:10:48
