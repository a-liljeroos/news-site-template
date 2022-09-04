import { writers } from "../../data/Index";
import "./AuthorInfo.scss";

interface IAuthorInfo {
  writerId: number;
  published: string;
}

const AuthorInfo = ({ writerId, published }: IAuthorInfo) => {
  const writer = writers.find((byID) => byID["writer-id"] === writerId);
  if (writer) {
    const writerImage = require(`../../data/writer-images/${writer?.image}`);
    return (
      <div className="article-author-info">
        <img src={writerImage} className="author-image"></img>
        <div className="article-author-data">
          <small>{writer?.["first-name"] + " " + writer?.["last-name"]}</small>
          <small>{writer?.email}</small>
          <small>{published}</small>
        </div>
      </div>
    );
  } else {
    return (
      <div className="article-author-info">
        <div className="author-image"></div>
        <div className="article-author-data">
          <small>Ei toimittajatietoja</small>
        </div>
      </div>
    );
  }
};

export default AuthorInfo;
