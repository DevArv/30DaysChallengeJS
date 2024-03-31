/* eslint-disable no-unused-vars */
// Smart to do script app

function Note () {
  let notes = []

  return {
    addNote (note) {
      note.done = note.done !== undefined ? note.done : false
      notes.push(note)

      const addMessage = `Added a new note: ${note.text}`
      return addMessage
    },

    removeNote (value) {
      const removedNote = notes.find(note => note.id === value)
      notes = notes.filter(notes => notes !== value)

      if (removedNote) {
        const removedMessage = `Removed note: ${removedNote.text}`
        return removedMessage
      } else {
        return `No note found with id: ${value}`
      }
    },

    getNotes () {
      return notes
    },

    getPendingNotes () {
      return notes.filter(notes => notes.done === false)
    },

    getCompletedNotes () {
      return notes.filter(notes => notes.done === true)
    },

    checkNotesAsComplete (value) {
      notes.forEach(note => {
        if (note.id === value) {
          note.done = true
        }
      })
    },

    getFilterByPriority () {
      return notes.slice().sort((a, b) => a.priority - b.priority)
    },

    getFilterByTag (tag) {
      return notes.filter(note => note.tag.includes(tag))
    },

    updateNote (noteId, update) {
      notes.forEach(note => {
        if (note.id === noteId) {
          Object.assign(note, update)
        }
      })
    }
  }
};

const mentor = new Note()
const userMessage1 = mentor.addNote({
  id: 1,
  text: 'I need to install Logi options on my Mac',
  reminder: true,
  priority: 3,
  tag: ['Software'],
  done: false
})
const userMessage2 = mentor.addNote({
  id: 2,
  text: 'I need a new script for my Note app',
  reminder: false,
  priority: 1,
  tag: ['Development'],
  done: false
})

// console.log(mentor.getPendingNotes());

// console.log(mentor.getCompletedNotes());

// console.log(mentor.checkNotesAsComplete(1));

// console.log(mentor.getFilterByPriority());

// console.log(mentor.getFilterByTag("Software"));

// console.log(mentor.getNotes());
// console.log(mentor.updateNote(1, { reminder: false }));
// console.log(mentor.getNotes());

// console.log(`${userMessage1}\n${userMessage2}`);

// let noteDeleted = mentor.removeNote(1);
// console.log(noteDeleted);
