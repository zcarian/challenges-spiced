import FavoriteButton from "../FavoriteButton";
import "./Entry.css";

export default function Entry({ entry }) {
  return (
    <article className="entry">
      <time className="entry__date">{entry.date}</time>
      <div className="entry__content">
        <div className="entry__motto-container">
          <h2 className="entry__motto">
            <q>{entry.motto}</q>
          </h2>
          <FavoriteButton />
        </div>
        <p className="entry__notes">{entry.notes}</p>
      </div>
    </article>
  );
}
