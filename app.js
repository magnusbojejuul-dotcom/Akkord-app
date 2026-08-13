const songs = [
  { set: 'Sæt 1', title: 'Treasure', lines: ['Bb - G# - F - G - C'] },
  { set: 'Sæt 1', title: 'Fascination', lines: ['Intro: 2 omgange trommer', 'Vers + bro', 'A ... - F# - E - D', 'C# - D - E - F#m - Bm - E', 'Omk: E - F# - D - (C# - D - E) hurtigt', '"Word that\'s on" - F#m - A - D'] },
  { set: 'Sæt 1', title: 'Hjertet ser', lines: [], images: ['assets/screenshots/hjertet-ser-1.png', 'assets/screenshots/hjertet-ser-2.png'] },
  { set: 'Sæt 1', title: 'Alle Skuffer', lines: [] },
  { set: 'Sæt 1', title: 'Move your feet', lines: ['Intro:', 'E - C - A - G - F#', 'B - A', 'D - E - A'] },
  { set: 'Sæt 1', title: 'Juice', lines: ['Vers + intro: D - G - C - D', 'Bro: C - D ... A'] },
  { set: 'Sæt 1', title: 'Ain’t nobody', lines: ['Stem en halv tone ned', 'Intro: Eb x4 · Eb - Bb x2', 'Vers: Eb ... Bb - B - C# - Eb', 'Omkvæd: Eb - C# - G# - B x4'] },
  { set: 'Sæt 1', title: 'Sugar', lines: ['F# - Bbm - D#m - C#', 'Helt ned; vers slut "on me"'] },
  { set: 'Sæt 1', title: 'Elskovspony', lines: ['Intro: 1 omgang trommer', 'E - F# - G# - F# - A - C# - D - F# ... D', 'Omk: A - B - C# - E ... C#', 'Bridge: A - G#'] },
  { set: 'Sæt 1', title: 'Toxic', lines: ['C ... G .. C · "F - G x2"', 'Omk: C - D# - D - C# ... G# - G', 'Break kommer ind på D'] },
  { set: 'Sæt 1', title: 'Crazy in love', lines: ['D i stedet', 'Bb - G x3 - F x2', 'Bb - G x1 - F', 'Vers: F', 'Rap: Bb - G / F efter aftalerne'] },
  { set: 'Sæt 1', title: 'Stor mand', lines: ['G - Bb - F - C'] },
  { set: 'Sæt 2', title: 'September', lines: ['Vers + intro: Dmaj7 - C#m7 - Bm7 - C#m7 - F#m7 x3 - Gmaj7/A', 'Omk: Bm7 - E7 - C#m7 - F#m7 x3 - Gmaj7/A'] },
  { set: 'Sæt 2', title: 'Blame it on the boogie', lines: ['Intro: basgang', 'Vers: C - Eb - G# - Bb - Eb', '"I just can’t": Eb - C - F - G - Bb', 'B-stykke: Eb - C#'] },
  { set: 'Sæt 2', title: 'Levitating', lines: ['Bas rundgang: B - F# - E - B', 'Husk fill fra E høj oktav'] },
  { set: 'Sæt 2', title: 'Get lucky', lines: ['B - D - F# - E', 'Fade-slutning'] },
  { set: 'Sæt 2', title: 'Shallow', lines: ['Verse: guitar', 'Bridge: Em7 - D/F# - G - C G - D', 'Omk: Am - D/F# - G - D/F# - Em', 'Wow: B - D - A - E - B - D - A'] },
  { set: 'Sæt 2', title: 'Drunk in the morning', lines: ['Vers: Em7 - Dmaj7 ... C# - F#', 'Omk: Em - D ... Em - F# - Gm - A', 'D - G - E - A ... B'] },
  { set: 'Sæt 2', title: 'I’m outta love', lines: ['Husk klappestykke', 'Vers: Bbm - F - G# - Eb x2 ...', 'Omk og bro: som vers'] },
  { set: 'Sæt 2', title: '24k Magic', lines: ['Intro: F - C - C# - G x2', 'Bass riff (8. bånd)', 'Nedgang: Bb - G# - G - F# - F'] },
  { set: 'Sæt 2', title: 'Allerede is', lines: [], images: ['assets/screenshots/allerede-is-1.png'] },
  { set: 'Sæt 2', title: 'Boungiorno', lines: ['Gm - Ebmaj7 - Cm - D - D'] },
  { set: 'Sæt 2', title: 'Epic sax', lines: ['D - Bb - F - A'] },
  { set: 'Sæt 2', title: 'Jeg tager imod', lines: ['Gm - C - A - Dm', 'Husk wah'] },
  { set: 'Sæt 2', title: 'Stupid man', lines: ['Intro: Dm - C - Bb - F - Bb - C - F', 'Vers: F - C x2 · Dm - Am - G - C ...', 'Omk: Dm - C - Bb - F - Bb - C - F x2'] },
  { set: 'Sæt 3', title: 'Living on a prayer', lines: ['Riff: E - E - B - D - E - E - B - D', 'Pre-chorus: C - D - E', 'Omk: optakt til C - D - G - C - D', 'Modulering 3 halvtoner op'] },
  { set: 'Sæt 3', title: 'Happy', lines: ['Vers: Fm ...', 'Omk: C# - Cm - Cm - F'] },
  { set: 'Sæt 3', title: 'Let me entertain you', lines: ['Vers: F', 'Omk: F - G# - Bb'] },
  { set: 'Sæt 3', title: 'Love story', lines: [], images: ['assets/screenshots/love-story-1.png', 'assets/screenshots/love-story-2.png', 'assets/screenshots/love-story-3.png'] },
  { set: 'Sæt 3', title: 'Mucki Bar', lines: ['Emol - C# - F# - D#', 'Magnus omk: E - G# - B - C# - F# - G# - C# - D'] },
  { set: 'Sæt 3', title: 'Gimme Gimme Gimme', lines: ['Intro: D - E - F - G - A - D', 'Vers: G - F - G - C - D x2', 'Pre-chorus: Bb - G - G - A', 'Omk: D - Bb - C - D - Bb - D - C - D', 'Bro x4: D'] },
  { set: 'Sæt 3', title: 'Low', lines: ['D# - B - Bb'] },
  { set: 'Sæt 3', title: 'Kom tilbage nu', lines: ['Vers: Am - F - G - A', 'Bridge: A - B - D# - E', 'Omk: Dm - G - Am'] },
  { set: 'Sæt 3', title: 'Pregnant', lines: ['Fm - D# - C#', 'Husk outro med Jokke/Nils og flerstemmet riff'] },
  { set: 'Sæt 3', title: 'Freed from desire', lines: ['Dm - A - Bb - C', 'Bas: D - A - F - C · D - A - F - G - C'] },
  { set: 'Sæt 3', title: 'Seven nation army + Rage', lines: ['Husk at stemme ned', 'Basgang: G - A'], images: ['assets/screenshots/seven-nation-army-rage-1.png'] },
];

