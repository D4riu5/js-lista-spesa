const myList = document.getElementById("list");
const shoppingList = ['eggs','flour','salt','coca-cola','sauce','etc..'];

let i = 0;
while (i < shoppingList.length) {
  const item = document.createElement('li');
  item.textContent = shoppingList[i];
  myList.append(item);
  i++;
}