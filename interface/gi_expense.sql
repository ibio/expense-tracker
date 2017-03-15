-- phpMyAdmin SQL Dump
-- version 4.7.0-rc1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 15, 2017 at 04:29 AM
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
-- Table structure for table `gi_expense`
--

CREATE TABLE `gi_expense` (
  `id` int(20) NOT NULL,
  `uid` int(20) NOT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `amount` float NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gi_expense`
--

INSERT INTO `gi_expense` (`id`, `uid`, `description`, `amount`, `date`) VALUES
(1, 1, 'df', 3, '2017-03-14 23:12:40'),
(2, 1, 'df', 3, '2017-03-14 23:18:14'),
(3, 1, 'df', 3, '2017-03-14 23:20:07'),
(4, 1, 'df', 333, '2017-03-14 23:21:14'),
(5, 1, 'dff', 32, '2017-03-14 23:21:35'),
(6, 1, 'hello world!', 32, '2017-03-14 23:22:49'),
(7, 1, 'dff', 32, '2017-03-14 23:23:43'),
(8, 1, 'dff', 32, '2017-03-14 23:24:38'),
(9, 1, 'dff', 32, '2017-03-14 23:25:21'),
(10, 1, 'dff', 32, '2017-03-14 23:25:41'),
(11, 1, 'hfsfhhahaahhd', 32, '2017-03-14 23:26:32'),
(12, 1, 'JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA.', 3434, '2017-03-14 23:36:33'),
(13, 1, 'helo worldf', 222, '2017-03-15 00:21:42'),
(14, 1, 'hello world!!', 343.34, '2017-03-15 00:25:06'),
(15, 1, 'kjlljk', 3434, '2017-03-15 00:34:42'),
(16, 1, 'dfd', 343, '2017-03-15 01:17:54'),
(17, 2, 'dh thids fdd ifd fdf', 34, '2017-03-15 01:36:50'),
(18, 2, 'ddfdfljdvvcvljk', 34, '2017-03-15 01:37:10'),
(19, 2, 'ddf', 3, '2017-03-15 01:41:12'),
(20, 4, 'dfdfd', 343.23, '2017-03-15 01:42:43'),
(21, 4, 'dfdfdf', 34.29, '2017-03-15 01:49:54'),
(22, 3, 'from Feynman 222', 23.34, '2017-03-15 01:53:31'),
(23, 3, 'hah this si s a', 2.23, '2017-03-15 02:26:26'),
(24, 3, 'vvdfdfdfdfdf  dfdf', 3443.34, '2017-03-15 02:27:42'),
(25, 3, 'dddffd', 34.34, '2017-03-15 02:29:14'),
(26, 3, 'fddffd', 34.343, '2017-03-15 02:30:10'),
(27, 3, 'dfdfdf', 34.4, '2017-03-15 02:32:11'),
(28, 3, 'dfdffdl ff dl', 3.4, '2017-03-15 02:33:23'),
(29, 2, 'dfdfdf', 89.23, '2017-03-15 02:39:18'),
(30, 4, 'hafdf df df fd fdf', 323.34, '2017-03-15 04:11:13'),
(31, 4, 'dfdffd', 34, '2017-03-15 04:28:09'),
(32, 4, 'ddf', 23, '2017-03-15 04:28:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `gi_expense`
--
ALTER TABLE `gi_expense`
  ADD PRIMARY KEY (`id`),
  ADD KEY `uid` (`uid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `gi_expense`
--
ALTER TABLE `gi_expense`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