let setlist = JSON.parse(localStorage.getItem('tempo-setlist') || '[]');
let activeIndex = 0;

const $ = (id) => document.getElementById(id);
const save = () => localStorage.setItem('tempo-setlist', JSON.stringify(setlist));
const selectedCount = (songIndex) => setlist.filter((idx) => idx === songIndex).length;

function renderSongs() {
  const query = $('search').value.toLowerCase();
  const filteredSongs = songs
    .map((song, index) => ({ song, index }))
    .filter(({ song }) => song.title.toLowerCase().includes(query));

  $('songList').innerHTML = filteredSongs.map(({ song, index }) => {
    const count = selectedCount(index);
    const imageBadge = song.images?.length ? '<span class="song-badge">Screenshot</span>' : '';
    const selectedBadge = count ? `<span class="selected-badge">${count} valgt</span>` : '';

    return `
      <div class="song-row ${count ? 'is-selected' : ''}">
        <div class="song-meta">
          <div class="song-title">${song.title}</div>
          <div class="song-set">${song.set}${imageBadge}</div>
        </div>
        ${selectedBadge}
        <button class="add-button ${count ? 'is-selected' : ''}" data-add="${index}" aria-label="Tilføj ${song.title}">
          ${count ? '✓' : '+'}
        </button>
      </div>`;
  }).join('') || '<div class="empty-state">Ingen sange fundet.</div>';

  document.querySelectorAll('[data-add]').forEach((button) => {
    button.onclick = () => {
      setlist.push(Number(button.dataset.add));
      save();
      renderSongs();
      renderSetlist();
    };
  });
}

