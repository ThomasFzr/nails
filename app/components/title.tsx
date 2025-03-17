interface Title {
    name: String;
    imageSrc: string;
    imageAlt: string;
}

export const Title = (title : Title) => {
    return (
        <div className="flex flex-row items-center justify-around">
            <span className="text-4xl font-bold">{title.name.toUpperCase()}</span>
            <img className="w-30" src={title.imageSrc} alt={title.imageAlt} />
        </div>);
}