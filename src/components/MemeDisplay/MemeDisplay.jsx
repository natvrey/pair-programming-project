import { Component } from "react";
import "./MemeDisplay.scss";

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
  handleChange(event) {
    console.log("Working!");
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randMemeImg = this.state.allMemeImgs[randNum].url;
    this.setState({ randomImage: randMemeImg });
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
        <article className="meme-generator">
          <form className="form" onSubmit={this.handleSubmit}>
            <section className="form__inputs-flexbox">
              <input
                className="form__input-one"
                type="text"
                name="topText"
                placeholder="Top Text"
                value={this.state.topText}
                onChange={this.handleChange}
              />
              <input
                className="form__input-two"
                type="text"
                name="bottomText"
                placeholder="Bottom Text"
                value={this.state.bottomText}
                onChange={this.handleChange}
              />
            </section>
            <div className="form__button-flexbox">
              <button className="form__button">Make Meme Magic!</button>
            </div>
          </form>
          <div className="meme">
            <div className="meme__image-container">
              {" "}
              <img
                className="meme__image"
                src={this.state.randomImage}
                alt="random meme image"
              />
              <h2 className="meme__top-text">
                placeholder text to delete {this.state.topText}
              </h2>
              <h2 className="meme__bottom-text">
                placeholder text to delete{this.state.bottomText}
              </h2>
            </div>
          </div>
        </article>
      </>
    );
  }
}
export default MemeDisplay;
