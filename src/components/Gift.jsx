import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Item from "./Item";
import getGifs from "../helpers/getGifs";
import useFetchGifs from "../hooks/useFetchGifs";

const Gift=(props) =>{
    /* const [images, setImages] = useState([]);
    useEffect( () =>{
        getGifs(props.category).then(
            setImages
        );// (img)=>setImages(imgs)
    },[props.category]); //se paso a un hook*/
    const { data:images ,loading}=useFetchGifs(props.category);//nueva act
    /* const getGifs=  async()=>{
        const apikey="PLJgOGFP5YvXmAli95APWmnbgn3mWTP7";
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(props.category)}&limit=5&api_key=${apikey}`;
        const resp= await fetch(url);
        const {data} = await resp.json();
  
        const gifs = data.map(  (img) =>{
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        }); 
        console.log(gifs);
        setImages(gifs)
        
    } //se paso a un helper*/
    const ff=()=>{
        setTimeout(() => {
            return true;
        }, 300);
    }
    
    return (
        <>
            {loading?<p className="w-100 ml-4 h2 text-danger font-weight-bold animate__animated animate__bounce animate__infinite animate_faster">cargando....</p>:<div className="row w-100 ml-4 h2 text-primary font-weight-bold animate__animated animate__rollIn"><p className="">{props.category}</p></div>}
            {
                images.map(img => {
                    return (
                        <Item url={img.url} title={img.title} key={img.id} />
                    )
                })
            }
        </>
    )
}
  
Gift.propTypes={
    category: PropTypes.string.isRequired
}

export default Gift;