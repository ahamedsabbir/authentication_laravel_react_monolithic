-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 04, 2024 at 09:40 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel-react`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Electronics', 'Electronic devices and gadgets', NULL, NULL),
(2, 'Clothing', 'Apparel and accessories', NULL, NULL),
(3, 'Books', 'Books and literature', NULL, NULL),
(4, 'Home & Garden', 'Home decor and gardening supplies', NULL, NULL),
(5, 'Toys & Games', 'Children\'s toys and board games', NULL, NULL),
(6, 'Sports & Outdoors', 'Sporting goods and outdoor equipment', NULL, NULL),
(7, 'Beauty & Personal Care', 'Cosmetics and personal care items', NULL, NULL),
(8, 'Automotive', 'Car parts and accessories', NULL, NULL),
(9, 'Food & Beverage', 'Groceries and beverages', NULL, NULL),
(10, 'Health & Wellness', 'Health supplements and fitness equipment', NULL, NULL),
(11, 'Pet Supplies', 'Products for pets', NULL, NULL),
(12, 'Jewelry', 'Necklaces, rings, and other jewelry', NULL, NULL),
(13, 'Office Supplies', 'Stationery and office equipment', NULL, NULL),
(14, 'Music', 'Instruments and audio equipment', NULL, NULL),
(15, 'Art & Crafts', 'Art supplies and craft materials', NULL, NULL),
(16, 'Baby & Toddler', 'Products for infants and young children', NULL, NULL),
(17, 'Tools & Home Improvement', 'Hardware and renovation supplies', NULL, NULL),
(18, 'Furniture', 'Home and office furniture', NULL, NULL),
(19, 'Appliances', 'Kitchen and household appliances', NULL, NULL),
(20, 'Movies & TV', 'DVDs, Blu-rays, and streaming devices', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(5, '0001_01_01_000000_create_users_table', 1),
(6, '0001_01_01_000001_create_cache_table', 1),
(7, '0001_01_01_000002_create_jobs_table', 1),
(8, '2024_07_27_153350_create_personal_access_tokens_table', 1),
(9, '2024_08_03_163750_create_categories_table', 1),
(10, '2024_08_03_163754_create_products_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'main', '72a4bd717f81f7eab278d687bb4d3393c82a1b21a4b3b1513197708f23aabb29', '[\"*\"]', '2024-08-04 09:41:04', NULL, '2024-08-04 09:17:13', '2024-08-04 09:41:04'),
(2, 'App\\Models\\User', 1, 'main', 'ebfbb79a8fd85dd6e1bb076b03f913c8b98734fde650c151c5f25f7c55f9251a', '[\"*\"]', '2024-08-04 10:56:35', NULL, '2024-08-04 09:41:39', '2024-08-04 10:56:35'),
(3, 'App\\Models\\User', 1, 'main', '2260bb304809026e671de2cdc672974d48d2db73673006463c9762acf2a85da0', '[\"*\"]', '2024-08-04 11:10:22', NULL, '2024-08-04 10:57:04', '2024-08-04 11:10:22'),
(4, 'App\\Models\\User', 1, 'main', 'cd65e993489c83f523c4e9fe618133762e6ca26c53932016d38dd0e6dabab947', '[\"*\"]', '2024-08-04 11:14:21', NULL, '2024-08-04 11:14:19', '2024-08-04 11:14:21'),
(5, 'App\\Models\\User', 1, 'main', '14efeac65ef85b521cc9b535c71829b6082fa58febb98295867fab5ed1b8e1ee', '[\"*\"]', '2024-08-04 13:34:59', NULL, '2024-08-04 11:16:28', '2024-08-04 13:34:59'),
(6, 'App\\Models\\User', 1, 'main', '60b7593fe564ab968106b4f3cc75c735fe75a236ac171d503085cdc4f36aec71', '[\"*\"]', '2024-08-04 13:39:15', NULL, '2024-08-04 13:37:59', '2024-08-04 13:39:15');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` double NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `category_id`, `name`, `description`, `price`, `image`, `created_at`, `updated_at`) VALUES
(1, 1, 'Smartphone X', 'Latest model smartphone with advanced features', 699.99, 'smartphone_x.jpg', NULL, NULL),
(2, 2, 'Classic T-Shirt', 'Comfortable cotton t-shirt in various colors', 19.99, 'classic_tshirt.jpg', NULL, NULL),
(3, 3, 'Bestseller Novel', 'Top-selling fiction novel of the year', 24.99, 'bestseller_novel.jpg', NULL, NULL),
(4, 4, 'Indoor Plant Set', 'Set of 3 easy-care indoor plants', 39.99, 'indoor_plants.jpg', NULL, NULL),
(5, 5, 'Board Game Collection', 'Pack of 5 popular family board games', 59.99, 'board_games.jpg', NULL, NULL),
(6, 6, 'Yoga Mat', 'Non-slip yoga mat for home workouts', 29.99, 'yoga_mat.jpg', NULL, NULL),
(7, 7, 'Skincare Set', 'Complete skincare routine kit', 89.99, 'skincare_set.jpg', NULL, NULL),
(8, 8, 'Car Cleaning Kit', 'All-in-one car cleaning and detailing set', 49.99, 'car_cleaning_kit.jpg', NULL, NULL),
(9, 9, 'Gourmet Coffee Beans', 'Premium roasted coffee beans, 1lb bag', 14.99, 'coffee_beans.jpg', NULL, NULL),
(10, 10, 'Fitness Tracker', 'Smart fitness and health monitoring device', 79.99, 'fitness_tracker.jpg', NULL, NULL),
(11, 11, 'Pet Bed', 'Comfortable bed for cats or small dogs', 34.99, 'pet_bed.jpg', NULL, NULL),
(12, 12, 'Silver Necklace', 'Elegant sterling silver pendant necklace', 79.99, 'silver_necklace.jpg', NULL, NULL),
(13, 13, 'Wireless Mouse', 'Ergonomic wireless computer mouse', 29.99, 'wireless_mouse.jpg', NULL, NULL),
(14, 14, 'Acoustic Guitar', 'Beginner-friendly acoustic guitar', 149.99, 'acoustic_guitar.jpg', NULL, NULL),
(15, 15, 'Watercolor Paint Set', 'Professional grade watercolor paints, set of 24', 45.99, 'watercolor_set.jpg', NULL, NULL),
(16, 16, 'Baby Stroller', 'Lightweight and foldable baby stroller', 199.99, 'baby_stroller.jpg', NULL, NULL),
(17, 17, 'Power Drill', 'Cordless power drill with accessory kit', 89.99, 'power_drill.jpg', NULL, NULL),
(18, 18, 'Office Chair', 'Adjustable ergonomic office chair', 159.99, 'office_chair.jpg', NULL, NULL),
(19, 19, 'Microwave Oven', 'Compact countertop microwave oven', 69.99, 'microwave_oven.jpg', NULL, NULL),
(20, 20, '4K Smart TV', '55-inch 4K Ultra HD Smart LED TV', 499.99, '4k_smart_tv.jpg', NULL, NULL),
(21, 1, 'Wireless Earbuds', 'True wireless earbuds with noise cancellation', 129.99, 'wireless_earbuds.jpg', NULL, NULL),
(22, 2, 'Denim Jacket', 'Classic denim jacket for all seasons', 59.99, 'denim_jacket.jpg', NULL, NULL),
(23, 3, 'Cookbook Collection', 'Set of 3 bestselling cookbooks', 49.99, 'cookbook_collection.jpg', NULL, NULL),
(24, 4, 'Succulent Garden', 'Assorted succulent plants in decorative pots', 34.99, 'succulent_garden.jpg', NULL, NULL),
(25, 5, 'Remote Control Car', 'High-speed RC car for kids and adults', 39.99, 'rc_car.jpg', NULL, NULL),
(26, 6, 'Tennis Racket', 'Professional grade tennis racket', 89.99, 'tennis_racket.jpg', NULL, NULL),
(27, 7, 'Perfume Set', 'Luxury perfume gift set for women', 119.99, 'perfume_set.jpg', NULL, NULL),
(28, 8, 'Car Air Freshener', 'Long-lasting car air freshener pack', 9.99, 'car_air_freshener.jpg', NULL, NULL),
(29, 9, 'Organic Tea Sampler', 'Variety pack of organic loose leaf teas', 24.99, 'tea_sampler.jpg', NULL, NULL),
(30, 10, 'Resistance Bands', 'Set of 5 resistance bands for home workouts', 19.99, 'resistance_bands.jpg', NULL, NULL),
(31, 11, 'Cat Tree', 'Multi-level cat tree with scratching posts', 79.99, 'cat_tree.jpg', NULL, NULL),
(32, 12, 'Gold Earrings', '14K gold stud earrings', 99.99, 'gold_earrings.jpg', NULL, NULL),
(33, 13, 'Desk Organizer', 'Wooden desk organizer with multiple compartments', 29.99, 'desk_organizer.jpg', NULL, NULL),
(34, 14, 'Digital Piano', '88-key digital piano with weighted keys', 399.99, 'digital_piano.jpg', NULL, NULL),
(35, 15, 'Oil Paint Set', 'Professional oil paint set, 24 colors', 54.99, 'oil_paint_set.jpg', NULL, NULL),
(36, 16, 'Baby Monitor', 'Video baby monitor with night vision', 89.99, 'baby_monitor.jpg', NULL, NULL),
(37, 17, 'Pressure Washer', 'Electric pressure washer for outdoor cleaning', 149.99, 'pressure_washer.jpg', NULL, NULL),
(38, 18, 'Dining Table Set', '5-piece wooden dining table and chairs set', 299.99, 'dining_table_set.jpg', NULL, NULL),
(39, 19, 'Air Fryer', 'Digital air fryer for healthy cooking', 79.99, 'air_fryer.jpg', NULL, NULL),
(40, 20, 'Blu-ray Player', '4K Ultra HD Blu-ray player', 129.99, 'bluray_player.jpg', NULL, NULL),
(41, 1, 'Laptop', 'Lightweight laptop for work and study', 799.99, 'laptop.jpg', NULL, NULL),
(42, 2, 'Winter Coat', 'Warm and stylish winter coat', 89.99, 'winter_coat.jpg', NULL, NULL),
(43, 3, 'E-reader', 'E-reader with backlight and weeks-long battery life', 129.99, 'e_reader.jpg', NULL, NULL),
(44, 4, 'Garden Tool Set', 'Complete set of gardening tools', 49.99, 'garden_tool_set.jpg', NULL, NULL),
(45, 5, 'Building Blocks Set', 'Educational building blocks for children', 29.99, 'building_blocks.jpg', NULL, NULL),
(46, 6, 'Camping Tent', '4-person waterproof camping tent', 119.99, 'camping_tent.jpg', NULL, NULL),
(47, 7, 'Hair Dryer', 'Professional salon-grade hair dryer', 59.99, 'hair_dryer.jpg', NULL, NULL),
(48, 8, 'Steering Wheel Cover', 'Leather steering wheel cover', 19.99, 'steering_wheel_cover.jpg', NULL, NULL),
(49, 9, 'Espresso Machine', 'Semi-automatic espresso machine for home use', 199.99, 'espresso_machine.jpg', NULL, NULL),
(50, 10, 'Yoga Block Set', 'Set of 2 high-density foam yoga blocks', 14.99, 'yoga_blocks.jpg', NULL, NULL),
(51, 11, 'Dog Leash', 'Durable retractable dog leash', 24.99, 'dog_leash.jpg', NULL, NULL),
(52, 12, 'Watch', 'Elegant analog watch with leather strap', 149.99, 'watch.jpg', NULL, NULL),
(53, 13, 'Printer', 'All-in-one wireless printer', 129.99, 'printer.jpg', NULL, NULL),
(54, 14, 'Electric Guitar', 'Solid body electric guitar', 249.99, 'electric_guitar.jpg', NULL, NULL),
(55, 15, 'Sewing Machine', 'Beginner-friendly sewing machine', 139.99, 'sewing_machine.jpg', NULL, NULL),
(56, 16, 'Baby Car Seat', 'Convertible baby car seat', 159.99, 'baby_car_seat.jpg', NULL, NULL),
(57, 17, 'Drill Bit Set', 'Comprehensive drill bit set for various materials', 39.99, 'drill_bit_set.jpg', NULL, NULL),
(58, 18, 'Bookshelf', 'Modern 5-tier bookshelf', 89.99, 'bookshelf.jpg', NULL, NULL),
(59, 19, 'Coffee Maker', 'Programmable drip coffee maker', 49.99, 'coffee_maker.jpg', NULL, NULL),
(60, 20, 'Soundbar', 'Bluetooth soundbar for TV and music', 149.99, 'soundbar.jpg', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('4ocs8tZb3I9nOYuXoz28M787yYB6QnqEyeI2b5OZ', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWjBLUWhpY2xNY2ZyRnpTWkc0N3ZwM0Y0UEZuRnB2ZEY4MWZDeEcwMiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NzU6Imh0dHA6Ly9sb2NhbGhvc3QvYXV0aGVudGljYXRpb25fbGFyYXZlbF9yZWFjdF9tb25vbGl0aGljL2xhcmF2ZWwtYXBwL3B1YmxpYyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1722791946);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `image`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'onik', 'img/1722800355.jpg', 'onik@gmail.com', NULL, '$2y$12$PoTCoVP3V90bYHnbDPN4Lepgn6ieRUae154u5J1rsS8s1QXdrJJS.', NULL, '2024-08-04 09:17:13', '2024-08-04 13:39:15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_name_unique` (`name`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
