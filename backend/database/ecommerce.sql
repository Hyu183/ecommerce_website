CREATE DATABASE  IF NOT EXISTS `ecommerce` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ecommerce`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: ecommerce
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brand` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `id_UNIQUE` (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES (1,'Zara'),(2,'H&M'),(3,'Pull&Bear'),(4,'Dior'),(5,'Chanel');
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `parent_lv1_id` int DEFAULT NULL,
  `parent_lv2_id` int DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `id_UNIQUE` (`id`) USING BTREE,
  KEY `category_id_fk_idx` (`parent_lv1_id`,`parent_lv2_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Men',NULL,NULL),(2,'Ladies',NULL,NULL),(3,'Girls',NULL,NULL),(4,'Boys',NULL,NULL),(5,'Tops',2,NULL),(6,'Bottoms',2,NULL),(7,'Dresses',2,NULL),(8,'Jackets',2,NULL),(9,'Shoes',2,NULL),(10,'Accesories',2,NULL),(11,'Sale',2,NULL),(12,'Rompers / Jumpsuits',7,2),(13,'Casual dresses',7,2),(14,'Going out dresses',7,2),(15,'Party / Ocassion dresses',7,2),(16,'Mini dresses',7,2),(17,'Maxi / Midi dresses',7,2),(18,'Sets',7,2),(19,'Tops',1,NULL),(20,'Tops',3,NULL),(21,'Tops',4,NULL);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `color`
--

DROP TABLE IF EXISTS `color`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `color` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `hex` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `opacity` float DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `id_UNIQUE` (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `color`
--

LOCK TABLES `color` WRITE;
/*!40000 ALTER TABLE `color` DISABLE KEYS */;
INSERT INTO `color` VALUES (1,'Red','#ff5f6d',1),(2,'Yellow','#ffd543',0.4),(3,'Blue','#5f6dff',0.4),(4,'Orange','#ffa15f',0.4),(5,'Gray','#3d3d3f',0.4),(6,'White','#ededed',0.4);
/*!40000 ALTER TABLE `color` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `status` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `total` double DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `id_UNIQUE` (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (4,15,0,'2021-11-28 14:34:06',345),(5,15,0,'2021-11-28 14:34:33',350),(6,15,1,'2021-11-28 14:34:45',58.62),(7,15,0,'2021-11-28 14:38:28',50),(8,15,0,'2021-11-28 14:38:51',190.72),(9,15,1,'2021-11-28 14:39:07',178),(10,15,0,'2021-11-28 14:39:45',200),(11,15,-1,'2021-11-28 14:39:57',90),(12,15,0,'2021-11-28 14:40:14',96),(13,15,0,'2021-11-28 14:40:34',178),(14,15,0,'2021-11-28 14:41:02',117.24),(15,15,0,'2021-11-28 15:18:00',426),(16,15,0,'2021-11-28 15:18:37',398),(17,22,0,'2021-11-29 04:19:31',69),(18,0,0,'2021-11-29 04:26:59',487),(19,13,0,'2021-11-29 08:08:49',636),(20,0,0,'2022-07-08 09:18:34',207);
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_detail`
--

DROP TABLE IF EXISTS `order_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `price` double DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `color_id` int DEFAULT NULL,
  `size_id` int DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `id_UNIQUE` (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_detail`
--

LOCK TABLES `order_detail` WRITE;
/*!40000 ALTER TABLE `order_detail` DISABLE KEYS */;
INSERT INTO `order_detail` VALUES (8,4,9,69,5,2,1),(9,5,12,70,5,3,3),(10,6,17,58.62,1,3,2),(11,7,11,50,1,3,2),(12,8,23,95.36,2,3,2),(13,9,14,89,2,5,2),(14,10,15,100,2,3,2),(15,11,28,45,2,3,3),(16,12,27,96,1,2,3),(17,13,14,89,2,5,3),(18,14,17,58.62,2,3,2),(19,15,9,69,4,2,1),(20,15,11,50,3,3,2),(21,16,9,69,1,2,2),(22,16,11,50,1,3,1),(23,16,13,90,1,3,2),(24,16,14,89,1,2,2),(25,16,15,100,1,3,2),(26,17,9,69,1,2,2),(27,18,9,69,3,2,1),(28,18,12,70,4,3,1),(29,19,9,69,4,2,1),(30,19,13,90,4,3,2),(31,20,9,69,3,4,3);
/*!40000 ALTER TABLE `order_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `brand_id` int NOT NULL,
  `description` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `thumbnail_url` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `quantity` int NOT NULL DEFAULT '0',
  `in_stock` int DEFAULT NULL,
  `price` double DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `is_deleted` tinyint DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `id_UNIQUE` (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (9,'Plunge V-neck Denim Mini Dress',1,'Model wearing size S\n- Chest: 36”\n- Length: 25.75”','images/97bc83d38285b4429f9cbf5aa941b273-1637815997869-363892576.jpg',200,179,69,'2021-11-25 04:53:18',0),(10,'Button-Down Denim Mini Dress',1,'Model wearing size S\n- Chest: 36”\n- Length: 25.75','images/download-1637818743094-893609953.jpg',200,200,101,'2021-11-25 05:39:03',0),(11,'Surplice Gingham Jumpsuit',1,'Model wearing size S\n- Chest: 36”\n- Length: 25.75”','images/download-1637819094167-795173605.jpg',200,195,50,'2021-11-25 05:44:54',0),(12,'Hermosa Ladder Lace Midi Dress',1,'Model wearing size S\n- Chest: 36”\n- Length: 25.75”','images/14095667-1-navy-1637819302432-88159408.jpg',200,191,70,'2021-11-25 05:48:22',0),(13,'Arabella Textured Maxi Skirt',1,'Model wearing size S\n- Chest: 36”\n- Length: 25.75”','images/download-1637819764857-807242295.jpg',202,197,90,'2021-11-25 05:56:04',0),(14,'Pippa Halter Mini Dress',2,'Model wearing size S\n- Chest: 36”\n- Length: 25.75”','images/13ea123e-9aa4-4cfd-924f-37c97f4969b7-1637819812722-244124187.jpg',200,195,89,'2021-11-25 05:56:52',0),(15,'Lace-Trim Surplice Mini Dress',2,'Model wearing size S\n- Chest: 36”\n- Length: 25.75”','images/download-1637819842430-272112499.jpg',198,195,100,'2021-11-25 05:57:22',0),(16,'Betsey Linen Halter Midi Dress',2,'Model wearing size S\n- Chest: 36”\n- Length: 25.75”','images/b880160bcd4539c8d5b742c97ec43b56-1637819950335-665131796.jpg',200,200,120,'2021-11-25 05:59:10',0),(17,'Collete Stretch Linen Minidress',2,'Model wearing size S\n- Chest: 36”\n- Length: 25.75”','images/download-1637820027403-514863277.jpg',200,197,58.62,'2021-11-25 06:00:27',0),(18,'test',1,'test','images/97bc83d38285b4429f9cbf5aa941b273-1637823849371-814739208.jpg',200,0,699,'2021-11-25 07:04:09',0),(19,'Hattie High-Neck Linen Jumpsuit',1,'test','images/download-1638010903214-24121466.jpg',200,200,53,'2021-11-27 11:01:43',0),(20,'Amber Button-Down Linen Midi Dress',1,'test','images/3ea3bfafbf5c1b8d27af7c251fb33bf2-1638010933445-294487417.jpg',200,200,90,'2021-11-27 11:02:13',0),(21,'Catalina Printed Halter Dress',1,'test','images/498a3c4ef79c1ab77190e0c95af04d4c-1638010961903-68177781.jpg',200,200,900,'2021-11-27 11:02:41',0),(22,'One Shoulder Midi Dress',1,'test','images/phoumuievtmtrnq8uue7_79b9e6ba-2554-4d7e-80c0-9b59dc5d1c2b_600x-1638010989391-518914335.jpg',200,200,150,'2021-11-27 11:03:09',0),(23,'Printed A-Line Sweater Dress',1,'test','images/ruuloxuzzvrlwvag8osk_600x-1638011041071-446529881.jpg',200,198,95.36,'2021-11-27 11:04:01',0),(24,'Surplice Metallic Knit Ruffle Front Dress',1,'test','images/z40y8tr9acjeiowumc0z_600x-1638011069945-56595006.jpg',200,200,99,'2021-11-27 11:04:29',0),(25,'Short Sleeve Rhinestone Ring Faux Wrap Dress',1,'test','images/sifzwueinin0ocxid9z4_94343552-3f22-4692-adfd-3ebe71240f27_600x-1638011098907-75828638.jpg',200,200,86,'2021-11-27 11:04:58',0),(26,'Maden Foulard Two Piece Skirt Set',1,'test','images/n78dydrinirwhs1nnk0p_600x-1638011127891-913799058.jpg',200,200,99,'2021-11-27 11:05:27',0),(27,'Veronica Embroidered Terracotta Peasant Dress',1,'test','images/veyipmmcbeexyx797q39_600x-1638011157099-823134638.jpg',200,199,96,'2021-11-27 11:05:57',0),(28,'Adrienne Hem Dress',1,'test','images/c0yvcl1xyp8kk0cbbz0t_3e567e9c-7fc2-4190-bb1c-e71b9f47d2d9_600x-1638011343257-840790372.jpg',200,198,45,'2021-11-27 11:09:03',0),(29,'Veronica BlackIvory Mixed Print Peasant Dress',1,'test','images/qekjq8jlkfijyspst6j1_e942041c-81fd-4ec5-8f00-0bbad54f57af_600x-1638011387426-542810198.jpg',200,200,696,'2021-11-27 11:09:47',0),(30,'Carmen Wrap Maxi Dress',1,'test','images/vscev9np0n0gymnjxjzg_cc086a19-643c-400f-bd07-a9784a6e761b_600x-1638011423086-823472000.jpg',200,200,92,'2021-11-27 11:10:23',0),(31,'Dress and Jacket Set with Sheer Sleeves and Embellished Edges',1,'test','images/hpjce1sulezlf5dd3uop_600x-1638011466573-539722815.jpg',200,200,80,'2021-11-27 11:11:06',0),(32,'test',1,'test','images/hpjce1sulezlf5dd3uop_600x-1638036092839-336492171.jpg',198,198,999,'2021-11-27 18:01:33',0),(33,'test',1,'test','images/97bc83d38285b4429f9cbf5aa941b273-1638159410218-629586930.jpg',200,200,200,'2021-11-29 04:16:50',0),(34,'upload',1,'test','images/urban-outfitters-designer-Vintage-Denim-LIght-Uo-Plunge-V-neck-Denim-Mini-Dress-1638160140896-375370278.jpeg',200,200,200,'2021-11-29 04:29:01',0),(35,'product',1,'demo','images/m_5e0b635faa7ed39e144d45cc-1638173429468-819533432.jpg',200,200,200,'2021-11-29 08:10:30',0);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_category`
--

DROP TABLE IF EXISTS `product_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_category` (
  `product_id` int NOT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`product_id`,`category_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_category`
--

LOCK TABLES `product_category` WRITE;
/*!40000 ALTER TABLE `product_category` DISABLE KEYS */;
INSERT INTO `product_category` VALUES (9,12),(9,13),(9,14),(10,12),(10,13),(11,12),(11,14),(12,12),(12,14),(12,18),(13,12),(13,17),(14,12),(14,15),(15,12),(15,13),(15,14),(16,12),(16,15),(17,12),(17,16),(17,17),(18,12),(18,13),(18,14),(19,12),(20,12),(21,12),(22,12),(22,13),(23,12),(24,12),(24,13),(25,12),(26,12),(26,13),(27,12),(27,13),(27,14),(28,12),(28,13),(28,14),(29,12),(29,13),(30,12),(31,12),(31,13),(32,12),(33,13),(34,12),(35,12),(35,13),(35,14),(35,16),(35,17);
/*!40000 ALTER TABLE `product_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_color`
--

DROP TABLE IF EXISTS `product_color`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_color` (
  `product_id` int NOT NULL,
  `color_id` int NOT NULL,
  PRIMARY KEY (`product_id`,`color_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_color`
--

LOCK TABLES `product_color` WRITE;
/*!40000 ALTER TABLE `product_color` DISABLE KEYS */;
INSERT INTO `product_color` VALUES (9,1),(9,2),(9,3),(9,4),(9,5),(9,6),(10,1),(10,2),(11,1),(11,3),(12,1),(12,3),(12,5),(13,2),(13,3),(14,1),(14,2),(14,5),(15,1),(15,3),(15,5),(16,1),(16,2),(16,3),(17,2),(17,3),(18,1),(18,3),(18,4),(18,5),(19,1),(19,2),(19,4),(20,1),(20,2),(21,1),(21,2),(21,3),(22,1),(22,2),(22,3),(23,1),(23,2),(23,3),(24,1),(24,2),(24,3),(25,1),(25,2),(25,3),(26,1),(26,2),(26,3),(26,4),(26,5),(26,6),(27,1),(27,2),(27,3),(27,4),(27,5),(27,6),(28,1),(28,2),(28,3),(28,4),(28,5),(29,1),(29,2),(29,3),(29,4),(29,5),(29,6),(30,1),(30,2),(30,3),(30,4),(30,5),(30,6),(31,1),(31,2),(31,3),(31,4),(31,5),(31,6),(32,1),(32,2),(32,3),(33,2),(33,3),(34,1),(34,2),(34,3),(34,4),(34,5),(34,6),(35,1),(35,2),(35,3),(35,4),(35,5),(35,6);
/*!40000 ALTER TABLE `product_color` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_image`
--

DROP TABLE IF EXISTS `product_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_image` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `image_url` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `id_UNIQUE` (`id`) USING BTREE,
  KEY `product_id` (`product_id`) USING BTREE,
  CONSTRAINT `product_id_fk` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_image`
--

LOCK TABLES `product_image` WRITE;
/*!40000 ALTER TABLE `product_image` DISABLE KEYS */;
INSERT INTO `product_image` VALUES (4,9,'images/m_5e0b635faa7ed39e144d45cc-1637815998250-295898909.jpg'),(5,9,'images/urban-outfitters-designer-Vintage-Denim-LIght-Uo-Plunge-V-neck-Denim-Mini-Dress (1)-1637815998255-971508614.jpeg'),(6,9,'images/urban-outfitters-designer-Vintage-Denim-LIght-Uo-Plunge-V-neck-Denim-Mini-Dress (2)-1637815998383-180577577.jpeg'),(7,9,'images/urban-outfitters-designer-Vintage-Denim-LIght-Uo-Plunge-V-neck-Denim-Mini-Dress-1637815998391-31857162.jpeg'),(8,18,'images/m_5e0b635faa7ed39e144d45cc-1637823849378-139866324.jpg'),(9,18,'images/urban-outfitters-designer-Vintage-Denim-LIght-Uo-Plunge-V-neck-Denim-Mini-Dress (1)-1637823849381-642502348.jpeg'),(10,18,'images/urban-outfitters-designer-Vintage-Denim-LIght-Uo-Plunge-V-neck-Denim-Mini-Dress-1637823849387-341668941.jpeg'),(11,18,'images/urban-outfitters-designer-Vintage-Denim-LIght-Uo-Plunge-V-neck-Denim-Mini-Dress-1637823849390-774656321.jpeg'),(12,34,'images/m_5e0b635faa7ed39e144d45cc-1638160140896-506532296.jpg'),(13,34,'images/urban-outfitters-designer-Vintage-Denim-LIght-Uo-Plunge-V-neck-Denim-Mini-Dress (1)-1638160140900-81441517.jpeg'),(14,34,'images/urban-outfitters-designer-Vintage-Denim-LIght-Uo-Plunge-V-neck-Denim-Mini-Dress (2)-1638160140965-798523944.jpeg'),(15,34,'images/97bc83d38285b4429f9cbf5aa941b273-1638160140967-9888035.jpg'),(16,35,'images/97bc83d38285b4429f9cbf5aa941b273-1638173429476-98305574.jpg'),(17,35,'images/urban-outfitters-designer-Vintage-Denim-LIght-Uo-Plunge-V-neck-Denim-Mini-Dress (1)-1638173429479-795888902.jpeg'),(18,35,'images/urban-outfitters-designer-Vintage-Denim-LIght-Uo-Plunge-V-neck-Denim-Mini-Dress-1638173429893-450805978.jpeg'),(19,35,'images/97bc83d38285b4429f9cbf5aa941b273-1638173429897-650059476.jpg');
/*!40000 ALTER TABLE `product_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_review`
--

DROP TABLE IF EXISTS `product_review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_review` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `title` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `content` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `rating` float DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modifed_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `id_UNIQUE` (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_review`
--

LOCK TABLES `product_review` WRITE;
/*!40000 ALTER TABLE `product_review` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_size`
--

DROP TABLE IF EXISTS `product_size`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_size` (
  `product_id` int NOT NULL,
  `size_id` int NOT NULL,
  PRIMARY KEY (`product_id`,`size_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_size`
--

LOCK TABLES `product_size` WRITE;
/*!40000 ALTER TABLE `product_size` DISABLE KEYS */;
INSERT INTO `product_size` VALUES (9,1),(9,2),(9,3),(10,1),(10,2),(11,1),(11,2),(12,1),(12,3),(13,1),(13,2),(14,1),(14,2),(14,3),(15,1),(15,2),(15,3),(16,1),(16,2),(17,1),(17,2),(18,1),(18,2),(18,3),(19,1),(19,2),(19,3),(20,1),(20,2),(20,3),(21,1),(21,2),(21,3),(22,1),(22,2),(22,3),(23,1),(23,2),(23,3),(24,1),(24,2),(24,3),(25,1),(25,2),(25,3),(26,1),(26,2),(26,3),(27,1),(27,2),(27,3),(28,1),(28,2),(28,3),(29,1),(29,2),(29,3),(30,1),(30,2),(30,3),(31,1),(31,2),(31,3),(32,1),(32,2),(32,3),(33,1),(33,3),(34,1),(34,2),(34,3),(35,1),(35,2);
/*!40000 ALTER TABLE `product_size` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `size`
--

DROP TABLE IF EXISTS `size`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `size` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `size`
--

LOCK TABLES `size` WRITE;
/*!40000 ALTER TABLE `size` DISABLE KEYS */;
INSERT INTO `size` VALUES (1,'S'),(2,'M'),(3,'L');
/*!40000 ALTER TABLE `size` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `role` int NOT NULL,
  `access_token` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `id_UNIQUE` (`id`) USING BTREE,
  UNIQUE KEY `email_UNIQUE` (`email`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Huy ne','a@gmail.com','213123easdas3@',0,NULL),(2,'Huy  ne','a1@gmail.com','$2a$10$xPux90UL6ss5dUeOocI/VehuhWLAZLsxalMrtixz/OUXDipjFX0zq',0,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjM2NTUzOTgwLCJleHAiOjE2MzcxNTg3ODB9.ON3-wGIx-F84RWVAOCil2KjCMaQP1qUjILlJvlEskt0'),(3,'Huy  ne','a2@gmail.com','$2a$10$4GpyLPLlxCmy6LWdVZQPCOAxpgV0Sl0nNA.qpDoUtSG4Cl6vNo3PC',0,NULL),(5,'Huddsad  ne','a3@gmail.com','$2a$10$CV3gFDRwwCx0hoRUORs7vOomcT783tyqwVxEWa9sKhz8OUPW61b4O',0,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjM2NTU0Mzk0LCJleHAiOjE2MzcxNTkxOTR9.JGiU4Jjay4qFN9YmpQbVQb6cljsu898qQsKsnMy5H2g'),(7,'Huddsad  ne','a4@gmail.com','$2a$10$fb0.1p0nGLKo1uo7wKrSdeGMna8uq31AaKCgBneTI2v80hiYrhY86',0,NULL),(9,'Huddsad  ewene','a5@gmail.com','$2a$10$Y2BzbcEaDYwSGV62OLsimuegVI.jYoisaOapKJB2uYaLYIQATjVLe',0,NULL),(12,'Huddsad ewene','a6@gmail.com','$2a$10$G3Yj9YQtnZgO66eoK/s3Oug7CcIfvgCCaadSpot1lGbeS2xq8JuFu',0,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlhdCI6MTYzNjU1ODUzOCwiZXhwIjoxNjM3MTYzMzM4fQ.Wavnn3WOltJd4pZztctkMZtwGFeFy-6dwin9ZAtxwiw'),(13,'Tran Quang Huy','neyzik123@gmail.com','$2a$10$W44wErZoZdXWSwj1XF8AceK7fNrhKsbNMzBNpObS/gxtgSe3l3op6',0,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInJvbGUiOjAsImlhdCI6MTYzODE3MzIyNSwiZXhwIjoxNjM4Nzc4MDI1fQ.gBbPQQPaJSZZmt4nLQxJoTdOXuhg0QihuyUinkg9Kh4'),(14,'dsadsad','sadasda@ds.com','$2a$10$k94yY20QG4cylW1y6L4vRu1vEiPYXUYFm2i0RxDbdeJoq34Pavm3y',0,NULL),(15,'huy','abc@gmail.com','$2a$10$gnORsxtGWIkUCtOCPgqnCebp3NFASieiBCg3kDZo1HFqEKj.3Y7Ju',0,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInJvbGUiOjAsImlhdCI6MTYzODE1OTQ4MywiZXhwIjoxNjM4NzY0MjgzfQ.4gaXCZlHx6tbpGXGAzZNR2ti3IZplxmnjRT1uo1tOj4'),(16,'abcd','abcd@gmail.com','$2a$10$QVzehIcIQotxQ79FAe.VpeGW32GxRCL0480aC7XG2LTwT2e.A7A/m',0,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsImlhdCI6MTYzNjcyODk4NiwiZXhwIjoxNjM3MzMzNzg2fQ.ZyTjQWoYD1ayQW3hOw7usHQSMDgZIqCKHGpr0pgzhSs'),(17,'dasdsad','abcdd@gmail.com','$2a$10$0o0Ve4KU6uVzfPaY6ALyQ.KeJM1ZOgOnkTOCQFgFhYYcNqI9j3mMC',0,NULL),(18,'dasdsa','abcddd@gmail.com','$2a$10$iRooiut9PMU1kgBCqGKxGe6dkXpFlcnlCcw0qklarEAqvrS90xnG6',0,NULL),(19,'huy','abcde@gmail.com','$2a$10$wlm0fyZm3WYOTZwjO7cJ9OD.gatwwQyNYHA1AD7rkVpKlWSNjnG2y',0,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksInJvbGUiOjAsImlhdCI6MTYzODE2MTE1NiwiZXhwIjoxNjM4NzY1OTU2fQ.vJ3OQULdFJqgjzZrMvAf10maUQg05Ou9dzPoZN8ugpo'),(20,'huy ','abcderf@gmail.com','$2a$10$N2mbw3JbVIXD9lpCHh.Z1eOrkjMvUhWv8lER8/V8VTgH0QEldt65q',0,NULL),(21,'Huy','admin@gmail.com','$2a$10$luljA92Fl56emPb8aMIN9uOlctWlPYw2Mjdh3frZmGh5UChvwEJge',1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjEsInJvbGUiOjEsImlhdCI6MTY0Mjk5MjIzMywiZXhwIjoxNjQzNTk3MDMzfQ.J_x6OJEfI8tfVtAdzbcBpolvsm-APHMd6qf2nhVvkDg'),(22,'Huy','huy@gmail.com','$2a$10$lqMHvyvDrne/mxo2McsTo.V2WieRMtOrqs27RLqbDXeV4LiTfCGMC',0,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsInJvbGUiOjAsImlhdCI6MTYzODE1OTU1NiwiZXhwIjoxNjM4NzY0MzU2fQ.vOeBPWpx_B_IuuyHC5EBm5i5Y68qYmv73Eja70REFf0'),(23,'huy','huy2@gmail.com','$2a$10$PYqCBTIqCVXfVnNNSIAXVO5HYVc/b4q421iEvndP6kXotYPxGkS.i',0,NULL);
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

-- Dump completed on 2022-07-08 16:22:43
