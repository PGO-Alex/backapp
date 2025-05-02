-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 02-05-2025 a las 05:10:24
-- Versión del servidor: 5.7.24
-- Versión de PHP: 8.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `innovatube`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `like_vid_list`
--

CREATE TABLE `like_vid_list` (
  `id_video` int(11) NOT NULL,
  `video_title` varchar(80) DEFAULT NULL,
  `video_url` varchar(200) DEFAULT NULL,
  `video_details` varchar(200) DEFAULT NULL,
  `like_timestamp` timestamp(6) NULL DEFAULT NULL,
  `id_usr` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id_usr` int(11) NOT NULL,
  `usr_name` varchar(45) DEFAULT NULL,
  `usr_lastname` varchar(45) DEFAULT NULL,
  `usr_email` varchar(45) DEFAULT NULL,
  `usr_password` varchar(45) DEFAULT NULL,
  `usr_details` varchar(45) DEFAULT NULL,
  `usr_datetime` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `like_vid_list`
--
ALTER TABLE `like_vid_list`
  ADD PRIMARY KEY (`id_video`),
  ADD KEY `id_usr_idx` (`id_usr`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_usr`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `like_vid_list`
--
ALTER TABLE `like_vid_list`
  MODIFY `id_video` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id_usr` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `like_vid_list`
--
ALTER TABLE `like_vid_list`
  ADD CONSTRAINT `id_usr` FOREIGN KEY (`id_usr`) REFERENCES `users` (`id_usr`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
