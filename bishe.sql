-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: bishe
-- ------------------------------------------------------
-- Server version	8.0.29

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
  `police` int DEFAULT NULL,
  `people` varchar(45) DEFAULT NULL,
  `status_2` varchar(45) DEFAULT NULL,
  `handle_time` varchar(45) DEFAULT NULL,
  `handle_place` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clue`
--

LOCK TABLES `clue` WRITE;
/*!40000 ALTER TABLE `clue` DISABLE KEYS */;
INSERT INTO `clue` VALUES (1,'2023/2/9','武清区天津天狮学院新校区12-330','描述信息',NULL,'测试',1,1,'15713031122','无新消息','2023-03-05 17:09:38',NULL),(3,'2023/2/12','武清区天津天狮学院新校区12-330','描述信息',NULL,'测试反馈',1,2,'15713031122','0','2023/2/28','武清东蒲洼派出所'),(4,'2023/2/2','武清区天津天狮学院新校区12-330','描述信息',NULL,'123',1,1,'15713031122','无新消息','2023-03-05 17:16:10','武清东蒲洼派出所'),(5,'2023/2/2','武清区天津天狮学院新校区12-330','描述信息',_binary '?\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0','123222',1,1,'15713031122','无新消息','2023-03-05 17:33:31','武清东蒲洼派出所'),(6,'2023/2/2','武清区天津天狮学院新校区12-330','描述信息',_binary '?\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0','123',0,1,'15713031122','无新消息','2023-03-05 17:16:10','武清东蒲洼派出所'),(7,'2023/2/2','武清区天津天狮学院新校区12-330','描述信息',_binary '?\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0','123777',1,1,'15713031122','无新消息','2023-03-05 17:47:08','武清东蒲洼派出所'),(8,'2023/2/2','武清区天津天狮学院新校区12-330','描述信息',_binary '?\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0','123999',1,1,'15713031122','无新消息','2023-03-05 17:47:08','武清东蒲洼派出所'),(9,'2023/2/2','武清区天津天狮学院新校区12-330','描述信息',_binary '?\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0','1236',1,1,'15713031122','无新消息','2023-03-05 17:57:47','武清东蒲洼派出所');
/*!40000 ALTER TABLE `clue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `common_users`
--

DROP TABLE IF EXISTS `common_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `common_users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `integral` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `common_users`
--

LOCK TABLES `common_users` WRITE;
/*!40000 ALTER TABLE `common_users` DISABLE KEYS */;
INSERT INTO `common_users` VALUES (1,'张三','15713031122','123456','5');
/*!40000 ALTER TABLE `common_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `information`
--

DROP TABLE IF EXISTS `information`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `information` (
  `id` int NOT NULL AUTO_INCREMENT,
  `info_image` varchar(45) DEFAULT NULL,
  `info_title` varchar(45) DEFAULT NULL,
  `info_link` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `information`
--

LOCK TABLES `information` WRITE;
/*!40000 ALTER TABLE `information` DISABLE KEYS */;
INSERT INTO `information` VALUES (1,NULL,'标题','https://github.com');
/*!40000 ALTER TABLE `information` ENABLE KEYS */;
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
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lost_items`
--

LOCK TABLES `lost_items` WRITE;
/*!40000 ALTER TABLE `lost_items` DISABLE KEYS */;
INSERT INTO `lost_items` VALUES (6,'123','123','http://127.0.0.1/upload/icon3.png'),(7,'123','123','http://127.0.0.1/upload/img3.jpg'),(8,'111','111','http://127.0.0.1/upload/icon1.png'),(9,'333','333','http://127.0.0.1/upload/img2.png');
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
INSERT INTO `police_case` VALUES (1,'张三','2023-2-5 12::30','天津天狮学院','xxxx',NULL);
/*!40000 ALTER TABLE `police_case` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `police_users`
--

DROP TABLE IF EXISTS `police_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `police_users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `phone` int DEFAULT NULL,
  `password` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `police_users`
--

LOCK TABLES `police_users` WRITE;
/*!40000 ALTER TABLE `police_users` DISABLE KEYS */;
INSERT INTO `police_users` VALUES (1,'张三',20,110,123456),(2,'李四',22,111,112233),(3,'丁真',66,999,123);
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

-- Dump completed on 2023-04-02 21:16:39
