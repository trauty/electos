-- MariaDB dump 10.19-11.3.2-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: electos
-- ------------------------------------------------------
-- Server version	11.3.2-MariaDB-1:11.3.2+maria~ubu2204

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `electos`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `electos` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;

USE `electos`;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `account` (
  `account_id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `street` varchar(255) NOT NULL,
  `plz` varchar(10) NOT NULL,
  `location` varchar(100) NOT NULL,
  `iban` varchar(34) NOT NULL,
  `blz` varchar(8) NOT NULL,
  `institution` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`account_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES
(7,'test@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$RpjgAZxeFhQskfoDJ6CuqQ$WpziUWrRySGnNOesuEoyzPG1MaFOxdp0f6MzE5I6Mu0','Test','Testus','Testusstra├ƒe 1','133769','Testusstadt','1231231212','29384','keins','2024-03-04 18:18:27','2024-03-04 18:18:27'),
(9,'anothertest@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$rZzz1pDABC0APhMsI2dTQQ$JwUt6z6gMsMWcHneMX8zueVot67y0MlFdSxqtYmfu4M','test','test','test','1234','test','12321312','12321312','test','2024-03-06 20:15:09','2024-03-06 20:15:09'),
(12,'sebi@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$XJIXSfNFFpnBKctArT328w$9Qf6SEk3i/JrUDJi3kkC1gSTZestI4017OkSufyfTus','yes','yes','yes','36041','yes','123312','12321','yes','2024-03-06 20:20:33','2024-03-06 20:20:33');
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`category_id`),
  UNIQUE KEY `description` (`description`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES
(2,'Aktive Komponenten'),
(3,'Mikroprozessoren'),
(1,'Passive Komponenten');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manufacturer`
--

DROP TABLE IF EXISTS `manufacturer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `manufacturer` (
  `manufacturer_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `homepage` varchar(512) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`manufacturer_id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manufacturer`
--

LOCK TABLES `manufacturer` WRITE;
/*!40000 ALTER TABLE `manufacturer` DISABLE KEYS */;
INSERT INTO `manufacturer` VALUES
(1,'NXP Semiconductors','nxp.germany@nxp.com','https://www.nxp.com/'),
(2,'Texas Instruments Incorporated','tiΓÇæcares@ti.com','https://www.ti.com/de-de/homepage.html'),
(3,'Renesas Electronics K.K.','info-Germany@lm.renesas.com','https://www.renesas.com/us/en'),
(4,'W├╝rth-Gruppe','info@wuerth.com','https://www.wuerth.de/');
/*!40000 ALTER TABLE `manufacturer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(9,2) NOT NULL,
  `image` varchar(512) DEFAULT NULL,
  `fk_category_id` int(11) DEFAULT NULL,
  `fk_manufacturer_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  UNIQUE KEY `name` (`name`),
  KEY `fk_category_id` (`fk_category_id`),
  KEY `fk_manufacturer_id` (`fk_manufacturer_id`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`fk_category_id`) REFERENCES `category` (`category_id`),
  CONSTRAINT `product_ibfk_2` FOREIGN KEY (`fk_manufacturer_id`) REFERENCES `manufacturer` (`manufacturer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES
(1,'860020572003','Aluminium-Elektrolytkondensator',0.09,'/generic_capacitor.png',1,4),
(2,'865080657018','Aluminium-Elektrolytkondensator SMD',0.84,'/generic_capacitor.png',1,4),
(3,'865230542002','Aluminium-Elektrolytkondensator SMD',0.19,'/generic_capacitor.png',1,4),
(4,'860010373010','Aluminium-Elektrolytkondensator 220 Mikrofarad 16V',0.15,'/generic_capacitor.png',1,4),
(5,'LP395Z/NOPB','TRANS NPN 36V TO92-3',1.63,'/generic_transistor.png',2,2),
(6,'LM395T/NOPB','TRANS NPN 36V 2.2A TO220-3',3.39,'/generic_transistor.png',2,2),
(7,'2SA952-T-A','2SA952 - SMALL SIGNAL BIPOLAR TR',0.24,'/generic_transistor.png',2,3),
(8,'2SB601-AZ','2SB601 - PNP SILICON EPITAXIAL T',1.38,'/generic_transistor.png',2,3),
(9,'MCIMX6Z0DVM09AB','IC MPU I.MX6 900MHZ 289MAPBGA',12.59,'/generic_mcu.png',3,1),
(10,'MCIMX27VOP4A','IC MPU I.MX27 400MHZ 404LFBGA',37.43,'/generic_mcu.png',3,1);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_in_cart`
--

DROP TABLE IF EXISTS `products_in_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products_in_cart` (
  `fk_product_id` int(11) NOT NULL,
  `fk_account_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  PRIMARY KEY (`fk_product_id`,`fk_account_id`),
  UNIQUE KEY `unique_account_product` (`fk_product_id`,`fk_account_id`),
  KEY `fk_account_id` (`fk_account_id`),
  CONSTRAINT `products_in_cart_ibfk_1` FOREIGN KEY (`fk_product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE,
  CONSTRAINT `products_in_cart_ibfk_2` FOREIGN KEY (`fk_account_id`) REFERENCES `account` (`account_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_in_cart`
--

LOCK TABLES `products_in_cart` WRITE;
/*!40000 ALTER TABLE `products_in_cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `products_in_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `receipt`
--

DROP TABLE IF EXISTS `receipt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `receipt` (
  `receipt_id` int(11) NOT NULL AUTO_INCREMENT,
  `fk_account_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`receipt_id`),
  KEY `fk_account_id` (`fk_account_id`),
  CONSTRAINT `receipt_ibfk_1` FOREIGN KEY (`fk_account_id`) REFERENCES `account` (`account_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `receipt`
--

LOCK TABLES `receipt` WRITE;
/*!40000 ALTER TABLE `receipt` DISABLE KEYS */;
INSERT INTO `receipt` VALUES
(9,12,'2024-03-06 20:31:37');
/*!40000 ALTER TABLE `receipt` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `receipt_products`
--

DROP TABLE IF EXISTS `receipt_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `receipt_products` (
  `fk_product_id` int(11) NOT NULL,
  `fk_receipt_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  PRIMARY KEY (`fk_product_id`,`fk_receipt_id`),
  UNIQUE KEY `unique_receipt_product` (`fk_product_id`,`fk_receipt_id`),
  KEY `fk_receipt_id` (`fk_receipt_id`),
  CONSTRAINT `receipt_products_ibfk_1` FOREIGN KEY (`fk_product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE,
  CONSTRAINT `receipt_products_ibfk_2` FOREIGN KEY (`fk_receipt_id`) REFERENCES `receipt` (`receipt_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `receipt_products`
--

LOCK TABLES `receipt_products` WRITE;
/*!40000 ALTER TABLE `receipt_products` DISABLE KEYS */;
INSERT INTO `receipt_products` VALUES
(1,9,9);
/*!40000 ALTER TABLE `receipt_products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-06 21:37:05
