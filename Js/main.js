function sectionDisplay(id, display){
    const first = document.getElementById(id);
    first.style.display = display;
}

function NoneAndBlock(btnId, displayNoneId, displayBlockId){
  const Confirm = document.getElementById(btnId);
  Confirm.addEventListener("click", function(){
    sectionDisplay(displayNoneId, "none");
    sectionDisplay(displayBlockId, "block")
  });
}

NoneAndBlock("btnYes", "first-section", "section-2");
NoneAndBlock("btnSure", "first-section", "section-2");
NoneAndBlock("btnBack", "section-2", "first-section");