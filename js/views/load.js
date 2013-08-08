window.LoadView = Backbone.View.extend({

    initialize:function () {
        console.log('Initializing Load View');
    },

    events:{
        "click #fileLoader":"loadTheFile"
    },

    render:function () {
        $(this.el).html(this.template());
        return this;
    },

    loadTheFile:function () {
        alert('Load the file!');
    }

});