"use client";

interface Props {
    error: Error;
    reset: () => void;
}

const GlobalError = ({ error, reset }: Props) => {
    return (
        <div>
            Error: {error.message}
            <button className="btn btn-soft" onClick={reset}>Try Again</button>
        </div>
    );
};

export default GlobalError;