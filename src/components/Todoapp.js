import React,{useStyle,useState,useEffect} from 'react';
import {Grid,TextField,Button,Card,CardContent,CardActions} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles((theme) => ({
  app_title: {
   textAlign:'center',
   color:'#333',
   marginBottom:'10px',
   display:'block',
  },
  listUl:{
    listStyle: 'none',
    fontSize: '20px',
    width:'420px',
    height:'450px',
    overflowY:'auto',
    paddingRight:'10px'
  }
  ,listLi:
  {
    marginBottom:'10px',
  }
  ,cardActionClass:{
    justifyContent:'flex-end',
    marginTop:'-3.3rem'
  
  },
 
  
  listBar:{
    display:'flex',
    justifyContent:'center',
   

  }
}));

let counter = 2;

export default function Todoapp()
{

  //const [todos,setTodos]=useState([{id: 1, title: 'Test 1'},{id: 2, title: 'Test 2'}]);

  const [todos,setTodos]=useState([]);

  const [input,setInput]=useState('');

  const classes = useStyles();

 

  const handleSubmit=(e)=>
  {
    e.preventDefault();

    if(input=='')
    {
      alert('Please Enter Some Value');
    }
    else{
      //setInput('');

      setTodos([...todos,{id:++counter, title: input}]);
      setInput('');
      

    }
    console.log(todos);
  
  }



  return (<div>
    <p></p>
    <h1 className={classes.app_title}>Todo App </h1>

    <div className={classes.listBar}>   
         <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Enter Some text...." inputProps={{
          maxLength: 25
        }} onChange={(e)=>setInput(e.target.value)}  value={input} />
          <Button type="submit" disabled={!input} variant="contained" color="secondary">
            Secondary
          </Button>
        </form>

    </div>

    <div className={classes.listBar}>
      <ul className={classes.listUl}>
        {
          todos.sort((a, b) => b.id - a.id).map( (todo,key)=> <li key={key} className={classes.listLi}>
              <Card className={classes.root}>
                <CardContent>
                {todo.title}
                </CardContent>
                <CardActions className={classes.cardActionClass}>
                  <Button  size="small" color="secondary" onClick={()=>{setTodos( todos.filter((t)=> t.id!=todo.id) )}}><DeleteIcon/></Button>
                </CardActions>
                </Card>
                </li> )
        }

        {
          todos.length<=0 ?(<Card className={classes.root}>
            <CardContent><div>Oops....No Record Found !</div> </CardContent></Card>):null
        }

        </ul>

    </div>
    
    </div>);
  
}