import { Meteor } from 'meteor/meteor';
import { Books } from '../imports/api/book.js';

Meteor.startup(() => {

});

let seedBooks = () => {
  return [
    {
      title: 'Programacion IV Angular',
      description: 'Programación 4'
    },
    {
      title: 'Estructuras de datos',
      description: 'Bases sobre estructuras de datos'
    },
    {
      title: 'Programacion IV',
      description: 'Programación 4'
    },
    {
      title: 'Estructuras de datos',
      description: 'Bases sobre estructuras de datos'
    },
    {
      title: 'Programacion IV',
      description: 'Programación 4'
    },
    {
      title: 'Estructuras de datos',
      description: 'Bases sobre estructuras de datos'
    }
  ]
}
