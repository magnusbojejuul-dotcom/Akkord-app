const songs = [
  { set: 'Sæt 1', title: 'Treasure', lines: ['Bb - G# - F - G - C'] },
  { set: 'Sæt 1', title: 'Fascination', lines: ['Intro: 2 omgange trommer', 'Vers + bro', 'A ... - F# - E - D', 'C# - D - E - F#m - Bm - E', 'Omk: E - F# - D - (C# - D - E) hurtigt', '"Word that\'s on" - F#m - A - D'] },
  { set: 'Sæt 1', title: 'Hjertet ser', lines: [], images: ['assets/screenshots/hjertet-ser-1.png', 'assets/screenshots/hjertet-ser-2.png'] },
  { set: 'Sæt 1', title: 'Alle Skuffer', lines: [] },
  { set: 'Sæt 1', title: 'Move your feet', lines: ['Intro:', 'E - C - A - G - F#', 'B - A', 'D - E - A'] },
  { set: 'Sæt 1', title: 'Juice', lines: ['Vers + intro: D - G - C - D', 'Bro: C - D ... A'] },
  { set: 'Sæt 1', title: 'Ain’t nobody', lines: ['Stem en halv tone ned', 'Intro: Eb x4 · Eb - Bb x2', 'Vers: (Eb x2 → optakt til B x2 → tilbage til Eb-nedgang) x2 · Bb - B - C# - Eb', 'Omkvæd: Eb - C# - G# - B x4', 'Derefter nogenlunde som intro'] },
  { set: 'Sæt 1', title: 'Sugar', lines: ['F# - Bbm - D#m - C#', 'Helt ned; vers slut "on me"'] },
  { set: 'Sæt 1', title: 'Elskovspony', lines: ['Intro: 1 omgang trommer', 'E - F# - G# - F# - A - C# - D - F# ... D', 'Omk: A - B - C# - E ... C#', 'Bridge: A - G#'] },
  { set: 'Sæt 1', title: 'Toxic', lines: ['C ... G .. C · "F - G x2"', 'Omk: C - D# - D - C# ... G# - G', 'Break kommer ind på D'] },
  { set: 'Sæt 1', title: 'Crazy in love', lines: ['D i stedet', 'Bb - G x3 - F x2', 'Bb - G x1 - F', 'Vers: F', 'Bb - G x4 - F', 'Vers: F', 'Bb - G x5', 'Rap del 1: F', 'Bb - G x1', 'Rap del 2: F', 'Bb - G x3', 'F ...', 'Bb - G x8 (måske 9)', 'Vers: F'] },
  { set: 'Sæt 1', title: 'Stor mand', lines: ['G - Bb - F - C'] },
  { set: 'Sæt 2', title: 'September', lines: ['Vers + intro: Dmaj7 - C#m7 - Bm7 - C#m7 - F#m7 x3 - Gmaj7/A', 'Eventuelt op på Bm7 inden A', 'Omk: Bm7 - E7 - C#m7 - F#m7 x3 - Gmaj7/A'] },
  { set: 'Sæt 2', title: 'Blame it on the boogie', lines: ['Intro: basgang', 'Vers: C - Eb - G# - Bb - Eb', 'Bliv på Bb til omkvædet', '"I just can’t": Eb - C - F - G - Bb', 'B-stykke: Eb - C#'] },
  { set: 'Sæt 2', title: 'Levitating', lines: ['Bas rundgang: B - F# - E - B', 'Husk fill fra E høj oktav'] },
  { set: 'Sæt 2', title: 'Get lucky', lines: ['B - D - F# - E', 'Fade-slutning'] },
  { set: 'Sæt 2', title: 'Shallow', lines: ['Verse: guitar', 'Bridge: Em7 - D/F# - G - C G - D', 'Omk: Am - D/F# - G - D/F# - Em', 'Wow: B - D - A - E - B - D - A'] },
  { set: 'Sæt 2', title: 'Drunk in the morning', lines: ['Vers: Em7 - Dmaj7 ... C# - F#', 'Omk: Em - D ... Em - F# - Gm - A', 'D - G - E - A ... B'] },
  { set: 'Sæt 2', title: 'I’m outta love', lines: ['Husk klappestykke', 'Vers: Bbm - F - G# - Eb x2 · Bbm - F - F# - F x2', 'Omkvæd: som vers', 'Bro: som vers'] },
  { set: 'Sæt 2', title: '24k Magic', lines: ['Intro: F - C - C# - G x2', 'Bass riff (8. bånd)', 'Bro til omkvæd: 11. bånd på D-strengen → 8. bånd på A-strengen', 'Nedgang: Bb - G# - G - F# - F'] },
  { set: 'Sæt 2', title: 'Allerede is', lines: [], images: ['assets/screenshots/allerede-is-1.png'] },
  { set: 'Sæt 2', title: 'Boungiorno', lines: ['Gm - Ebmaj7 - Cm - D - D'] },
  { set: 'Sæt 2', title: 'Epic sax', lines: ['D - Bb - F - A'] },
  { set: 'Sæt 2', title: 'Jeg tager imod', lines: ['Gm - C - A - Dm', 'Husk wah'] },
  { set: 'Sæt 2', title: 'Stupid man', lines: ['Lyt efter', 'Intro: Dm - C - Bb - F - Bb - C - F', 'Vers: F - C x2 · Dm - Am - G - C ...', 'Bb - C - F - C - Dm - Bb - C', 'Omk: Dm - C - Bb - F - Bb - C - F x2', 'C-stykke: som omkvæd'] },
  { set: 'Sæt 3', title: 'Living on a prayer', lines: ['Riff: E - E - B - D - E - E - B - D', 'Pre-chorus: C - D - E', 'Omk: optakt til C - D - G - C - D', 'Solo slutter på E', 'Modulering 3 halvtoner op'] },
  { set: 'Sæt 3', title: 'Happy', lines: ['Vers: Fm ...', 'Omk: C# - Cm - Cm - F'] },
  { set: 'Sæt 3', title: 'Let me entertain you', lines: ['Vers: F', 'Omk: F - G# - Bb'] },
  { set: 'Sæt 3', title: 'Love story', lines: [], images: ['assets/screenshots/love-story-1.png', 'assets/screenshots/love-story-2.png', 'assets/screenshots/love-story-3.png'] },
  { set: 'Sæt 3', title: 'Mucki Bar', lines: ['Emol - C# - F# - D#', 'Magnus omk: E - G# - B - C# - F# - G# - C# - D'] },
  { set: 'Sæt 3', title: 'Gimme Gimme Gimme', lines: ['Husk oktaver', 'Intro: D - E (kort overgang) - F - G (overgang) - A - D', 'Versintro med melodien: D - C - A - G - F', 'Vers: G - F (kort) - G - C (kort) - D x2', 'Pre-chorus: Bb - G - G - A', 'Omk: D - Bb - C - D - Bb - D - C - D', 'Bro x4: D (lyt efter)'] },
  { set: 'Sæt 3', title: 'Low', lines: ['D# - B - Bb'] },
  { set: 'Sæt 3', title: 'Kom tilbage nu', lines: ['Vers: Am - F - G - A', 'Bridge: A - B - D# - E', 'Omk: Dm - G - Am'] },
  { set: 'Sæt 3', title: 'Pregnant', lines: ['Fm - D# - C#', 'Husk outro med Jokke/Nils og flerstemmet riff', 'Outro: Alle'] },
  { set: 'Sæt 3', title: 'Freed from desire', lines: ['Dm - A - Bb - C', 'Basrundgang:', 'D (5. bånd) - A oktav - F (8. bånd) - C oktav', 'D (5. bånd) - A oktav - F (8. bånd) - G oktav - C'] },
  { set: 'Sæt 3', title: 'Seven nation army + Rage', lines: ['Husk at stemme ned', 'Basgang: G - A'] },
];

