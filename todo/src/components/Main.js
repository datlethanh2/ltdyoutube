import React from 'react';
import styled from 'styled-components';
import { useState } from "react";
import edit from '../images/edit.png';
import dele from '../images/delete.png';
import rac from '../images/rac.png';
import vutrac from '../images/vutrac.png';
import anhnen from '../images/anhnen.jpg';
import anhnen2 from '../images/anhnen2.jpg';
import lamlai from '../images/lamlai.jpg';
import xoa from '../images/xoa.jpg';

const Mai=styled.div
`   text-align: center;
    background-image: url(${anhnen}); 
    height:1000px;
    background-size: 100%100%;
    padding-top:50px;
    
`;

const Maii=styled.div
`   
    h1{
        color: green;
        font-size: 45px;
        margin-bottom: 50px;
    }
    p{
        color: blue;
        font-size:16px;      
    }
    h2{
        margin-top: 112px;
        color: green;
    }
`;

const Nutthem=styled.div
`   display: flex;
    justify-content: center;
    padding-right: 5px;
    input{
        height: 40px;
        width: 300px;
        border-radius:20%;
        border-color: green;
    }
    button{
       
        width:45px;
        height:45px;
        border-color:green;
        background-color: white;
        padding:0;
        border-radius:50%;
        img{
            width:45px;
            height:45px;
            border-radius:50%;
            -moz-border-radius:50%;
            -webkit-border-radius:50%;
        }
}
`;

const Man=styled.div
`   display: grid;
    grid-template-columns: 23% 50% 30%;
    background-image: url(${anhnen2}); 
    max-height:100%;
    background-size: 100%100%;
    margin-top: 30px;
`;

const Grd=styled.div
`   display: grid;
    grid-template-columns: 10% 10% 62% 15%;
    padding-top:10px;
    padding-bottom: 10px;
    margin-top: 10px;
    border-radius:20%;
    background-color:hsl(0, 100%, 40%);
    opacity: 0.7;
    color: white;
    font-size: 20px;
`;

const Id=styled.div
`   padding-top: 15px; 
`;

const Nut=styled.div
`   display: flex;
    padding-top: 5px;   
    button{
        width:45px;
        height:45px;
        border-color: green;
        background-color: white;
        padding:0;
        border-radius:50%;
        img{
            width:45px;
            height:45px;
            border-radius:50%;
            -moz-border-radius:50%;
            -webkit-border-radius:50%;
        }
    }
`;

const Hienten=styled.div
`   
    input{
        width:98%;
        height: 50px;
        border-radius:20%;
        border-color: green;
    }
`;

const Cacnut=styled.div
`   display: flex;  
    padding-top: 5px;
    button{
        width:45px;
        height:45px;
        border-color:green;
        background-color: white;
        border-radius:50%;
        img{
            width:32px;
            height:40px;
            border-radius:50%;
            -moz-border-radius:50%;
            -webkit-border-radius:50%;
        }
    }
`;

