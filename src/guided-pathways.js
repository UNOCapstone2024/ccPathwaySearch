const externalTable = document.getElementById('GuidedPathways');

// FILTER RESULTS by CATEGORY
const selectCategory = document.getElementById('Category');
const entriesElement = document.getElementById('entries');
selectCategory.addEventListener('change', (event) => {
    var category = event.target.value;
    var entriesCount = 0;
    var allRows = externalTable.querySelectorAll('tr');
    for (let r = 0; r < allRows.length; r++) {
        if ( r > 0 ) {
            var rowCells = allRows[r].querySelectorAll('td');
            var categories = rowCells[1].textContent;
            if ( category === '' || category == 'All') { 
                allRows[r].removeAttribute('hidden');
        	}
        	if ( categories !== '' && category !== '' && category !== 'All') { 
    	        if ( categories == category ) {
        	        allRows[r].removeAttribute('hidden');
    	            entriesCount++;
        	    } else {
                    allRows[r].setAttribute('hidden', true);
        	    }
        	}
        }
    }
    if ( category === '' || category === 'All') { 
        entriesCount = allRows.length;
    }
    // REPLACE the ENTRIES paragraph with updated COUNT
    entriesElement.innerText = `showing all ${entriesCount} matches`;
});

console.log("Hello World")