const extraSongs = [
  { set: 'Ekstranummer', group: 'extra', title: 'Bad guy', lines: ['“Lad mig høre jer sige … TEMPO”', 'Basgang'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Rigtige mænd', lines: ['Em - D/F# - G - Am - D x2', 'C/E - D/F# - G - C', 'C - D - Em', 'Opgang (Jeg puster)', 'C - D - H/Eb - Em - D/F# - G - C x2', 'Omkvæd:', 'Em - D/F# - G · C - D - H/Eb - Em', 'C - D - H/Eb - Em', 'C - D - D - Em', 'Modulering:', 'Fm - G - G# - Bb - D# x2', 'F - G - G# - C#', 'C# - D# - Fm', 'F - G - G# - C# - D# - E - Fm', 'C# - D# - E - Fm', 'C# - D# - D# - Fm'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Moves Like Jagger', lines: ['A - D'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Adventure of a Lifetime', lines: ['Dm - G - Am … E - C'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Sweet Dreams', lines: ['Husk lyd', 'Riff fra 11. bånd', 'Husk lift i solo'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Shake It Off', lines: ['Am - C - G'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Fine China', lines: ['Basgang (husk lyden)', 'Bro: Ab - Eb - Ab - Bb'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Ain’t No Mountain High Enough', lines: ['Tjek basgangen', 'Vers: Bm - E7 - G - A x2', 'Omkvæd: Bm - A - Bm7 x3 · E7 - G', 'Bro: A - F#7 - B6 - A … Bb7', 'Modulering: 1 tone'], links: [{ label: 'Åbn bas-tab', url: 'https://www.bigbasstabs.com/marvin_gaye_bass_tabs/aint_no_mountain_high_enough.html' }] },
  { set: 'Ekstranummer', group: 'extra', title: 'Ma Cherie Bon Bon', lines: ['Riff fra F → D osv.', 'Vers: C → D - G - Bb'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Sleeping My Day Away', lines: ['Am … F - D', 'Vers: Am - G/H - C - G - C - D - Am', 'Omkvæd: Am - F - D'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Alle skuffer over tid – Ung Kniv', lines: ['Intro, vers + solo: E - D - C', 'Omkvæd: C - D - C - D - E - E - D', 'Overgang til ma'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Rock With You', lines: ['Intro:', 'Ebm9 - Ab/Bb - Bb', 'Ebm9 - Ab/Bb - B/C#', 'Ebm9 - Ab/Bb - Bb', 'Gb/Ab - Ab - Gb/Ab - Ab', 'Vers: Ebm9 - Gb/Ab - Gb/Bb x2', 'Nedgang: Ab - Gb - F - Db', 'Bro til omkvæd:', 'Gbm7 - Fm7 - BM7 - Gb/Ab', 'Ebm7 - Fm7 - Gbm7', 'Ebm7 - Fm7 - Gbm7 - Gb/Ab', 'Omkvæd: som intro', 'C-stykke: Bbm7 - Eb9', 'Gbm7 - Fm7 - Bm7 - Gb/Ab', 'Anden gang: Ab - Bb - B - C', 'Halv tone op'], links: [{ label: 'Åbn akkorder', url: 'https://tabs.ultimate-guitar.com/tab/michael-jackson/rock-with-you-chords-574520' }] },
  { set: 'Ekstranummer', group: 'extra', title: 'Igen og igen og', lines: ['Intro/vers: Fm - G# … C# - Bbm', 'Omkvæd: C# - Bbm - F', 'B-stykke: Fm - G# - C#', 'Outro: Fm - Fm - G# - G - D# … F - G# - F - G#', 'Outro bas: Fm - Fm - D# - C - C# - Bb - C# - D#'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Poker Face', lines: ['Vers: G# - Bm - F# - C#', 'Omkvæd: G# - E - B - F#', 'Pump'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Kom tilbage nu', lines: ['Vers: Am - F - G - A', 'Bridge: A - B - B - E', 'Omkvæd: Dm - G - A'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Watermelon Sugar', lines: [] },
  { set: 'Ekstranummer', group: 'extra', title: 'Blinding Lights', lines: ['Basgang: F - D# - F - C · D# - F - Bb · Bb - Ab - G'], links: [{ label: 'Åbn bas-tab', url: 'https://tabs.ultimate-guitar.com/tab/the-weeknd/blinding-lights-bass-3292400' }] },
  { set: 'Ekstranummer', group: 'extra', title: 'Boungiorno', lines: ['Gm - Ebmaj7 - Cm - D - D'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Levitating', lines: ['Basrundgang: B - F# - E - B', 'Husk fill fra E høj oktav'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Jeg vil la’ lyset brænde', lines: ['Intro + omkvæd + bro:', 'B - C#m - A - B', 'B - C#m - A - E', 'Vers:', 'Gmaj7 - A - Bm - D/F# x2', 'Gmaj7 - A - D - F#/C# - Bm - A', 'Solo:', 'E - F#m - D - E', 'E - F#m - D - A'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Crazy in Love', lines: ['Bb - G', 'Vers: F'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Umbrella', lines: ['Vers: F# - C# - F - Bbm', 'Omkvæd: F# - C# - G# - Bbm', '“Ella”: C#/G# - F - Bbm - F#', 'Bro: B - F# - C# - B - F# - F - F#'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Den jeg elsker', lines: ['Intro: Gm7 - F', 'Vers: Bb - Am7 - C', 'Bro: Gm7 - F - Bb - Fm - F', 'Gm - F - Bb - C', 'Omkvæd: Dm - C - Dm - C - F - Bb - C x2', 'Dm - C/D - Gm7 - Bb/F'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Sig mig', lines: ['Intro: G … Am', 'Vers: G - G - Am - Am x2 · C', 'Pre-chorus: C - Bm - B - Em - A', 'Omkvæd: G - G - G - G - Am', 'C-stykke: Cmaj - Bm7 - B7 - Em - Ebm → Dm7 - G', 'C - Bm - B7 - Em - A7'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Do It Like a Dude', lines: ['Dm - F - C', 'Husk break på “Hey”', 'Igen-igen-lyd', 'Slut på Ramus: “Do it like a dude”'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Murder', lines: ['Vers: A - G# - G', 'Omkvæd: F - C - G - Bb … A - G# - G'], images: ['assets/screenshots/extra-murder-1.png'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Valerie', lines: ['Vers: D# - Fm', 'Bro: G# - Gm x3 · slut A# · D# - Fm'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Low', lines: ['D#m … G# - G# - C# - B'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Stor mand', lines: ['G - Bb - F - C'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Love Story', lines: [], images: ['assets/screenshots/love-story-1.png', 'assets/screenshots/love-story-2.png', 'assets/screenshots/love-story-3.png', 'assets/screenshots/extra-love-story-4.png'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Shadows', lines: ['Bas, vers + intro: C - C (oktav) - G - F', 'Omkvæd: D# - G - F - C', 'B-stykke: D# - G - F · C - D# - G … slut D', 'Slut F'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Rock Your Body', lines: ['G - A - Em', 'Bridge: B - C x2 · A', 'Igen og slut på F'] },
  { set: 'Ekstranummer', group: 'extra', title: 'My Love', lines: ['Em - Bm - Bm - A'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Kom lad os gå', lines: ['Halftime-bro', 'G# - C# - F#m - B - C#', 'Vers: G# - C# - F# - B x2', '“Alting kommer”: B - G#m - C# - F#m - B - E (dyb) … B - G# - C# - C - D - E', 'Omkvæd: Am - D - Gm - C x2 - F', 'Slut: Eb - F'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Ain’t Nobody', lines: ['Stem en halv tone ned', 'Intro: Eb x4 · Eb - Bb x2', 'Vers: (Eb x2 → optakt til B x2 → tilbage til Eb-nedgang) x2 · Bb - B - C# - Eb', 'Omkvæd: Eb - C# - G# - B x4', 'Derefter nogenlunde som intro'], links: [{ label: 'Åbn bas-tab', url: 'https://freeguitarprotabs.com/tabs/x3gW/view-online/ain-t-nobody-bass/by/chaka-khan' }] },
  { set: 'Ekstranummer', group: 'extra', title: 'Hjem fra fabrikken', lines: ['Vers: Dbmaj7 - Bbm - Fm - Eb', 'Bro: Dbmaj7 - C11 - Eb11 - Ab11', 'Omkvæd (hurtigt på lift): Dbmaj7 - Cm7 - Bbm7 - Ab … Fm7 - Eb', 'Optakt 1: Db - Eb - F - F#', 'Optakt 2: Eb - F - F# - G#'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Lean on Me', lines: [], images: ['assets/screenshots/extra-lean-on-me-1.png', 'assets/screenshots/extra-lean-on-me-2.png'], links: [{ label: 'Åbn akkorder', url: 'https://tabs.ultimate-guitar.com/tab/bill-withers/lean-on-me-chords-785238' }] },
  { set: 'Ekstranummer', group: 'extra', title: 'Medina', lines: ['C - G# - Bb'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Señorita', lines: ['Bb - G# - F#', 'C-stykke: D - A x2 · C - G - C - G'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Leave (Get Out)', lines: ['Intro + vers: Gm - Dm - C - Bb', 'Bro: C# - Eb - F x2 … C'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Rude Boy + Model', lines: ['Omkvæd: D# - Bb - G#', 'Heavy outro: D#-mol'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Shivers', lines: ['Bm - G - D - Am'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Den bedste tid', lines: ['Solo: G - Em - Am7 - B', 'Solo/guitarstykke: A# - Gm - F - D#'], images: ['assets/screenshots/extra-den-bedste-tid-1.png', 'assets/screenshots/extra-den-bedste-tid-2.png', 'assets/screenshots/extra-den-bedste-tid-3.png'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Don’t Start Now', lines: [], links: [{ label: 'Åbn bas-tab', url: 'https://www.songsterr.com/a/wsa/dua-lipa-dont-start-now-bass-tab-s474943' }] },
  { set: 'Ekstranummer', group: 'extra', title: 'Galway Girl', lines: [], links: [{ label: 'Åbn akkorder', url: 'https://tabs.ultimate-guitar.com/tab/ed-sheeran/galway-girl-chords-1956593' }] },
  { set: 'Ekstranummer', group: 'extra', title: 'Juice', lines: ['Vers + intro: D - G - C', 'Bro: C - D … A'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Freed From Desire', lines: ['Dm - A - Bb - C', 'Basrundgang:', 'D (5) - A oktav - F (8) - C oktav', 'D (5) - A oktav - F (8) - G oktav - C'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Føler mig selv 100', lines: ['Ab - Cm - Bb - Bb', 'Husk nedgang inden solo'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Allerede is', lines: [], images: ['assets/screenshots/allerede-is-1.png'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Sugar', lines: ['F# - Bbm - D#m - C#', 'Helt ned; vers slut “on me”', 'Katrine-solo før broen'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Darude – Sandstorm', lines: ['Em - A - G'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Insomnia', lines: ['Bm - F#m - G'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Dancing in the Moonlight', lines: ['Gm - C - F - C - Dm', 'Slut F → Murder'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Fri', lines: ['Gm - Gm - Bb - F'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Julemedley', lines: ['Jesus – intro: F', 'Jesus – vers 1: F / F / Gm / C', 'Jesus – vers 2 til bro: Dm / Am / Dm / Am / Gm / Gm / Gm / C', 'Jesus – omkvæd: G / Em / Am / D / Em / Cmaj / Am7 / Am7b5 / G', 'Banjo-solo: Aadd9 / F#m7 / Bm7 / D/E / F#m7 / D / Bm7 / E', 'Omkvæd: Aadd9 / F#m7 / Bm7 / D/E / F#m7 / Dadd9 / Bm7 / E', 'Stjerneregn: Am - Dm - F - C - E', 'Am - Dm - F - C - B', 'A - Dm - C - G - Bb', 'A - Dm - C - G - Asus4', 'Slut på F', 'Loke: F - Bb', 'Solo: husk anden del, break 1 takt og C - Bb - D# - F'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Jeg ka’ rigtig godt li’ dig', lines: ['Vers: Eb - Ab', 'Omkvæd: Bb - G#', 'Nedgang til bro: G# - C# - Bb - F', 'C-stykke: B - Bb/Ab - Db - Db/Bb'] },
  { set: 'Ekstranummer', group: 'extra', title: 'For evigt', lines: ['Vers: D - A - Hm - Hm - G - A … D - A', 'Overgang til omkvæd: E - A', 'Omkvæd:', 'G - G - D - Bm - G - G - D (C - D)', 'G - A - D - G - G - A - D', 'C-stykke: D - G … Em - A - D - G - A7', 'Solo: Dm - F - C - G … Bb - F - G'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Vi er Lykkeliga', lines: ['Vers 1: akustisk klaver · C - Am … G', 'Bro 1: bas og lidt trommer · F - G', 'Omkvæd: C - Am - F - G … F - G - C - F - F - C - F … G', 'Vers 2 · Bro 2 · Omkvæd · saxsolo', 'Bro 3 med klap; mellemstykke leder til modulering på A', 'Omkvæd moduleret 1 hel tone:', 'D - Hm - G - A … G - A - D - G - G - D (hold) … A', 'Nedgang: D - Hm - G · hold A · slut D', 'Omkvæd 1 hel tone op og afslutning'] },
  { set: 'Ekstranummer', group: 'extra', title: 'We Are the Champions', lines: ['Nedgang: Eb - Bb/D - Cm - F7 - Bb - Bb … C', 'Omkvæd:', 'F - Am - Dm - Bb - C7', 'F - Am - Bb - F#', 'Gm - C/G - (Bbm - Bbm/Db - E - G)', 'F - Eb/G - Ab - Bb - C - Fm'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Øde Ø', lines: ['Vers: G# - C# - G# - C# … Fm - D# - G#', 'Omkvæd: C# - G# - D# - Fm · C# - G# - D# x2', 'G# - C# - G# - Fm - D# - G#'] },
  { set: 'Ekstranummer', group: 'extra', title: 'Boogie Woogie', lines: ['C - G7', 'Øv efter Spotify-versionen; vi spiller præcist det samme'] },
];

// Ekstranumrene tilføjes efter de faste sæt, så eksisterende gemte sangindekser bevares.
songs.push(...extraSongs);

const ZOOM_STORAGE_KEY = 'tempo-song-zoom-v2';
const DEFAULT_ZOOM = 0.7;

let setlist = JSON.parse(localStorage.getItem('tempo-setlist') || '[]');
let songZooms = JSON.parse(localStorage.getItem(ZOOM_STORAGE_KEY) || '{}');
let activeIndex = 0;
let swipeStart = null;
let touchSwipeStart = null;

const ZOOM_MIN = 0.7;
const ZOOM_MAX = 1.6;
const ZOOM_STEP = 0.1;

const $ = (id) => document.getElementById(id);
const save = () => localStorage.setItem('tempo-setlist', JSON.stringify(setlist));
const saveZooms = () => localStorage.setItem(ZOOM_STORAGE_KEY, JSON.stringify(songZooms));
const selectedCount = (songIndex) => setlist.filter((idx) => idx === songIndex).length;

function getSongZoom(songIndex) {
  const storedZoom = Number(songZooms[songIndex]);
  return storedZoom >= ZOOM_MIN && storedZoom <= ZOOM_MAX ? storedZoom : DEFAULT_ZOOM;
}

function applyReaderZoom(songIndex = setlist[activeIndex]) {
  const zoom = getSongZoom(songIndex);
  $('readerChords').style.setProperty('--content-scale', zoom);
  $('readerChords').style.setProperty('--content-width', `${Math.round(zoom * 100)}%`);
  $('readerChords').style.setProperty('--image-max-height', `${82 * zoom}vh`);
  $('zoomValue').value = `${Math.round(zoom * 100)}%`;
  $('zoomValue').textContent = `${Math.round(zoom * 100)}%`;
  $('zoomOut').disabled = zoom <= ZOOM_MIN;
  $('zoomIn').disabled = zoom >= ZOOM_MAX;
  $('readerMain').classList.toggle('is-zoomed', zoom > 1);
}

function changeReaderZoom(direction) {
  const songIndex = setlist[activeIndex];
  if (songIndex === undefined) return;

  const nextZoom = Math.min(ZOOM_MAX, Math.max(
    ZOOM_MIN,
    Number((getSongZoom(songIndex) + direction * ZOOM_STEP).toFixed(1)),
  ));

  songZooms[songIndex] = nextZoom;
  saveZooms();
  applyReaderZoom(songIndex);
}

function fullscreenElement() {
  return document.fullscreenElement || document.webkitFullscreenElement;
}

function updateFullscreenButton() {
  const isFullscreen = Boolean(fullscreenElement());
  $('toggleFullscreen').setAttribute('aria-pressed', String(isFullscreen));
  $('fullscreenLabel').textContent = isFullscreen ? 'Afslut fuld skærm' : 'Fuld skærm';
}

async function toggleFullscreen() {
  try {
    if (fullscreenElement()) {
      const exit = document.exitFullscreen || document.webkitExitFullscreen;
      await exit?.call(document);
    } else {
      const request = $('reader').requestFullscreen || $('reader').webkitRequestFullscreen;
      if (!request) throw new Error('Fullscreen understøttes ikke');
      await request.call($('reader'));
    }
    setTimeout(updateFullscreenButton, 250);
    setTimeout(updateFullscreenButton, 1200);
  } catch (error) {
    $('fullscreenLabel').textContent = 'Ikke understøttet';
    setTimeout(updateFullscreenButton, 1800);
  }
}

function renderSongs() {
  const query = $('search').value.trim().toLowerCase();
  const filteredSongs = songs
    .map((song, index) => ({ song, index }))
    .filter(({ song }) => song.title.toLowerCase().includes(query));

  const renderSongRows = (items, emptyMessage) => items.map(({ song, index }) => {
    const count = selectedCount(index);
    const setlistPosition = setlist.indexOf(index);
    const positionLabel = setlistPosition >= 0 ? `${song.set}, sang ${setlistPosition + 1}` : song.set;
    const imageBadge = song.images?.length ? ' <span class="song-badge">Screenshot</span>' : '';
    const linkBadge = song.links?.length ? ' <span class="song-badge">Link</span>' : '';
    const selectedBadge = count ? '<span class="selected-badge">Valgt</span>' : '';

    return `
      <button type="button" class="song-row ${count ? 'is-selected' : ''}" data-toggle-song="${index}" aria-pressed="${count ? 'true' : 'false'}">
        <div class="song-meta">
          <div class="song-title">${song.title}</div>
          <div class="song-set">${positionLabel}${imageBadge}${linkBadge}</div>
        </div>
        ${selectedBadge}
        <span class="add-button ${count ? 'is-selected' : ''}" aria-hidden="true">
          ${count ? '✓' : '+'}
        </span>
      </button>`;
  }).join('') || `<div class="empty-state">${emptyMessage}</div>`;

  const mainSongs = filteredSongs.filter(({ song }) => song.group !== 'extra');
  const extras = filteredSongs.filter(({ song }) => song.group === 'extra');

  $('songList').innerHTML = renderSongRows(mainSongs, 'Ingen sange fra Sæt 1–3 fundet.');
  $('extraSongList').innerHTML = renderSongRows(extras, 'Ingen ekstranumre fundet.');

  const selectedExtras = songs.reduce((total, song, index) => (
    total + (song.group === 'extra' && selectedCount(index) ? 1 : 0)
  ), 0);
  $('extraSongCount').textContent = `${extraSongs.length} sange${selectedExtras ? ` · ${selectedExtras} valgt` : ''}`;

  if (query && extras.length) {
    $('extrasDetails').open = true;
  }

  document.querySelectorAll('[data-toggle-song]').forEach((songButton) => {
    songButton.onclick = () => {
      const songIndex = Number(songButton.dataset.toggleSong);
      if (selectedCount(songIndex)) {
        setlist = setlist.filter((index) => index !== songIndex);
      } else {
        setlist.push(songIndex);
      }
      save();
      renderSongs();
      renderSetlist();
    };
  });
}

function moveSetlistItem(from, to) {
  if (from < 0 || to < 0 || from >= setlist.length || to >= setlist.length || from === to) return;

  const [item] = setlist.splice(from, 1);
  setlist.splice(to, 0, item);
  save();
  renderSongs();
  renderSetlist();
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
      <span class="drag-handle" aria-hidden="true">☷</span>
      <div class="song-meta">
        <div class="song-title">${songs[idx].title}</div>
        <div class="song-set">${songs[idx].set}</div>
      </div>
      <div class="set-actions">
        <div class="set-move-controls" role="group" aria-label="Flyt ${songs[idx].title}">
          <button type="button" class="move-button" data-move-up="${pos}" aria-label="Flyt ${songs[idx].title} op" ${pos === 0 ? 'disabled' : ''}>↑</button>
          <button type="button" class="move-button" data-move-down="${pos}" aria-label="Flyt ${songs[idx].title} ned" ${pos === setlist.length - 1 ? 'disabled' : ''}>↓</button>
        </div>
        <button type="button" class="remove-button" data-remove="${pos}" aria-label="Fjern ${songs[idx].title}">×</button>
      </div>
    </div>`).join('');

  document.querySelectorAll('[data-move-up]').forEach((button) => {
    button.onclick = () => moveSetlistItem(Number(button.dataset.moveUp), Number(button.dataset.moveUp) - 1);
  });

  document.querySelectorAll('[data-move-down]').forEach((button) => {
    button.onclick = () => moveSetlistItem(Number(button.dataset.moveDown), Number(button.dataset.moveDown) + 1);
  });

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
    row.ondragstart = (event) => {
      dragged = Number(row.dataset.pos);
      row.classList.add('is-dragging');
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/plain', String(dragged));
    };
    row.ondragend = () => {
      dragged = null;
      document.querySelectorAll('.set-row').forEach((item) => item.classList.remove('is-dragging', 'is-drop-target'));
    };
    row.ondragenter = () => row.classList.add('is-drop-target');
    row.ondragleave = (event) => {
      if (!row.contains(event.relatedTarget)) row.classList.remove('is-drop-target');
    };
    row.ondragover = (event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
    };
    row.ondrop = (event) => {
      event.preventDefault();
      const to = Number(row.dataset.pos);
      const from = dragged ?? Number(event.dataTransfer.getData('text/plain'));
      moveSetlistItem(from, to);
    };
  });
}

function openReader() {
  if (!setlist.length) return;
  activeIndex = 0;
  updateReader();
  $('reader').classList.remove('hidden');
  $('reader').setAttribute('aria-hidden', 'false');
  document.body.classList.add('reader-open');
}

function renderReaderQueue() {
  $('readerQueue').innerHTML = setlist.map((songIndex, index) => {
    const state = index < activeIndex ? 'is-past' : index === activeIndex ? 'is-active' : 'is-upcoming';
    const marker = index < activeIndex ? '✓' : String(index + 1).padStart(2, '0');

    return `
      <button class="queue-song ${state}" data-reader-index="${index}" ${index === activeIndex ? 'aria-current="step"' : ''}>
        <span class="queue-number">${marker}</span>
        <span class="queue-copy">
          <strong>${songs[songIndex].title}</strong>
          <small>${index < activeIndex ? 'Spillet' : index === activeIndex ? 'Spiller nu' : songs[songIndex].set}</small>
        </span>
      </button>`;
  }).join('');

  document.querySelectorAll('[data-reader-index]').forEach((button) => {
    button.onclick = () => {
      activeIndex = Number(button.dataset.readerIndex);
      updateReader();
    };
  });

  requestAnimationFrame(() => {
    document.querySelector('.queue-song.is-active')?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  });
}

function updateReader() {
  const songIndex = setlist[activeIndex];
  const song = songs[songIndex];
  const chordLines = song.lines.length
    ? song.lines.map((line) => `<div>${line}</div>`).join('')
    : '<div>Ingen tekstakkorder er noteret.</div>';
  const screenshots = song.images?.length
    ? `<div class="reader-images">${song.images.map((src) => `<img src="${src}" alt="Screenshot af akkorder til ${song.title}">`).join('')}</div>`
    : '';
  const links = song.links?.length
    ? `<div class="reader-links">${song.links.map((link) => `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label}<span aria-hidden="true">↗</span></a>`).join('')}</div>`
    : '';

  $('readerSet').textContent = `${song.set} · SPILLER NU`;
  $('readerPosition').textContent = `Nummer ${activeIndex + 1} af ${setlist.length}`;
  $('readerTitle').textContent = song.title;
  $('readerChords').innerHTML = chordLines + links + screenshots;
  applyReaderZoom(songIndex);
  $('readerProgressBar').style.width = `${((activeIndex + 1) / setlist.length) * 100}%`;
  $('readerPrevious').disabled = activeIndex === 0;
  $('readerNext').disabled = activeIndex === setlist.length - 1;
  renderReaderQueue();
  $('readerMain')?.scrollTo({ top: 0, behavior: 'instant' });
}

function navigateReader(offset) {
  const nextIndex = activeIndex + offset;
  if (nextIndex < 0 || nextIndex >= setlist.length) return;

  activeIndex = nextIndex;
  updateReader();

  const article = $('readerMain').querySelector('article');
  const animationClass = offset > 0 ? 'enters-from-right' : 'enters-from-left';
  article.classList.remove('enters-from-left', 'enters-from-right');
  void article.offsetWidth;
  article.classList.add(animationClass);
  article.addEventListener('animationend', () => article.classList.remove(animationClass), { once: true });
}

function createSwipeStart(x, y, id, target) {
  const imageScroller = target instanceof Element ? target.closest('.reader-images') : null;

  return {
    id,
    x,
    y,
    time: Date.now(),
    imageScroller,
    imageScrollLeft: imageScroller?.scrollLeft || 0,
    imageMaxScroll: imageScroller
      ? Math.max(0, imageScroller.scrollWidth - imageScroller.clientWidth)
      : 0,
  };
}

function finishSwipeGesture(start, x, y) {
  const distanceX = x - start.x;
  const distanceY = y - start.y;
  const elapsed = Date.now() - start.time;

  const isHorizontalSwipe = Math.abs(distanceX) >= 65 && Math.abs(distanceX) > Math.abs(distanceY) * 1.35;
  if (!isHorizontalSwipe || elapsed > 1000) return;

  const direction = distanceX < 0 ? 1 : -1;

  // På et forstørret screenshot panorerer swipet billedet først. Ved billedets
  // kant skifter det næste swipe sang, ligesom på almindelige akkordfelter.
  if (start.imageScroller && start.imageMaxScroll > 2) {
    const atLeftEdge = start.imageScrollLeft <= 2;
    const atRightEdge = start.imageScrollLeft >= start.imageMaxScroll - 2;
    const shouldPanImage = direction > 0 ? !atRightEdge : !atLeftEdge;
    if (shouldPanImage) return;
  }

  navigateReader(direction);
}

function startSwipe(event) {
  if (event.pointerType === 'touch' || !event.isPrimary) return;
  swipeStart = createSwipeStart(event.clientX, event.clientY, event.pointerId, event.target);
}

function finishSwipe(event) {
  if (!swipeStart || event.pointerId !== swipeStart.id) return;
  const start = swipeStart;
  swipeStart = null;
  finishSwipeGesture(start, event.clientX, event.clientY);
}

function startTouchSwipe(event) {
  if (event.touches.length !== 1) {
    touchSwipeStart = null;
    return;
  }

  const touch = event.touches[0];
  touchSwipeStart = createSwipeStart(touch.clientX, touch.clientY, touch.identifier, event.target);
}

function finishTouchSwipe(event) {
  if (!touchSwipeStart) return;

  const touch = Array.from(event.changedTouches).find(({ identifier }) => identifier === touchSwipeStart.id);
  if (!touch) return;

  const start = touchSwipeStart;
  touchSwipeStart = null;
  finishSwipeGesture(start, touch.clientX, touch.clientY);
}

$('search').oninput = renderSongs;
$('playSetlist').onclick = openReader;
$('closeReader').onclick = () => {
  if (fullscreenElement()) {
    const exit = document.exitFullscreen || document.webkitExitFullscreen;
    exit?.call(document);
  }
  $('reader').classList.add('hidden');
  $('reader').setAttribute('aria-hidden', 'true');
  document.body.classList.remove('reader-open');
};
$('readerPrevious').onclick = () => {
  navigateReader(-1);
};
$('readerNext').onclick = () => {
  navigateReader(1);
};
$('zoomOut').onclick = () => changeReaderZoom(-1);
$('zoomIn').onclick = () => changeReaderZoom(1);
$('toggleFullscreen').onclick = toggleFullscreen;
document.addEventListener('fullscreenchange', updateFullscreenButton);
document.addEventListener('webkitfullscreenchange', updateFullscreenButton);
$('readerMain').addEventListener('pointerdown', startSwipe);
$('readerMain').addEventListener('pointerup', finishSwipe);
$('readerMain').addEventListener('pointercancel', () => { swipeStart = null; });
$('readerMain').addEventListener('touchstart', startTouchSwipe, { passive: true });
$('readerMain').addEventListener('touchend', finishTouchSwipe, { passive: true });
$('readerMain').addEventListener('touchcancel', () => { touchSwipeStart = null; }, { passive: true });
document.addEventListener('keydown', (event) => {
  if ($('reader').classList.contains('hidden')) return;
  if (event.key === 'ArrowLeft') navigateReader(-1);
  if (event.key === 'ArrowRight') navigateReader(1);
});
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
updateFullscreenButton();
