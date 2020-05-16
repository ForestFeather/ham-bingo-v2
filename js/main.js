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

    // Add it to the page.  Start at 4 to bypass settings in array
    lbox.appendChild(listElement);
    for (i = 4; i < arrayObjects.length; ++i) {
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

const copyToClipboard = str => {
  const el = document.createElement('textarea');  // Create a <textarea> element
  el.value = str;                                 // Set its value to the string that you want copied
  el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
  el.style.position = 'absolute';
  el.style.left = '-9999px';                      // Move outside the screen to make it invisible
  document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
  const selected =
    document.getSelection().rangeCount > 0        // Check if there is any content selected previously
      ? document.getSelection().getRangeAt(0)     // Store selection if found
      : false;                                    // Mark as false to know no selection existed before
  el.select();                                    // Select the <textarea> content
  document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
  document.body.removeChild(el);                  // Remove the <textarea> element
  if (selected) {                                 // If a selection existed before copying
    document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
    document.getSelection().addRange(selected);   // Restore the original selection
  }
};

/* function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
} */

function generateStaticCode() {
    values = $("#SettingsForm").serializeArray();

    values = values.concat(
        jQuery('#SettingsForm input[type=checkbox]:not(:checked)').map(
            function() {
                return {"name": this.id, "value": 'off'}
            }).get()
    );
    values = jQuery.param( values );

    var url = window.location.href.split('?')[0];

    $('#saveLinkTarget').val(url + "?" + values);
}

$(function() {
    $('.expand-settingsGroups').click(function(){
        $('.content-settingsGroups').slideToggle('slow');
        $('.expand-settingsGroups').toggleClass('expand-item-active');
    });
    $('.cell-content').click(function() {
        $(this).toggleClass('bingoSelected');    
    });
    $('#serialize').click(function(){
        generateStaticCode();
        $("#dialog").dialog("open");
    });

    //Initialize dialog
    $("#dialog").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 100
        },
        hide: {
            effect: "blind",
            duration: 100
        }
    });

    generateStaticCode();
});
