



/*1) Create a movies array
2) Add 5 movie objects with the following properties:
title: //string
genre: //string
releasedDate: //date 
rating: //number
3) Add a method called displayRating (console.log)
output: The movie __ has__stars .

4) Creat a function called showAllMovies() that displays all the movie titles and genre

output:
Godfather is an action movie
Avengers is an action movie
Exorcist is a horror movie*/

/*let example =[{},{},{},{},{}]*/


let movies = [
				{
					title: 'Spiderman' ,
					genre:  'Action',
					releasedDate: 'September 20, 1995', 
					rating: 6,
					displayRating() {
						console.log("The movie" + ' ' + this.title + ' '+ 'has' + ' '+ this.rating + ' '+ 'stars')}
				},

				{
					title: 'Batman',
					genre: 'Horror',
					releasedDate: 'January 15, 2005', 
					rating: 7,
					displayRating() {
						console.log("The movie" + ' ' + this.title + ' '+ 'has' + ' '+ this.rating + ' '+ 'stars')}
				
				},
				{
					title: 'Superman',
					genre: 'Comedy',
					releasedDate: 'Febuary 20,2004', 
					rating: 9,
					displayRating() {
						console.log("The movie" + ' ' + this.title+ ' '+ 'has' + ' '+ this.rating + ' '+ 'stars')}
				
				},
				{
					title: 'Ironman',
					genre: 'Scifi',
					releasedDate: ' Oct 6 ,1998', 
					rating: 7, 
					displayRating() {
						console.log("The movie" + ' ' + this.title + ' '+ 'has' + ' '+ this.rating + ' '+ 'stars')}
				
				},
				{
					title: 'Catman',
					genre: 'Drama',
					releasedDate: 'March 18,2004', 
					rating: 6 , 
					displayRating() {
						console.log("The movie" + ' ' + this.title + ' '+ 'has' + ' '+ this.rating + ' '+ 'stars')}
				}	
			]


		const showAllMovies = () => {
			for (let i = 0; i < movies.length; i++){
				console.log(movies[i].title + ' ' + 'is' + ' ' + 'a' + ' '+ movies[i].genre + ' ' + 'movie')
				
			}
		}

		