import React, {useState} from 'react'
import ButtonCode from './ButtonCode'
import ButtonBook from './ButtonBook'
import ButtonBox from './ButtonBox'
import ButtonSong from './ButtonSong'
import logoico from './../../imagenes/logo_anderico.png'
import box from './../../imagenes/box.png'
import code from './../../imagenes/code.png'
import song from './../../imagenes/song.png'
import book from './../../imagenes/book.png'

const Buttons=()=>{
    const [viewBox, setViewBox]=useState(false);
    const [viewBook, setViewBook]=useState(false);
    const [viewSong, setViewSong]=useState(false);
    const [viewCode, setViewCode]=useState(false);
    const handleToggleBox=()=>{setViewBox(!viewBox)};
    const handleToggleBook=()=>{setViewBook(!viewBook)};
    const handleToggleSong=()=>{setViewSong(!viewSong)};
    const handleToggleCode=()=>{setViewCode(!viewCode)};

     
    
return(
    
    <div id="bot" className="container-fluid">
        <div id="box" className="row">
        <div className="col-sm-12 text-center" onClick={handleToggleBox}>
            <img src={box} alt="box"/>
            <ButtonBox view={viewBox} close={handleToggleBox}/>
        </div>
        </div>
        <div className="row">
        <div id="code" className="col-sm-4 text-center" onClick={handleToggleCode} >
        <img src={code} alt="code"/>
        <ButtonCode view={viewCode} close={handleToggleCode}/>
        </div>
        <div id="logoico" className="col-sm-4 text-center">
        <img src={logoico} alt="logoico"/>    
        </div>
        <div id="song" className="col-sm-4 text-center" onClick={handleToggleSong} >
         <img src={song} alt="song"/>
         <ButtonSong view={viewSong} close={handleToggleSong}/>   

        </div>
        </div>
        <div id="book" className="row" onClick={handleToggleBook}>
        <div className="col-sm-12 text-center">
        <img src={book} alt="book"/>
        <ButtonBook view={viewBook} close={handleToggleBook}/>
        </div>
        </div>
    </div>
)
}

export default Buttons;