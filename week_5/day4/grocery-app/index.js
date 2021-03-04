const groceryStoreText = document.getElementById("groceryStoreText");
const addGroceryStoreBtn = document.getElementById("addGroceryStoreBtn");
const showStoresUL = document.getElementById("showStoresUL");
const groceryStoreAddressText = document.getElementById("groceryStoreAddressText");
const storesRef = db.collection("stores");

function getAllStores() {
  storesRef
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        let data = doc.data();
        generateStores(data, doc);
        showItems(doc.id);
      });
    });
}

function createStore() {
  const storeName = groceryStoreText.value;
  const storeAddress = groceryStoreAddressText.value;

  storesRef
    .add({
      name: storeName,
      address: storeAddress,
    })
    .then(() => {
      window.location.reload();
    });
}

function generateStores(data, doc) {
  let storeDoc = `<li>${data.name}</li>
                                <li>${data.address}</li>
                                <button id='deleteStoreBtn' onClick=deleteStore('${doc.id}')>Delete Store</button>
                                <input type="text" id="addItem${doc.id}" placeholder="Add Item">
                                <button id='addItemBtn' onClick=addItem('${doc.id}')>Add Item</button>
                                <ul id='storeItemsUL'>Items:

                                </ul>
                                `;
  showStoresUL.insertAdjacentHTML("afterbegin", storeDoc);
}

function deleteStore(id) {
  storesRef
    .doc(id)
    .delete()
    .then(() => {
      window.location.reload();
    });
}

function showItems(storeID) {
  const storeItemsUL = document.getElementById("storeItemsUL");
  storesRef
    .doc(storeID)
    .collection("items")
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        let data = doc.data();
        let storeItem = `
                    <li>${data.name}</li>
                    <button onClick="deleteItem('${storeID}', '${doc.id}')">Delete Item</button>
                `;
        storeItemsUL.insertAdjacentHTML("beforeend", storeItem);
      });
    });
}

function addItem(id) {
  const addItemText = document.getElementById(`addItem${id}`);
  let item = addItemText.value;
  storesRef
    .doc(id)
    .collection("items")
    .add({
      name: item,
    })
    .then(() => {
      window.location.reload();
    });
}

function deleteItem(storeID, docID) {
  storesRef
    .doc(storeID)
    .collection("items")
    .doc(docID)
    .delete()
    .then(() => {
      window.location.reload();
    });
}

addGroceryStoreBtn.addEventListener("click", () => {createStore()});

window.addEventListener("load", () => {getAllStores()});
