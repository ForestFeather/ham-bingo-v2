function makeList(arrayName, arrayObjects) { 

    // Make a container element for the list
    var listContainer = document.createElement('div');
    listContainer.classList.add('pure-u-1');
    listContainer.classList.add('pure-u-md-1-2');
    listContainer.classList.add('pure-u-lg-1-4');

    // Add the list box group
    var lbox = document.createElement('div');
    lbox.classList.add('l-box');
    lbox.classList.add('content-item');
    lbox.classList.add('content-settingsGroups');
    listContainer.appendChild(lbox);

    // Make the header object
    var header = document.createElement('h3');
    header.classList.add( 'content-head-ribbon');
    header.innerText = arrayName;
    lbox.appendChild(header);

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

function printCheckboxes(dictionary) {
    for (var [key, value] of Object.entries(dictionary)) {
        // Create checkbox
        var listItem = document.createElement('li');
        var checkbox = document.createElement('input');
        var label = document.createElement('label');
        var labelText = document.createTextNode(' ' + key);
        listItem.classList.add('column-list');
        label.classList.add('pure-checkbox');
        label.classList.add('content-head-ribbon');
        label.htmlFor = key;
        checkbox.id = key;
        checkbox.type = 'checkbox';
        checkbox.checked = true;

        // Add checkbox and header
        label.appendChild(checkbox);
        label.appendChild(labelText);
        listItem.appendChild(label);
        document.getElementById('settingsList').appendChild(listItem);
    }
}

function printLists() {
    for( var [key, value] of Object.entries(listOfCategories)) {
        makeList(key, value);
    }
}

function checkAll(checktoggle) {
  var checkboxes = new Array();
  checkboxes = document.getElementsByTagName('input');

  for (var i=0; i<checkboxes.length; i++)  {
    if (checkboxes[i].type == 'checkbox')   {
      if(!checkboxes[i].classList.contains('noselect')) {
        checkboxes[i].checked = checktoggle;
      }
    }
  }
}

$(function() {
    $('.expand-settingsGroups').click(function(){
        $('.content-settingsGroups').slideToggle('slow');
        $('.expand-settingsGroups').toggleClass('expand-item-active');
    });
});
