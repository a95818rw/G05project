-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: map
-- ------------------------------------------------------
-- Server version	8.0.21

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
-- Table structure for table `amusement`
--

DROP TABLE IF EXISTS `amusement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `amusement` (
  `seq` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `x` int DEFAULT NULL,
  `y` int DEFAULT NULL,
  `like` int DEFAULT NULL,
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `amusement`
--

LOCK TABLES `amusement` WRITE;
/*!40000 ALTER TABLE `amusement` DISABLE KEYS */;
INSERT INTO `amusement` VALUES (1,'彩虹劇場',NULL,NULL,NULL),(2,'迴旋磁場',NULL,NULL,NULL),(3,'幸福摩天輪',NULL,NULL,NULL),(4,'狂飆飛碟',NULL,NULL,NULL),(5,'驚嚇列車',NULL,NULL,NULL),(6,'飛天潛艇G5',NULL,NULL,NULL),(7,'叢林溜滑梯',NULL,NULL,NULL),(8,'海神號',NULL,NULL,NULL),(9,'超級戰斧',NULL,NULL,NULL),(10,'衝瘋飛車',NULL,NULL,NULL),(11,'愛之橋',NULL,NULL,NULL),(12,'林蔭步道',NULL,NULL,NULL),(13,'天女散花',NULL,NULL,NULL),(14,'擎天飛梭',NULL,NULL,NULL),(15,'尖叫無底洞',NULL,NULL,NULL),(16,'龍捲風',NULL,NULL,NULL),(17,'大碗公',NULL,NULL,NULL),(18,'小威漂漂河',NULL,NULL,NULL),(19,'大船塢',NULL,NULL,NULL),(20,'維京海灘',NULL,NULL,NULL),(21,'維京巨浪',NULL,NULL,NULL),(22,'維京舞台',NULL,NULL,NULL),(23,'寶藏哈哈列車',NULL,NULL,NULL),(24,'北海星空_鏡迷宮',NULL,NULL,NULL),(25,'海盜丟沙包',NULL,NULL,NULL),(26,'百戰嚕啦啦',NULL,NULL,NULL),(27,'嘟嘟車',NULL,NULL,NULL),(28,'兒童娃娃機',NULL,NULL,NULL),(29,'歡樂金銀島-表演舞台',NULL,NULL,NULL),(30,'皇家馬車',NULL,NULL,NULL),(31,'随飛車',NULL,NULL,NULL),(32,'咕咕飛車',NULL,NULL,NULL),(33,'飛天法寶',NULL,NULL,NULL),(34,'5D冒險劇院',NULL,NULL,NULL),(35,'魔奇釣魚場',NULL,NULL,NULL),(36,'--旅客服務區',NULL,NULL,NULL),(37,'流泉花坡',NULL,NULL,NULL),(38,'巨石藝陣',NULL,NULL,NULL),(39,'劍湖山博物館',NULL,NULL,NULL),(40,'東方劇場',NULL,NULL,NULL),(41,'一拍即旺鳳梨綠雕區',NULL,NULL,NULL),(42,'彩虹步道',NULL,NULL,NULL),(43,'梅園',NULL,NULL,NULL),(44,'桂花橡',NULL,NULL,NULL),(45,'東方展覽館',NULL,NULL,NULL);
/*!40000 ALTER TABLE `amusement` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-08 16:52:56
