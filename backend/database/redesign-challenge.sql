-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 06, 2025 at 03:19 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` datetime(3) DEFAULT NULL,
  `updated_at` datetime(3) DEFAULT NULL,
  `deleted_at` datetime(3) DEFAULT NULL,
  `username` varchar(191) NOT NULL,
  `password` longtext NOT NULL,
  `token` longtext DEFAULT NULL,
  `token_exp` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `admins` (`id`, `created_at`, `updated_at`, `deleted_at`, `username`, `password`, `token`, `token_exp`) VALUES
(1, '2025-08-06 05:21:08.651', '2025-08-06 08:09:57.569', NULL, 'admin', '$2a$10$/w6gtsLzvvy249Eg0pzVwu0UHtH7net1wuLw1c4V1xWsPbuUkO6Rq', '', '2025-08-06 08:09:57.568'),
(3, '2025-08-06 08:08:56.206', '2025-08-06 08:08:56.206', NULL, 'admin2', '$2a$10$Ap2qzQ5Mr68yM1gkQD9qW.Krg1uQJU13dc3YxGMoEaEOL2EoD6gX2', '', '0000-00-00 00:00:00.000');

CREATE TABLE `berita` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` datetime(3) DEFAULT NULL,
  `updated_at` datetime(3) DEFAULT NULL,
  `deleted_at` datetime(3) DEFAULT NULL,
  `judul` longtext NOT NULL,
  `cover` longtext NOT NULL,
  `is_priority` tinyint(1) DEFAULT NULL,
  `posted_at` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `berita` (`id`, `created_at`, `updated_at`, `deleted_at`, `judul`, `cover`, `is_priority`, `posted_at`) VALUES