function renderSetlist() {
  $('songCount').textContent = `${setlist.length} ${setlist.length === 1 ? 'sang' : 'sange'} valgt`;
  $('setlistPill').textContent = setlist.length;
  const el = $('setlist');

  if (!setlist.length) {
    el.className = 'setlist empty-state';
    el.textContent = 'Tilføj sange ovenfor for at bygge din sætliste.';
    renderSongs();
    return;
  }

  el.className = 'setlist';
  el.innerHTML = setlist.map((idx, pos) => `
    <div class="set-row" draggable="true" data-pos="${pos}">
      <span class="drag-handle">☷</span>
      <div class="song-meta">
        <div class="song-title">${songs[idx].title}</div>
        <div class="song-set">${songs[idx].set}</div>
      </div>
      <button class="remove-button" data-remove="${pos}" aria-label="Fjern">×</button>
    </div>`).join('');

  document.querySelectorAll('[data-remove]').forEach((button) => {
    button.onclick = () => {
      setlist.splice(Number(button.dataset.remove), 1);
      save();
      renderSongs();
      renderSetlist();
    };
  });

  let dragged = null;
  document.querySelectorAll('.set-row').forEach((row) => {
    row.ondragstart = () => {
      dragged = Number(row.dataset.pos);
    };
    row.ondragover = (event) => event.preventDefault();
    row.ondrop = () => {
      const to = Number(row.dataset.pos);
      const item = setlist.splice(dragged, 1)[0];
      setlist.splice(to, 0, item);
      save();
      renderSetlist();
    };
  });
}

function openReader() {
  if (!setlist.length) return;
  activeIndex = 0;
  updateReader();
  $('reader').classList.remove('hidden');
  $('reader').setAttribute('aria-hidden', 'false');
}

function updateReader() {
  const song = songs[setlist[activeIndex]];
  const chordLines = song.lines.length
    ? song.lines.map((line) => `<div>${line}</div>`).join('')
    : '<div>Ingen tekstakkorder er noteret.</div>';
  const screenshots = song.images?.length
    ? `<div class="reader-images">${song.images.map((src) => `<img src="${src}" alt="Screenshot af akkorder til ${song.title}">`).join('')}</div>`
    : '';

  $('readerSet').textContent = `${song.set} · ${activeIndex + 1} af ${setlist.length}`;
  $('readerPosition').textContent = `${activeIndex + 1} / ${setlist.length}`;
  $('readerTitle').textContent = song.title;
  $('readerChords').innerHTML = chordLines + screenshots;
}

$('search').oninput = renderSongs;
$('playSetlist').onclick = openReader;
$('closeReader').onclick = () => {
  $('reader').classList.add('hidden');
  $('reader').setAttribute('aria-hidden', 'true');
};
$('readerNext').onclick = () => {
  if (activeIndex < setlist.length - 1) {
    activeIndex += 1;
    updateReader();
  }
};
$('clearSetlist').onclick = () => {
  if (setlist.length && confirm('Tøm sætliste?')) {
    setlist = [];
    save();
    renderSongs();
    renderSetlist();
  }
};

renderSongs();
renderSetlist();
