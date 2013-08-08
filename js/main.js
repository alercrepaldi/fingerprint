window.Router = Backbone.Router.extend({

    routes: {
        "": "load",
        "master": "master",
        "detail/:index": "detail"
    },

    load: function () {

        /*if (!this.homeView) {*/

        this.loadView = new LoadView();
        this.loadView.render();

        /*} else {
         this.homeView.delegateEvents(); // delegate events when the view is recycled
         }*/

        $("#content").html(this.loadView.el);
        //this.headerView.select('home-menu');

    },
    master: function () {
    },
    detail: function (index) {
    }

});

templateLoader.load(["LoadView", "OtherView"],
    function () {
        app = new Router();
        Backbone.history.start();
    });
