-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: Appmayores
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.23.10.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `nss` varchar(255) DEFAULT NULL,
  `date_birth` date NOT NULL,
  `dni` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `FamilyGroupId` int DEFAULT NULL,
  `roleId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dni` (`dni`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `dni_2` (`dni`),
  UNIQUE KEY `email_2` (`email`),
  UNIQUE KEY `dni_3` (`dni`),
  UNIQUE KEY `email_3` (`email`),
  UNIQUE KEY `dni_4` (`dni`),
  UNIQUE KEY `email_4` (`email`),
  UNIQUE KEY `dni_5` (`dni`),
  UNIQUE KEY `email_5` (`email`),
  UNIQUE KEY `dni_6` (`dni`),
  UNIQUE KEY `email_6` (`email`),
  UNIQUE KEY `dni_7` (`dni`),
  UNIQUE KEY `email_7` (`email`),
  UNIQUE KEY `dni_8` (`dni`),
  UNIQUE KEY `email_8` (`email`),
  UNIQUE KEY `dni_9` (`dni`),
  UNIQUE KEY `email_9` (`email`),
  UNIQUE KEY `nss` (`nss`),
  UNIQUE KEY `nss_2` (`nss`),
  UNIQUE KEY `nss_3` (`nss`),
  UNIQUE KEY `nss_4` (`nss`),
  UNIQUE KEY `nss_5` (`nss`),
  UNIQUE KEY `nss_6` (`nss`),
  UNIQUE KEY `nss_7` (`nss`),
  UNIQUE KEY `nss_8` (`nss`),
  UNIQUE KEY `nss_9` (`nss`),
  KEY `FamilyGroupId` (`FamilyGroupId`),
  KEY `roleId` (`roleId`),
  CONSTRAINT `users_ibfk_17` FOREIGN KEY (`FamilyGroupId`) REFERENCES `FamilyGroups` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `users_ibfk_18` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (13,'David','Rodriguez','9397228127521','1970-11-19','73312669B','david1@gmail.es','$2b$10$94JoV9yumLYx9LkdadVrAe5hMvsMO0R4qpD.GjmRoC01AFjf1KKM.','628764523','2024-03-06 11:46:54','2024-03-07 11:17:45',2,1),(20,'Manuel','Rodriguez','9347228127521','1970-11-19','73389669B','manuelxx@gmail.es','$2b$10$bui2jpIZbEXn1pdFk5PviOLdbl2TdpcyLLwdYCk5CQUoPwbNqkwGK','628764523','2024-03-11 11:52:04','2024-03-11 12:01:49',7,2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-11 14:19:14
