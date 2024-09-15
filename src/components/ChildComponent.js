import React from "react";
class ChildComponent extends React.Component {
 constructor(props){
    super(props)
    console.log(this.props.name,"  constr")
    
 }

 componentDidMount = () =>{
    console.log(this.props.name," did mount")
 }

 componentWillUnmount(){
    console.log(this.props.name,"unmount")
  }
 componentDidUpdate(){
    console.log(this.props.name," update")
  }


 render(){
    console.log(this.props.name," render")
    return(
        <div>

        </div>
    )
 }
}
export default ChildComponent;