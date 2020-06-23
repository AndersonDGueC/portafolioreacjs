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
            <img src={box} width="100px" />
            <ButtonBox view={viewBox} close={handleToggleBox}/>
        </div>
        </div>
        <div className="row">
        <div id="code" className="col-sm-4 text-center" onClick={handleToggleCode} >
        <img src={code} width="100px"/>
        <ButtonCode view={viewCode} close={handleToggleCode}/>
        </div>
        <div className="col-sm-4">
        <img src={logoico} width="150x"/>    
        </div>
        <div id="song" className="col-sm-4 text-center" onClick={handleToggleSong} >
         <img src={song} width="100px" />
         <ButtonSong view={viewSong} close={handleToggleSong}/>   

        </div>
        </div>
        <div id="book" className="row" onClick={handleToggleBook}>
        <div className="col-sm-12 text-center">
        <img src={book} width="100px"/>
        <ButtonBook view={viewBook} close={handleToggleBook}/>
        </div>
        </div>
    </div>
)
}

export default Buttons;