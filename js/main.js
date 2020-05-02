function makeList(arrayName, arrayObjects) { 
    
    // Make a container element for the list
    var listContainer = document.createElement('div');
    listContainer.classList.add('pure-u-1-4');

    // Add the list box group
    var lbox = document.createElement('div');
    lbox.classList.add('l-box');
    listContainer.appendChild(lbox);

    // Make the header object
    var header = document.createElement('h3');
    header.classList.add( 'content-head-ribbon');
    header.innerText = arrayName;

    // Create checkbox
    var checkbox = document.createElement('input');
    var label = document.createElement('label');
    var labelText = document.createTextNode(' Enabled');
    label.classList.add('pure-checkbox');
    label.classList.add('content-head-ribbon');
    label.htmlFor = arrayName;
    checkbox.id = arrayName;
    checkbox.type = 'checkbox';
    checkbox.checked = true;

    // Add checkbox and header
    lbox.appendChild(header);
    label.appendChild(checkbox);
    label.appendChild(labelText);
    lbox.appendChild(label);

    // Make the list
    var listElement = document.createElement('ul');

    // Add it to the page
    lbox.appendChild(listElement);
    for (i = 0; i < arrayObjects.length; ++i) {
        // create an item for each one
        listItem = document.createElement('li');

        // Add the item text
        listItem.innerHTML = arrayObjects[i];

        // Add listItem to the listElement
        listElement.appendChild(listItem);
    }

    // Finally, put on the document
    document.getElementById('settingsGroups').appendChild(listContainer);
}

function printLists() {
    for( var [key, value] of Object.entries(listOfCategories)) {
        makeList(key, value);
    }
}
