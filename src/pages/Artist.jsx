import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../components/Layout";
import TopTracks from "../components/TopTracks";
import AlbumCard from "../components/AlbumCard";
import Spinner from "../components/Spinner/Spinner";
import ArtistProfile from "../components/ArtistProfile";
import { fetchTopTracks } from "../features/topTracks";
import { fetchArtistProfile } from "../features/artistProfile";
import { fetchAlbums } from "../features/albums";

function Artist({ artistId }) {
  const isLoadingArtistProfile =
    useSelector((state) => state.artistProfile.isLoading) === "pending";
  const isLoadingTopTracks =
    useSelector((state) => state.topTracks.isLoading) === "pending";
  const isLoadingAlbums =
    useSelector((state) => state.albums.isLoading) === "pending";
  const topTracks = useSelector((state) => state.topTracks.topTracks);

  const albums = useSelector((state) => state.albums.albums);

  const artist = useSelector((state) => state.artistProfile.artist);

  const [isLoading, setIsLoading] = useState(
    isLoadingArtistProfile && isLoadingTopTracks && isLoadingAlbums
  );

  const dispatch = useDispatch();

  const getAllDetails = (id) => {
    dispatch(fetchTopTracks(id));
    dispatch(fetchArtistProfile(id));
    dispatch(fetchAlbums(id));
  };

  useEffect(() => {
    getAllDetails(artistId);
  }, []);

  useEffect(() => {
    setIsLoading(
      isLoadingArtistProfile && isLoadingTopTracks && isLoadingAlbums
    );
  }, [isLoadingAlbums, isLoadingTopTracks, isLoadingArtistProfile]);

  console.log("topTracks :>> ", topTracks);
  console.log("albums :>> ", albums);
  console.log("artist :>> ", artist);
  console.log("isLoading :>> ", isLoading);

  if (isLoading) {
    return (
      <Layout>
        <Spinner />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex flex-no-wrap">
        {artist && (
          <ArtistProfile
            image={artist.picture_big}
            imageAlt={artist.name}
            name={artist.name}
            fans={artist.nb_fan}
            albums={artist.nb_album}
          />
        )}
        {topTracks.length > 0 && <TopTracks topTracks={topTracks} />}
      </div>

      <h1 className="text-2xl">Albums</h1>
      <div className="flex flex-wrap">
        {albums.length > 0 &&
          albums.map(({ id, title, cover_medium, release_date }) => {
            return (
              <AlbumCard
                key={id}
                title={title}
                cover_medium={cover_medium}
                release_date={release_date}
              />
            );
          })}
      </div>
    </Layout>
  );
}

export default Artist;
