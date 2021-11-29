-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2021 at 10:56 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookingmachinetable`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookingvalue`
--

CREATE TABLE `bookingvalue` (
  `id` int(11) NOT NULL,
  `equipment` varchar(255) DEFAULT NULL,
  `times` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bookingvalue`
--

INSERT INTO `bookingvalue` (`id`, `equipment`, `times`, `date`) VALUES
(64, 'Equipment 1', '09:30', '2021-11-29'),
(65, 'Equipment 7', '16:30', '2021-11-29'),
(66, 'Equipment 7', '16:30', '2021-11-29'),
(67, 'Equipment 4', '12:00', '2021-11-30'),
(68, 'Equipment 7', '12:30', '2021-12-10'),
(69, 'Equipment 1', '09:30', '2021-11-29'),
(70, 'Equipment 2', '09:30', '2021-11-29'),
(71, 'Equipment 5', '11:00', '2021-12-03'),
(72, 'Equipment 1', '09:30', '2021-11-29'),
(73, 'Equipment 5', '14:00', '2021-11-29'),
(74, 'Equipment 6', '11:00', '2021-12-03'),
(75, 'Equipment 3', '11:00', '2021-12-01'),
(76, 'Equipment 1', '09:30', '2021-11-29'),
(77, 'Equipment 7', '14:00', '2021-11-29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookingvalue`
--
ALTER TABLE `bookingvalue`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookingvalue`
--
ALTER TABLE `bookingvalue`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
