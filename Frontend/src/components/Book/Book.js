import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";

const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>
        <h3>{name}</h3>
        <p className="clamp-description">{description}</p>
        <h4>By {author}</h4>
        <h3>Rs {price}</h3>
      </article>
      <div className="buttons">
        <Button
          id="update-button"
          LinkComponent={Link}
          to={`/books/${_id}`}
          style={{
            backgroundColor: "#1976d2",
            color: "#fff",
            padding: "8px 12px",
          }}
        >
          Update
        </Button>
        <Button
          id="delete-button"
          color="error"
          onClick={deleteHandler}
          style={{
            backgroundColor: "#f44336",
            color: "#fff",
            padding: "8px 12px",
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Book;
