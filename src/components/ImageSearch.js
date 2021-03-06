import React,{useState} from 'react';

const ImageSearch = ({searchText}) => {
    const [text,setText] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text);
    }

    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            <form className="w-full mx-w-sm" onSubmit={onSubmit}>
                <div className="flex items-center border-b border-b-2">
                    <input 
                        className="appearance-none bg-transparent border-none w-full text-blue-700 mr-3 py-1 px-2 leading-tight focus:outline-none rounded"
                        type="text"
                        placeholder="Search Image Term"
                        onChange={e => setText(e.target.value)}
                    />
                    <button 
                        className="flex-shrink-0 bg-purple-500 hover:bg-purple-700 border-purple-500 hover-border-purple-700
                        text-sm border-4 text-white py-1 px-2 rounded" 
                        type="submit"
                        onClick
                        >
                            Search
                    </button>
                </div>
            </form>
            
        </div>
    )
}

export default ImageSearch;
