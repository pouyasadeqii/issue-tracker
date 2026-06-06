import UsersTable from "./UsersTable";


interface Props {
    searchParams: Promise<{ sortOrder: string }>
}

const UsersPage = async ({ searchParams }: Props) => {
    const resolvedSearchParams = await searchParams;

    return (
        <>
            <h1>Users</h1>
            <button className="btn btn-primary w-fit">Button</button>
            <UsersTable sortOrder={resolvedSearchParams.sortOrder} />
        </>
    );
};

export default UsersPage; 