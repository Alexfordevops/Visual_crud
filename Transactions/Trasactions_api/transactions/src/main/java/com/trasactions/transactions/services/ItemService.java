package com.trasactions.transactions.services;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.trasactions.transactions.repositories.ItemRepository;
import com.trasactions.transactions.models.Item;
import java.util.Optional;

import java.util.List;

@Service
public class ItemService {

     @Autowired
    private ItemRepository itemRepository;

    // Método para salvar um item no banco de dados
    public Item saveItem(Item item) {
        return itemRepository.save(item);
    }

    //Lista de itens
    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    //Atualiza os itens
    public Item updateItem(Item updatedItem) {
        Optional<Item> existingItemOptional = itemRepository.findById(updatedItem.getId());
    
        if (existingItemOptional.isPresent()) {
            Item existingItem = existingItemOptional.get(); // Agora temos um Item, não um Optional<Item>
    
            // Atualizar apenas os campos desejados
            existingItem.setName(updatedItem.getName());
            existingItem.setCategory(updatedItem.getCategory());
            existingItem.setQuantity(updatedItem.getQuantity());
    
            return itemRepository.save(existingItem); // Salva no banco e retorna o item atualizado
        } else {
            throw new RuntimeException("Item não encontrado!");
        }
    }
    // Soma a quantidade se o item já existir
    public Optional<Item> insertItem(Long id, int quantidade) {
        Optional<Item> objetoOptional = itemRepository.findById(id);
        if (objetoOptional.isPresent()) {
            Item objeto = objetoOptional.get();
            objeto.setQuantity(objeto.getQuantity() + quantidade); // Soma a nova quantidade
            itemRepository.save(objeto); // Salva a atualização
            return Optional.of(objeto);
        }
        return Optional.empty();
    }
    //Deteleta itens
    @Transactional
    public boolean deleteItem(Long id) {
        Optional<Item> item = itemRepository.findById(id);
        if (item.isPresent()) {
            itemRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
