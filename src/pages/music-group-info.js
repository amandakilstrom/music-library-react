import { useParams } from "react-router-dom";
import { React, useState, useEffect } from "react";

export default function MusicGroupInfo() {

    const { musicGroupId } = useParams();

    const [data, setData] = useState({});

    if (musicGroupId === undefined) {
        console.log('MusicGroupId is undefined');
    }

    useEffect(() => {

        console.log('useEffect run');

        (async () => {
            const service = await fetch(`https://seido-webservice-307d89e1f16a.azurewebsites.net/api/MusicGroup/ReadItem?id=${musicGroupId}&flat=false`);
            const bandInfo = await service.json();
            setData(bandInfo);
        })();
    })

    return (
        <>
            <div className="container px-4 py-4 text.start">
                <h1 className="pb-2 border-bottom">Music Group Info</h1>

                <div className="text-center">
                <div className="col-md-2 themed-grid-head-col">Band Name</div>
                <p className="col-md-2 themed-grid-col">{data.name}</p>

                <div className="col-md-2 themed-grid-head-col">Established Year</div>
                <p className="col-md-2 themed-grid-col">{data.establishedYear}</p>

                <div className="col-md-2 themed-grid-head-col">Genre</div>
                <p className="col-md-2 themed-grid-col">{data.genre}</p>

                <div className="col-md-5 themed-grid-head-col">Albums</div>
                {data.albums ? (
                    <ul className="col-md-5 themed-grid-col list-unstyled">
                        {data.albums.map((a, index) => (<li key={index}>{a.name}</li>))}
                    </ul>
                ) : (
                    <p className="col-md-5 themed-grid-col">No albums found</p>
                )}

                <div className="col-md-5 themed-grid-head-col">Members</div>
                {data.artists ? (
                    <ul className="col-md-5 themed-grid-col list-unstyled">
                        {data.artists.map((m, index) => (
                            <li key={index}>{m.firstName} {m.lastName}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="col-md-5 themed-grid-col">No members found</p>
                )}
                </div>
            </div>
        </>
    )
}