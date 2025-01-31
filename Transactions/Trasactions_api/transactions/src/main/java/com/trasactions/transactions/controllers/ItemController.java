package com.trasactions.transactions.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.trasactions.transactions.services.ItemService;
import com.trasactions.transactions.models.Item;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/item")
@CrossOrigin(origins = "http://localhost:4200") // Permitir chamadas do Angular
public class ItemController {

    @Autowired
    private ItemService itemService;

    @PostMapping
    public ResponseEntity<Item> createUser(@RequestBody Item item) {
        Item savedUser = itemService.saveItem(item);
        return ResponseEntity.ok(savedUser);
    }

    @GetMapping("/list")
    public List<Item> getAllItems() {
        return itemService.getAllItems();
    }

    @PutMapping("/update")
    public ResponseEntity<Item> updateItem(@RequestBody Item item) {
        Item updatedItem = itemService.updateItem(item);
        return ResponseEntity.ok(updatedItem);
    }

    @PutMapping("/update/insert/{id}")
    public ResponseEntity<?> insertItem(@PathVariable Long id, @RequestBody Map<String, Integer> request) {
        int quantity = request.getOrDefault("quantity", 0);
        Optional<Item> objetoAtualizado = itemService.insertItem(id, quantity);

        if (objetoAtualizado.isPresent()) {
            return ResponseEntity.ok(objetoAtualizado.get()); // Retorna o objeto atualizado
        } else {
            Map<String, String> response = new HashMap<>();
            response.put("message", "Objeto não encontrado.");
            return ResponseEntity.status(404).body(response);
        }
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String, String>> deleteItem(@PathVariable Long id) {
        boolean delete = itemService.deleteItem(id);
        if (delete) {
            Map<String, String> response = new HashMap<>();
            response.put("message", "Objeto deletado com sucesso.");
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