function Main(){

    const [intext, setIntext] = useState("");
    const [innews, setInnews] = useState([]);
    const [intext1, setIntext1] = useState("");
    const [inan, setInan] = useState(false);
    const inthem= {
        text:"",
        com: false,
        edit: false,
    };
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    
    const Them = () =>{
        //console.log(intext);
        if(!intext)
            alert("H??y ??i???n v??o!");
        else{
            inthem.text=intext;
            setInnews([...innews, inthem]);
            setIntext("");
            alert("Th??m m???t h??nh ?????ng nh??? cho cu???c s???ng th??m xanh");
            setInan(true);
        }
        
    }

    const Xoatatca = () =>{
        setInnews([]);
        setInan(false); 
        alert("B???t ?????u k??? ho???ch m???i n??o!");    
    }

    const Xoa = (indexid) =>{
        //console.log(indexid);
        const newList = innews.filter((innews,index) => (index !== indexid));
        setInnews(newList);
        alert("H??y cho t??i r??c!");
    }

    const Sua = (indexidd) =>{
        setInnews(
            innews.map((inthem,index) => {
                if(index === indexidd){
                    return {...inthem, edit: true};
                    
                } else{
                    return inthem;
                }
            })
        )
        alert("D??ng th??i kh??ng n??n l??ng ph??!");
    }

    const Sua1 = (indexidd) =>{
        setInnews(
            innews.map((inthem,index) => {
                if(index === indexidd){ 
                    console.log(inthem.text);                   
                    return {...inthem, text: intext1, edit: false};                  
                } else{
                    return inthem;
                }
        }))
        alert("T??i ch??? ???? xong r???i!");
    }

    const Chuahoanthanh =(indexii)=>{
        setInnews(
            innews.map((inthem,index) => {
                if(index === indexii){
                    return {...inthem, com: true};
                    
                } else{
                    return inthem;
                }
            })
        )
        //console.log(inthem.com);
        alert("C???m ??n ???? d???n t??i ??i");
    };

    const Hoanthanh =(indexii)=>{
        setInnews(
            innews.map((inthem,index) => {
                if(index === indexii){
                    return {...inthem, com: false};
                    
                } else{
                    return inthem;
                }
            })
        )
        //console.log(inthem.com);
        alert("B???n c?? qu??n g?? ???? ch??ng?");
    };

    return(
        <Mai>
            <Maii>
                <h1>TODOLIST</h1>
                <p><i>?????ng nh??n b???u tr???i trong xanh m?? cho r???ng m???i th??? v???n t????i ?????p.</i></p>
                <p><i>?????ng nh??n cu???c s???ng v???n ???n khi b???n ngo???nh m???t l??m ng??.</i></p>
                <p><i>H??nh ?????ng th??i d?? l?? vi???c nh??? nh???t.</i></p>
                <p><i>H??y th??? n??o tr?????c khi b???n n??i ra.</i></p>
                <h2>{date}</h2>
                <Nutthem>
                    <button onClick={Xoatatca} style={{display: inan ? "block" : "none" }}>
                        <img src={xoa} />
                    </button>
                    <input value={intext} onChange={e => setIntext(e.target.value)}/>
                    <button onClick={Them}>
                        <img src={lamlai} />
                    </button> 
                </Nutthem>                                
            </Maii>

            <Man>
                <div></div>
                <div>
                    <ul type="none">
                        {innews.map((inthem, index) => {
                            return(
                                <li key={index}>
                                    <Grd style={{backgroundColor: inthem.com ? "green" : "gray" }}>
                                        <Id>
                                            {index+1}
                                        </Id>
                                    
                                        <Nut>
                                            <button style={{display: inthem.com ? "none" : "block" }} 
                                                    onClick={() => Chuahoanthanh(index)}
                                                ><img src={rac} /> 
                                            </button>
                                                    
                                            <button style={{display: inthem.com ? "block" : "none" }} 
                                                    onClick={() => Hoanthanh(index)}
                                                ><img src={vutrac} />
                                            </button>
                                        </Nut>

                                        <Hienten>
                                            <p style={{display: inthem.edit ? "none" : "block" }}>{inthem.text}</p>
                                            <input  value={intext1} 
                                                    placeholder={inthem.text} 
                                                    style={{display: inthem.edit  ? "block" : "none" }} 
                                                    onChange={e => setIntext1(e.target.value)}
                                            />
                                        </Hienten>

                                        <Cacnut>
                                            <button style={{display: inthem.edit ? "none" : "block" }} 
                                                    onClick={() => Sua(index)}
                                                ><img src={edit} />
                                            </button>

                                            <button style={{display: inthem.edit  ? "block" : "none" }} 
                                                    onClick={() => Sua1(index)}
                                                ><img src={edit} />                                             
                                            </button>

                                            <button onClick={() => Xoa(index)}>
                                                <img src={dele} />
                                            </button>
                                        </Cacnut>
                                    </Grd>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div></div>
            </Man>
           
        </Mai>
    )
}

export default Main;