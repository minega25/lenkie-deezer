import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../components/Layout";
import TopTracks from "../components/TopTracks";
import AlbumCard from "../components/AlbumCard";
import ArtistProfile from "../components/ArtistProfile";
import { fetchTopTracks } from "../features/topTracks";
import { fetchArtistProfile } from "../features/artistProfile";
import { fetchAlbums } from "../features/albums";

function Artist({ artistId }) {
  const { topTracks } = useSelector((state) => state.topTracks);
  const { albums } = useSelector((state) => state.albums);
  const { artist } = useSelector((state) => state.artistProfile);
  const dispatch = useDispatch();

  const getAllDetails = async (id) => {
    await dispatch(fetchTopTracks(id));
    await dispatch(fetchArtistProfile(id));
    await dispatch(fetchAlbums(id));
  };

  useEffect(() => {
    getAllDetails(artistId);
  }, []);

  return (
    <Layout>
      <ArtistProfile
        image={artist.picture_big}
        imageAlt={artist.name}
        name={artist.name}
        fans={artist.nb_fan}
        albums={artist.nb_album}
      />
      <TopTracks topTracks={topTracks} />
      <h1>Albums</h1>
      {albums.map(({ id, title, cover_medium, release_date }) => {
        <AlbumCard
          key={id}
          title={title}
          cover_medium={cover_medium}
          release_date={release_date}
        />;
      })}
    </Layout>
  );
}

export default Artist;
