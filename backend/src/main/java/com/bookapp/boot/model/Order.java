package com.bookapp.boot.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "book_orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long bookId;
    private String customerName;

    public Order() {}

    public Order(Long bookId, String customerName) {
        this.bookId = bookId;
        this.customerName = customerName;
    }

    // ✅ Add this getter for id
    public Long getId() {
        return id;
    }

    // Optional: Add other getters and setters
    public Long getBookId() {
        return bookId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setBookId(Long bookId) {
        this.bookId = bookId;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }
}
