-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: bishe
-- ------------------------------------------------------
-- Server version	8.0.19

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
-- Table structure for table `clue`
--

DROP TABLE IF EXISTS `clue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clue` (
  `id` int NOT NULL AUTO_INCREMENT,
  `time` varchar(45) DEFAULT 'null',
  `place` varchar(45) DEFAULT 'null',
  `message` varchar(45) DEFAULT 'null',
  `image` binary(100) DEFAULT NULL,
  `feedback` varchar(45) DEFAULT 'null',
  `status` tinyint DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clue`
--

LOCK TABLES `clue` WRITE;
/*!40000 ALTER TABLE `clue` DISABLE KEYS */;
INSERT INTO `clue` VALUES (1,'2023/2/9','武清区','描述信息',NULL,'测试测试',0),(2,'2023/2/11','河西区','描述信息',NULL,'测试反馈',1),(3,'2023/2/12','河西区','描述信息',NULL,'',0),(4,'2023/2/2','河西区','描述信息',NULL,'测试一',0),(5,'2023/2/13','河西区','描述信息',NULL,'反馈信息',0),(6,'2023/2/13','河西区','描述信息',NULL,'反馈信息',1),(7,'2023/2/13','河西区','描述信息',NULL,'测试一',1),(8,'2023/2/13','河西区','描述信息',NULL,'',0),(9,'2023/2/13','河西区','描述信息',NULL,'反馈信息',1),(10,'2023/2/13','河西区','描述信息',NULL,'测试反馈',1),(11,'2023/2/13','河西区','描述信息',NULL,'反馈信息',0),(12,'2023/2/13','河西区','描述信息',NULL,'反馈信息',1),(13,'2023/2/13','河西区','描述信息',NULL,'哈哈哈',1);
/*!40000 ALTER TABLE `clue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lost_items`
--

DROP TABLE IF EXISTS `lost_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lost_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `describe` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lost_items`
--

LOCK TABLES `lost_items` WRITE;
/*!40000 ALTER TABLE `lost_items` DISABLE KEYS */;
INSERT INTO `lost_items` VALUES (2,'项链','银质'),(3,'钱包','黑色');
/*!40000 ALTER TABLE `lost_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `police_case`
--

DROP TABLE IF EXISTS `police_case`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `police_case` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `case_time` varchar(45) DEFAULT NULL,
  `place` varchar(45) DEFAULT NULL,
  `caseinfo` varchar(45) DEFAULT NULL,
  `caseimage` binary(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `police_case`
--

LOCK TABLES `police_case` WRITE;
/*!40000 ALTER TABLE `police_case` DISABLE KEYS */;
INSERT INTO `police_case` VALUES (1,'绑架','十月',NULL,NULL,NULL);
/*!40000 ALTER TABLE `police_case` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `police_users`
--

DROP TABLE IF EXISTS `police_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `police_users` (
  `id` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `phone` int DEFAULT NULL,
  `password` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `police_users`
--

LOCK TABLES `police_users` WRITE;
/*!40000 ALTER TABLE `police_users` DISABLE KEYS */;
INSERT INTO `police_users` VALUES (1,'张三',20,110,123456),(2,'李四',22,111,112233);
/*!40000 ALTER TABLE `police_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `remind`
--

DROP TABLE IF EXISTS `remind`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `remind` (
  `id` int NOT NULL AUTO_INCREMENT,
  `message` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `remind`
--

LOCK TABLES `remind` WRITE;
/*!40000 ALTER TABLE `remind` DISABLE KEYS */;
/*!40000 ALTER TABLE `remind` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-01 17:39:37
