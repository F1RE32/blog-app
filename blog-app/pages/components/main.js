import Link from "next/link";

export default function Main() {
    return (
        <>
            <div className="nav">
                <Link href="../loginpage">Login</Link>
                <br/>
                <Link href="../signuppage">Signup</Link>
            </div>
            <h2>Hello!</h2>
        </>
    );
}
