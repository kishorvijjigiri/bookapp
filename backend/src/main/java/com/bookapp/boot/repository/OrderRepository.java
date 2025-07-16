package com.bookapp.boot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookapp.boot.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {}
