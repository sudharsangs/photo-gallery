import React,{useState,useEffect} from 'react';
import axios from 'axios';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {
  const [images,setImages] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [term,setTerm] = useState('');

  const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
  const fetchImage = async () => {
    const response = await axios.get(url);
    setImages(response.data.hits);
    setIsLoading(false);
    
  }

  useEffect(() => {
    fetchImage();
  },[term])
  return (
      <div className="container mx-auto">
        <ImageSearch searchText={(text) => setTerm(text)} />
        {!isLoading && images.length && <h1 className="text-6xl text-center mx-auto mt-32">No Images Found</h1>}
        {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading!</h1> : 
        <div className="grid grid-cols-3 gap-4">
          {images.map(image => (
            <ImageCard key={image.id} image={image}/>
          ))}
        </div>}
      </div>
  );
}

export default App;
