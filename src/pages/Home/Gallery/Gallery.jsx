import Marquee from "react-fast-marquee";

const Gallery = () => {
    return (
        <div className="my-24">
            <h1 className="text-7xl font-bold text-center mb-12">Gallery</h1>
            <Marquee>
                <img src="https://images.unsplash.com/photo-1527430253228-e93688616381?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dG95fGVufDB8fDB8fHww" alt="" />
                <img src="https://images.unsplash.com/photo-1624953736231-c9d91a89929b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHRveXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <img src="https://images.unsplash.com/photo-1527430253228-e93688616381?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dG95fGVufDB8fDB8fHww" alt="" />
                <img src="https://images.unsplash.com/photo-1624953736231-c9d91a89929b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHRveXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </Marquee>
        </div>
    );
};

export default Gallery;