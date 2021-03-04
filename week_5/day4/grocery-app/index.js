console.log(db)

const groceryStoreText = document.getElementById('groceryStoreText')
const addGroceryStoreBtn = document.getElementById('addGroceryStoreBtn')
const showStoresUL = document.getElementById('showStoresUL')
const groceryStoreAddressText = document.getElementById('groceryStoreAddressText')

const storesRef = db.collection('stores');

function getAllStores() {
    
    db.collection('stores')
        .get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                let data = doc.data()
                console.log(doc.id)
                let storeDoc = `<li>${data.name}</li>
                                <li>${data.address}</li>
                                <button id='deleteStoreBtn' onClick=deleteStore('${doc.id}')>Delete Store</button>
                                <input type="text" id="addItem" placeholder="Add Item">
                                <button id='addItemBtn' onClick=addItem('${doc.id}')>Add Item</button>
                                <ul id='storeItemsUL'>Items:

                                </ul>
                                `
                showStoresUL.insertAdjacentHTML('afterbegin', storeDoc)
                showItems(doc.id)
            })
            
        })
        
}

function deleteStore(id) {
    storesRef.doc(id).delete().then(() => {
        window.location.reload()
    })
}

function addItem(id) {
    const addItemText = document.getElementById('addItem')
    let item = addItemText.value
    storesRef.doc(id).collection('items').add({
        name: item
    }).then(() => {
        window.location.reload()
    })
}

function showItems(storeID) {
    const storeItemsUL = document.getElementById('storeItemsUL')
    storesRef.doc(storeID).collection('items')
        .get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                console.log('STORE ID:', storeID)
                let data = doc.data()
                console.log(data.name)
                let storeItem = `
                    <li>${data.name}</li>
                    <button onClick="deleteItem('${storeID}', '${doc.id}')">Delete Item</button>
                `
                storeItemsUL.insertAdjacentHTML('beforeend', storeItem)
            })
           
        })
}

function deleteItem(storeID, docID) {
    storesRef.doc(storeID)
        .collection('items')
        .doc(docID)
        .delete()
        .then(() => {window.location.reload()})
}

addGroceryStoreBtn.addEventListener('click', function() {
    const storeName = groceryStoreText.value
    const storeAddress = groceryStoreAddressText.value

    storesRef.add({
        name: storeName,
        address: storeAddress
    }).then(() => {
        window.location.reload()
    })
    
})

window.addEventListener('load', function() {
    getAllStores()
})