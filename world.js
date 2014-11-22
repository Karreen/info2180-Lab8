window.onload = function() {
    on_load(); 
};

function on_load() {
    //<button id="lookup">Lookup</button>
    var button = document.getElementById("lookup")
    
    // listener
   // button.addEventListener( "click", al_ert);
    
    function on_load() {
    //<button id="lookup">Lookup</button>
    var button = document.getElementById("lookup").addEventListener( "click", 
     document.observe("dom:loaded", function() {
                                    $("lookup").observe("click"), function() {
                                    new Ajax.Request("world.php", 
                                                     {
                                    method: "GET", 
                                        onSucess: function(response) {
                                        alert(response.responseText);
                                        },
                                        onFailure: function(response) {
                                        alert('ehh...Errors, what you gonna do :P');
                                        }
                                    }
                                    }});
    ););
    
    
    
/*    if( button.addEventListener() ) {
        
        button.addEventListener( "click", al_ert, true);
    }
    else {
        button.attachEvent( "click", al_ert);
    }     */ 
    /* --------------------------------------------------------------------------- */
   /* document.observe("dom:loaded", function() {
                                    $("lookup").observe("click"), function() {
                                    new Ajax.Request("world.php", 
                                                     {
                                    method: "GET", 
                                        onSucess: function(response) {
                                        alert(response.responseText);
                                        },
                                        onFailure: function(response) {
                                        alert('ehh...Errors, what you gonna do :P');
                                        }
                                    }
                                    }}); */
    
    /* --------------------------------------------------------------------------- */
    /*============================================================================*/ 
   
    /*$(document).ready( function() {
        var response = '';
        $.ajax( { type: "GET",
                 url: "world.php", 
                 async: false, 
                 success : function(text) {
                     response = text;
                    }
                });

            alert(response);
        }); */
    /*============================================================================*/
}

function al_ert() {
    alert("alert");
    }
    
/* function look_up(cname) {
    this.cname = "";
    ?lookup=cname;
} */
//window.onload = on_load;
