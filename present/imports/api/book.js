export const Books = new Mongo.Collection('books');

let Schema = {};
Schema.book = new SimpleSchema({
  title: {
    type:String,
    max: 30
  },
  description: {
    type: String,
    max: 100
  },
  creator: {
    type: String,
    max: 100
  }

});

Books.attachSchema(Schema.book);

Meteor.methods({
  'books.insert'(book){
      Books.insert(book, function(err){
        if(err)
          throw new Meteor.Error('Error inserting book: ' + err);
      });
   },
   'books.remove'(_id){
     Books.remove({_id: _id}, function(err){
       if(err)
        throw new Meteor.Error('Error removing book: ' + err);
     });
   }
})
