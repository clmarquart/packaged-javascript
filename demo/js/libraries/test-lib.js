Menu = {
  parent : null,
  list : null,
  create : function(id) {
    Menu.parent = $("#"+id);
    Menu.list = $(this.parent).find("ul:eq(0)");
    
    $(Menu.parent)
			.bind("click",function(){
				$(Menu.list).toggle();
			});
  }
};
Links = {
  node : null,
  addEvent : function(node) {
    this.node = $(node);
    $(this.node).click(function() {
      $("#dialog").dialog('open');
    });
  },
  change : function () {
    var span = $("#menu").children(":first");
    if($(span).css("backgroundColor")==="red") {
      $(span).css("backgroundColor","blue");
    } else {
      $(span).css("backgroundColor","red");
    }
  }
};
