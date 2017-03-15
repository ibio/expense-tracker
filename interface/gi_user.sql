-- phpMyAdmin SQL Dump
-- version 4.7.0-rc1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 15, 2017 at 04:30 AM
-- Server version: 5.5.54
-- PHP Version: 7.0.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ypseek_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `gi_user`
--

CREATE TABLE `gi_user` (
  `id` int(9) UNSIGNED NOT NULL,
  `role` int(9) UNSIGNED DEFAULT NULL,
  `status` int(9) UNSIGNED DEFAULT '0',
  `count` int(9) NOT NULL DEFAULT '0',
  `token` text,
  `email` varchar(255) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `description` text,
  `last_login` datetime DEFAULT NULL,
  `date` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gi_user`
--

INSERT INTO `gi_user` (`id`, `role`, `status`, `count`, `token`, `email`, `name`, `address`, `password`, `phone`, `avatar`, `description`, `last_login`, `date`) VALUES
(1, 1, 1, 244, 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC91cy55cHNlZWsuY29tXC8iLCJhdWQiOiJodHRwOlwvXC91cy55cHNlZWsuY29tIiwiaWF0IjoxNDg5NTQ5NDYzLCJuYmYiOjE0ODk1NDk0NjMsImV4cCI6MTQ4OTU1MzA2MywidWlkIjoxfQ.M0cf7Ykql5nzYUwdNiI8DzJdWpigKQR3S07riGleoCw', 'admin@gigster.com', NULL, NULL, '0659c7992e268962384eb17fafe88364', NULL, NULL, 'hello', '2017-03-15 03:44:23', NULL),
(2, 2, 1, 8, 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC91cy55cHNlZWsuY29tXC8iLCJhdWQiOiJodHRwOlwvXC91cy55cHNlZWsuY29tIiwiaWF0IjoxNDg5NTQyMDU5LCJuYmYiOjE0ODk1NDIwNTksImV4cCI6MTQ4OTU0NTY1OSwidWlkIjoyfQ.WoOWlvgMFFexyFQGaOpBR84rypvh8eoF0nfX88_D7r8', 'user@gigster.com', NULL, NULL, '25ed1bcb423b0b7200f485fc5ff71c8e', NULL, NULL, NULL, '2017-03-15 01:40:59', NULL),
(3, 1, 1, 54, 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC91cy55cHNlZWsuY29tXC8iLCJhdWQiOiJodHRwOlwvXC91cy55cHNlZWsuY29tIiwiaWF0IjoxNDg5NTUyMTI5LCJuYmYiOjE0ODk1NTIxMjksImV4cCI6MTQ4OTU1NTcyOSwidWlkIjozfQ.kO3fTF7KEz7NE3T3-s_Pp-f4js34zX44Q5sWfqH4tNU', 'feynman@gigster.com', NULL, NULL, '0659c7992e268962384eb17fafe88364', NULL, NULL, '', '2017-03-15 04:28:49', '2014-11-22 07:12:03'),
(4, 2, 1, 106, 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC91cy55cHNlZWsuY29tXC8iLCJhdWQiOiJodHRwOlwvXC91cy55cHNlZWsuY29tIiwiaWF0IjoxNDg5NTUyMDgxLCJuYmYiOjE0ODk1NTIwODEsImV4cCI6MTQ4OTU1NTY4MSwidWlkIjo0fQ.x-x4iixRzzIv-iEMhchTnEbMWmjkyIRHEuhPlW2dwds', 'ibio@gigster.com', NULL, NULL, '0659c7992e268962384eb17fafe88364', '54445445', '', '', '2017-03-15 04:28:01', '2015-02-07 16:43:57'),
(5, 2, 1, 173, '', 'iris@gigster.com', NULL, NULL, '0659c7992e268962384eb17fafe88364', '', '', '', '2015-07-01 20:16:45', '2015-02-08 11:37:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `gi_user`
--
ALTER TABLE `gi_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `gi_user`
--
ALTER TABLE `gi_user`
  MODIFY `id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
