import React from 'react';


 function  Header(){
     return (
         <header style = {headerStyle}>
             <h1>TodoList</h1>
             </header>
     )
 }
 const headerStyle = {
     background : 'blue',
     color : '#fff',
     textAlign : 'center',
     padding : '10px',
     marginLeft : '400px',
     marginRight : '400px'
 }
 export default Header;