interface Props {
    params: Promise<{ id: string, photoId: string }>
}

const PhotoPage = async ({ params }: Props) => {
    const { id, photoId } = await params;

    return (
        <div>
            Photo Page for user with id: {id} and photo id: {photoId}
        </div>
    );
};

export default PhotoPage;