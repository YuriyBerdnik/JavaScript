const yargs = require('yargs');
const notes = require('./notes');

yargs.command({
    command: 'add',
    describe: 'New note',
    builder: {
        title: {
            type: 'string',
            demandOption: true,
            describe: 'Note name'
        },
        text: {
            type: 'string',
            demandOption: true,
            describe: 'Text note'
        }
    },
    handler({
        title,
        text
    }) {
        notes.addNote(title, text);
    }
});

yargs.command({
    command: 'list',
    describe: 'Show all notes',
    handler() {
        notes.listNotes();
    }
});

yargs.command({
    command: 'read',
    describe: 'Show once note',
    handler() {
        console.log('Read command');
    }
});

yargs.command({
    command: 'remove',
    describe: 'Delete note',
    handler() {
        console.log('Remove command');
    }
});

yargs.parse();