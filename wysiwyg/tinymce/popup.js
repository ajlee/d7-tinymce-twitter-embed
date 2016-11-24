/**
 * Insert function.
 *
 * Generate the filter code and insert into the textarea.
 */
function insertTwembedCode() {
  var ed = tinyMCEPopup.editor, f = document.forms[0], nl = f.elements, v, args = {}, el;


  //if text box is not blank
    if (nl.url.value != '') {
	    //validate it is an embed code
	    filter_string = nl.url.value.match("<blockquote(.*?)>(.*)"); 
	
	    if(filter_string !== null) {
		    ed.execCommand('mceInsertContent', false, nl.url.value);
		    ed.undoManager.add();

		    tinyMCEPopup.close();
		    return;
	    }

	    //else error
	    alert('Please enter a valid twitter embed code!');
    }
}

function init() {
  // The selected text
	var elm = tinyMCEPopup.editor.selection.getNode().innerHTML;
  // Form elements
  var elements = document.forms[0].elements;
  // Regular result
  var reg_res;
}
tinyMCEPopup.onInit.add(init);
