
const tabItems = document.querySelectorAll('.tabs-item');
const tabContentitems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
    console.log('oops')
	// Remove all show and border classes
	removeBorder();
	removeShow();
	// Add border to current tab item
	this.classList.add('tabs-border');
	// Grab content item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabContentItem.classList.add('show');
}
// Remove bottom borders from all tab items
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tabs-border');
	});
}

// Remove show class from all content items
function removeShow() {
	tabContentitems.forEach(item => {
		item.classList.remove('show');
	});
   

}

// Listen for tab item click
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});

