
//fungsi utama, untuk eksekusi hide/show elements
function execCategorizer() {
    var merchsCb = document.querySelectorAll(".albumChecks input[type='checkbox']");
    var filters = {
      merchs: getClassOfCheckedCheckboxes(merchsCb)
    };
    filterResults(filters);
  }
  
  //get class apa aja yg dicheck
  function getClassOfCheckedCheckboxes(checkboxes) {
    var classes = [];
  
    if (checkboxes && checkboxes.length > 0) {
      for (var i = 0; i < checkboxes.length; i++) {
        var cb = checkboxes[i];
  
        if (cb.checked) {
          classes.push(cb.getAttribute("rel"));
        }
      }
    }
    return classes;
  }
  
  //filter hasil2nya
  function filterResults(filters) {
    var rElems = document.querySelectorAll(".displayed-items div");
    var hiddenElems = [];
  
    if (!rElems || rElems.length <= 0) {
      return;
    }
    for (var i = 0; i < rElems.length; i++) {
      var el = rElems[i];
      if (filters.merchs.length > 0) {
        var isHidden = true;
        for (var j = 0; j < filters.merchs.length; j++) {
          var filter = filters.merchs[j];
  
          if (el.classList.contains(filter)) {
            isHidden = false;
            break;
          }
        }
        if (isHidden) {
          hiddenElems.push(el);
        }
      }
    }
  
    for (var i = 0; i < rElems.length; i++) {
      rElems[i].style.display = "block";
    }
  
    if (hiddenElems.length <= 0) {
      return;
    }
  
    for (var i = 0; i < hiddenElems.length; i++) {
      hiddenElems[i].style.display = "none";
    }
  }