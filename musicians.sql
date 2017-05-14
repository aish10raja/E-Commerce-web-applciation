-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 01, 2017 at 03:24 AM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `musicians`
--

-- --------------------------------------------------------

--
-- Table structure for table `musician`
--

CREATE TABLE `musician` (
  `MusicianID` int(10) NOT NULL,
  `name` varchar(20) NOT NULL,
  `genre` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='info about Musician';

--
-- Dumping data for table `musician`
--

INSERT INTO `musician` (`MusicianID`, `name`, `genre`) VALUES
(1001, 'beyonce', 'pop'),
(1002, 'bobmarley', 'reggae'),
(1003, 'eminem', 'rap'),
(1004, 'Muddy Waters', 'Blues'),
(1005, 'Charlie Parker', 'Jazz'),
(1006, 'Kayne West', 'Hip hop'),
(1007, 'Steven Tyler', 'Rock');

-- --------------------------------------------------------

--
-- Table structure for table `performance`
--

CREATE TABLE `performance` (
  `MonthYear` date NOT NULL,
  `MusicianID` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `performance`
--

INSERT INTO `performance` (`MonthYear`, `MusicianID`) VALUES
('2016-01-13', 1001),
('2016-05-20', 1002),
('2016-09-09', 1003),
('2016-09-16', 1002),
('2016-01-28', 1001),
('2016-01-23', 1002),
('2016-12-17', 1004),
('2016-12-24', 1005),
('2016-10-22', 1006),
('2016-10-08', 1002),
('2016-03-05', 1007),
('2016-03-12', 1006),
('2016-03-19', 1003),
('2016-03-26', 1004),
('2016-05-10', 1007),
('2016-05-29', 1006);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `musician`
--
ALTER TABLE `musician`
  ADD PRIMARY KEY (`MusicianID`);

--
-- Indexes for table `performance`
--
ALTER TABLE `performance`
  ADD KEY `MusicianID` (`MusicianID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `musician`
--
ALTER TABLE `musician`
  MODIFY `MusicianID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1008;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `performance`
--
ALTER TABLE `performance`
  ADD CONSTRAINT `performance_ibfk_1` FOREIGN KEY (`MusicianID`) REFERENCES `musician` (`MusicianID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
