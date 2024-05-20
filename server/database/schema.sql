-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema shop
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema shop
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `shop` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `shop` ;

-- -----------------------------------------------------
-- Table `shop`.`claims`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shop`.`claims` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titleofclaim` VARCHAR(255) NOT NULL,
  `stolen` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `attachment` VARCHAR(255) NULL DEFAULT NULL,
  `status` VARCHAR(50) NOT NULL,
  `usersid` VARCHAR(255) NOT NULL,
  `insuranceid` VARCHAR(255) NOT NULL,
  `contractid` INT NULL DEFAULT NULL,
  `Date_ofthe_claim` DATE NULL DEFAULT NULL,
  `workshop` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `shop`.`contract`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shop`.`contract` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(255) NOT NULL,
  `priority` VARCHAR(50) NULL DEFAULT NULL,
  `protection` VARCHAR(255) NULL DEFAULT NULL,
  `contract_terms` VARCHAR(255) NOT NULL,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `cin` VARCHAR(20) NOT NULL,
  `start_date` DATE NOT NULL,
  `end_date` DATE NOT NULL,
  `brand` VARCHAR(255) NULL DEFAULT NULL,
  `serial` VARCHAR(255) NULL DEFAULT NULL,
  `model` VARCHAR(255) NULL DEFAULT NULL,
  `usersid` VARCHAR(255) NOT NULL,
  `insuranceid` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `shop`.`insurance`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shop`.`insurance` (
  `insuranceid` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NULL DEFAULT NULL,
  `email` VARCHAR(100) NULL DEFAULT NULL,
  `password` VARCHAR(100) NULL DEFAULT NULL,
  `phone` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`insuranceid`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `shop`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shop`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `model` VARCHAR(255) NOT NULL,
  `category` VARCHAR(255) NOT NULL,
  `price` VARCHAR(255) NOT NULL,
  `color` VARCHAR(255) NULL DEFAULT NULL,
  `image` VARCHAR(255) NULL DEFAULT NULL,
  `size` VARCHAR(255) NULL DEFAULT NULL,
  `brand` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 13
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `shop`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shop`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL,
  `cin` VARCHAR(20) NOT NULL,
  `sex` VARCHAR(255) NOT NULL,
  `image` VARCHAR(255) NULL DEFAULT NULL,
  `phone` VARCHAR(20) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `birthday` DATE NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;