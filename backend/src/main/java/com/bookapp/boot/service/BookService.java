package com.bookapp.boot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookapp.boot.model.Book;
import com.bookapp.boot.model.Order;
import com.bookapp.boot.repository.BookRepository;
import com.bookapp.boot.repository.OrderRepository;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepo;

    @Autowired
    private OrderRepository orderRepo;

    public List<Book> getAllBooks() {
        return bookRepo.findAll();
    }

    public Order placeOrder(Long bookId, String customerName) {
        Order order = new Order(bookId, customerName);
        return orderRepo.save(order);
    }
}
