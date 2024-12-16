-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 02, 2024 at 11:13 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_atk_bi`
--

-- --------------------------------------------------------

--
-- Table structure for table `departemen`
--

CREATE TABLE `departemen` (
  `id` int(11) NOT NULL,
  `kode` varchar(255) DEFAULT NULL,
  `nama_departemen` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `is_active` varchar(255) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `departemen`
--

INSERT INTO `departemen` (`id`, `kode`, `nama_departemen`, `description`, `userId`, `created_at`, `updated_at`, `deleted_at`, `is_active`, `created_by`, `updated_by`, `deleted_by`) VALUES
(1, 'IT', 'IT DEPARTMENT', '', NULL, '2024-07-01 09:35:15', NULL, '2024-07-01 09:36:32', '1', 1, NULL, 1),
(2, 'FIN', 'FINANCE', '', NULL, '2024-07-02 01:37:55', '2024-07-02 04:23:42', '2024-07-02 04:21:40', '1', 1, 1, 1),
(3, 'TAX', 'TAX DEPARTMENT', '', NULL, '2024-07-02 04:22:28', NULL, NULL, '1', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `jenisbarang`
--

CREATE TABLE `jenisbarang` (
  `id` int(11) NOT NULL,
  `kode` varchar(255) DEFAULT NULL,
  `nama_barang` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `is_active` varchar(255) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `jenisbarang`
--

INSERT INTO `jenisbarang` (`id`, `kode`, `nama_barang`, `description`, `userId`, `created_at`, `updated_at`, `deleted_at`, `is_active`, `created_by`, `updated_by`, `deleted_by`) VALUES
(1, 'IT', 'MONITOR', 'Lokasi Kim5', NULL, NULL, '2024-07-01 09:35:48', NULL, '0', NULL, 1, NULL),
(2, 'FIN', 'MOUSE', '', NULL, '2024-07-01 08:16:30', '2024-07-02 04:22:09', NULL, '1', 1, 1, NULL),
(3, 'SER', 'SERVER', 'Lokasi Kim5', NULL, '2024-07-01 08:17:18', '2024-07-01 09:17:22', NULL, '1', 2, 1, NULL),
(10, 'MOR', 'MONITOR', 'Lokasi Kim5', NULL, '2024-07-01 08:58:29', '2024-07-01 09:19:28', NULL, '1', 1, 1, NULL),
(11, 'MEJ', 'MEJA', '', NULL, '2024-07-02 01:32:26', NULL, NULL, '1', 3, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `lokasi`
--

CREATE TABLE `lokasi` (
  `id` int(11) NOT NULL,
  `kode` varchar(255) DEFAULT NULL,
  `nama_lokasi` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `is_active` varchar(255) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `lokasi`
--

INSERT INTO `lokasi` (`id`, `kode`, `nama_lokasi`, `description`, `userId`, `created_at`, `updated_at`, `deleted_at`, `is_active`, `created_by`, `updated_by`, `deleted_by`) VALUES
(1, 'KIM', 'KIM 5', '', NULL, '2024-07-01 09:43:07', '2024-07-01 09:43:47', '2024-07-01 09:43:50', '0', 1, 1, 1),
(2, 'BEL', 'BELAWAN', '', NULL, '2024-07-02 02:57:36', NULL, NULL, '1', 1, NULL, NULL),
(3, 'KIM 1', 'KIM 1', '', NULL, '2024-07-02 04:19:41', NULL, NULL, '1', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `satuan`
--

CREATE TABLE `satuan` (
  `id` int(11) NOT NULL,
  `kode` varchar(255) DEFAULT NULL,
  `nama_satuan` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `is_active` varchar(255) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `satuan`
--

INSERT INTO `satuan` (`id`, `kode`, `nama_satuan`, `description`, `userId`, `created_at`, `updated_at`, `deleted_at`, `is_active`, `created_by`, `updated_by`, `deleted_by`) VALUES
(1, 'pc', 'pieces', '', NULL, '2024-07-01 09:50:44', '2024-07-01 09:50:50', '2024-07-01 09:50:54', '0', 1, 1, 1),
(2, 'PC', 'PIECES', '', NULL, '2024-07-02 02:57:44', NULL, NULL, '1', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `stokbarangs`
--

CREATE TABLE `stokbarangs` (
  `id` int(11) NOT NULL,
  `jenisbarangId` varchar(255) NOT NULL,
  `stok_awal` int(11) DEFAULT NULL,
  `stok_keluar` int(11) DEFAULT NULL,
  `stok_akhir` int(11) DEFAULT NULL,
  `satuan` varchar(255) DEFAULT NULL,
  `userId` varchar(20) DEFAULT NULL,
  `departemenId` varchar(255) DEFAULT NULL,
  `lokasiId` varchar(255) DEFAULT NULL,
  `keterangan` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `is_active` varchar(255) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `stokbarangs`
--

INSERT INTO `stokbarangs` (`id`, `jenisbarangId`, `stok_awal`, `stok_keluar`, `stok_akhir`, `satuan`, `userId`, `departemenId`, `lokasiId`, `keterangan`, `status`, `created_at`, `updated_at`, `deleted_at`, `is_active`, `created_by`, `updated_by`, `deleted_by`) VALUES
(7, 'MOUSE', 8, 0, 8, 'PC', NULL, NULL, NULL, 'Stok IT', NULL, '2024-07-02 03:48:31', NULL, NULL, '1', 1, NULL, NULL),
(8, 'MEJA', 7, 0, 7, 'PC', NULL, NULL, NULL, 'Stok G.A', NULL, '2024-07-02 03:48:42', NULL, NULL, '1', 1, NULL, NULL),
(9, 'MOUSE', 0, 0, 0, 'PC', NULL, NULL, NULL, 'Stok IT', NULL, '2024-07-02 03:48:47', NULL, NULL, '0', 1, NULL, NULL),
(10, 'MOUSE', 5, 0, 13, 'PC', NULL, NULL, NULL, 'Stok IT', NULL, '2024-07-02 04:11:02', NULL, NULL, '1', 1, NULL, NULL),
(14, 'MOUSE', 0, -2, 11, 'PC', NULL, 'IT DEPARTMENT', 'BELAWAN', '', NULL, '2024-07-02 04:59:34', NULL, NULL, '1', 1, NULL, NULL),
(16, 'MOUSE', 0, -4, 7, 'PC', NULL, 'FINANCE', 'BELAWAN', '', NULL, '2024-07-02 05:04:59', NULL, NULL, '1', 1, NULL, NULL),
(28, 'MEJA', 0, -2, 5, 'PC', NULL, 'FINANCE', 'BELAWAN', '', NULL, '2024-07-02 07:46:55', NULL, NULL, '1', 1, NULL, NULL),
(29, 'SERVER', 4, 0, 4, 'PC', NULL, NULL, NULL, '', NULL, '2024-07-02 08:01:59', NULL, NULL, '1', 1, NULL, NULL),
(30, 'SERVER', 0, -1, 3, 'PC', NULL, 'IT DEPARTMENT', 'BELAWAN', '', NULL, '2024-07-02 08:02:12', NULL, NULL, '1', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `roles` varchar(255) DEFAULT NULL,
  `is_active` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `roles`, `is_active`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', '$2y$10$VlIvVAEEVTtFzZwRuJKOHu5mAnp43TxFANiYm/lJ9CHGuTjZ.Qwoa', '0', '1', '2024-07-01 07:31:33', '2024-07-01 07:31:33'),
(2, 'user', '$2a$08$rPhzy9a97g5QJY7iATIGWu3hvTpB05ENUxxcruxqBJSgoakFpVJCi', '1', '1', '2024-07-01 07:33:13', '2024-07-01 07:33:13'),
(3, 'asri', '$2a$08$2tVLzZHlLDyY.3YO7Pb15OdHd6mjbdUPqrjE2hRoiCKVpauQgDkVu', '1', '0', '2024-07-02 01:31:53', '2024-07-02 08:12:18'),
(4, 'view', '$2a$08$i5eGkCKnhNgzDbz33Yyjrew0i1RgN766oUZvy2Z/sMe4vDnbcS83y', '2', '1', '2024-07-02 08:11:48', '2024-07-02 08:11:48');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `departemen`
--
ALTER TABLE `departemen`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jenisbarang`
--
ALTER TABLE `jenisbarang`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lokasi`
--
ALTER TABLE `lokasi`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `satuan`
--
ALTER TABLE `satuan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stokbarangs`
--
ALTER TABLE `stokbarangs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `departemen`
--
ALTER TABLE `departemen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `jenisbarang`
--
ALTER TABLE `jenisbarang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `lokasi`
--
ALTER TABLE `lokasi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `satuan`
--
ALTER TABLE `satuan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `stokbarangs`
--
ALTER TABLE `stokbarangs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
