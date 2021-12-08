-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 08 déc. 2021 à 09:46
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `bdd_e-commerce`
--

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `Cat_Id` int(11) NOT NULL AUTO_INCREMENT,
  `Cat_Nom` int(100) NOT NULL,
  PRIMARY KEY (`Cat_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `clients`
--

DROP TABLE IF EXISTS `clients`;
CREATE TABLE IF NOT EXISTS `clients` (
  `Cli_Id` int(11) NOT NULL AUTO_INCREMENT,
  `Cli_Nom` varchar(100) NOT NULL,
  `Cli_Prenom` varchar(100) NOT NULL,
  `Cli_Mail` varchar(150) NOT NULL,
  `Cli_Mdp` varchar(150) NOT NULL,
  `Cli_Age` int(10) NOT NULL,
  `Cli_Adresse` varchar(200) NOT NULL,
  `Cli_Ville` varchar(150) NOT NULL,
  `Cli_Droit` int(10) NOT NULL,
  PRIMARY KEY (`Cli_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `commandes`
--

DROP TABLE IF EXISTS `commandes`;
CREATE TABLE IF NOT EXISTS `commandes` (
  `Com_Id` int(11) NOT NULL AUTO_INCREMENT,
  `Com_ProduitId` int(11) NOT NULL,
  `Com_Prix` varchar(50) NOT NULL,
  `Com_CliId` int(11) NOT NULL,
  `Com_Adresse` varchar(200) NOT NULL,
  `Com_Ville` varchar(150) NOT NULL,
  PRIMARY KEY (`Com_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `panier`
--

DROP TABLE IF EXISTS `panier`;
CREATE TABLE IF NOT EXISTS `panier` (
  `Panier_Id` int(11) NOT NULL AUTO_INCREMENT,
  `Panier_CliId` int(11) NOT NULL,
  `Panier_Prix` varchar(50) NOT NULL,
  PRIMARY KEY (`Panier_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

DROP TABLE IF EXISTS `produits`;
CREATE TABLE IF NOT EXISTS `produits` (
  `Produit_Id` int(11) NOT NULL AUTO_INCREMENT,
  `Produit_Nom` varchar(100) NOT NULL,
  `Produit_photo` longblob NOT NULL,
  `Produit_Description` varchar(300) NOT NULL,
  `Produit_CatNom` varchar(100) NOT NULL,
  `Produit_Prix` varchar(50) NOT NULL,
  PRIMARY KEY (`Produit_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `quantite`
--

DROP TABLE IF EXISTS `quantite`;
CREATE TABLE IF NOT EXISTS `quantite` (
  `Quantite_PanierId` int(11) NOT NULL AUTO_INCREMENT,
  `Quantite_ProduitId` int(11) NOT NULL,
  `Quantite_Produit` int(50) NOT NULL,
  PRIMARY KEY (`Quantite_PanierId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
