export default function Title (props) {
    return(
        <header className="shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 w-screen h-screen">
                <h1 className="text-3xl font-bold text-ungu-400">{props.title}</h1>
            </div>
        </header>
    )
}
