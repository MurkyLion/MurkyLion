import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import cat from '.././assets/cat.png';
import characters from '.././assets/charactersfacesfinal.png';
import croco from '.././assets/crocoroadster.png';
import dog from '.././assets/doggy.png';
import dragon from '.././assets/dragon.png';
import hannya from '.././assets/hannya.jpg';
import jdragon from '.././assets/japanesedragonig.png';
import kabuto from '.././assets/kabutodead.jpg';
import soulfire from '../assets/soulfire.jpg';
import kitsune from '.././assets/kitsune.jpg';
import sketch1 from '.././assets/sketch1.jpg';
import sketch2 from '.././assets/sketch2.jpg';
import sketchbooks from '.././assets/sketchbooks.jpg';


const images = [
    {
        original: hannya,
    },
    {
        original: soulfire,
    },
    {
        original: kitsune,
    },
    {
        original: kabuto,
    },
    {
        original: cat,
    },
    {
        original: dog,
    },
    {
        original: dragon,
    },
    {
        original: croco,
    },
    {
        original: characters,
    },
    {
        original: jdragon,
    },
    {
        original: sketchbooks,
    },
    {
        original: sketch1,
    },
    {
        original: sketch2,
    },

  ];

export default function Projects()
{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <>
            <div className="h-screen w-screen bg-oxfordBlue text-white flex flex-row items-center justify-center">
                
                <ImageGallery items={images}/>

            </div>
        </>
    )
}