package com.trasactions.transactions.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.trasactions.transactions.models.Item;


public interface ItemRepository extends JpaRepository<Item, Long> {
    
}
