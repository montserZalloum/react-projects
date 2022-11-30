import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
});

function FavouritesContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState();

  function addFavouriteHandler(favouriteMeetup) {
    setUserFavourites((prev) => {
      return prev.concat(favouriteMeetup);
    });
  }

  function removeFavouriteHandler(meetupID) {
    setUserFavourites((prev) => {
      return prev.filter((item) => item.id !== meetupID);
    });
  }

  function itemIsFavouriteHandler(meetID) {
    return userFavourites.some((meetup) => meetup.id === meetID);
  }

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
  };

  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
}
