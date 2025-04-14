import React from "react";

export default function MusicGroups() {
    
    MusicGroupFetch();
    
    return (
        <h1>Music Groups</h1>


    )


}

async function MusicGroupFetch() {
    const respone = await fetch("https://seido-webservice-307d89e1f16a.azurewebsites.net/api/MusicGroup/Read?seeded=true&flat=true&pageNr=0&pageSize=10");
    const data = await respone.json();

    console.log(data);
}