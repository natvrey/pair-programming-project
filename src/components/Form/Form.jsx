import "../Form/Form.scss";

const Form = (props) => {
  // console.log("[Form] props=", props);

  return (
    <div>
      <form className="meme-form" onSubmit={props.onSubmit}>
        <input
          type="text"
          name="topParagraph"
          placeholder="Top Text"
          onChange={props.onChange}
          className="meme-form__input"
        />
        <input
          type="text"
          name="bottomParagraph"
          placeholder="Bottom Text"
          onChange={props.onChange}
          className="meme-form__input"
        />
        <button className="meme-form__button">Generate</button>
      </form>
    </div>
  );
};

export default Form;
