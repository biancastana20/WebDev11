document.addEventListener('DOMContentLoaded', () => {
	setTimeout(() => {
		const ui = new UI();
		if (window.location.href.indexOf('admin.html') >= 0) {
			ui.managebooks();
			addNewBookBtn();
		}
	}, 500);
});

//------------------------------------------- DELETE BTN ----------------------------------------
async function deleteBook(id) {
	document.getElementById(`${id}`).remove(); //delete from page
	let data = await apiOperation(id, 'DELETE'); //delete from DB
	console.log(data); //null
}

//-------------------------------------------------------  ADD NEW BOOK button IN ADMIN PAGE  --------------------------------------
function addNewBookBtn() {
	//hide list of books and show input fields for adding book
	document.getElementById('header-btn-add-new-book').addEventListener('click', () => {
			document.getElementById('product-management-container').style.display = 'none';
			document.getElementById('add-new-book-container').style.visibility = 'visible';
		});
	// add event to SAVE btn for ADD NEW BOOk fct
	document.getElementById('header-btn-save-book').addEventListener('click', saveBook);
}
//------------------------ -----------------------------END ADD NEW BOOK button IN ADMIN---------------------------
//  ---------------------------------------------------- SAVE BTN  ------------------------------------------------
async function saveBook() {
	if (
		addImageBook.value == '' ||
		addTitleBook.value == '' ||
		addAuthorBook.value == '' ||
		addDescriptionBook.value == ''
	) {
		alert('Please complete fields!');
	} else {
		let newBook = new Book(
			addImageBook.value,
			addTitleBook.value,
			addAuthorBook.value,
			addPriceBook.value,
			addDescriptionBook.value,
			addQuantityBook.value,
			addBookId.value
		);
		//save book in DB
		let res = await fetch(BOOKS_URL, {
			method: 'POST',
			body: JSON.stringify(newBook),
		});
		let data = await res.json();
		//console.log(data);
		location.reload();
		// show list of books, hide save indputs fields
		document.getElementById('product-management-container').style.display = 'block';
		document.getElementById('add-new-book-container').style.visibility ='hidden';
	}
}

// ------------------------------------------------------ EDIT FUNCTION -------------------------------------------
async function editBook(id) {
	// remove initial behaviour of saveBTN (for add new book fct) and add new behavior (for EDIT fction)
	document.getElementById('header-btn-save-book').removeEventListener('click', saveBook);
	let data = await apiOperation(id);
	//console.log(data);

	//show save inputs field and hide list of books from admin
	document.getElementById('product-management-container').style.display ='none';
	document.getElementById('add-new-book-container').style.visibility ='visible';
	// fill inputs fields with book info from admin page
	addTitleBook.value = data.title;
	addImageBook.value = data.path;
	addAuthorBook.value = data.author;
	addPriceBook.value = data.price;
	addDescriptionBook.value = data.description;
	addQuantityBook.value = data.quantity;
	addBookId.value = data.id;
	//---------------------------------------------------- BTN SAVE -> EDIT fction ------------------------------------
	//add another event on SAVE btn (for EDIT fct) and post also in DB
	document.getElementById('header-btn-save-book').addEventListener('click', async () => {
			if (
				addImageBook.value == '' ||
				addTitleBook.value == '' ||
				addAuthorBook.value == '' ||
				addDescriptionBook.value == ''
			) {
				alert('Please complete fields!');
			} else {
				let newBook = new Book(
					addImageBook.value,
					addTitleBook.value,
					addAuthorBook.value,
					addPriceBook.value,
					addDescriptionBook.value,
					addQuantityBook.value,
					addBookId.value
				);
				//post in DB also
				let res = await fetch(BOOKS_ITEM_URL + id + '.json', {
					method: 'PUT',
					body: JSON.stringify(newBook),
				});
				let data = await res.json();
				//console.log(data);
				location.reload();
			}
		});
}
