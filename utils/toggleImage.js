export const toggleImage = (episodeId, visibleEpisodeId, setVisibleEpisodeId) => {
    setVisibleEpisodeId(visibleEpisodeId === episodeId ? null : episodeId);
  };