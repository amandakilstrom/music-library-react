import { useParams } from "react-router-dom";
import { React, useState, useEffect } from "react";

export default function MusicGroupInfo() {

    const { musicGroupId } = useParams();

    const [data, setData] = useState({});

    useEffect(() => {
        //equvalent to componentDidMount
        console.log('useEffect run');

        (async () => {
            const service = await fetch(`https://seido-webservice-307d89e1f16a.azurewebsites.net/api/MusicGroup/ReadItem?id=${musicGroupId}&flat=false`);
            const bandInfo = await service.json();
            setData(bandInfo);
        })();
    })

    return (
        <>
            <h1>Music Group Info</h1>

            <p>{data.name}</p>

            <p>{data.establishedYear}</p>

            <p>{data.genre}</p>

            {data.albums ? (
                <ul>
                    {data.albums.map((a, index) => (<li key={index}>{a.name}</li>))}
                </ul>
            ) : (
                <p>No albums found</p>
            )}

            {data.artists ? (
                <ul>
                    {data.artists.map((m, index) => (
                        <li key={index}>{m.firstName} {m.lastName}</li>
                    ))}
                </ul>
            ) : (
                <p>No members found</p>
            )}
        </>
    )
}