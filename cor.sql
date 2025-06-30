-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 30, 2025 at 05:51 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cor`
--

-- --------------------------------------------------------

--
-- Table structure for table `certificate_of_registration`
--

CREATE TABLE `certificate_of_registration` (
  `id` int(11) NOT NULL,
  `registration_no` varchar(50) NOT NULL,
  `academic_year_term` varchar(50) DEFAULT NULL,
  `student_no` varchar(50) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `age` varchar(5) DEFAULT NULL,
  `email_address` varchar(100) DEFAULT NULL,
  `college` varchar(100) DEFAULT NULL,
  `program` varchar(100) DEFAULT NULL,
  `major` varchar(100) DEFAULT NULL,
  `year_level` varchar(20) DEFAULT NULL,
  `curriculum` varchar(100) DEFAULT NULL,
  `scholarship_discount` varchar(100) DEFAULT NULL,
  `subject_code` varchar(20) DEFAULT NULL,
  `subject_title` varchar(100) DEFAULT NULL,
  `lec_units` varchar(5) DEFAULT NULL,
  `lab_units` varchar(5) DEFAULT NULL,
  `credit_units` varchar(5) DEFAULT NULL,
  `tuition_units` varchar(5) DEFAULT NULL,
  `subject_section` varchar(20) DEFAULT NULL,
  `subject_schedule_room` varchar(100) DEFAULT NULL,
  `subject_faculty` varchar(100) DEFAULT NULL,
  `total_lec_units` varchar(5) DEFAULT NULL,
  `total_lab_units` varchar(5) DEFAULT NULL,
  `total_credit_units` varchar(5) DEFAULT NULL,
  `total_tuition` varchar(5) DEFAULT NULL,
  `tuition` decimal(10,2) DEFAULT NULL,
  `athletic_fee` decimal(10,2) DEFAULT NULL,
  `cultural_fee` decimal(10,2) DEFAULT NULL,
  `development_fee` decimal(10,2) DEFAULT NULL,
  `guidance_fee` decimal(10,2) DEFAULT NULL,
  `library_fee` decimal(10,2) DEFAULT NULL,
  `medical_dental_fee` decimal(10,2) DEFAULT NULL,
  `registration_fee` decimal(10,2) DEFAULT NULL,
  `computer_fee` decimal(10,2) DEFAULT NULL,
  `laboratory_fee` decimal(10,2) DEFAULT NULL,
  `total_assessment` decimal(10,2) DEFAULT NULL,
  `less_financial_aid` decimal(10,2) DEFAULT NULL,
  `net_assessed` decimal(10,2) DEFAULT NULL,
  `credit_memo` decimal(10,2) DEFAULT NULL,
  `total_discount` decimal(10,2) DEFAULT NULL,
  `total_payment` decimal(10,2) DEFAULT NULL,
  `outstanding_balance` decimal(10,2) DEFAULT NULL,
  `first_payment_due` date DEFAULT NULL,
  `second_payment_due` date DEFAULT NULL,
  `third_payment_due` date DEFAULT NULL,
  `payment_validation_date` date DEFAULT NULL,
  `official_receipt` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `certificate_of_registration`
--

INSERT INTO `certificate_of_registration` (`id`, `registration_no`, `academic_year_term`, `student_no`, `name`, `gender`, `age`, `email_address`, `college`, `program`, `major`, `year_level`, `curriculum`, `scholarship_discount`, `subject_code`, `subject_title`, `lec_units`, `lab_units`, `credit_units`, `tuition_units`, `subject_section`, `subject_schedule_room`, `subject_faculty`, `total_lec_units`, `total_lab_units`, `total_credit_units`, `total_tuition`, `tuition`, `athletic_fee`, `cultural_fee`, `development_fee`, `guidance_fee`, `library_fee`, `medical_dental_fee`, `registration_fee`, `computer_fee`, `laboratory_fee`, `total_assessment`, `less_financial_aid`, `net_assessed`, `credit_memo`, `total_discount`, `total_payment`, `outstanding_balance`, `first_payment_due`, `second_payment_due`, `third_payment_due`, `payment_validation_date`, `official_receipt`) VALUES
(1, '2147483647', 'Second Semester AY 2024-2025', '234-01935M', 'BUQUE, CHARLES DELACRUZ', 'Male', '20', 'buque.c.bsinfotech@gmail.com', 'College of Computing Studies', 'Bachelor of Science in Information Technology', NULL, 'Second Year-Regular', '2018-2019', 'UNIFAST-FHE', 'DBMSLAB2', 'Database Management System 2 (Laboratory)', '0', '1', '1', '1', 'BSINFOTECH H2C', 'TH 06:00PM-09:00PM', 'Carlos, Emanie', '14', '5', '20', '20', 2000.00, 50.00, 50.00, 80.00, 30.00, 100.00, 130.00, 50.00, 500.00, NULL, 2990.00, 2990.00, 0.00, 0.00, 0.00, 0.00, 0.00, '0000-00-00', '0000-00-00', '0000-00-00', '2025-02-25', 'Scholar'),
(2, '2147483647', 'Second Semester AY 2024-2025', '234-01935M', 'BUQUE, CHARLES DELACRUZ', 'Male', '20', 'buque.c.bsinfotech@gmail.com', 'College of Computing Studies', 'Bachelor of Science in Information Technology', NULL, 'Second Year-Regular', '2018-2019', 'UNIFAST-FHE', 'DBMSLEC2', 'Database Management System 2 (Lecture)', '2', '0', '2', '2', 'BSINFOTECH H2C', 'T 06:00PM-08:00PM', 'Carlos, Emanie', '14', '5', '20', '20', 2000.00, 50.00, 50.00, 80.00, 30.00, 100.00, 130.00, 50.00, 500.00, NULL, 2990.00, 2990.00, 0.00, 0.00, 0.00, 0.00, 0.00, '0000-00-00', '0000-00-00', '0000-00-00', '2025-02-25', 'Scholar'),
(3, '2147483647', 'Second Semester AY 2024-2025', '234-01935M', 'BUQUE, CHARLES DELACRUZ', 'Male', '20', 'buque.c.bsinfotech@gmail.com', 'College of Computing Studies', 'Bachelor of Science in Information Technology', NULL, 'Second Year-Regular', '2018-2019', 'UNIFAST-FHE', 'GEELECCP', 'Communicative Proficiency in Business Correspondence and Research Writing', '3', '0', '3', '3', 'BSINFOTECH H2C', 'TH 08:00AM-11:00AM', 'Partido, Ranilo', '14', '5', '20', '20', 2000.00, 50.00, 50.00, 80.00, 30.00, 100.00, 130.00, 50.00, 500.00, NULL, 2990.00, 2990.00, 0.00, 0.00, 0.00, 0.00, 0.00, '0000-00-00', '0000-00-00', '0000-00-00', '2025-02-25', 'Scholar'),
(4, '2147483647', 'Second Semester AY 2024-2025', '234-01935M', 'BUQUE, CHARLES DELACRUZ', 'Male', '20', 'buque.c.bsinfotech@gmail.com', 'College of Computing Studies', 'Bachelor of Science in Information Technology', NULL, 'Second Year-Regular', '2018-2019', 'UNIFAST-FHE', 'GEPEHEF2', 'Physical Activity Towards Health and Fitness II', '2', '0', '2', '2', 'BSINFOTECH H2C', 'W 07:00AM-09:00AM', 'Barizo Jr., Crisanto', '14', '5', '20', '20', 2000.00, 50.00, 50.00, 80.00, 30.00, 100.00, 130.00, 50.00, 500.00, NULL, 2990.00, 2990.00, 0.00, 0.00, 0.00, 0.00, 0.00, '0000-00-00', '0000-00-00', '0000-00-00', '2025-02-25', 'Scholar'),
(5, '2147483647', 'Second Semester AY 2024-2025', '234-01935M', 'BUQUE, CHARLES DELACRUZ', 'Male', '20', 'buque.c.bsinfotech@gmail.com', 'College of Computing Studies', 'Bachelor of Science in Information Technology', NULL, 'Second Year-Regular', '2018-2019', 'UNIFAST-FHE', 'INTHCILB', 'Introduction to Human Computer Interaction (Laboratory)', '0', '1', '1', '1', 'BSINFOTECH H2C', 'W 10:00AM-01:00PM', 'Macasil, Ma. Jasmine Rose', '14', '5', '20', '20', 2000.00, 50.00, 50.00, 80.00, 30.00, 100.00, 130.00, 50.00, 500.00, NULL, 2990.00, 2990.00, 0.00, 0.00, 0.00, 0.00, 0.00, '0000-00-00', '0000-00-00', '0000-00-00', '2025-02-25', 'Scholar'),
(6, '2147483647', 'Second Semester AY 2024-2025', '234-01935M', 'BUQUE, CHARLES DELACRUZ', 'Male', '20', 'buque.c.bsinfotech@gmail.com', 'College of Computing Studies', 'Bachelor of Science in Information Technology', NULL, 'Second Year-Regular', '2018-2019', 'UNIFAST-FHE', 'INTHCILC', 'Introduction to Human Computer Interaction (Lecture)', '2', '0', '2', '2', 'BSINFOTECH H2C', 'T 01:00PM-03:00PM', 'Macasil, Ma. Jasmine Rose', '14', '5', '20', '20', 2000.00, 50.00, 50.00, 80.00, 30.00, 100.00, 130.00, 50.00, 500.00, NULL, 2990.00, 2990.00, 0.00, 0.00, 0.00, 0.00, 0.00, '0000-00-00', '0000-00-00', '0000-00-00', '2025-02-25', 'Scholar'),
(7, '2147483647', 'Second Semester AY 2024-2025', '234-01935M', 'BUQUE, CHARLES DELACRUZ', 'Male', '20', 'buque.c.bsinfotech@gmail.com', 'College of Computing Studies', 'Bachelor of Science in Information Technology', NULL, 'Second Year-Regular', '2018-2019', 'UNIFAST-FHE', 'IPATLAB1', 'Integrative Programming and Technologies 1 (Laboratory)', '0', '2', '2', '2', 'BSINFOTECH H2C', 'TH 11:00AM-02:00PM', 'San Jose, Dhani', '14', '5', '20', '20', 2000.00, 50.00, 50.00, 80.00, 30.00, 100.00, 130.00, 50.00, 500.00, NULL, 2990.00, 2990.00, 0.00, 0.00, 0.00, 0.00, 0.00, '0000-00-00', '0000-00-00', '0000-00-00', '2025-02-25', 'Scholar'),
(8, '2147483647', 'Second Semester AY 2024-2025', '234-01935M', 'BUQUE, CHARLES DELACRUZ', 'Male', '20', 'buque.c.bsinfotech@gmail.com', 'College of Computing Studies', 'Bachelor of Science in Information Technology', NULL, 'Second Year-Regular', '2018-2019', 'UNIFAST-FHE', 'IPATLEC1', 'Integrative Programming and Technologies 1 (Lecture)', '2', '0', '2', '2', 'BSINFOTECH H2C', 'T 08:00AM-10:00AM', 'San Jose, Dhani', '14', '5', '20', '20', 2000.00, 50.00, 50.00, 80.00, 30.00, 100.00, 130.00, 50.00, 500.00, NULL, 2990.00, 2990.00, 0.00, 0.00, 0.00, 0.00, 0.00, '0000-00-00', '0000-00-00', '0000-00-00', '2025-02-25', 'Scholar'),
(9, '2147483647', 'Second Semester AY 2024-2025', '234-01935M', 'BUQUE, CHARLES DELACRUZ', 'Male', '20', 'buque.c.bsinfotech@gmail.com', 'College of Computing Studies', 'Bachelor of Science in Information Technology', NULL, 'Second Year-Regular', '2018-2019', 'UNIFAST-FHE', 'NETWKL1', 'Networking 1 (Laboratory)', '0', '1', '1', '1', 'BSINFOTECH H2C', 'T 03:00PM-06:00PM', 'Almazan, Edmund', '14', '5', '20', '20', 2000.00, 50.00, 50.00, 80.00, 30.00, 100.00, 130.00, 50.00, 500.00, NULL, 2990.00, 2990.00, 0.00, 0.00, 0.00, 0.00, 0.00, '0000-00-00', '0000-00-00', '0000-00-00', '2025-02-25', 'Scholar'),
(10, '2147483647', 'Second Semester AY 2024-2025', '234-01935M', 'BUQUE, CHARLES DELACRUZ', 'Male', '20', 'buque.c.bsinfotech@gmail.com', 'College of Computing Studies', 'Bachelor of Science in Information Technology', NULL, 'Second Year-Regular', '2018-2019', 'UNIFAST-FHE', 'NETWKC1', 'Networking 1 (Lecture)', '2', '0', '2', '2', 'BSINFOTECH H2C', 'T 03:00PM-05:00PM', 'Almazan, Edmund', '14', '5', '20', '20', 2000.00, 50.00, 50.00, 80.00, 30.00, 100.00, 130.00, 50.00, 500.00, NULL, 2990.00, 2990.00, 0.00, 0.00, 0.00, 0.00, 0.00, '0000-00-00', '0000-00-00', '0000-00-00', '2025-02-25', 'Scholar'),
(11, '2147483647', 'Second Semester AY 2024-2025', '234-01935M', 'BUQUE, CHARLES DELACRUZ', 'Male', '20', 'buque.c.bsinfotech@gmail.com', 'College of Computing Studies', 'Bachelor of Science in Information Technology', NULL, 'Second Year-Regular', '2018-2019', 'UNIFAST-FHE', 'WEBDVLB2', 'Web Development 2 (Laboratory)', '0', '1', '1', '1', 'BSINFOTECH H2C', 'W 01:00PM-04:00PM', 'Sison, Edgardo', '14', '5', '20', '20', 2000.00, 50.00, 50.00, 80.00, 30.00, 100.00, 130.00, 50.00, 500.00, NULL, 2990.00, 2990.00, 0.00, 0.00, 0.00, 0.00, 0.00, '0000-00-00', '0000-00-00', '0000-00-00', '2025-02-25', 'Scholar'),
(12, '2147483647', 'Second Semester AY 2024-2025', '234-01935M', 'BUQUE, CHARLES DELACRUZ', 'Male', '20', 'buque.c.bsinfotech@gmail.com', 'College of Computing Studies', 'Bachelor of Science in Information Technology', NULL, 'Second Year-Regular', '2018-2019', 'UNIFAST-FHE', 'WEBDVLC2', 'Web Development 2 (Lecture)', '2', '0', '2', '2', 'BSINFOTECH H2C', 'T 11:00AM-01:00PM', 'Sison, Edgardo', '14', '5', '20', '20', 2000.00, 50.00, 50.00, 80.00, 30.00, 100.00, 130.00, 50.00, 500.00, NULL, 2990.00, 2990.00, 0.00, 0.00, 0.00, 0.00, 0.00, '0000-00-00', '0000-00-00', '0000-00-00', '2025-02-25', 'Scholar');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `certificate_of_registration`
--
ALTER TABLE `certificate_of_registration`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `certificate_of_registration`
--
ALTER TABLE `certificate_of_registration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
