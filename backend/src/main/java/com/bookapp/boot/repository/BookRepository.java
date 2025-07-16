package com.bookapp.boot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookapp.boot.model.Book;

public interface BookRepository extends JpaRepository<Book, Long> {}
