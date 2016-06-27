import "./listBooks.html";
import { Books } from '../../api/book.js';

Template.listBooks.onRendered(function(){
    $('.modal-trigger').leanModal();
    $('input, textarea').characterCounter();
});
Template.listBooks.events({
    'click #addBookButton'(event){
      // console.log('user id'+ Meteor.userId());
        let book = {
            title: $('#title').val(),
            description: $('#description').val(),
            creator: Meteor.userId()
        };
        $('#title').val(""),
        $('#description').val("")
        Meteor.call('books.insert', book)
    },
    'click .delete'() {
        Meteor.call('books.remove', this._id);
    },

})
Template.listBooks.helpers({
    books(){
        var books = Books.find({creator: Meteor.userId()});
        return books;
    }
});
