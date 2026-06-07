import { notFound } from "next/navigation";

interface Props {
    params: Promise<{ id: string }>
}

const UserDetailPage = async ({ params }: Props) => {
    const { id } = await params;
    if (Number(id) > 10) notFound();
    return (
        <div>
            User Detail Page for user with id: {id}
        </div>
    );
};

export default UserDetailPage;