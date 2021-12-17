import { Component } from "react";
import "./MemeDisplay.scss";
import Form from "../Form/Form";

class MemeDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topParagraph: "",
      bottomParagraph: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("[MemeDisplay] handleSubmit event=", event);
    console.log(
      "[MemeDisplay] handleSubmit this.state.topParagraph=",
      this.state.topParagraph
    );
    console.log(
      "[MemeDisplay] handleSubmit this.state.bottomParagraph=",
      this.state.bottomParagraph
    );
    // get a random int (index in the array)
    // get the meme from that index
    // set `randomImg` to the `.url` of the random item I grabbed
  }

  render() {
    return (
      <>
        <Form onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <h1>MEME DISPLAY SECTION</h1>
        {/* <p>{this.state.topParagraph}</p> */}
        <img src={this.state.randomImage} alt="random meme" />
        {/* <p>{this.state.bottomParagraph}</p> */}
      </>
    );
  }
}
export default MemeDisplay;
