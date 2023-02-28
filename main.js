 'use strict';

 const shoppingList = ['pane', 'vino', 'farina', 'acqua', 'latte'];
 const lista = document.querySelector('.lista');

 let i = 0;
 while (i < shoppingList.length){
    const listItems = document.createElement('li');
    listItems.append(shoppingList[i]);
    lista.append(listItems);
    i++;
 }
