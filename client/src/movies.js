const data = [{
  title: 'The Shawshank Redemption', year: 1994, imdb_rating: 9.3, genre: ['Drama'], duration: '2h 22m', movie_id: 'tt0111161',
}, {
  title: 'The Godfather', year: 1972, imdb_rating: 9.2, genre: ['Crime', 'Drama'], duration: '2h 55m', movie_id: 'tt0068646',
}, {
  title: 'The Dark Knight', year: 2008, imdb_rating: 9, genre: ['Action', 'Crime', 'Drama'], duration: '2h 32m', movie_id: 'tt0468569',
}, {
  title: 'The Godfather Part II', year: 1974, imdb_rating: 9, genre: ['Crime', 'Drama'], duration: '3h 22m', movie_id: 'tt0071562',
}, {
  title: '12 Angry Men', year: 1957, imdb_rating: 9, genre: ['Crime', 'Drama'], duration: '1h 36m', movie_id: 'tt0050083',
}, {
  title: "Schindler's List", year: 1993, imdb_rating: 9, genre: ['Biography', 'Drama', 'History'], duration: '3h 15m', movie_id: 'tt0108052',
}, {
  title: 'The Lord of the Rings: The Return of the King', year: 2003, imdb_rating: 9, genre: ['Action', 'Adventure', 'Drama'], duration: '3h 21m', movie_id: 'tt0167260',
}, {
  title: 'Pulp Fiction', year: 1994, imdb_rating: 8.9, genre: ['Crime', 'Drama'], duration: '2h 34m', movie_id: 'tt0110912',
}, {
  title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, imdb_rating: 8.8, genre: ['Action', 'Adventure', 'Drama'], duration: '2h 58m', movie_id: 'tt0120737',
}, {
  title: 'The Good, the Bad and the Ugly', year: 1966, imdb_rating: 8.8, genre: ['Adventure', 'Western'], duration: '2h 58m', movie_id: 'tt0060196',
}, {
  title: 'Forrest Gump', year: 1994, imdb_rating: 8.8, genre: ['Drama', 'Romance'], duration: '2h 22m', movie_id: 'tt0109830',
}, {
  title: 'Fight Club', year: 1999, imdb_rating: 8.8, genre: ['Drama'], duration: '2h 19m', movie_id: 'tt0137523',
}, {
  title: 'The Lord of the Rings: The Two Towers', year: 2002, imdb_rating: 8.8, genre: ['Action', 'Adventure', 'Drama'], duration: '2h 59m', movie_id: 'tt0167261',
}, {
  title: 'Inception', year: 2010, imdb_rating: 8.8, genre: ['Action', 'Adventure', 'Sci-Fi'], duration: '2h 28m', movie_id: 'tt1375666',
}, {
  title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980, imdb_rating: 8.7, genre: ['Action', 'Adventure', 'Fantasy'], duration: '2h 4m', movie_id: 'tt0080684',
}, {
  title: 'The Matrix', year: 1999, imdb_rating: 8.7, genre: ['Action', 'Sci-Fi'], duration: '2h 16m', movie_id: 'tt0133093',
}, {
  title: 'Goodfellas', year: 1990, imdb_rating: 8.7, genre: ['Biography', 'Crime', 'Drama'], duration: '2h 25m', movie_id: 'tt0099685',
}, {
  title: "One Flew Over the Cuckoo's Nest", year: 1975, imdb_rating: 8.7, genre: ['Drama'], duration: '2h 13m', movie_id: 'tt0073486',
}, {
  title: 'Se7en', year: 1995, imdb_rating: 8.6, genre: ['Crime', 'Drama', 'Mystery'], duration: '2h 7m', movie_id: 'tt0114369',
}, {
  title: 'Seven Samurai', year: 1954, imdb_rating: 8.6, genre: ['Action', 'Drama'], duration: '3h 27m', movie_id: 'tt0047478',
}, {
  title: "It's a Wonderful Life", year: 1946, imdb_rating: 8.6, genre: ['Drama', 'Family', 'Fantasy'], duration: '2h 10m', movie_id: 'tt0038650',
}, {
  title: 'The Silence of the Lambs', year: 1991, imdb_rating: 8.6, genre: ['Crime', 'Drama', 'Thriller'], duration: '1h 58m', movie_id: 'tt0102926',
}, {
  title: 'Saving Private Ryan', year: 1998, imdb_rating: 8.6, genre: ['Drama', 'War'], duration: '2h 49m', movie_id: 'tt0120815',
}, {
  title: 'City of God', year: 2002, imdb_rating: 8.6, genre: ['Crime', 'Drama'], duration: '2h 10m', movie_id: 'tt0317248',
}, {
  title: 'Interstellar', year: 2014, imdb_rating: 8.6, genre: ['Adventure', 'Drama', 'Sci-Fi'], duration: '2h 49m', movie_id: 'tt0816692',
}, {
  title: 'Life Is Beautiful', year: 1997, imdb_rating: 8.6, genre: ['Comedy', 'Drama', 'Romance'], duration: '1h 56m', movie_id: 'tt0118799',
}, {
  title: 'The Green Mile', year: 1999, imdb_rating: 8.6, genre: ['Crime', 'Drama', 'Fantasy'], duration: '3h 9m', movie_id: 'tt0120689',
}, {
  title: 'Star Wars', year: 1977, imdb_rating: 8.6, genre: ['Action', 'Adventure', 'Fantasy'], duration: '2h 1m', movie_id: 'tt0076759',
}, {
  title: 'Terminator 2: Judgment Day', year: 1991, imdb_rating: 8.6, genre: ['Action', 'Sci-Fi'], duration: '2h 17m', movie_id: 'tt0103064',
}, {
  title: 'Back to the Future', year: 1985, imdb_rating: 8.5, genre: ['Adventure', 'Comedy', 'Sci-Fi'], duration: '1h 56m', movie_id: 'tt0088763',
}, {
  title: 'Spirited Away', year: 2001, imdb_rating: 8.6, genre: ['Animation', 'Adventure', 'Family'], duration: '2h 5m', movie_id: 'tt0245429',
}, {
  title: 'The Pianist', year: 2002, imdb_rating: 8.5, genre: ['Biography', 'Drama', 'Music'], duration: '2h 30m', movie_id: 'tt0253474',
}, {
  title: 'Psycho', year: 1960, imdb_rating: 8.5, genre: ['Horror', 'Mystery', 'Thriller'], duration: '1h 49m', movie_id: 'tt0054215',
}, {
  title: 'Parasite', year: 2019, imdb_rating: 8.5, genre: ['Drama', 'Thriller'], duration: '2h 12m', movie_id: 'tt6751668',
}, {
  title: 'Léon: The Professional', year: 1994, imdb_rating: 8.5, genre: ['Action', 'Crime', 'Drama'], duration: '1h 50m', movie_id: 'tt0110413',
}, {
  title: 'The Lion King', year: 1994, imdb_rating: 8.5, genre: ['Animation', 'Adventure', 'Drama'], duration: '1h 28m', movie_id: 'tt0110357',
}, {
  title: 'Gladiator', year: 2000, imdb_rating: 8.5, genre: ['Action', 'Adventure', 'Drama'], duration: '2h 35m', movie_id: 'tt0172495',
}, {
  title: 'American History X', year: 1998, imdb_rating: 8.5, genre: ['Crime', 'Drama'], duration: '1h 59m', movie_id: 'tt0120586',
}, {
  title: 'The Departed', year: 2006, imdb_rating: 8.5, genre: ['Crime', 'Drama', 'Thriller'], duration: '2h 31m', movie_id: 'tt0407887',
}, {
  title: 'The Usual Suspects', year: 1995, imdb_rating: 8.5, genre: ['Crime', 'Drama', 'Mystery'], duration: '1h 46m', movie_id: 'tt0114814',
}, {
  title: 'The Prestige', year: 2006, imdb_rating: 8.5, genre: ['Drama', 'Mystery', 'Sci-Fi'], duration: '2h 10m', movie_id: 'tt0482571',
}, {
  title: 'Whiplash', year: 2014, imdb_rating: 8.5, genre: ['Drama', 'Music'], duration: '1h 46m', movie_id: 'tt2582802',
}, {
  title: 'Casablanca', year: 1942, imdb_rating: 8.5, genre: ['Drama', 'Romance', 'War'], duration: '1h 42m', movie_id: 'tt0034583',
}, {
  title: 'Grave of the Fireflies', year: 1988, imdb_rating: 8.5, genre: ['Animation', 'Drama', 'War'], duration: '1h 29m', movie_id: 'tt0095327',
}, {
  title: 'Harakiri', year: 1962, imdb_rating: 8.6, genre: ['Action', 'Drama', 'Mystery'], duration: '2h 13m', movie_id: 'tt0056058',
}, {
  title: 'The Intouchables', year: 2011, imdb_rating: 8.5, genre: ['Biography', 'Comedy', 'Drama'], duration: '1h 52m', movie_id: 'tt1675434',
}, {
  title: 'Modern Times', year: 1936, imdb_rating: 8.5, genre: ['Comedy', 'Drama', 'Romance'], duration: '1h 27m', movie_id: 'tt0027977',
}, {
  title: 'Once Upon a Time in the West', year: 1968, imdb_rating: 8.5, genre: ['Western'], duration: '2h 45m', movie_id: 'tt0064116',
}, {
  title: 'Cinema Paradiso', year: 1988, imdb_rating: 8.5, genre: ['Drama', 'Romance'], duration: '2h 35m', movie_id: 'tt0095765',
}, {
  title: 'Rear Window', year: 1954, imdb_rating: 8.5, genre: ['Mystery', 'Thriller'], duration: '1h 52m', movie_id: 'tt0047396',
}, {
  title: 'Alien', year: 1979, imdb_rating: 8.5, genre: ['Horror', 'Sci-Fi'], duration: '1h 57m', movie_id: 'tt0078748',
}, {
  title: 'City Lights', year: 1931, imdb_rating: 8.5, genre: ['Comedy', 'Drama', 'Romance'], duration: '1h 27m', movie_id: 'tt0021749',
}, {
  title: 'Apocalypse Now', year: 1979, imdb_rating: 8.5, genre: ['Drama', 'Mystery', 'War'], duration: '2h 27m', movie_id: 'tt0078788',
}, {
  title: 'Memento', year: 2000, imdb_rating: 8.4, genre: ['Mystery', 'Thriller'], duration: '1h 53m', movie_id: 'tt0209144',
}, {
  title: 'Django Unchained', year: 2012, imdb_rating: 8.4, genre: ['Drama', 'Western'], duration: '2h 45m', movie_id: 'tt1853728',
}, {
  title: 'Raiders of the Lost Ark', year: 1981, imdb_rating: 8.4, genre: ['Action', 'Adventure'], duration: '1h 55m', movie_id: 'tt0082971',
}, {
  title: 'WALL·E', year: 2008, imdb_rating: 8.4, genre: ['Animation', 'Adventure', 'Family'], duration: '1h 38m', movie_id: 'tt0910970',
}, {
  title: 'The Lives of Others', year: 2006, imdb_rating: 8.4, genre: ['Drama', 'Mystery', 'Thriller'], duration: '2h 17m', movie_id: 'tt0405094',
}, {
  title: 'Sunset Blvd.', year: 1950, imdb_rating: 8.4, genre: ['Drama', 'Film-Noir'], duration: '1h 50m', movie_id: 'tt0043014',
}, {
  title: 'Paths of Glory', year: 1957, imdb_rating: 8.4, genre: ['Drama', 'War'], duration: '1h 28m', movie_id: 'tt0050825',
}, {
  title: 'The Shining', year: 1980, imdb_rating: 8.4, genre: ['Drama', 'Horror'], duration: '2h 26m', movie_id: 'tt0081505',
}, {
  title: 'The Great Dictator', year: 1940, imdb_rating: 8.4, genre: ['Comedy', 'Drama', 'War'], duration: '2h 5m', movie_id: 'tt0032553',
}, {
  title: 'Avengers: Infinity War', year: 2018, imdb_rating: 8.4, genre: ['Action', 'Adventure', 'Sci-Fi'], duration: '2h 29m', movie_id: 'tt4154756',
}, {
  title: 'Witness for the Prosecution', year: 1957, imdb_rating: 8.4, genre: ['Crime', 'Drama', 'Mystery'], duration: '1h 56m', movie_id: 'tt0051201',
}, {
  title: 'Aliens', year: 1986, imdb_rating: 8.4, genre: ['Action', 'Adventure', 'Sci-Fi'], duration: '2h 17m', movie_id: 'tt0090605',
}, {
  title: 'Spider-Man: Into the Spider-Verse', year: 2018, imdb_rating: 8.4, genre: ['Animation', 'Action', 'Adventure'], duration: '1h 57m', movie_id: 'tt4633694',
}, {
  title: 'American Beauty', year: 1999, imdb_rating: 8.4, genre: ['Drama'], duration: '2h 2m', movie_id: 'tt0169547',
}, {
  title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964, imdb_rating: 8.4, genre: ['Comedy', 'War'], duration: '1h 35m', movie_id: 'tt0057012',
}, {
  title: 'The Dark Knight Rises', year: 2012, imdb_rating: 8.4, genre: ['Action', 'Drama', 'Thriller'], duration: '2h 44m', movie_id: 'tt1345836',
}, {
  title: 'Oldboy', year: 2003, imdb_rating: 8.4, genre: ['Action', 'Drama', 'Mystery'], duration: '2h', movie_id: 'tt0364569',
}, {
  title: 'Inglourious Basterds', year: 2009, imdb_rating: 8.3, genre: ['Adventure', 'Drama', 'War'], duration: '2h 33m', movie_id: 'tt0361748',
}, {
  title: 'Amadeus', year: 1984, imdb_rating: 8.4, genre: ['Biography', 'Drama', 'Music'], duration: '2h 40m', movie_id: 'tt0086879',
}, {
  title: 'Coco', year: 2017, imdb_rating: 8.4, genre: ['Animation', 'Adventure', 'Comedy'], duration: '1h 45m', movie_id: 'tt2380307',
}, {
  title: 'Toy Story', year: 1995, imdb_rating: 8.3, genre: ['Animation', 'Adventure', 'Comedy'], duration: '1h 21m', movie_id: 'tt0114709',
}, {
  title: 'Joker', year: 2019, imdb_rating: 8.4, genre: ['Crime', 'Drama', 'Thriller'], duration: '2h 2m', movie_id: 'tt7286456',
}, {
  title: 'Braveheart', year: 1995, imdb_rating: 8.4, genre: ['Biography', 'Drama', 'History'], duration: '2h 58m', movie_id: 'tt0112573',
}, {
  title: 'The Boat', year: 1981, imdb_rating: 8.4, genre: ['Drama', 'War'], duration: '2h 29m', movie_id: 'tt0082096',
}, {
  title: 'Avengers: Endgame', year: 2019, imdb_rating: 8.4, genre: ['Action', 'Adventure', 'Drama'], duration: '3h 1m', movie_id: 'tt4154796',
}, {
  title: 'Princess Mononoke', year: 1997, imdb_rating: 8.3, genre: ['Animation', 'Action', 'Adventure'], duration: '2h 14m', movie_id: 'tt0119698',
}, {
  title: 'Once Upon a Time in America', year: 1984, imdb_rating: 8.3, genre: ['Crime', 'Drama'], duration: '3h 49m', movie_id: 'tt0087843',
}, {
  title: 'Good Will Hunting', year: 1997, imdb_rating: 8.3, genre: ['Drama', 'Romance'], duration: '2h 6m', movie_id: 'tt0119217',
}, {
  title: 'Your Name.', year: 2016, imdb_rating: 8.4, genre: ['Animation', 'Drama', 'Fantasy'], duration: '1h 46m', movie_id: 'tt5311514',
}, {
  title: "Singin' in the Rain", year: 1952, imdb_rating: 8.3, genre: ['Comedy', 'Musical', 'Romance'], duration: '1h 43m', movie_id: 'tt0045152',
}, {
  title: '3 Idiots', year: 2009, imdb_rating: 8.4, genre: ['Comedy', 'Drama'], duration: '2h 50m', movie_id: 'tt1187043',
}, {
  title: 'Requiem for a Dream', year: 2000, imdb_rating: 8.3, genre: ['Drama'], duration: '1h 42m', movie_id: 'tt0180093',
}, {
  title: 'High and Low', year: 1963, imdb_rating: 8.4, genre: ['Crime', 'Drama', 'Mystery'], duration: '2h 23m', movie_id: 'tt0057565',
}, {
  title: 'Toy Story 3', year: 2010, imdb_rating: 8.3, genre: ['Animation', 'Adventure', 'Comedy'], duration: '1h 43m', movie_id: 'tt0435761',
}, {
  title: 'Capernaum', year: 2018, imdb_rating: 8.4, genre: ['Drama'], duration: '2h 6m', movie_id: 'tt8267604',
}, {
  title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983, imdb_rating: 8.3, genre: ['Action', 'Adventure', 'Fantasy'], duration: '2h 11m', movie_id: 'tt0086190',
}, {
  title: '2001: A Space Odyssey', year: 1968, imdb_rating: 8.3, genre: ['Adventure', 'Sci-Fi'], duration: '2h 29m', movie_id: 'tt0062622',
}, {
  title: 'Eternal Sunshine of the Spotless Mind', year: 2004, imdb_rating: 8.3, genre: ['Drama', 'Romance', 'Sci-Fi'], duration: '1h 48m', movie_id: 'tt0338013',
}, {
  title: 'Reservoir Dogs', year: 1992, imdb_rating: 8.3, genre: ['Crime', 'Thriller'], duration: '1h 39m', movie_id: 'tt0105236',
}, {
  title: 'Come and See', year: 1985, imdb_rating: 8.4, genre: ['Drama', 'Thriller', 'War'], duration: '2h 22m', movie_id: 'tt0091251',
}, {
  title: 'The Hunt', year: 2012, imdb_rating: 8.3, genre: ['Drama'], duration: '1h 55m', movie_id: 'tt2106476',
}, {
  title: 'Citizen Kane', year: 1941, imdb_rating: 8.3, genre: ['Drama', 'Mystery'], duration: '1h 59m', movie_id: 'tt0033467',
}, {
  title: 'M', year: 1931, imdb_rating: 8.3, genre: ['Crime', 'Mystery', 'Thriller'], duration: '1h 39m', movie_id: 'tt0022100',
}, {
  title: 'Lawrence of Arabia', year: 1962, imdb_rating: 8.3, genre: ['Adventure', 'Biography', 'Drama'], duration: '3h 38m', movie_id: 'tt0056172',
}, {
  title: 'North by Northwest', year: 1959, imdb_rating: 8.3, genre: ['Action', 'Adventure', 'Mystery'], duration: '2h 16m', movie_id: 'tt0053125',
}, {
  title: 'Ikiru', year: 1952, imdb_rating: 8.3, genre: ['Drama'], duration: '2h 23m', movie_id: 'tt0044741',
}, {
  title: 'Vertigo', year: 1958, imdb_rating: 8.3, genre: ['Mystery', 'Romance', 'Thriller'], duration: '2h 8m', movie_id: 'tt0052357',
}, {
  title: 'The Apartment', year: 1960, imdb_rating: 8.3, genre: ['Comedy', 'Drama', 'Romance'], duration: '2h 5m', movie_id: 'tt0053604',
}, {
  title: 'Amélie', year: 2001, imdb_rating: 8.3, genre: ['Comedy', 'Romance'], duration: '2h 2m', movie_id: 'tt0211915',
}, {
  title: 'A Clockwork Orange', year: 1971, imdb_rating: 8.3, genre: ['Crime', 'Sci-Fi'], duration: '2h 16m', movie_id: 'tt0066921',
}, {
  title: 'Double Indemnity', year: 1944, imdb_rating: 8.3, genre: ['Crime', 'Drama', 'Film-Noir'], duration: '1h 47m', movie_id: 'tt0036775',
}, {
  title: 'Full Metal Jacket', year: 1987, imdb_rating: 8.3, genre: ['Drama', 'War'], duration: '1h 56m', movie_id: 'tt0093058',
}, {
  title: 'Scarface', year: 1983, imdb_rating: 8.3, genre: ['Crime', 'Drama'], duration: '2h 50m', movie_id: 'tt0086250',
}, {
  title: 'Hamilton', year: 2020, imdb_rating: 8.4, genre: ['Biography', 'Drama', 'History'], duration: '2h 40m', movie_id: 'tt8503618',
}, {
  title: 'Incendies', year: 2010, imdb_rating: 8.3, genre: ['Drama', 'Mystery'], duration: '2h 11m', movie_id: 'tt1255953',
}, {
  title: 'Heat', year: 1995, imdb_rating: 8.3, genre: ['Action', 'Crime', 'Drama'], duration: '2h 50m', movie_id: 'tt0113277',
}, {
  title: 'To Kill a Mockingbird', year: 1962, imdb_rating: 8.3, genre: ['Crime', 'Drama'], duration: '2h 9m', movie_id: 'tt0056592',
}, {
  title: 'The Sting', year: 1973, imdb_rating: 8.3, genre: ['Comedy', 'Crime', 'Drama'], duration: '2h 9m', movie_id: 'tt0070735',
}, {
  title: 'Up', year: 2009, imdb_rating: 8.3, genre: ['Animation', 'Adventure', 'Comedy'], duration: '1h 36m', movie_id: 'tt1049413',
}, {
  title: 'Top Gun: Maverick', year: 2022, imdb_rating: 8.3, genre: ['Action', 'Drama'], duration: '2h 10m', movie_id: 'tt1745960',
}, {
  title: 'A Separation', year: 2011, imdb_rating: 8.3, genre: ['Drama'], duration: '2h 3m', movie_id: 'tt1832382',
}, {
  title: 'Metropolis', year: 1927, imdb_rating: 8.3, genre: ['Drama', 'Sci-Fi'], duration: '2h 33m', movie_id: 'tt0017136',
}, {
  title: 'Taxi Driver', year: 1976, imdb_rating: 8.2, genre: ['Crime', 'Drama'], duration: '1h 54m', movie_id: 'tt0075314',
}, {
  title: 'L.A. Confidential', year: 1997, imdb_rating: 8.2, genre: ['Crime', 'Drama', 'Mystery'], duration: '2h 18m', movie_id: 'tt0119488',
}, {
  title: 'Die Hard', year: 1988, imdb_rating: 8.2, genre: ['Action', 'Thriller'], duration: '2h 12m', movie_id: 'tt0095016',
}, {
  title: 'Snatch', year: 2000, imdb_rating: 8.2, genre: ['Comedy', 'Crime'], duration: '1h 42m', movie_id: 'tt0208092',
}, {
  title: 'Indiana Jones and the Last Crusade', year: 1989, imdb_rating: 8.2, genre: ['Action', 'Adventure'], duration: '2h 7m', movie_id: 'tt0097576',
}, {
  title: 'Bicycle Thieves', year: 1948, imdb_rating: 8.3, genre: ['Drama'], duration: '1h 29m', movie_id: 'tt0040522',
}, {
  title: 'Like Stars on Earth', year: 2007, imdb_rating: 8.3, genre: ['Drama', 'Family'], duration: '2h 45m', movie_id: 'tt0986264',
}, {
  title: '1917', year: 2019, imdb_rating: 8.2, genre: ['Action', 'Drama', 'War'], duration: '1h 59m', movie_id: 'tt8579674',
}, {
  title: 'Downfall', year: 2004, imdb_rating: 8.2, genre: ['Biography', 'Drama', 'History'], duration: '2h 36m', movie_id: 'tt0363163',
}, {
  title: 'Dangal', year: 2016, imdb_rating: 8.3, genre: ['Action', 'Biography', 'Drama'], duration: '2h 41m', movie_id: 'tt5074352',
}, {
  title: 'For a Few Dollars More', year: 1965, imdb_rating: 8.2, genre: ['Western'], duration: '2h 12m', movie_id: 'tt0059578',
}, {
  title: 'Batman Begins', year: 2005, imdb_rating: 8.2, genre: ['Action', 'Crime', 'Drama'], duration: '2h 20m', movie_id: 'tt0372784',
}, {
  title: 'The Kid', year: 1921, imdb_rating: 8.3, genre: ['Comedy', 'Drama', 'Family'], duration: '1h 8m', movie_id: 'tt0012349',
}, {
  title: 'Some Like It Hot', year: 1959, imdb_rating: 8.2, genre: ['Comedy', 'Music', 'Romance'], duration: '2h 1m', movie_id: 'tt0053291',
}, {
  title: 'The Father', year: 2020, imdb_rating: 8.2, genre: ['Drama', 'Mystery'], duration: '1h 37m', movie_id: 'tt10272386',
}, {
  title: 'All About Eve', year: 1950, imdb_rating: 8.2, genre: ['Drama'], duration: '2h 18m', movie_id: 'tt0042192',
}, {
  title: 'The Wolf of Wall Street', year: 2013, imdb_rating: 8.2, genre: ['Biography', 'Comedy', 'Crime'], duration: '3h', movie_id: 'tt0993846',
}, {
  title: 'Green Book', year: 2018, imdb_rating: 8.2, genre: ['Biography', 'Comedy', 'Drama'], duration: '2h 10m', movie_id: 'tt6966692',
}, {
  title: 'Judgment at Nuremberg', year: 1961, imdb_rating: 8.3, genre: ['Drama', 'War'], duration: '2h 59m', movie_id: 'tt0055031',
}, {
  title: 'Ran', year: 1985, imdb_rating: 8.2, genre: ['Action', 'Drama', 'War'], duration: '2h 42m', movie_id: 'tt0089881',
}, {
  title: 'Casino', year: 1995, imdb_rating: 8.2, genre: ['Crime', 'Drama'], duration: '2h 58m', movie_id: 'tt0112641',
}, {
  title: 'The Truman Show', year: 1998, imdb_rating: 8.2, genre: ['Comedy', 'Drama'], duration: '1h 43m', movie_id: 'tt0120382',
}, {
  title: "Pan's Labyrinth", year: 2006, imdb_rating: 8.2, genre: ['Drama', 'Fantasy', 'War'], duration: '1h 58m', movie_id: 'tt0457430',
}, {
  title: 'There Will Be Blood', year: 2007, imdb_rating: 8.2, genre: ['Drama'], duration: '2h 38m', movie_id: 'tt0469494',
}, {
  title: 'Unforgiven', year: 1992, imdb_rating: 8.2, genre: ['Drama', 'Western'], duration: '2h 10m', movie_id: 'tt0105695',
}, {
  title: 'The Sixth Sense', year: 1999, imdb_rating: 8.2, genre: ['Drama', 'Mystery', 'Thriller'], duration: '1h 47m', movie_id: 'tt0167404',
}, {
  title: 'Shutter Island', year: 2010, imdb_rating: 8.2, genre: ['Mystery', 'Thriller'], duration: '2h 18m', movie_id: 'tt1130884',
}, {
  title: 'A Beautiful Mind', year: 2001, imdb_rating: 8.2, genre: ['Biography', 'Drama'], duration: '2h 15m', movie_id: 'tt0268978',
}, {
  title: 'Jurassic Park', year: 1993, imdb_rating: 8.2, genre: ['Action', 'Adventure', 'Sci-Fi'], duration: '2h 7m', movie_id: 'tt0107290',
}, {
  title: 'Yojimbo', year: 1961, imdb_rating: 8.2, genre: ['Action', 'Drama', 'Thriller'], duration: '1h 50m', movie_id: 'tt0055630',
}, {
  title: 'The Treasure of the Sierra Madre', year: 1948, imdb_rating: 8.2, genre: ['Adventure', 'Drama', 'Western'], duration: '2h 6m', movie_id: 'tt0040897',
}, {
  title: 'Monty Python and the Holy Grail', year: 1975, imdb_rating: 8.2, genre: ['Adventure', 'Comedy', 'Fantasy'], duration: '1h 31m', movie_id: 'tt0071853',
}, {
  title: 'The Great Escape', year: 1963, imdb_rating: 8.2, genre: ['Adventure', 'Drama', 'History'], duration: '2h 52m', movie_id: 'tt0057115',
}, {
  title: 'No Country for Old Men', year: 2007, imdb_rating: 8.2, genre: ['Crime', 'Drama', 'Thriller'], duration: '2h 2m', movie_id: 'tt0477348',
}, {
  title: 'Kill Bill: Vol. 1', year: 2003, imdb_rating: 8.2, genre: ['Action', 'Crime', 'Drama'], duration: '1h 51m', movie_id: 'tt0266697',
}, {
  title: 'Rashomon', year: 1950, imdb_rating: 8.2, genre: ['Crime', 'Drama', 'Mystery'], duration: '1h 28m', movie_id: 'tt0042876',
}, {
  title: 'Spider-Man: No Way Home', year: 2021, imdb_rating: 8.2, genre: ['Action', 'Adventure', 'Fantasy'], duration: '2h 28m', movie_id: 'tt10872600',
}, {
  title: 'The Thing', year: 1982, imdb_rating: 8.2, genre: ['Horror', 'Mystery', 'Sci-Fi'], duration: '1h 49m', movie_id: 'tt0084787',
}, {
  title: 'Finding Nemo', year: 2003, imdb_rating: 8.2, genre: ['Animation', 'Adventure', 'Comedy'], duration: '1h 40m', movie_id: 'tt0266543',
}, {
  title: 'The Elephant Man', year: 1980, imdb_rating: 8.2, genre: ['Biography', 'Drama'], duration: '2h 4m', movie_id: 'tt0080678',
}, {
  title: 'Chinatown', year: 1974, imdb_rating: 8.2, genre: ['Drama', 'Mystery', 'Thriller'], duration: '2h 10m', movie_id: 'tt0071315',
}, {
  title: 'Raging Bull', year: 1980, imdb_rating: 8.2, genre: ['Biography', 'Drama', 'Sport'], duration: '2h 9m', movie_id: 'tt0081398',
}, {
  title: 'V for Vendetta', year: 2005, imdb_rating: 8.2, genre: ['Action', 'Drama', 'Sci-Fi'], duration: '2h 12m', movie_id: 'tt0434409',
}, {
  title: 'Gone with the Wind', year: 1939, imdb_rating: 8.2, genre: ['Drama', 'Romance', 'War'], duration: '3h 58m', movie_id: 'tt0031381',
}, {
  title: 'Lock, Stock and Two Smoking Barrels', year: 1998, imdb_rating: 8.2, genre: ['Action', 'Comedy', 'Crime'], duration: '1h 47m', movie_id: 'tt0120735',
}, {
  title: 'Inside Out', year: 2015, imdb_rating: 8.2, genre: ['Animation', 'Adventure', 'Comedy'], duration: '1h 35m', movie_id: 'tt2096673',
}, {
  title: 'Dial M for Murder', year: 1954, imdb_rating: 8.2, genre: ['Crime', 'Thriller'], duration: '1h 45m', movie_id: 'tt0046912',
}, {
  title: 'The Secret in Their Eyes', year: 2009, imdb_rating: 8.2, genre: ['Drama', 'Mystery', 'Romance'], duration: '2h 9m', movie_id: 'tt1305806',
}, {
  title: "Howl's Moving Castle", year: 2004, imdb_rating: 8.2, genre: ['Animation', 'Adventure', 'Family'], duration: '1h 59m', movie_id: 'tt0347149',
}, {
  title: 'Three Billboards Outside Ebbing, Missouri', year: 2017, imdb_rating: 8.1, genre: ['Comedy', 'Crime', 'Drama'], duration: '1h 55m', movie_id: 'tt5027774',
}, {
  title: 'The Bridge on the River Kwai', year: 1957, imdb_rating: 8.2, genre: ['Adventure', 'Drama', 'War'], duration: '2h 41m', movie_id: 'tt0050212',
}, {
  title: 'Trainspotting', year: 1996, imdb_rating: 8.1, genre: ['Drama'], duration: '1h 33m', movie_id: 'tt0117951',
}, {
  title: 'Prisoners', year: 2013, imdb_rating: 8.1, genre: ['Crime', 'Drama', 'Mystery'], duration: '2h 33m', movie_id: 'tt1392214',
}, {
  title: 'Warrior', year: 2011, imdb_rating: 8.2, genre: ['Action', 'Drama', 'Sport'], duration: '2h 20m', movie_id: 'tt1291584',
}, {
  title: 'Fargo', year: 1996, imdb_rating: 8.1, genre: ['Crime', 'Thriller'], duration: '1h 38m', movie_id: 'tt0116282',
}, {
  title: 'Gran Torino', year: 2008, imdb_rating: 8.1, genre: ['Drama'], duration: '1h 56m', movie_id: 'tt1205489',
}, {
  title: 'My Neighbor Totoro', year: 1988, imdb_rating: 8.1, genre: ['Animation', 'Comedy', 'Family'], duration: '1h 26m', movie_id: 'tt0096283',
}, {
  title: 'Catch Me If You Can', year: 2002, imdb_rating: 8.1, genre: ['Biography', 'Crime', 'Drama'], duration: '2h 21m', movie_id: 'tt0264464',
}, {
  title: 'Million Dollar Baby', year: 2004, imdb_rating: 8.1, genre: ['Drama', 'Sport'], duration: '2h 12m', movie_id: 'tt0405159',
}, {
  title: 'Children of Heaven', year: 1997, imdb_rating: 8.2, genre: ['Drama', 'Family', 'Sport'], duration: '1h 29m', movie_id: 'tt0118849',
}, {
  title: 'Blade Runner', year: 1982, imdb_rating: 8.1, genre: ['Action', 'Drama', 'Sci-Fi'], duration: '1h 57m', movie_id: 'tt0083658',
}, {
  title: 'The Gold Rush', year: 1925, imdb_rating: 8.1, genre: ['Adventure', 'Comedy', 'Drama'], duration: '1h 35m', movie_id: 'tt0015864',
}, {
  title: 'Klaus', year: 2019, imdb_rating: 8.2, genre: ['Animation', 'Adventure', 'Comedy'], duration: '1h 36m', movie_id: 'tt4729430',
}, {
  title: 'Before Sunrise', year: 1995, imdb_rating: 8.1, genre: ['Drama', 'Romance'], duration: '1h 41m', movie_id: 'tt0112471',
}, {
  title: 'Harry Potter and the Deathly Hallows: Part 2', year: 2011, imdb_rating: 8.1, genre: ['Adventure', 'Family', 'Fantasy'], duration: '2h 10m', movie_id: 'tt1201607',
}, {
  title: '12 Years a Slave', year: 2013, imdb_rating: 8.1, genre: ['Biography', 'Drama', 'History'], duration: '2h 14m', movie_id: 'tt2024544',
}, {
  title: 'On the Waterfront', year: 1954, imdb_rating: 8.1, genre: ['Crime', 'Drama', 'Thriller'], duration: '1h 48m', movie_id: 'tt0047296',
}, {
  title: 'Ben-Hur', year: 1959, imdb_rating: 8.1, genre: ['Adventure', 'Drama'], duration: '3h 32m', movie_id: 'tt0052618',
}, {
  title: 'The Grand Budapest Hotel', year: 2014, imdb_rating: 8.1, genre: ['Adventure', 'Comedy', 'Crime'], duration: '1h 39m', movie_id: 'tt2278388',
}, {
  title: 'Gone Girl', year: 2014, imdb_rating: 8.1, genre: ['Drama', 'Mystery', 'Thriller'], duration: '2h 29m', movie_id: 'tt2267998',
}, {
  title: 'Wild Strawberries', year: 1957, imdb_rating: 8.1, genre: ['Drama', 'Romance'], duration: '1h 31m', movie_id: 'tt0050986',
}, {
  title: 'The General', year: 1926, imdb_rating: 8.1, genre: ['Action', 'Adventure', 'Comedy'], duration: '1h 7m', movie_id: 'tt0017925',
}, {
  title: 'In the Name of the Father', year: 1993, imdb_rating: 8.1, genre: ['Biography', 'Crime', 'Drama'], duration: '2h 13m', movie_id: 'tt0107207',
}, {
  title: 'The Third Man', year: 1949, imdb_rating: 8.1, genre: ['Film-Noir', 'Mystery', 'Thriller'], duration: '1h 33m', movie_id: 'tt0041959',
}, {
  title: 'Barry Lyndon', year: 1975, imdb_rating: 8.1, genre: ['Adventure', 'Drama', 'War'], duration: '3h 5m', movie_id: 'tt0072684',
}, {
  title: 'The Deer Hunter', year: 1978, imdb_rating: 8.1, genre: ['Drama', 'War'], duration: '3h 3m', movie_id: 'tt0077416',
}, {
  title: 'Hacksaw Ridge', year: 2016, imdb_rating: 8.1, genre: ['Biography', 'Drama', 'History'], duration: '2h 19m', movie_id: 'tt2119532',
}, {
  title: 'The Wages of Fear', year: 1953, imdb_rating: 8.2, genre: ['Adventure', 'Drama', 'Thriller'], duration: '2h 11m', movie_id: 'tt0046268',
}, {
  title: 'Memories of Murder', year: 2003, imdb_rating: 8.1, genre: ['Crime', 'Drama', 'Mystery'], duration: '2h 12m', movie_id: 'tt0353969',
}, {
  title: 'Sherlock Jr.', year: 1924, imdb_rating: 8.2, genre: ['Action', 'Comedy', 'Romance'], duration: '45m', movie_id: 'tt0015324',
}, {
  title: 'Wild Tales', year: 2014, imdb_rating: 8.1, genre: ['Comedy', 'Drama', 'Thriller'], duration: '2h 2m', movie_id: 'tt3011894',
}, {
  title: 'Mr. Smith Goes to Washington', year: 1939, imdb_rating: 8.1, genre: ['Comedy', 'Drama'], duration: '2h 9m', movie_id: 'tt0031679',
}, {
  title: 'Mad Max: Fury Road', year: 2015, imdb_rating: 8.1, genre: ['Action', 'Adventure', 'Sci-Fi'], duration: '2h', movie_id: 'tt1392190',
}, {
  title: 'Mary and Max', year: 2009, imdb_rating: 8.1, genre: ['Animation', 'Comedy', 'Drama'], duration: '1h 32m', movie_id: 'tt0978762',
}, {
  title: 'The Seventh Seal', year: 1957, imdb_rating: 8.1, genre: ['Drama', 'Fantasy'], duration: '1h 36m', movie_id: 'tt0050976',
}, {
  title: 'How to Train Your Dragon', year: 2010, imdb_rating: 8.1, genre: ['Animation', 'Action', 'Adventure'], duration: '1h 38m', movie_id: 'tt0892769',
}, {
  title: 'Monsters, Inc.', year: 2001, imdb_rating: 8.1, genre: ['Animation', 'Adventure', 'Comedy'], duration: '1h 32m', movie_id: 'tt0198781',
}, {
  title: 'Room', year: 2015, imdb_rating: 8.1, genre: ['Drama', 'Thriller'], duration: '1h 58m', movie_id: 'tt3170832',
}, {
  title: 'Jaws', year: 1975, imdb_rating: 8.1, genre: ['Adventure', 'Thriller'], duration: '2h 4m', movie_id: 'tt0073195',
}, {
  title: 'Dead Poets Society', year: 1989, imdb_rating: 8.1, genre: ['Comedy', 'Drama'], duration: '2h 8m', movie_id: 'tt0097165',
}, {
  title: 'The Big Lebowski', year: 1998, imdb_rating: 8.1, genre: ['Comedy', 'Crime'], duration: '1h 57m', movie_id: 'tt0118715',
}, {
  title: 'Tokyo Story', year: 1953, imdb_rating: 8.2, genre: ['Drama'], duration: '2h 16m', movie_id: 'tt0046438',
}, {
  title: 'The Passion of Joan of Arc', year: 1928, imdb_rating: 8.2, genre: ['Biography', 'Drama', 'History'], duration: '1h 54m', movie_id: 'tt0019254',
}, {
  title: 'Ford v Ferrari', year: 2019, imdb_rating: 8.1, genre: ['Action', 'Biography', 'Drama'], duration: '2h 32m', movie_id: 'tt1950186',
}, {
  title: 'Hotel Rwanda', year: 2004, imdb_rating: 8.1, genre: ['Biography', 'Drama', 'History'], duration: '2h 1m', movie_id: 'tt0395169',
}, {
  title: 'Rocky', year: 1976, imdb_rating: 8.1, genre: ['Drama', 'Sport'], duration: '2h', movie_id: 'tt0075148',
}, {
  title: 'Platoon', year: 1986, imdb_rating: 8.1, genre: ['Drama', 'War'], duration: '2h', movie_id: 'tt0091763',
}, {
  title: 'Ratatouille', year: 2007, imdb_rating: 8.1, genre: ['Animation', 'Adventure', 'Comedy'], duration: '1h 51m', movie_id: 'tt0382932',
}, {
  title: 'Spotlight', year: 2015, imdb_rating: 8.1, genre: ['Biography', 'Crime', 'Drama'], duration: '2h 9m', movie_id: 'tt1895587',
}, {
  title: 'The Terminator', year: 1984, imdb_rating: 8.1, genre: ['Action', 'Sci-Fi'], duration: '1h 47m', movie_id: 'tt0088247',
}, {
  title: 'Logan', year: 2017, imdb_rating: 8.1, genre: ['Action', 'Drama', 'Sci-Fi'], duration: '2h 17m', movie_id: 'tt3315342',
}, {
  title: 'Stand by Me', year: 1986, imdb_rating: 8.1, genre: ['Adventure', 'Drama'], duration: '1h 29m', movie_id: 'tt0092005',
}, {
  title: 'Rush', year: 2013, imdb_rating: 8.1, genre: ['Action', 'Biography', 'Drama'], duration: '2h 3m', movie_id: 'tt1979320',
}, {
  title: 'Network', year: 1976, imdb_rating: 8.1, genre: ['Drama'], duration: '2h 1m', movie_id: 'tt0074958',
}, {
  title: 'Before Sunset', year: 2004, imdb_rating: 8.1, genre: ['Drama', 'Romance'], duration: '1h 20m', movie_id: 'tt0381681',
}, {
  title: 'Into the Wild', year: 2007, imdb_rating: 8.1, genre: ['Adventure', 'Biography', 'Drama'], duration: '2h 28m', movie_id: 'tt0758758',
}, {
  title: 'The Wizard of Oz', year: 1939, imdb_rating: 8.1, genre: ['Adventure', 'Family', 'Fantasy'], duration: '1h 42m', movie_id: 'tt0032138',
}, {
  title: 'The Best Years of Our Lives', year: 1946, imdb_rating: 8.1, genre: ['Drama', 'Romance', 'War'], duration: '2h 50m', movie_id: 'tt0036868',
}, {
  title: 'Pather Panchali', year: 1955, imdb_rating: 8.3, genre: ['Drama'], duration: '2h 5m', movie_id: 'tt0048473',
}, {
  title: 'Groundhog Day', year: 1993, imdb_rating: 8.1, genre: ['Comedy', 'Drama', 'Fantasy'], duration: '1h 41m', movie_id: 'tt0107048',
}, {
  title: 'The Exorcist', year: 1973, imdb_rating: 8.1, genre: ['Horror'], duration: '2h 2m', movie_id: 'tt0070047',
}, {
  title: 'To Be or Not to Be', year: 1942, imdb_rating: 8.2, genre: ['Comedy', 'Romance', 'War'], duration: '1h 39m', movie_id: 'tt0035446',
}, {
  title: 'The Incredibles', year: 2004, imdb_rating: 8, genre: ['Animation', 'Action', 'Adventure'], duration: '1h 55m', movie_id: 'tt0317705',
}, {
  title: 'La haine', year: 1995, imdb_rating: 8.1, genre: ['Crime', 'Drama'], duration: '1h 38m', movie_id: 'tt0113247',
}, {
  title: 'Pirates of the Caribbean: The Curse of the Black Pearl', year: 2003, imdb_rating: 8.1, genre: ['Action', 'Adventure', 'Fantasy'], duration: '2h 23m', movie_id: 'tt0325980',
}, {
  title: 'The Battle of Algiers', year: 1966, imdb_rating: 8.1, genre: ['Drama', 'War'], duration: '2h 1m', movie_id: 'tt0058946',
}, {
  title: "Hachi: A Dog's Tale", year: 2009, imdb_rating: 8.1, genre: ['Biography', 'Drama', 'Family'], duration: '1h 33m', movie_id: 'tt1028532',
}, {
  title: 'The Grapes of Wrath', year: 1940, imdb_rating: 8.1, genre: ['Drama'], duration: '2h 9m', movie_id: 'tt0032551',
}, {
  title: 'Jai Bhim', year: 2021, imdb_rating: 8.8, genre: ['Crime', 'Drama', 'Mystery'], duration: '2h 44m', movie_id: 'tt15097216',
}, {
  title: 'My Father and My Son', year: 2005, imdb_rating: 8.2, genre: ['Drama', 'Family'], duration: '1h 52m', movie_id: 'tt0476735',
}, {
  title: 'Amores Perros', year: 2000, imdb_rating: 8.1, genre: ['Drama', 'Thriller'], duration: '2h 34m', movie_id: 'tt0245712',
}, {
  title: 'Rebecca', year: 1940, imdb_rating: 8.1, genre: ['Drama', 'Film-Noir', 'Mystery'], duration: '2h 10m', movie_id: 'tt0032976',
}, {
  title: 'Cool Hand Luke', year: 1967, imdb_rating: 8.1, genre: ['Crime', 'Drama'], duration: '2h 7m', movie_id: 'tt0061512',
}, {
  title: 'The Handmaiden', year: 2016, imdb_rating: 8.1, genre: ['Drama', 'Romance', 'Thriller'], duration: '2h 25m', movie_id: 'tt4016934',
}, {
  title: 'The 400 Blows', year: 1959, imdb_rating: 8.1, genre: ['Crime', 'Drama'], duration: '1h 39m', movie_id: 'tt0053198',
}, {
  title: 'The Sound of Music', year: 1965, imdb_rating: 8.1, genre: ['Biography', 'Drama', 'Family'], duration: '2h 52m', movie_id: 'tt0059742',
}, {
  title: 'It Happened One Night', year: 1934, imdb_rating: 8.1, genre: ['Comedy', 'Romance'], duration: '1h 45m', movie_id: 'tt0025316',
}, {
  title: 'Persona', year: 1966, imdb_rating: 8.1, genre: ['Drama', 'Thriller'], duration: '1h 23m', movie_id: 'tt0060827',
}, {
  title: 'Life of Brian', year: 1979, imdb_rating: 8, genre: ['Comedy'], duration: '1h 34m', movie_id: 'tt0079470',
}, {
  title: 'The Iron Giant', year: 1999, imdb_rating: 8.1, genre: ['Animation', 'Action', 'Adventure'], duration: '1h 26m', movie_id: 'tt0129167',
}, {
  title: 'Dersu Uzala', year: 1975, imdb_rating: 8.2, genre: ['Adventure', 'Biography', 'Drama'], duration: '2h 22m', movie_id: 'tt0071411',
}, {
  title: 'The Help', year: 2011, imdb_rating: 8.1, genre: ['Drama'], duration: '2h 26m', movie_id: 'tt1454029',
}, {
  title: 'Aladdin', year: 1992, imdb_rating: 8, genre: ['Animation', 'Adventure', 'Comedy'], duration: '1h 30m', movie_id: 'tt0103639',
}, {
  title: 'Gandhi', year: 1982, imdb_rating: 8, genre: ['Biography', 'Drama', 'History'], duration: '3h 11m', movie_id: 'tt0083987',
}, {
  title: 'Dances with Wolves', year: 1990, imdb_rating: 8, genre: ['Adventure', 'Drama', 'Western'], duration: '3h 1m', movie_id: 'tt0099348',
}]

export default data