(1, '2025-08-06 06:29:10.602', '2025-08-06 07:03:17.156', NULL, 'Pelatihan Sertifikasi', './assets/covers/1754438597154924200.png', 0, '2025-08-06 12:00:00.000'),
(2, '2025-08-06 06:33:30.680', '2025-08-06 06:33:30.680', NULL, 'PKKMB Maba 2025', 'assets\\covers\\1754436810679323700.jpeg', 0, '2025-08-06 06:50:18.000'),
(3, '2025-08-06 06:33:50.185', '2025-08-06 06:33:50.185', NULL, 'PKKMB Maba 2025', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-06 06:50:21.000'),
(4, NULL, NULL, NULL, 'Berita Dummy 1', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-05 23:16:11.000'),
(5, NULL, NULL, NULL, 'Berita Dummy 2', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-05 22:16:11.000'),
(6, NULL, NULL, NULL, 'Berita Dummy 3', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-05 21:16:11.000'),
(7, NULL, NULL, NULL, 'Berita Dummy 4', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-05 20:16:11.000'),
(8, NULL, NULL, NULL, 'Berita Dummy 5', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-05 19:16:11.000'),
(9, NULL, NULL, NULL, 'Berita Dummy 6', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-05 18:16:11.000'),
(10, NULL, NULL, NULL, 'Berita Dummy 7', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-05 17:16:11.000'),
(11, NULL, NULL, NULL, 'Berita Dummy 8', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-05 16:16:11.000'),
(12, NULL, NULL, NULL, 'Berita Dummy 9', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-05 15:16:11.000'),
(13, NULL, NULL, NULL, 'Berita Dummy 10', './assets/covers/1754436830183529000.jpeg', 1, '2025-08-05 14:16:11.000'),
(14, NULL, NULL, NULL, 'Berita Dummy 11', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-05 13:16:11.000'),
(15, NULL, NULL, NULL, 'Berita Dummy 12', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-05 12:16:11.000'),
(16, NULL, NULL, NULL, 'Berita Dummy 13', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-05 11:16:11.000'),
(17, NULL, NULL, NULL, 'Berita Dummy 14', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-05 10:16:11.000'),
(18, NULL, NULL, NULL, 'Berita Dummy 15', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-05 09:16:11.000'),
(19, NULL, NULL, NULL, 'Berita Dummy 16', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-05 08:16:11.000'),
(20, NULL, NULL, NULL, 'Berita Dummy 17', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-05 07:16:11.000'),
(21, NULL, NULL, NULL, 'Berita Dummy 18', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-05 06:16:11.000'),
(22, NULL, NULL, NULL, 'Berita Dummy 19', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-05 05:16:11.000'),
(23, NULL, NULL, NULL, 'Berita Dummy 20', './assets/covers/1754436830183529000.jpeg', 1, '2025-08-05 04:16:11.000'),
(24, NULL, NULL, NULL, 'Berita Dummy 21', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-05 03:16:11.000'),
(25, NULL, NULL, NULL, 'Berita Dummy 22', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-05 02:16:11.000'),
(26, NULL, NULL, NULL, 'Berita Dummy 23', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-05 01:16:11.000'),
(27, NULL, NULL, NULL, 'Berita Dummy 24', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-05 00:16:11.000'),
(28, NULL, NULL, NULL, 'Berita Dummy 25', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-04 23:16:11.000'),
(29, NULL, NULL, NULL, 'Berita Dummy 26', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-04 22:16:11.000'),
(30, NULL, NULL, NULL, 'Berita Dummy 27', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-04 21:16:11.000'),
(31, NULL, NULL, NULL, 'Berita Dummy 28', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-04 20:16:11.000'),
(32, NULL, NULL, NULL, 'Berita Dummy 29', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-04 19:16:11.000'),
(33, NULL, NULL, NULL, 'Berita Dummy 30', './assets/covers/1754436830183529000.jpeg', 1, '2025-08-04 18:16:11.000'),
(34, NULL, NULL, NULL, 'Berita Dummy 31', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-04 17:16:11.000'),
(35, NULL, NULL, NULL, 'Berita Dummy 32', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-04 16:16:11.000'),
(36, NULL, NULL, NULL, 'Berita Dummy 33', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-04 15:16:11.000'),
(37, NULL, NULL, NULL, 'Berita Dummy 34', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-04 14:16:11.000'),
(38, NULL, NULL, NULL, 'Berita Dummy 35', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-04 13:16:11.000'),
(39, NULL, NULL, NULL, 'Berita Dummy 36', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-04 12:16:11.000'),
(40, NULL, NULL, NULL, 'Berita Dummy 37', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-04 11:16:11.000'),
(41, NULL, NULL, NULL, 'Berita Dummy 38', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-04 10:16:11.000'),
(42, NULL, NULL, NULL, 'Berita Dummy 39', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-04 09:16:11.000'),
(43, NULL, NULL, NULL, 'Berita Dummy 40', './assets/covers/1754436830183529000.jpeg', 1, '2025-08-04 08:16:11.000'),
(44, NULL, NULL, NULL, 'Berita Dummy 41', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-04 07:16:11.000'),
(45, NULL, NULL, NULL, 'Berita Dummy 42', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-04 06:16:11.000'),
(46, NULL, NULL, NULL, 'Berita Dummy 43', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-04 05:16:11.000'),
(47, NULL, NULL, NULL, 'Berita Dummy 44', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-04 04:16:11.000'),
(48, NULL, NULL, NULL, 'Berita Dummy 45', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-04 03:16:11.000'),
(49, NULL, NULL, NULL, 'Berita Dummy 46', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-04 02:16:11.000'),
(50, NULL, NULL, NULL, 'Berita Dummy 47', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-04 01:16:11.000'),
(51, NULL, NULL, NULL, 'Berita Dummy 48', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-04 00:16:11.000'),
(52, NULL, NULL, NULL, 'Berita Dummy 49', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-03 23:16:11.000'),
(53, NULL, NULL, NULL, 'Berita Dummy 50', './assets/covers/1754436830183529000.jpeg', 1, '2025-08-03 22:16:11.000'),
(54, NULL, NULL, NULL, 'Berita Dummy 51', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-03 21:16:11.000'),
(55, NULL, NULL, NULL, 'Berita Dummy 52', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-03 20:16:11.000'),
(56, NULL, NULL, NULL, 'Berita Dummy 53', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-03 19:16:11.000'),
(57, NULL, NULL, NULL, 'Berita Dummy 54', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-03 18:16:11.000'),
(58, NULL, NULL, NULL, 'Berita Dummy 55', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-03 17:16:11.000'),
(59, NULL, NULL, NULL, 'Berita Dummy 56', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-03 16:16:11.000'),
(60, NULL, NULL, NULL, 'Berita Dummy 57', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-03 15:16:11.000'),
(61, NULL, NULL, NULL, 'Berita Dummy 58', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-03 14:16:11.000'),
(62, NULL, NULL, NULL, 'Berita Dummy 59', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-03 13:16:11.000'),
(63, NULL, NULL, NULL, 'Berita Dummy 60', './assets/covers/1754436830183529000.jpeg', 1, '2025-08-03 12:16:11.000'),
(64, NULL, NULL, NULL, 'Berita Dummy 61', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-03 11:16:11.000'),
(65, NULL, NULL, NULL, 'Berita Dummy 62', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-03 10:16:11.000'),
(66, NULL, NULL, NULL, 'Berita Dummy 63', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-03 09:16:11.000'),
(67, NULL, NULL, NULL, 'Berita Dummy 64', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-03 08:16:11.000'),
(68, NULL, NULL, NULL, 'Berita Dummy 65', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-03 07:16:11.000'),
(69, NULL, NULL, NULL, 'Berita Dummy 66', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-03 06:16:11.000'),
(70, NULL, NULL, NULL, 'Berita Dummy 67', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-03 05:16:11.000'),
(71, NULL, NULL, NULL, 'Berita Dummy 68', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-03 04:16:11.000'),
(72, NULL, NULL, NULL, 'Berita Dummy 69', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-03 03:16:11.000'),
(73, NULL, NULL, NULL, 'Berita Dummy 70', './assets/covers/1754436830183529000.jpeg', 1, '2025-08-03 02:16:11.000'),
(74, NULL, NULL, NULL, 'Berita Dummy 71', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-03 01:16:11.000'),
(75, NULL, NULL, NULL, 'Berita Dummy 72', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-03 00:16:11.000'),
(76, NULL, NULL, NULL, 'Berita Dummy 73', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-02 23:16:11.000'),
(77, NULL, NULL, NULL, 'Berita Dummy 74', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-02 22:16:11.000'),
(78, NULL, NULL, NULL, 'Berita Dummy 75', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-02 21:16:11.000'),
(79, NULL, NULL, NULL, 'Berita Dummy 76', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-02 20:16:11.000'),
(80, NULL, NULL, NULL, 'Berita Dummy 77', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-02 19:16:11.000'),
(81, NULL, NULL, NULL, 'Berita Dummy 78', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-02 18:16:11.000'),
(82, NULL, NULL, NULL, 'Berita Dummy 79', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-02 17:16:11.000'),
(83, NULL, NULL, NULL, 'Berita Dummy 80', './assets/covers/1754436830183529000.jpeg', 1, '2025-08-02 16:16:11.000'),
(84, NULL, NULL, NULL, 'Berita Dummy 81', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-02 15:16:11.000'),
(85, NULL, NULL, NULL, 'Berita Dummy 82', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-02 14:16:11.000'),
(86, NULL, NULL, NULL, 'Berita Dummy 83', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-02 13:16:11.000'),
(87, NULL, NULL, NULL, 'Berita Dummy 84', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-02 12:16:11.000'),
(88, NULL, NULL, NULL, 'Berita Dummy 85', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-02 11:16:11.000'),
(89, NULL, NULL, NULL, 'Berita Dummy 86', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-02 10:16:11.000'),
(90, NULL, NULL, NULL, 'Berita Dummy 87', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-02 09:16:11.000'),
(91, NULL, NULL, NULL, 'Berita Dummy 88', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-02 08:16:11.000'),
(92, NULL, NULL, NULL, 'Berita Dummy 89', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-02 07:16:11.000'),
(93, NULL, NULL, NULL, 'Berita Dummy 90', './assets/covers/1754436830183529000.jpeg', 1, '2025-08-02 06:16:11.000'),
(94, NULL, NULL, NULL, 'Berita Dummy 91', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-02 05:16:11.000'),
(95, NULL, NULL, NULL, 'Berita Dummy 92', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-02 04:16:11.000'),
(96, NULL, NULL, NULL, 'Berita Dummy 93', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-02 03:16:11.000'),
(97, NULL, NULL, NULL, 'Berita Dummy 94', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-02 02:16:11.000'),
(98, NULL, NULL, NULL, 'Berita Dummy 95', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-02 01:16:11.000'),
(99, NULL, NULL, NULL, 'Berita Dummy 96', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-02 00:16:11.000'),
(100, NULL, NULL, NULL, 'Berita Dummy 97', './assets/covers/1754436830183529000.jpeg', 0, '2025-08-01 23:16:11.000'),
(10004, '2025-08-06 07:44:49.501', '2025-08-06 07:44:49.501', NULL, 'PKKMB Maba 2025', 'http://localhost:8080/assets/covers/1754441089499421400.jpeg', 1, '0000-00-00 00:00:00.000');

CREATE TABLE `files` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` datetime(3) DEFAULT NULL,
  `updated_at` datetime(3) DEFAULT NULL,
  `deleted_at` datetime(3) DEFAULT NULL,
  `file_name` longtext DEFAULT NULL,
  `file_path` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `files` (`id`, `created_at`, `updated_at`, `deleted_at`, `file_name`, `file_path`) VALUES
(1, '2025-08-06 08:03:38.581', '2025-08-06 08:03:38.581', NULL, 'foto saya', 'http://localhost:8080/assets/files/1754442218580151700.jpeg'),
(2, '2025-08-06 08:05:00.858', '2025-08-06 08:05:00.858', NULL, 'foto saya', 'http://localhost:8080/assets/files/1754442300857204900.jpeg'),
(3, '2025-08-06 08:05:28.482', '2025-08-06 08:05:28.482', NULL, 'foto saya', 'http://localhost:8080/assets/files/1754442328480918000.jpeg');

ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uni_admins_username` (`username`),
  ADD KEY `idx_admins_deleted_at` (`deleted_at`);

ALTER TABLE `berita`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_berita_deleted_at` (`deleted_at`);

ALTER TABLE `files`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_files_deleted_at` (`deleted_at`);

ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

ALTER TABLE `berita`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10005;

ALTER TABLE `files`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;