import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import musicService from "../services/music-group-service";
import "../pages/music-group-info";

export default function MusicGroups() {

    const [wapiData, setWapiData] = useState();
    const [pageNr, setPageNr] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        //equvalent to componentDidMount
        console.log('useEffect run');

        //package the async in an async iffy
        //Immediately-Invoked Function Expressions (IIFE), pronounced "iffy"
        //(async () => {})()
        (async () => {
            const service = new musicService(`https://seido-webservice-307d89e1f16a.azurewebsites.net/api`);
            const data = await service.readMusicGroupsAsync(0, true, null, 10);
            setWapiData(data);
        })();
    },[]);

    const onClick = async () => {

        if (pageNr < wapiData.pageCount - 1) {

            const service = new musicService(`https://seido-webservice-307d89e1f16a.azurewebsites.net/api`);
            const data = await service.readMusicGroupsAsync(pageNr + 1);

            setWapiData(data);
            setPageNr(pageNr + 1);
            console.log('Clicked next page in func component');
        }
    }

    const onClickPrev = async () => {

        if (pageNr < wapiData.pageCount - 1 && pageNr > 0) {

            const service = new musicService(`https://seido-webservice-307d89e1f16a.azurewebsites.net/api`);
            const data = await service.readMusicGroupsAsync(pageNr - 1);

            setWapiData(data);
            setPageNr(pageNr - 1);
            console.log('Clicked next page in func component');
        }
    }

    const onView = (musicGroupId) => {
        navigate(`/music-group/${musicGroupId}`);
    }

    return (
        <div class="container px-4 py-4 text.start">
            <h1 class="pb-2 border-bottom">Music Groups </h1>
            <p>There were {wapiData?.dbItemsCount} Music Groups found</p>
            <div className="row mb-1 text-center">
                <div className="col-md-2 themed-grid-head-col">Band Name</div>
                <div className="col-md-2 themed-grid-head-col">Established Year</div>
                <div className="col-md-2 themed-grid-head-col">More Info</div>
            </div>

            {wapiData?.pageItems.map(item => (
                <div className="row mb-1 text-center" key={item.musicGroupId} data-rowitemid={item.musicGroupId}>
                    <div className="col-md-2 themed-grid-col">
                        {item.name}
                    </div>
                    <div className="col-md-2 themed-grid-col">
                        {item.establishedYear}
                    </div>
                    <div className="col-md-2 themed-grid-col">
                        <button onClick={() => onView(item.musicGroupId)} type="button" className="btn btn-success btn-sm">View</button>
                    </div>
                </div>
            ))}

            <button onClick={onClickPrev}>Previus page</button>
            <spam>Page {pageNr + 1} of {wapiData?.pageCount + 1}</spam>
            <button onClick={onClick}>Next page</button>
        </div>
    )
}