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
  `liked` int DEFAULT NULL,
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `amusement`
--

LOCK TABLES `amusement` WRITE;
/*!40000 ALTER TABLE `amusement` DISABLE KEYS */;
INSERT INTO `amusement` VALUES (1,'彩虹劇場',179,103,67),(2,'迴旋磁場',157,186,197),(3,'幸福摩天輪',93,181,190),(4,'狂飆飛碟',50,170,52),(5,'驚嚇列車',155,93,177),(6,'飛天潛艇G5',131,97,257),(7,'叢林溜滑梯',157,109,45),(8,'海神號',256,160,188),(9,'超級戰斧',49,155,28),(10,'衝瘋飛車',35,130,300),(11,'愛之橋',105,96,241),(12,'林蔭步道',193,122,74),(13,'天女散花',215,168,13),(14,'擎天飛梭',174,186,251),(15,'尖叫無底洞',144,137,80),(16,'龍捲風',135,134,119),(17,'大碗公',92,155,89),(18,'小威漂漂河',119,159,205),(19,'大船塢',145,166,7),(20,'維京海灘',166,152,100),(21,'維京巨浪',123,145,179),(22,'維京舞台',131,159,190),(23,'寶藏哈哈列車',166,144,120),(24,'北海星空_鏡迷宮',122,175,222),(25,'海盜丟沙包',171,122,178),(26,'百戰嚕啦啦',193,178,154),(27,'嘟嘟車',194,178,124),(28,'兒童娃娃機',195,178,56),(29,'歡樂金銀島-表演舞台',196,178,210),(30,'皇家馬車',197,178,160),(31,'咕咕飛車',198,178,123),(32,'飛天法寶',199,178,172),(33,'5D冒險劇院',200,178,49),(34,'魔奇釣魚場',201,178,214),(35,'服務中心',203,34,51),(36,'流泉花坡',201,72,145),(37,'巨石藝陣',221,74,39),(38,'劍湖山博物館',230,74,216),(39,'東方劇場',256,94,213),(40,'一拍即旺鳳梨綠雕區',168,57,12),(41,'彩虹步道',175,81,244),(42,'梅園',205,90,35),(43,'桂花橡',157,69,184),(44,'東方展覽館',238,111,9);
/*!40000 ALTER TABLE `amusement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likelist`
--

DROP TABLE IF EXISTS `likelist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likelist` (
  `likedSeq` int NOT NULL AUTO_INCREMENT,
  `user` varchar(45) DEFAULT NULL,
  `amusementSeq` int DEFAULT NULL,
  `amusementName` varchar(45) DEFAULT NULL,
  `amusementX` int DEFAULT NULL,
  `amusementY` int DEFAULT NULL,
  `liked` int DEFAULT NULL,
  PRIMARY KEY (`likedSeq`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likelist`
--

LOCK TABLES `likelist` WRITE;
/*!40000 ALTER TABLE `likelist` DISABLE KEYS */;
INSERT INTO `likelist` VALUES (47,'qwew',1,'彩虹劇場',179,103,67),(48,'vyjguhg',1,'彩虹劇場',179,103,67),(49,'vyjguhg',2,'迴旋磁場',157,186,197);
/*!40000 ALTER TABLE `likelist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `seq` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `pwd` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (29,'a','a@a','ap'),(30,'admin','admin@admin','admin'),(31,'ghjkchjk','sadas@assda','123'),(32,'123','123@123','123'),(33,'q','a@a','q'),(34,'qsadfghjkljhgfds','q@q','q'),(35,'asdsadsasda','as@sad','asd'),(36,'asdfg','asdfg@asdfg','asdfg'),(37,'sheng','sheng@sheng','sheng');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-15 20:38:36
