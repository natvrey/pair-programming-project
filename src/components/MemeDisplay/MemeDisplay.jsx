import { Component } from "react";
import "./MemeDisplay.scss";

class MemeDisplay extends Component {
  constructor() {
    super();
    this.state = {
      topParagraph: "",
      bottomParagraph: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        console.log(memes[0]);
        this.setState({ allMemeImgs: memes });
      });
  }

  render() {
    return (
      <>
        <h1>MEME DISPLAY SECTION</h1>
        <img src={this.state.randomImage} alt="random meme image" />
      </>
    );
  }
}
export default MemeDisplay;
