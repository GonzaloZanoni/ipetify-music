import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import Navbar from "./Navbar";
import SongItem from "./SongItem";

export default function DisplayHome() {
    return (
        <>
            <Navbar />
            <div className="mb-4 ">
                <h1 className="my-5 font-bold text-2xl">Albums destacados</h1>
                <div className="flex overflow-auto">
                    {albumsData.map((item, index) => (<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
                </div>
            </div>
            <div className="mb-4 ">
                <h1 className="my-5 font-bold text-2xl">Los mayores éxitos</h1>
                <div className="flex overflow-auto">
                    {songsData.map((item, index) => (<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
                </div>
            </div>
        </>
    )
}
