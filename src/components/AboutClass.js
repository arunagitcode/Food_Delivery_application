import React from "react";
import ChildComponent from "./ChildComponent";
class AboutClass extends React.Component {
  constructor(props) {
    // not required props in super
    super();
    console.log("parent  constr");
    this.state = {
      userInfo: {
        login: "dummy",
        avatar_url: "dummy location",
      },
    };
  }
  async componentDidMount() {
    console.log(" parent didmount")

    const data = await fetch("https://api.github.com/users/arunagitcode");
    const json = await data.json();

    this.setState({
      userInfo:json
    })
  }
componentDidUpdate(){
  console.log("parent update")
}

componentWillUnmount(){
  console.log("parent unmount")
}
  render() {
    console.log("parent render");

   const {login,avatar_url} = this.state.userInfo;
    // const handlClick = () => {
    //   this.setState({
    //     name: this.state.count + 1,
        
    //   });
    // };
    return (
      <div>
        <h1>class component</h1>
        <h1>
          Name:{login}
        </h1>
        <img src={avatar_url}></img>
        {/* <button onClick={handlClick}>add count</button> */}
        {/* <h2>{this.props.name}</h2>
        <h2>{this.props.location}</h2> */}
        <ChildComponent name={"first"} />
        <ChildComponent name={"second"} />
        <ChildComponent name={"third"} />
      </div>
    );
  }
}
export default AboutClass;
