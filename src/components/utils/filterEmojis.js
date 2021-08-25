export const filterEmojis = ({
  emojisData,
  searchText = "",
  maximumResult = 20,
}) => {
  const filteredEmojis = emojisData.filter((emoji) => {
    if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }

    if (emoji.keyword.includes(searchText.toLowerCase())) {
      return true;
    }

    return false;
  });

  return filterEmojis.splice(0, 20);
};
