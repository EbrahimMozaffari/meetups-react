import { useContext } from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavoritesContext from "../../store/favorite-context";

function MeetupItem({ image, title, address, description, id }) {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(id);

  function toggleFavoriteStateHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(id);
    } else {
      favoritesCtx.addFavorite({
        id: id,
        title: title,
        address: address,
        description: description,
        image:image
      });
    }
  }
  return (
    <>
      <li className={classes.item}>
        <Card>
          <div className={classes.image}>
            <img src={image} alt={title} />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <address>{address}</address>
            <p>{description}</p>
          </div>
          <div className={classes.actions}>
            <button onClick={toggleFavoriteStateHandler}>{itemIsFavorite ? 'remove': 'add Favorite'}</button>
          </div>
        </Card>
      </li>
    </>
  );
}

export default MeetupItem;
