const API_KEY = '01db5762e7e4b83ef10333d8c6e896d8';
const url = 'https://api.themoviedb.org/3/search/movie?api_key=01db5762e7e4b83ef10333d8c6e896d8';
const imageUrl = 'https://image.tmdb.org/t/p/w500';

const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputvalue');
const movieSearchable =  document.querySelector('#MovieSearchable');





function movieSection(movies){
    return movies.map((movie)=>{
        
        if(movie.poster_path){
            return `<img
            src= ${imageUrl+movie.poster_path}
            data-movie-id= ${movie.id}/>
           `;
        }
    })
    
    
 
 }

function CreateMovieContainer(movies){
    const movieElement = document.createElement('div');
    movieElement.setAttribute = ('class','movie');
    const movieTemplate = `
         <section id="section">
         ${movieSection(movies)}
         </section>
         <div class="content">
         <p class="content-closed">X</p>
         </div>
       `;
       movieElement.innerHTML = movieTemplate;
       return movieElement;

}

function renderSearchMovies(data){
        movieSearchable.innerHTML='';
        const movies = data.results;
        //console.log('Data: ', data);
        const MovieBlock = CreateMovieContainer(movies);
        //console.log('Data: ', MovieBlock);
        movieSearchable.appendChild(MovieBlock);

}

buttonElement.onclick = function(event){
    event.preventDefault();
    const value = inputElement.value;
    const newurl = url+ '&query='+value;
    console.log('value: ',value);
    fetch(newurl)
    .then((res)=>res.json())
    .then(renderSearchMovies)
    .catch((error)=>{
        console.log('Error: ',error);
    });
    inputElement.value = '';
}
document.onclick= function(event){
    const target = event.target;
    if(target.tagName.toLowerCase()==='img'){
    console.log('Hello Wolrd');
    const section = event.target.parentElement; //section
    const content = section.nextElementSibling; //content
    content.classList.add('content-display'); 
    }
}