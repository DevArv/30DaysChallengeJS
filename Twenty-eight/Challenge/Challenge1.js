/* En este ejercicio, el objetivo es implementar una playlist de un servicio de música utilizando un stack.

Deberás implementar la lógica de la clase Playlist la cual deberá tener las siguientes 3 propiedades top, 
bottom y length para poder desarrollar el stack.

addSong(song): este método debe permitir agregar una canción al stack.

playSong(): este método debe permitir reproducir la canción que está en el tope del stack y luego eliminarla. 
Si el stack está vacío, deberá lanzar un error con el mensaje "No hay canciones en la lista".

getPlaylist() transforma el stack a un array con todas las canciones que están en el, 
en orden de reproducción (de la última agregada a la primera).

Ejemplo 1:

Input:
const playlist = new Playlist();

playlist.addSong("Bohemian Rhapsody");
playlist.addSong("Stairway to Heaven");
playlist.addSong("Hotel California");

playlist.playSong();
Output: "Hotel California"
playlist.playSong();
Output: "Stairway to Heaven"
playlist.playSong();
Output: "Bohemian Rhapsody"
playlist.playSong();
Output: Error: No hay canciones en la lista

Ejemplo 2:


Input:
const playlist = new Playlist();

playlist.addSong("Bohemian Rhapsody");
playlist.addSong("Stairway to Heaven");
playlist.addSong("Hotel California");

playlist.getPlaylist();

Output: ["Hotel California", "Stairway to Heaven", "Bohemian Rhapsody"] */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Playlist {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    addSong(song) {
        const NEW_SONG = new Node(song);

        if (this.length === 0) {
            this.top = NEW_SONG;
            this.bottom = NEW_SONG;
        } else {
            NEW_SONG.next = this.top;
            this.top = NEW_SONG;
        }

        this.length++;
        return this;
    }

    playSong() {
        if (this.length === 0) {
            throw new Error('No hay canciones en la lista');
        }
        const SONG = this.top.value;

        if (this.length != 1) {
            this.top = this.top.next;
        } else {
            this.top = null;
            this.bottom = null;
        }

        this.length--;
        return SONG;
    }

    getPlaylist() {
        let playlist = [];
        let actualSong = this.top;

        while (actualSong != null) {
            playlist.push(actualSong.value);
            actualSong = actualSong.next;
        }

        return playlist;
    }
}