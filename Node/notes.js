const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

const notePath = path.join(__dirname, 'notes.json');

const getNotes = (callback) => {
    fs.readFile(notePath, 'utf-8', (err, content) => {
        if (err) {
            throw new Error(err);
        }

        try {
            callback(JSON.parse(content));
        } catch (e) {
            callback([]);
        }
    });
};

const saveNodes = (content) => {
    fs.writeFile(notePath, JSON.stringify(content), err => {
        if (err) {
            throw new Error(err);
        }
    });
};

const addNote = (title, text) => {
    getNotes((notes) => {
        const dublicateNote = notes.find(note => note.title === title);
        if (dublicateNote) {
            console.log(chalk.red.inverse('Note with curent name exists'));
        } else {
            notes.push({
                title,
                text
            });
            saveNodes(notes);
            console.log(chalk.green.inverse('Note add'));
        }
    });
};

const listNotes = () => {
    getNotes(notes => {
        if (notes.lenght) {
            console.log(chalk.inverse('Your notes:'));

            notes.forEach((note) => {
                console.log(note.title);
            });
        } else {
            console.log(chalk.blue('No notes! Add first'));
        }
    });
};


module.exports = {
    addNote,
    listNotes
};