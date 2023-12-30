


const useFetchApi = async(search:string) => {
   
   
    
   
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=92866a83&type=movie&s=${search}`);
        const result = await response.json(); // Parse response as JSON
      
        // Access the array of results
       
      
        // Log the resultsArray
        return result
      } catch (error) {
        console.error(error);
      }
      
   
 
        
        
    
}

export default useFetchApi