package com.bookapp.boot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookapp.boot.model.Book;
import com.bookapp.boot.model.Order;
import com.bookapp.boot.repository.BookRepository;
import com.bookapp.boot.service.BookService;

@RestController
@RequestMapping("/bookapp")
@CrossOrigin(origins = "http://localhost:3000")

public class BookController {

    @Autowired
    private BookService bookService;
    @Autowired
    private BookRepository bookRepository;

    @GetMapping("/books")
    public List<Book> getBooks() {
        return bookRepository.findAll();
    }

    @PostMapping("/order")
    public ResponseEntity<?> placeOrder(@RequestBody Map<String, String> payload) {
        try {
            Long bookId = Long.parseLong(payload.get("bookId"));
            String customerName = payload.get("customerName");

            Order savedOrder = bookService.placeOrder(bookId, customerName);

            Map<String, Object> response = new HashMap<>();
            response.put("message", "Order placed successfully");
            response.put("orderId", savedOrder.getId());

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Invalid data: " + e.getMessage());
        }
    }
}
