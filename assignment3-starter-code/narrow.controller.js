

function NarrowItDownController(MenuSearchService) {
    var menu = this;
    menu.searchTerm = "";
    menu.found = [];
    menu.message = "";
    
    menu.init = function(){
        // var promise = MenuSearchService.getMenuItems();
        // promise.then(function(response){
        //     menu.found = response;
        //     console.log(menu.items);
        // });
        menu.message = "no results!";
    };
    
    menu.fetchForTerm = function(){
        console.log(menu.searchTerm);
        var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
        promise.then(function(response){
            menu.found = response;
            if(menu.found.length == 0){
                console.log("no results");
                menu.message = "no results!";
            }
            else{
                menu.message = "";
            }
            console.log(menu.items);
        });
    };

    menu.removeItem = function (itemIndex) {
        console.log("deleting " + menu.found[itemIndex]);
        menu.found.splice(itemIndex,1);
    };

    
    //
    // promise.then(function (response) {
    //         menu.items = response.data.menu_items;
    //         //console.log(menu.items);
    //     })
    //     .catch(function (error) {
    //         console.log("Something went terribly wrong.");
    //     });



    // menu.logMenuItems = function () {
    //     var promise = MenuSearchService.getMenuItems();
    //
    //     promise.then(function (response) {
    //             console.log(response.data);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    // }();

}