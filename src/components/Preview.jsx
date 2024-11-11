import PrevPic from "./Preview-pic"

export default function Preview() {
    return (
        <div className="w-full h-96 mt-28">
            <div className="text-center items-center justify-center">
                <h1 className="text-5xl text-center text-bold">SHOP PREVIEW</h1>
                <p className="my-3">Stay informed with our social posts</p>
                <button className="w-52 mt-3 h-10 bg-red-600 rounded-md text-white hover:bg-white hover:text-red-600 border border-transparent hover:border-red-600">Follow Us</button>
                <div className="ml-80">
                    <PrevPic/>
                </div>
            </div>
            <div className="mx-64">
                <div>
                    <h1 className="text-4xl font-bold">Customer Reviews</h1>
                    <p className="mt-4">See what our customers say</p>
                </div>
                <div className="container mx-auto">
                    
                </div>
            </div>
        </div>
    )
}