import React from 'react';
import './App.css';
import Post from "./Components/Post/Post.js";
import Input from "./Components/Input/Input.js"

class App extends React.Component {
constructor(props){
  super(props);
  this.newClick = false;
  this.str = "";
  this.newPosts = [];
  this.currentIndex = 0;
  this.state = {
    posts : [],
    index : [],
    status : "create",
    currentClassName:0,

  }
}


// clearItem(prevState){
//   this.prevState.index.push(prevState.index[this.index.length - 1]++)}
// }

setUpdateItem(e){
  console.log(e.target.className);
  this.setState({currentClassName:e.target.className},()=>{console.log(this.state.currentClassName)});
  this.setState({status:"update"});
}
updateItem(e){
  e.preventDefault();
  console.log(e.target[0].className);
  console.log(this.state.currentClassName);
  let posts = this.state.posts.slice();
  posts.splice(parseInt(this.state.currentClassName),1,[e.target[0].value,(parseInt(e.target[0].className))]);
  this.setState({posts:posts});
  console.log(posts);
  this.setState({status:"create"});
}
clearItem=(index)=>{
  console.log(index);
  let newPosts = this.state.posts.slice();
  
  
  newPosts.splice(index,1);
  console.log(newPosts);
  
  // let newPosts = posts.filter(item =>{
    
  
  // if(item[1] !==e.target.className)
  //   {
  //     return item;
  //   }
  // })
  
  // posts.splice(e.target.className,1);
  this.setState({posts:newPosts});
  console.log(this.state.posts);
  
}
handleSubmit = (e)=>{
  e.preventDefault();
  console.log(e.target[0]);
  this.addPost(e.target[0].value,e.target[0].className);
  // console.log(e.target[0].value);
  e.target[0].value = "";
  this.setState({status:"create"});
  
}
addIndex(posts){
  this.state.posts.map((post)=>{
    return this.state.index.push(this.state.posts.indexOf(post));
   })
   this.setState({index:this.state.index},()=>{console.log(this.state.index);})
}

addPost(posts,index){
  this.newPosts = this.state.posts.slice();
  this.addIndex();
this.newPosts.push([posts,index]);
 this.setState({posts:this.newPosts},()=>console.log(this.state.posts));

 
}

  render(){
    return (
      <div className="App">
        {
        this.state.status==="create"?
          <Input place = {this.state.status} submit ={(e)=>this.handleSubmit(e)}/>
          :<Input className = {this.currentIndex} place = {this.state.status} submit ={(e)=>this.updateItem(e)}/>
        }
        {
        
          this.state.posts?
          this.state.posts.map((post,index)=>{
            console.log(index);
            
            this.state.index.push(index);
            console.log(index);
            // console.log(this.i);
            return (<Post post = {post[0]} key = {post} time = {index} clear = {(index)=>this.clearItem(index)} update = {(e) =>this.setUpdateItem(e)}/>
            )
          
            }):null
        }
        
      </div>
    );
  }

}

export default App;
