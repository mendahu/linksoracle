function createMusicPlayer(filename) {

  /**
  The BGSOUND element is one of those non-standard things that Microsoft
  tried to make standard by supporting it in IE. Modern browsers don't even look
  at it! 

  I looked into whether the modern <audio> component would work with MIDI files
  but it seems like MIDI was dropped in favour of more modern audio. There seemed
  to be some JS libraries that might add some non-native support but that felt like
  overkill for this. Instead, I've batch converted the MIDI files to MP3 so that I can
  just auto-play them on page load, as I had intended all those years ago. 

  For usability, I've added controls to allow you to stop the music (you did not have this
  power in 1999, lucky you!)

  Just because I need this player on every page and want to include the annotatio, I've
  gone ahead and create it dynamically with JS, which is not in the style of the
  site overall but seemed like a prudent addition.
  **/

  // Create Player
  const player = document.createElement("audio");
  player.setAttribute("src", "../../assets/music/" + filename);
  player.setAttribute("controls", "controls");
  player.setAttribute("autoplay", "autoplay");
  player.setAttribute("loop", "loop");

  // Create Figcaption
  const figcaption = document.createElement("figcaption");
  figcaption.innerHTML = "Music: " + filename + " (converted to MP3)";

  // Create Figure
  const figure = document.createElement("figure");
  figure.setAttribute("class", "music-player");
  figure.appendChild(figcaption);
  figure.appendChild(player);

  return figure;
}

function createMusicAnnotation() {
  // Create Summary
  const summary = document.createElement("summary");
  summary.innerHTML = "Music";

  // Create Abbreviation
  const abbreviation = document.createElement("abbr");
  abbreviation.setAttribute("title", "HyperText Markup Language")
  abbreviation.innerHTML = "HTML"

  // Create Details
  const details = document.createElement("details");
  details.setAttribute("class", "annotation");
  details.appendChild(summary);
  details.appendChild(document.createTextNode("Music is one of my other passions - when I made this site, I was learning guitar and drums and later went on to take music in college. So of course, any website I made would have to have auto-playing MIDI files!"))
  details.appendChild(document.createElement("br"))
  details.appendChild(document.createElement("br"))
  details.appendChild(document.createTextNode("I've had to make some changes to the code to get these to work today in your browser, so this doesn't look exactly like it did back then. In 1999, you would not have seen this little widget with controls and the file name - it just played on loop behind the scenes. That's a little obnoxious by today's standards, so I've at least given you controls to stop it if you're v upset."))
  details.appendChild(document.createElement("br"))
  details.appendChild(document.createElement("br"))
  details.appendChild(document.createTextNode("I also had to upgrade the code to modern conventions - the "))
  details.appendChild(abbreviation)
  details.appendChild(document.createTextNode(" element I used in 1999 was a non-standard one that Microsoft was pushing and only worked in Internet Explorer. Since then, browsers have settled on a common standard. I also had to convert the files to MP3, but don't worry, the original MIDI files are still available for download in the Musica section."))

  return details
}

function appendMusic(filename) {
  document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("music-player")
    container.setAttribute("style", "display:flex;align-items:center;width:100%;margin-block:1rem;flex-direction:column;gap:1rem");
    container.appendChild(createMusicAnnotation())
    container.appendChild(createMusicPlayer(filename))
  });
}