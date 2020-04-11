import React,{useState,useEffect} from 'react';
import axios from 'axios';
import ImageCard from './components/ImageCard';

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
  })
  return (
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {images.map(image => (
            <ImageCard key={image.id} image={image}/>
          ))}
        </div> 
      </div>
  );
}

export default App;
